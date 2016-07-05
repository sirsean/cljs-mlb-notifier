(ns cljs-mlb-notifier.handlers
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan <! >! close!]]
            [goog.string :refer [format]]
            [cljs-mlb-notifier.log :refer [log]]
            [cljs-mlb-notifier.mailgun :as mailgun]
            [cljs-mlb-notifier.events :as events]
            [cljs-mlb-notifier.fetch :as fetch]
            [cljs-mlb-notifier.mlb :as mlb]
            [cljs-mlb-notifier.store :as store]
            [cljs-mlb-notifier.channels :as channels]))

(defn scoreboard-handler
  [scoreboard]
  (loop [games scoreboard]
    (when-let [g (first games)]
      (go (>! channels/game-chan g))
      (recur (rest games)))))

(defn boxscore-handler
  [boxscore]
  (let [prev (store/get-boxscore (:id boxscore))]
    (store/save-boxscore! boxscore)
    (loop [events (events/compare-games prev boxscore)]
      (when-let [e (first events)]
        (go (>! channels/event-chan e))
        (recur (rest events))))))

(defn game-handler
  [game]
  (store/save-game! game)
  (fetch/boxscore! channels/boxscore-chan game))

(defn format-event
  [event]
  (let [game (store/get-game (:game-id event))]
    (format "[%s @ %s] %s"
            (:away-name-abbrev game)
            (:home-name-abbrev game)
            (:text event))))

(defn send-event!
  [event]
  (let [message (format-event event)
        credentials {:api-key process.env.MAILGUN_API_KEY
                     :domain process.env.MAILGUN_DOMAIN}
        params {:from process.env.MLB_NOTIFIER_FROM
                :to process.env.MLB_NOTIFIER_TO
                :subject message
                :text message}]
    (mailgun/send-email credentials params)))

(defn event-handler
  [event]
  (when-not (store/get-event event)
    (log event)
    (send-event! event)
    (store/save-event! event)))

(defn start!
  [handlers]
  (loop [handlers handlers]
    (when-let [[ch handler] (first handlers)]
      (go-loop
        []
        (when-let [data (<! ch)]
          (handler data)
          (recur)))
      (recur (rest handlers)))))
