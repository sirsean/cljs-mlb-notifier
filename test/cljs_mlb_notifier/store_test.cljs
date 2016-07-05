(ns cljs-mlb-notifier.store-test
  (:require [cljs.test :refer-macros [deftest testing is are]]
            [cljs-mlb-notifier.store :as s]))

(deftest date-key-test
  (is (= "2016/06/30" (s/date-key "2016/06/30/cinmlb-texmlb-1"))))

(deftest boxscore-store-test
  (testing "That saving a boxscore updates the store"
    (let [game1-id "2016/06/30/cinmlb-texmlb-1"
          boxscore1 {:id game1-id}
          game2-id "2016/06/30/cinmlb-minmlb-1"
          boxscore2 {:id game2-id}
          game3-id "2016/07/01/cinmlb-texmlb-1"
          boxscore3 {:id game3-id}]
      (s/save-boxscore! boxscore1)
      (is (= (count @s/boxscore-store) 1))
      (is (= (count (get @s/boxscore-store "2016/06/30")) 1))
      (is (= boxscore1 (s/get-boxscore game1-id)))
      (s/save-boxscore! boxscore2)
      (is (= (count @s/boxscore-store) 1))
      (is (= (count (get @s/boxscore-store "2016/06/30")) 2))
      (is (= boxscore2 (s/get-boxscore game2-id)))
      (s/save-boxscore! boxscore3)
      (is (= (count @s/boxscore-store) 2))
      (is (= (count (get @s/boxscore-store "2016/07/01")) 1))
      (is (= boxscore3 (s/get-boxscore game3-id))))))

(deftest event-store-test
  (testing "That saving an event updates the store"
    (let [game1-id "2016/06/30/cinmlb-texmlb-1"
          event1 {:game-id game1-id}
          game2-id "2016/06/30/cinmlb-minmlb-1"
          event2 {:game-id game2-id}
          game3-id "2016/07/01/cinmlb-texmlb-1"
          event3 {:game-id game3-id}]
      (s/save-event! event1)
      (is (= (count @s/event-store) 1))
      (is (= (count (get @s/event-store "2016/06/30")) 1))
      (is (= true (s/get-event event1)))
      (s/save-event! event2)
      (is (= (count @s/event-store) 1))
      (is (= (count (get @s/event-store "2016/06/30")) 2))
      (is (= true (s/get-event event2)))
      (s/save-event! event3)
      (is (= (count @s/event-store) 2))
      (is (= (count (get @s/event-store "2016/07/01")) 1))
      (is (= true (s/get-event event3))))))
