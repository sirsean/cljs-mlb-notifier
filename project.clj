(defproject cljs-mlb-notifier "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.clojure/core.async "0.2.385"]

                 [com.cognitect/transit-cljs "0.8.239"]
                 [camel-snake-kebab "0.4.0"]

                 [com.andrewmcveigh/cljs-time "0.4.0"]]
  :plugins [[lein-cljsbuild "1.1.1"]
            [org.bodil/lein-noderepl "0.1.11"]
            [lein-doo "0.1.6"]]
  :clean-targets ^{:protect false} ["resources"]
  :cljsbuild {:builds [{:id "core"
                        :source-paths ["src"]
                        :compiler {:main cljs-mlb-notifier.core
                                   :output-to "resources/public/js/core.js"
                                   :output-dir "resources/public/js"
                                   :target :nodejs
                                   :optimizations :none}}
                       {:id "test"
                        :source-paths ["src" "test"]
                        :compiler {:main cljs-mlb-notifier.runner
                                   :output-to "target/testable.js"
                                   :output-dir "target/testjs"
                                   :hashbang false
                                   :optimizations :none
                                   :target :nodejs}}]
              :test-commands {"unit-tests"
                              ["node" :node-runner "target/testable.js"]}})
