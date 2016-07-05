(ns cljs-mlb-notifier.events
  (:require [clojure.string :as s]
            [goog.string :refer [format]]
            [cljs-mlb-notifier.log :refer [log]]))

(defn ^:private leader
  [game]
  (let [boxscore (:boxscore game)
        home-runs (-> boxscore :linescore :home-team-runs js/parseInt)
        away-runs (-> boxscore :linescore :away-team-runs js/parseInt)]
    (cond
      (> home-runs away-runs) {:leader (:home-name-abbrev game)
                               :leader-runs home-runs
                               :trailer (:away-name-abbrev game)
                               :trailer-runs away-runs}
      (< home-runs away-runs) {:leader (:away-name-abbrev game)
                               :leader-runs away-runs
                               :trailer (:home-name-abbrev game)
                               :trailer-runs home-runs})))

(defn ^:private leader-equal?
  [a b]
  (= (:leader a) (:leader b)))

(defn ^:private friendly-inning
  [inning]
  (cond 
    (or (= 1 inning) (= 21 inning) (= 31 inning))
    (str inning "st")

    (or (= 2 inning) (= 22 inning) (= 32 inning))
    (str inning "nd")

    (or (= 3 inning) (= 23 inning) (= 33 inning))
    (str inning "rd")

    :default
    (str inning "th")))

(defn lead-change-determiner
  [from to]
  (let [inning (-> to :status :inning js/parseInt)
        from-leader (leader from)
        to-leader (leader to)]
    ;(log inning (>= inning 7) from-leader to-leader "\n"
    ;         (and (nil? from-leader) to-leader)
    ;         (and from-leader (nil? to-leader))
    ;         (and from-leader (not (leader-equal? from-leader to-leader))))
    (if (and (not (nil? from)) (not (nil? to)) (>= inning 7))
      (cond
        (and (nil? from-leader) to-leader) ; it was tied, now it isn't
        [{:game-id (:id to)
          :away (:away-name-abbrev to)
          :home (:home-name-abbrev to)
          :text (format "%s broke the tie in the %s, %d-%d"
                        (s/upper-case (:leader to-leader))
                        (friendly-inning inning)
                        (:leader-runs to-leader)
                        (:trailer-runs to-leader))}]

        (and from-leader (nil? to-leader)) ; it wasn't tied, now it is
        [{:game-id (:id to)
          :away (:away-name-abbrev to)
          :home (:home-name-abbrev to)
          :text (format "%s tied it up in the %s, %d-%d"
                        (s/upper-case (:trailer from-leader))
                        (friendly-inning inning)
                        (:leader-runs from-leader)
                        (:leader-runs from-leader))}]

        (and from-leader (not (leader-equal? from-leader to-leader))) ; wasn't tied, leader changed
        [{:game-id (:id to)
          :away (:away-name-abbrev to)
          :home (:home-name-abbrev to)
          :text (format "%s took the lead in the %s, %d-%d"
                        (s/upper-case (:leader to-leader))
                        (friendly-inning inning)
                        (:leader-runs to-leader)
                        (:trailer-runs to-leader))}]

        :default [])
      [])))

(def ^:private feat-order
  [:h :hr :rbi :r :bb :sb])

(def ^:private min-feats
  {:h 4
   :hr 2
   :rbi 4
   :r 4
   :bb 3
   :sb 3})

(defn ^:private batter-feats
  [b]
  (sort-by
    (fn [[k _]] (.indexOf feat-order k))
    (reduce (fn [feats [k v]]
              (if (and (not (nil? (get min-feats k)))
                       (>= v (get min-feats k)))
                (conj feats [k v])
                feats))
            []
            b)))

(defn ^:private friendly-feats
  [feats]
  (s/join ", "
          (map (fn [[k v]]
                 (str v " " (s/upper-case (name k))))
               feats)))

(defn ^:private all-batters
  [boxscore]
  (reduce (fn [all batters] (concat all batters))
          []
          (map #(:batter %) 
               (:batting boxscore))))

(defn batter-determiner
  [prev {:keys [away-name-abbrev home-name-abbrev boxscore]}]
  (if (not (nil? prev))
    (vec (filter (complement nil?)
                 (map (fn [b] 
                        (let [feats (batter-feats b)]
                          (when (> (count feats) 0)
                            {:game-id (:game-id boxscore)
                             :away away-name-abbrev 
                             :home home-name-abbrev
                             :text (str (:name-display-first-last b) " has "
                                        (friendly-feats feats))})))
                      (all-batters boxscore))))
    []))

(defn ^:private starting-pitchers
  [boxscore]
  (filter (complement nil?)
          (map (fn [team]
                 (first (:pitcher team)))
               (:pitching boxscore))))

(defn ^:private pitcher-k
  [pitcher]
  (when (>= (:so pitcher) 10)
    (str (:name-display-first-last pitcher) " has " (:so pitcher) " K")))

(defn ^:private outs->innings
  [outs]
  (quot outs 3))

(defn ^:private perfect-game?
  [pitcher]
  (and (>= (:out pitcher) 15)
       (= (:out pitcher) (:bf pitcher))
       (= 0 (:h pitcher))
       (= 0 (:bb pitcher))))

(defn ^:private no-hitter?
  [pitcher]
  (and (>= (:out pitcher) 15)
       (= 0 (:h pitcher))))

(defn ^:private shutout?
  [pitcher]
  (and (>= (:out pitcher) 24)
       (= 0 (:r pitcher))))

(defn ^:private pitcher-game-progress
  [pitcher]
  (cond
    (perfect-game? pitcher) (format "%s is perfect through %d"
                                    (:name-display-first-last pitcher)
                                    (outs->innings (:out pitcher)))
    (no-hitter? pitcher) (format "%s has a no-hitter through %d"
                                 (:name-display-first-last pitcher)
                                 (outs->innings (:out pitcher)))
    (shutout? pitcher) (format "%s has a shutout through %d"
                               (:name-display-first-last pitcher)
                               (outs->innings (:out pitcher)))))

(defn pitcher-determiner
  [prev {:keys [away-name-abbrev home-name-abbrev boxscore]}]
  (if (not (nil? prev))
    (vec (filter (complement nil?)
                 (flatten (map (fn [p]
                                 [(when-let [text (pitcher-k p)]
                                    {:game-id (:game-id boxscore)
                                     :away away-name-abbrev
                                     :home home-name-abbrev
                                     :text text})
                                  (when-let [text (pitcher-game-progress p)]
                                    {:game-id (:game-id boxscore)
                                     :away away-name-abbrev
                                     :home home-name-abbrev
                                     :text text})])
                               (starting-pitchers boxscore)))))
    []))

(def determiners
  [lead-change-determiner
   batter-determiner
   pitcher-determiner])

(defn compare-games
  [from to]
  (reduce (fn [events determiner]
            (concat events (determiner from to)))
          []
          determiners))
