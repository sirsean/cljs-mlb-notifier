// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.mailgun');
goog.require('cljs.core');
goog.require('cljs_mlb_notifier.http');
goog.require('cljs_mlb_notifier.log');
goog.require('clojure.walk');
cljs_mlb_notifier.mailgun.api_host = "api.mailgun.net";
cljs_mlb_notifier.mailgun.api_base_url = [cljs.core.str("https://"),cljs.core.str(cljs_mlb_notifier.mailgun.api_host),cljs.core.str("/v3")].join('');
cljs_mlb_notifier.mailgun.send_email_url = (function cljs_mlb_notifier$mailgun$send_email_url(credentials){
return [cljs.core.str(cljs_mlb_notifier.mailgun.api_base_url),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(credentials)),cljs.core.str("/messages")].join('');
});
cljs_mlb_notifier.mailgun.body_builder = (function cljs_mlb_notifier$mailgun$body_builder(credentials,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["api",new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(credentials)], null),new cljs.core.Keyword(null,"form-params","form-params",1884296467),params], null);
});
cljs_mlb_notifier.mailgun.send_email = (function cljs_mlb_notifier$mailgun$send_email(credentials,input_params){
if(cljs.core.truth_(process.env.MLB_NOTIFIER_DEBUG)){
return cljs_mlb_notifier.log.log.call(null,new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(input_params));
} else {
var url = cljs_mlb_notifier.mailgun.send_email_url.call(null,credentials);
var body = cljs_mlb_notifier.mailgun.body_builder.call(null,credentials,input_params);
return cljs_mlb_notifier.http.post.call(null,url,body);
}
});

//# sourceMappingURL=mailgun.js.map