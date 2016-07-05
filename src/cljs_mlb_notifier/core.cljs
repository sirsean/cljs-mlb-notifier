(ns cljs-mlb-notifier.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.nodejs :as nodejs]
            [cljs-time.core :as tc]
            [cljs.core.async :refer [chan <! >! close!]]
            [cljs-mlb-notifier.channels :as channels]
            [cljs-mlb-notifier.fetch :as fetch]
            [cljs-mlb-notifier.handlers :as handlers]
            [cljs-mlb-notifier.ticker :as ticker]))

(nodejs/enable-util-print!)

(defn -main
  [& args]
  ;(handlers/send-event! {:text "this tests uses env vars"}))
  (handlers/start! [[channels/scoreboard-chan handlers/scoreboard-handler]
                    [channels/game-chan handlers/game-handler]
                    [channels/boxscore-chan handlers/boxscore-handler]
                    [channels/event-chan handlers/event-handler]])
  (fetch/scoreboard! channels/scoreboard-chan (tc/now))
  (ticker/start 10
                (fn []
                  (fetch/scoreboard! channels/scoreboard-chan
                                     (tc/now))
                  (fetch/scoreboard! channels/scoreboard-chan
                                     (tc/minus (tc/now) (tc/days 1))))))

(set! *main-cli-fn* -main)
