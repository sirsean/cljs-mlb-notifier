(ns cljs-mlb-notifier.events-test
  (:require [cljs.test :refer-macros [deftest testing is are]]
            [cljs-mlb-notifier.events :as e]))

(deftest determiners-test
  (testing "That all determiners are set"
    (is (= [e/lead-change-determiner
            e/batter-determiner
            e/pitcher-determiner] e/determiners))))

(deftest compare-games-test
  (testing "That all determiners are included in results"
    (with-redefs
      [e/determiners [(fn [from to] [:lead-change])
                      (fn [from to] [:batter])
                      (fn [from to] [:pitcher])]]
      (is (= [:lead-change :batter :pitcher]
             (e/compare-games :bs1 :bs2))))))

(deftest friendly-inning-test
  (testing "That innings can be translated to a friendly version"
    (are [expected inning]
         (= expected (e/friendly-inning inning))

         "1st" 1
         "2nd" 2
         "3rd" 3
         "4th" 4
         "5th" 5
         "6th" 6
         "7th" 7
         "8th" 8
         "9th" 9
         "10th" 10
         "11th" 11
         "12th" 12
         "13th" 13
         "21st" 21
         "22nd" 22
         "23rd" 23
         "24th" 24)))

(def default-boxscore
  {:id "2016/06/22/cinmlb-texmlb-1"
   :home-name-abbrev "tex"
   :away-name-abbrev "cin"
   :boxscore {:game-id "2016/06/22/cinmlb-texmlb-1"
              :linescore {:home-team-runs "0"
                          :home-team-hits "0"
                          :home-team-errors "0"
                          :away-team-runs "0"
                          :away-team-hits "0"
                          :away-team-errors "0"}}})

(deftest lead-change-determiner-test
  (testing "That a scoreless game has no lead change."
    (is (= [] (e/lead-change-determiner default-boxscore default-boxscore))))
  (testing "When the teams have equal non-zero runs, no change."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "5")
                   (assoc-in [:boxscore :linescore :away-team-runs] "5"))
          to from]
      (is (= [] (e/lead-change-determiner from to)))))
  (testing "When the home team's lead stays the same, no change."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "4")
                   (assoc-in [:boxscore :linescore :away-team-runs] "2"))
          to from]
      (is (= [] (e/lead-change-determiner from to)))))
  (testing "When the home team takes an early lead, no change."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "2")
                   (assoc-in [:status :inning] "2"))
          to (-> from
                 (assoc-in [:boxscore :linescore :home-team-runs] "3"))]
      (is (= [] (e/lead-change-determiner from to)))))
  (testing "When the away team takes an early lead, no change."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "2")
                   (assoc-in [:status :inning] "2"))
          to (-> from
                 (assoc-in [:boxscore :linescore :away-team-runs] "3"))]
      (is (= [] (e/lead-change-determiner from to)))))
  (testing "When the score stays the same late, no change."
    (let [from (-> default-boxscore
                   (assoc-in [:status :inning] "8"))
          to from]
      (is (= [] (e/lead-change-determiner from to)))))
  (testing "When the home team breaks a late tie, we get an event."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "2")
                   (assoc-in [:status :inning] "7"))
          to (-> from
                 (assoc-in [:boxscore :linescore :home-team-runs] "3"))]
      (is (= [{:game-id (:id to)
               :text "TEX broke the tie in the 7th, 3-2"}]
             (e/lead-change-determiner from to)))))
  (testing "When the away team breaks a late tie, we get an event."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "2")
                   (assoc-in [:status :inning] "7"))
          to (-> from
                 (assoc-in [:boxscore :linescore :away-team-runs] "3"))]
      (is (= [{:game-id (:id to)
               :text "CIN broke the tie in the 7th, 3-2"}]
             (e/lead-change-determiner from to)))))
  (testing "When the home team takes a late lead, we get an event."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "3")
                   (assoc-in [:status :inning] "8"))
          to (-> from
                 (assoc-in [:boxscore :linescore :home-team-runs] "5"))]
      (is (= [{:game-id (:id to)
               :text "TEX took the lead in the 8th, 5-3"}]
             (e/lead-change-determiner from to)))))
  (testing "When the home team extends its lead, no events."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "0")
                   (assoc-in [:status :inning] "8"))
          to (-> from
                 (assoc-in [:boxscore :linescore :home-team-runs] "3"))]
      (is (= [] (e/lead-change-determiner from to)))))
  (testing "When the away team extends its lead, no events."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "3")
                   (assoc-in [:status :inning] "8"))
          to (-> from
                 (assoc-in [:boxscore :linescore :away-team-runs] "5"))]
      (is (= [] (e/lead-change-determiner from to)))))
  (testing "When the away team takes a late lead, we get an event."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "2")
                   (assoc-in [:boxscore :linescore :away-team-runs] "1")
                   (assoc-in [:status :inning] "8"))
          to (-> from
                 (assoc-in [:boxscore :linescore :away-team-runs] "5"))]
      (is (= [{:game-id (:id to)
               :text "CIN took the lead in the 8th, 5-2"}]
             (e/lead-change-determiner from to)))))
  (testing "When the home team ties it up, we get an event."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :away-team-runs] "3")
                   (assoc-in [:status :inning] "9"))
          to (-> from
                 (assoc-in [:boxscore :linescore :home-team-runs] "3"))]
      (is (= [{:game-id (:id to)
              :text "TEX tied it up in the 9th, 3-3"}]
             (e/lead-change-determiner from to)))))
  (testing "When the away team ties it up, we get an event."
    (let [from (-> default-boxscore
                   (assoc-in [:boxscore :linescore :home-team-runs] "4")
                   (assoc-in [:status :inning] "10"))
          to (-> from
                 (assoc-in [:boxscore :linescore :away-team-runs] "4"))]
      (is (= [{:game-id (:id to)
               :text "CIN tied it up in the 10th, 4-4"}]
             (e/lead-change-determiner from to))))))

