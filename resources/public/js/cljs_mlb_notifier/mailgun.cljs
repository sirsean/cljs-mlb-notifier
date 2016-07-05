(ns cljs-mlb-notifier.mailgun
  (:require [cljs-mlb-notifier.http :as http]
            [cljs-mlb-notifier.log :refer [log]]
            [clojure.walk :as walk]))

(def api-host "api.mailgun.net")
(def api-base-url (str "https://" api-host "/v3"))

(defn send-email-url
  [credentials]
  (str api-base-url "/" (:domain credentials) "/messages"))

(defn body-builder
  [credentials params]
  {:basic-auth ["api" (:api-key credentials)]
   :form-params params})

(defn send-email
  [credentials input-params]
  (if process.env.MLB_NOTIFIER_DEBUG
    (log (:subject input-params))
    (let [url (send-email-url credentials)
          body (body-builder credentials input-params)]
      (http/post url body))))
