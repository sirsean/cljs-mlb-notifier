(ns cljs-mlb-notifier.ticker
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan <! >! timeout close!]]))

(defn ^:private make-chan
  [seconds]
  (let [ch (chan)]
    (go
      (loop []
        (<! (timeout (* 1000 seconds)))
        (>! ch :tick)
        (recur))
      (close! ch))
    ch))

(defn start
  [seconds f]
  (let [ch (make-chan seconds)]
    (go-loop
      []
      (when-let [_ (<! ch)]
        (f)
        (recur)))))
