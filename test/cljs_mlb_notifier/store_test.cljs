(ns cljs-mlb-notifier.store-test
  (:require [cljs.test :refer-macros [deftest testing is are use-fixtures]]
            [cljs-time.core :as tc]
            [cljs-mlb-notifier.store :as s]))

(use-fixtures :each (fn [f]
                      (reset! s/game-store {})
                      (reset! s/event-store {})
                      (f)))

(deftest date-key-test
  (are [expected in]
       (= expected (s/date-key in))

       "2016/06/30" "2016/06/30/cinmlb-texmlb-1"
       "2016/07/02" "2016/07/02/cinmlb-texmlb-1"))

(deftest clean-store!-test
  (testing "That you can clean the store"
    (let [g1 {:id "2016/06/01/cinmlb-texmlb-1"}
          g2 {:id "2016/06/10/cinmlb-texmlb-1"}
          g3 {:id "2016/06/20/cinmlb-texmlb-1"}]
      (s/save-game! g1)
      (s/save-game! g2)
      (s/save-game! g3)
      (s/clean-store! s/game-store (tc/date-time 2016 6 14))
      (is (= (count @s/game-store) 1))
      (is (= (count (get @s/game-store "2016/06/20")) 1)))))

(deftest clean-stores!-test
  (testing "That all the stores can be cleaned at once"
    (let [g1 {:id "2016/06/01/cinmlb-texmlb-1"}
          g2 {:id "2016/06/20/cinmlb-texmlb-1"}
          e1 {:game-id "2016/06/05/cinmlb-texmlb-1"}
          e2 {:game-id "2016/06/25/cinmlb-texmlb-1"}]
      (s/save-game! g1)
      (s/save-game! g2)
      (s/save-event! e1)
      (s/save-event! e2)
      (s/clean-stores! (tc/date-time 2016 6 10))
      (is (= (count @s/game-store) 1))
      (is (= (count (get @s/game-store "2016/06/20")) 1))
      (is (= (count @s/event-store) 1))
      (is (= (count (get @s/event-store "2016/06/25")) 1)))))

(deftest game-store
  (testing "That saving a boxscore updates the store"
    (let [game1-id "2016/06/30/cinmlb-texmlb-1"
          boxscore1 {:id game1-id}
          game2-id "2016/06/30/cinmlb-minmlb-1"
          boxscore2 {:id game2-id}
          game3-id "2016/07/01/cinmlb-texmlb-1"
          boxscore3 {:id game3-id}]
      (s/save-game! boxscore1)
      (is (= (count @s/game-store) 1))
      (is (= (count (get @s/game-store "2016/06/30")) 1))
      (is (= boxscore1 (s/get-game game1-id)))
      (s/save-game! boxscore2)
      (is (= (count @s/game-store) 1))
      (is (= (count (get @s/game-store "2016/06/30")) 2))
      (is (= boxscore2 (s/get-game game2-id)))
      (s/save-game! boxscore3)
      (is (= (count @s/game-store) 2))
      (is (= (count (get @s/game-store "2016/07/01")) 1))
      (is (= boxscore3 (s/get-game game3-id))))))

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
