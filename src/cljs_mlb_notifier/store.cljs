(ns cljs-mlb-notifier.store
  (:require [goog.string :refer [format]]
            [cljs-time.core :as tc]
            [cljs-mlb-notifier.mlb :as mlb]))

(def game-store (atom {}))
(def event-store (atom {}))

(def stores [game-store
             event-store])

(defn date-key
  [game-id]
  (let [[year month day] (mlb/game-id->date game-id)]
    (format "%04d/%02d/%02d" year month day)))

(defn clean-store!
  [store cutoff-date]
  (let [date-keys (keys @store)
        dates (map (fn [dk]
                     (let [[year month day] (mlb/game-id->date dk)]
                       (tc/date-time (js/parseInt year)
                                     (js/parseInt month)
                                     (js/parseInt day))))
                   date-keys)
        clean-dates (filter (fn [d] (tc/before? d cutoff-date)) dates)
        clean-keys (map (fn [d]
                          (format "%04d/%02d/%02d"
                                  (tc/year d)
                                  (tc/month d)
                                  (tc/day d)))
                        clean-dates)]
    (swap! store #(apply dissoc % clean-keys))))

(defn clean-stores!
  [cutoff-date]
  (reduce (fn [_ s] (clean-store! s cutoff-date)) nil stores))

(defn get-game
  [game-id]
  (let [date-key (date-key game-id)]
    (-> @game-store (get date-key) (get game-id))))

(defn save-game!
  [boxscore]
  (let [game-id (:id boxscore)
        date-key (date-key game-id)]
    (swap! game-store assoc-in [date-key game-id] boxscore)))

(defn get-event
  [event]
  (let [date-key (date-key (:game-id event))]
    (-> @event-store (get date-key) (get event))))

(defn save-event!
  [event]
  (let [date-key (date-key (:game-id event))]
    (swap! event-store assoc-in [date-key event] true)))
