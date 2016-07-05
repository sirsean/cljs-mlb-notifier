(ns cljs-mlb-notifier.log
  (:require [goog.string :refer [format]]
            [clojure.string :as s]
            [cljs-time.core :as tc]
            [cljs-time.format :as tf]))

(defn log
  [& msgs]
  (println (format "[%s]: %s"
                   (tf/unparse (tf/formatters :date-time) (tc/now))
                   (s/join " " msgs))))