(def default-batter
  {:name-display-first-last "Bryce Harper"
   :hr "0"
   :rbi "0"
   :bb "0"
   :hbp "0"
   :so "0"
   :h "0"
   :sb "0"
   :cs "0"
   :r "0"
   :ab "0"})

(deftest all-batters-test
  (testing "Empty boxscore"
    (is (= [] (e/all-batters {}))))
  (testing "Only one team has batters"
    (is (= [:one] (e/all-batters {:batting [{:batter [:one]}]}))))
  (testing "Both teams have batters"
    (is (= [:one :two]
           (e/all-batters {:batting [{:batter [:one]}
                                          {:batter [:two]}]})))))

(deftest batter-determiner-test
  (testing "No batters, no events"
    (is (= [] (e/batter-determiner default-boxscore default-boxscore))))
  (testing "One batter, no feats, no events"
    (let [bs (-> default-boxscore
                 (assoc-in [:boxscore :batting] [{:batter [default-batter]}]))]
      (is (= [] (e/batter-determiner bs bs)))))
  (testing "One batter has one feat"
    (let [batter (-> default-batter (assoc :h "4"))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :batting] [{:batter [batter]}]))]
      (is (= [{:game-id (:id bs)
               :text "Bryce Harper has 4 H"}]
             (e/batter-determiner bs bs)))))
  (testing "Two batters each have a feat"
    (let [b1 (-> default-batter (assoc :hr "4"))
          b2 (-> default-batter
                 (assoc :name-display-first-last "Mike Trout")
                 (assoc :bb "5"))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :batting] [{:batter [b1]} {:batter [b2]}]))]
      (is (= [{:game-id (:id bs)
               :text "Bryce Harper has 4 HR"}
              {:game-id (:id bs)
               :text "Mike Trout has 5 BB"}]
             (e/batter-determiner bs bs)))))
  (testing "A big game has many feats"
    (let [batter (-> default-batter
                     (assoc :hr "4")
                     (assoc :rbi "4")
                     (assoc :bb "3")
                     (assoc :h "4")
                     (assoc :sb "3")
                     (assoc :r "4")
                     (assoc :ab "5"))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :batting] [{:batter [batter]}]))]
      (is (= [{:game-id (:id bs)
              :text "Bryce Harper has 4 H, 4 HR, 4 RBI, 4 R, 3 BB, 3 SB"}] (e/batter-determiner bs bs))))))

(def default-pitcher
  {:name-display-first-last "Clayton Kershaw"
   :hr "0"
   :np "0"
   :game-score "0"
   :bf "0"
   :bb "0"
   :so "0"
   :s "0"
   :r "0"
   :er "0"
   :out "0"})

(deftest starting-pitchers-test
  (testing "Empty boxscore"
    (is (= [] (e/starting-pitchers {}))))
  (testing "Empty pitching"
    (is (= [] (e/starting-pitchers {:pitching []}))))
  (testing "No pitchers"
    (is (= [] (e/starting-pitchers {:pitching [{} {}]}))))
  (testing "Only one team has a pitcher"
    (is (= [:one] (e/starting-pitchers {:pitching [{:pitcher [:one]}]}))))
  (testing "Both teams have starters"
    (is (= [:one :two]
           (e/starting-pitchers {:pitching [{:pitcher [:one]}
                                            {:pitcher [:two]}]}))))
  (testing "Both teams have multiple pitchers"
    (is (= [:one :three]
           (e/starting-pitchers {:pitching [{:pitcher [:one :two]}
                                            {:pitcher [:three :four]}]})))))

