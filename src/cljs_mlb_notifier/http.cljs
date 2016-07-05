(ns cljs-mlb-notifier.http
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as s]
            [goog.crypt.base64 :as b64]
            [cognitect.transit :as transit]
            [camel-snake-kebab.core :refer [->kebab-case-keyword]]
            [camel-snake-kebab.extras :refer [transform-keys]]
            [cljs-mlb-notifier.log :refer [log]]
            [cljs.core.async :refer [>!]]))

(def http (nodejs/require "http"))
(def https (nodejs/require "https"))

(defn parse-url
  [url]
  (let [[_ protocol hostname path] (re-matches #"(https?:)//([^/]+)(/.*)" url)]
    [protocol hostname path]))

(defn get
  ([url ch]
   (get url ch identity))
  ([url ch transformer]
   (let [req (.get http url
                   (fn [r]
                     (let [data (atom "")]
                       (.on r "data"
                            (fn [part]
                              (reset! data (str @data part))))
                       (.on r "end"
                            (fn [x]
                              (when (= 200 (.-statusCode r))
                                (let [r (transit/reader :json)]
                                  (try
                                    (let [result (->>
                                                   @data
                                                   (transit/read r)
                                                   (transform-keys ->kebab-case-keyword)
                                                   transformer)]
                                      (go (>! ch result)))
                                    (catch :default e
                                      (log "failed to parse JSON")
                                      (log e)
                                      (log @data))))))))))]
     (.on req "error"
          (fn [e]
            (log "GET failed.")
            (log url)
            (log e)))
     (.end req))))

(defn ^:private encode-params
  [params]
  (s/join "&" (map (fn [[k v]]
                     (str (name k) "=" (js/encodeURIComponent v)))
                   params)))

(defn post
  [url body]
  (let [[protocol hostname path] (parse-url url)
        [auth-username auth-password] (:basic-auth body)
        query-string (encode-params (:form-params body))
        options {:hostname hostname
                 :path (str path "?" query-string)
                 :method "POST"
                 :auth (str auth-username ":" auth-password)}
        req (.request (if (= protocol "https:") https http)
                      (clj->js options)
                      (fn [r]
                        (let [data (atom "")]
                          (.on r "data"
                               (fn [part]
                                 (reset! data (str @data part))))
                          (.on r "end"
                               (fn [_]
                                 ;(log @data)
                                 )))))]
    (.on req "error"
         (fn [e]
           (log "POST Failed.")
           (log url)
           (log e)))
    (.end req)))
