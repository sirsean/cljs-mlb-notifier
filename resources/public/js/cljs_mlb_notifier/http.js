// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.http');
goog.require('cljs.core');
goog.require('cljs_mlb_notifier.log');
goog.require('goog.crypt.base64');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('camel_snake_kebab.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('camel_snake_kebab.extras');
cljs_mlb_notifier.http.http = cljs.nodejs.require.call(null,"http");
cljs_mlb_notifier.http.https = cljs.nodejs.require.call(null,"https");
cljs_mlb_notifier.http.parse_url = (function cljs_mlb_notifier$http$parse_url(url){
var vec__8796 = cljs.core.re_matches.call(null,/(https?:)\/\/([^\/]+)(\/.*)/,url);
var _ = cljs.core.nth.call(null,vec__8796,(0),null);
var protocol = cljs.core.nth.call(null,vec__8796,(1),null);
var hostname = cljs.core.nth.call(null,vec__8796,(2),null);
var path = cljs.core.nth.call(null,vec__8796,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [protocol,hostname,path], null);
});
cljs_mlb_notifier.http.get = (function cljs_mlb_notifier$http$get(var_args){
var args8797 = [];
var len__7277__auto___8813 = arguments.length;
var i__7278__auto___8814 = (0);
while(true){
if((i__7278__auto___8814 < len__7277__auto___8813)){
args8797.push((arguments[i__7278__auto___8814]));

var G__8815 = (i__7278__auto___8814 + (1));
i__7278__auto___8814 = G__8815;
continue;
} else {
}
break;
}

var G__8799 = args8797.length;
switch (G__8799) {
case 2:
return cljs_mlb_notifier.http.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_mlb_notifier.http.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8797.length)].join('')));

}
});

cljs_mlb_notifier.http.get.cljs$core$IFn$_invoke$arity$2 = (function (url,ch){
return cljs_mlb_notifier.http.get.call(null,url,ch,cljs.core.identity);
});

