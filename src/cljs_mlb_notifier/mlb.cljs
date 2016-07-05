(ns cljs-mlb-notifier.mlb)

(defn game-id->date
  [game-id]
  (let [[_ year month day] (re-matches #"(\d{4})/(\d{2})/(\d{2})/.*" game-id)]
    [year month day]))
