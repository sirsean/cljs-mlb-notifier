(ns cljs-mlb-notifier.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [cljs-mlb-notifier.core-test]
            [cljs-mlb-notifier.events-test]
            [cljs-mlb-notifier.mlb-test]
            [cljs-mlb-notifier.store-test]))

(doo-tests 'cljs-mlb-notifier.core-test
           'cljs-mlb-notifier.events-test
           'cljs-mlb-notifier.mlb-test
           'cljs-mlb-notifier.store-test)
