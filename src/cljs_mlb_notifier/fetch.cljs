(ns cljs-mlb-notifier.fetch
  (:require [cljs-time.core :as tc]
            [goog.string :refer [format]]
            [clojure.string :as s]
            [cljs-mlb-notifier.http :as http]
            [cljs-mlb-notifier.mlb :as mlb]))

(defn ^:private boxscore-url
  [game-id]
  (let [[year month day] (mlb/game-id->date game-id)
        game-id (s/replace game-id #"[-/]" "_")]
    (format "http://gdx.mlb.com/components/game/mlb/year_%04d/month_%02d/day_%02d/gid_%s/boxscore.json" year month day game-id)))

(defn boxscore!
  [ch game]
  (let [url (boxscore-url (:id game))]
    (http/get url ch #(assoc game :boxscore (-> % :data :boxscore)))))

(defn ^:private scoreboard-url
  [date]
  (format "http://gdx.mlb.com/components/game/mlb/year_%04d/month_%02d/day_%02d/master_scoreboard.json"
          (tc/year date)
          (tc/month date)
          (tc/day date)))

(defn scoreboard!
  [ch date]
  (let [url (scoreboard-url date)]
    (http/get url ch #(-> % :data :games :game))))
