(ns cljs-mlb-notifier.mlb-test
  (:require [cljs.test :refer-macros [deftest testing is are]]
            [cljs-mlb-notifier.mlb :as mlb]))

(deftest game-id->date-test
  (testing "That a game-id is split into its date parts"
    (are [expected in]
         (= expected (mlb/game-id->date in))

         ["2016" "06" "20"] "2016/06/20/cinmlb-texmlb-1"
         ["2016" "06" "21"] "2016/06/21")))
