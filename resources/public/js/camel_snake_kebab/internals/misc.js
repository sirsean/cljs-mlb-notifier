// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7408 = arguments.length;
var i__7278__auto___7409 = (0);
while(true){
if((i__7278__auto___7409 < len__7277__auto___7408)){
args__7284__auto__.push((arguments[i__7278__auto___7409]));

var G__7410 = (i__7278__auto___7409 + (1));
i__7278__auto___7409 = G__7410;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((4) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7285__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__7404){
var map__7405 = p__7404;
var map__7405__$1 = ((((!((map__7405 == null)))?((((map__7405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7405):map__7405);
var separator = cljs.core.get.call(null,map__7405__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__7407 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var first = cljs.core.nth.call(null,vec__7407,(0),null);
var rest = cljs.core.nthnext.call(null,vec__7407,(1));
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq7399){
var G__7400 = cljs.core.first.call(null,seq7399);
var seq7399__$1 = cljs.core.next.call(null,seq7399);
var G__7401 = cljs.core.first.call(null,seq7399__$1);
var seq7399__$2 = cljs.core.next.call(null,seq7399__$1);
var G__7402 = cljs.core.first.call(null,seq7399__$2);
var seq7399__$3 = cljs.core.next.call(null,seq7399__$2);
var G__7403 = cljs.core.first.call(null,seq7399__$3);
var seq7399__$4 = cljs.core.next.call(null,seq7399__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__7400,G__7401,G__7402,G__7403,seq7399__$4);
});
camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__6207__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map