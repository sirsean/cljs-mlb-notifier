(ns cljs-mlb-notifier.store
  (:require [goog.string :refer [format]]
            [cljs-mlb-notifier.mlb :as mlb]))

(def boxscore-store (atom {}))
(def event-store (atom {}))

(defn date-key
  [game-id]
  (let [[year month day] (mlb/game-id->date game-id)]
    (format "%04d/%02d/%02d" year month day)))

(defn get-boxscore
  [game-id]
  (let [date-key (date-key game-id)]
    (-> @boxscore-store (get date-key) (get game-id))))

(defn save-boxscore!
  [boxscore]
  (let [game-id (:id boxscore)
        date-key (date-key game-id)]
    (swap! boxscore-store assoc-in [date-key game-id] boxscore)))

(defn get-event
  [event]
  (let [date-key (date-key (:game-id event))]
    (-> @event-store (get date-key) (get event))))

(defn save-event!
  [event]
  (let [date-key (date-key (:game-id event))]
    (swap! event-store assoc-in [date-key event] true)))