(deftest perfect-game-test
  (are [expected pitcher] (is (= expected (e/perfect-game? pitcher)))
       false {:out 10 :bf 10 :h 0 :bb 0}
       false {:out 20 :bf 21 :h 0 :bb 0}
       false {:out 20 :bf 20 :h 1 :bb 0}
       false {:out 20 :bf 20 :h 0 :bb 1}
       true {:out 15 :bf 15 :h 0 :bb 0}))

(deftest no-hitter-test
  (are [expected pitcher] (is (= expected (e/no-hitter? pitcher)))
       false {:out 10 :h 0}
       false {:out 20 :h 1}
       true {:out 15 :h 0}))

(deftest shutout-test
  (are [expected pitcher] (is (= expected (e/shutout? pitcher)))
       false {:out 15 :r 0}
       false {:out 24 :r 1}
       true {:out 24 :r 0}))

(deftest pitcher-determiner-test
  (testing "No pitching, no events"
    (is (= [] (e/pitcher-determiner default-boxscore default-boxscore))))
  (testing "No pitchers, no events"
    (let [bs (-> default-boxscore
                 (assoc-in [:boxscore :pitching] [{:pitcher []} {:pitcher []}]))]
      (is (= [] (e/pitcher-determiner bs bs)))))
  (testing "One pitcher, no feats, no events"
    (let [bs (-> default-boxscore
                 (assoc-in [:boxscore :pitching] [{:pitcher [default-pitcher]}]))]
      (is (= [] (e/pitcher-determiner bs bs)))))
  (testing "Pitcher has 10 K"
    (let [p1 (-> default-pitcher
                 (assoc :so 10))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :pitching] [{:pitcher [p1]}]))]
      (is (= [{:game-id (:id bs)
               :text "Clayton Kershaw has 10 K"}]
             (e/pitcher-determiner bs bs)))))
  (testing "Pitcher has a perfect game through 5"
    (let [p1 (-> default-pitcher
                 (assoc :bf 15)
                 (assoc :out 15)
                 (assoc :h 0)
                 (assoc :bb 0))
          bs (-> default-boxscore
                  (assoc-in [:boxscore :pitching] [{:pitcher [p1]}]))]
      (is (= [{:game-id (:id bs)
               :text "Clayton Kershaw is perfect through 5"}]
             (e/pitcher-determiner bs bs)))))
  (testing "Pitcher has a perfect game through 7 and 15 K"
    (let [p1 (-> default-pitcher
                 (assoc :bf 21)
                 (assoc :out 21)
                 (assoc :h 0)
                 (assoc :bb 0)
                 (assoc :so 15))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :pitching] [{:pitcher [p1]}]))]
      (is (= [{:game-id (:id bs)
               :text "Clayton Kershaw has 15 K"}
              {:game-id (:id bs)
               :text "Clayton Kershaw is perfect through 7"}]
             (e/pitcher-determiner bs bs)))))
  (testing "Pitcher has a no-hitter through 5"
    (let [p1 (-> default-pitcher
                 (assoc :bf 20)
                 (assoc :out 19)
                 (assoc :h 0)
                 (assoc :bb 2))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :pitching] [{:pitcher [p1]}]))]
      (is (= [{:game-id (:id bs)
               :text "Clayton Kershaw has a no-hitter through 6"}]
             (e/pitcher-determiner bs bs)))))
  (testing "Pitcher has a shutout through 8"
    (let [p1 (-> default-pitcher
                 (assoc :bf 27)
                 (assoc :out 25)
                 (assoc :h 2)
                 (assoc :bb 2)
                 (assoc :r 0))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :pitching] [{:pitcher [p1]}]))]
      (is (= [{:game-id (:id bs)
               :text "Clayton Kershaw has a shutout through 8"}]
             (e/pitcher-determiner bs bs)))))
  (testing "Both starters have a lot of strikeouts"
    (let [p1 (-> default-pitcher
                 (assoc :so 11))
          p2 (-> default-pitcher
                 (assoc :name-display-first-last "Zack Greinke")
                 (assoc :so 12))
          bs (-> default-boxscore
                 (assoc-in [:boxscore :pitching]
                           [{:pitcher [p1]} {:pitcher [p2]}]))]
      (is (= [{:game-id (:id bs)
               :text "Clayton Kershaw has 11 K"}
              {:game-id (:id bs)
               :text "Zack Greinke has 12 K"}]
             (e/pitcher-determiner bs bs))))))