cljs_mlb_notifier.http.get.cljs$core$IFn$_invoke$arity$3 = (function (url,ch,transformer){
var req = cljs_mlb_notifier.http.http.get(url,(function (r){
var data = cljs.core.atom.call(null,"");
r.on("data",((function (data){
return (function (part){
return cljs.core.reset_BANG_.call(null,data,[cljs.core.str(cljs.core.deref.call(null,data)),cljs.core.str(part)].join(''));
});})(data))
);

return r.on("end",((function (data){
return (function (x){
if(cljs.core._EQ_.call(null,(200),r.statusCode)){
var r__$1 = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
try{var result = transformer.call(null,camel_snake_kebab.extras.transform_keys.call(null,camel_snake_kebab.core.__GT_kebab_case_keyword,cognitect.transit.read.call(null,r__$1,cljs.core.deref.call(null,data))));
var c__8579__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8579__auto__,result,r__$1,data){
return (function (){
var f__8580__auto__ = (function (){var switch__8558__auto__ = ((function (c__8579__auto__,result,r__$1,data){
return (function (state_8804){
var state_val_8805 = (state_8804[(1)]);
if((state_val_8805 === (1))){
var state_8804__$1 = state_8804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8804__$1,(2),ch,result);
} else {
if((state_val_8805 === (2))){
var inst_8802 = (state_8804[(2)]);
var state_8804__$1 = state_8804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8804__$1,inst_8802);
} else {
return null;
}
}
});})(c__8579__auto__,result,r__$1,data))
;
return ((function (switch__8558__auto__,c__8579__auto__,result,r__$1,data){
return (function() {
var cljs_mlb_notifier$http$state_machine__8559__auto__ = null;
var cljs_mlb_notifier$http$state_machine__8559__auto____0 = (function (){
var statearr_8809 = [null,null,null,null,null,null,null];
(statearr_8809[(0)] = cljs_mlb_notifier$http$state_machine__8559__auto__);

(statearr_8809[(1)] = (1));

return statearr_8809;
});
var cljs_mlb_notifier$http$state_machine__8559__auto____1 = (function (state_8804){
while(true){
var ret_value__8560__auto__ = (function (){try{while(true){
var result__8561__auto__ = switch__8558__auto__.call(null,state_8804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8561__auto__;
}
break;
}
}catch (e8810){if((e8810 instanceof Object)){
var ex__8562__auto__ = e8810;
var statearr_8811_8817 = state_8804;
(statearr_8811_8817[(5)] = ex__8562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8818 = state_8804;
state_8804 = G__8818;
continue;
} else {
return ret_value__8560__auto__;
}
break;
}
});
cljs_mlb_notifier$http$state_machine__8559__auto__ = function(state_8804){
switch(arguments.length){
case 0:
return cljs_mlb_notifier$http$state_machine__8559__auto____0.call(this);
case 1:
return cljs_mlb_notifier$http$state_machine__8559__auto____1.call(this,state_8804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mlb_notifier$http$state_machine__8559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mlb_notifier$http$state_machine__8559__auto____0;
cljs_mlb_notifier$http$state_machine__8559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mlb_notifier$http$state_machine__8559__auto____1;
return cljs_mlb_notifier$http$state_machine__8559__auto__;
})()
;})(switch__8558__auto__,c__8579__auto__,result,r__$1,data))
})();
var state__8581__auto__ = (function (){var statearr_8812 = f__8580__auto__.call(null);
(statearr_8812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8579__auto__);

return statearr_8812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8581__auto__);
});})(c__8579__auto__,result,r__$1,data))
);

return c__8579__auto__;
}catch (e8800){var e = e8800;
cljs_mlb_notifier.log.log.call(null,"failed to parse JSON");

cljs_mlb_notifier.log.log.call(null,e);

return cljs_mlb_notifier.log.log.call(null,cljs.core.deref.call(null,data));
}} else {
return null;
}
});})(data))
);
}));
req.on("error",((function (req){
return (function (e){
cljs_mlb_notifier.log.log.call(null,"GET failed.");

cljs_mlb_notifier.log.log.call(null,url);

return cljs_mlb_notifier.log.log.call(null,e);
});})(req))
);

return req.end();
});

cljs_mlb_notifier.http.get.cljs$lang$maxFixedArity = 3;
cljs_mlb_notifier.http.encode_params = (function cljs_mlb_notifier$http$encode_params(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8821){
var vec__8822 = p__8821;
var k = cljs.core.nth.call(null,vec__8822,(0),null);
var v = cljs.core.nth.call(null,vec__8822,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(encodeURIComponent(v))].join('');
}),params));
});
cljs_mlb_notifier.http.post = (function cljs_mlb_notifier$http$post(url,body){
var vec__8825 = cljs_mlb_notifier.http.parse_url.call(null,url);
var protocol = cljs.core.nth.call(null,vec__8825,(0),null);
var hostname = cljs.core.nth.call(null,vec__8825,(1),null);
var path = cljs.core.nth.call(null,vec__8825,(2),null);
var vec__8826 = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(body);
var auth_username = cljs.core.nth.call(null,vec__8826,(0),null);
var auth_password = cljs.core.nth.call(null,vec__8826,(1),null);
var query_string = cljs_mlb_notifier.http.encode_params.call(null,new cljs.core.Keyword(null,"form-params","form-params",1884296467).cljs$core$IFn$_invoke$arity$1(body));
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),hostname,new cljs.core.Keyword(null,"path","path",-188191168),[cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query_string)].join(''),new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"auth","auth",1389754926),[cljs.core.str(auth_username),cljs.core.str(":"),cljs.core.str(auth_password)].join('')], null);
var req = ((cljs.core._EQ_.call(null,protocol,"https:"))?cljs_mlb_notifier.http.https:cljs_mlb_notifier.http.http).request(cljs.core.clj__GT_js.call(null,options),((function (vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options){
return (function (r){
var data = cljs.core.atom.call(null,"");
r.on("data",((function (data,vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options){
return (function (part){
return cljs.core.reset_BANG_.call(null,data,[cljs.core.str(cljs.core.deref.call(null,data)),cljs.core.str(part)].join(''));
});})(data,vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options))
);

return r.on("end",((function (data,vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options){
return (function (_){
return null;
});})(data,vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options))
);
});})(vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options))
);
req.on("error",((function (vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options,req){
return (function (e){
cljs_mlb_notifier.log.log.call(null,"POST Failed.");

cljs_mlb_notifier.log.log.call(null,url);

return cljs_mlb_notifier.log.log.call(null,e);
});})(vec__8825,protocol,hostname,path,vec__8826,auth_username,auth_password,query_string,options,req))
);

return req.end();
});

//# sourceMappingURL=http.js.map