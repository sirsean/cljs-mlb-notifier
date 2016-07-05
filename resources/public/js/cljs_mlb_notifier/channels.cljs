(ns cljs-mlb-notifier.channels
  (:require [cljs.core.async :refer [chan]]))

(def scoreboard-chan (chan))
(def game-chan (chan))
(def boxscore-chan (chan))
(def event-chan (chan))
