// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.log');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
cljs_mlb_notifier.log.log = (function cljs_mlb_notifier$log$log(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7332 = arguments.length;
var i__7278__auto___7333 = (0);
while(true){
if((i__7278__auto___7333 < len__7277__auto___7332)){
args__7284__auto__.push((arguments[i__7278__auto___7333]));

var G__7334 = (i__7278__auto___7333 + (1));
i__7278__auto___7333 = G__7334;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((0) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((0)),(0),null)):null);
return cljs_mlb_notifier.log.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7285__auto__);
});

cljs_mlb_notifier.log.log.cljs$core$IFn$_invoke$arity$variadic = (function (msgs){
return cljs.core.println.call(null,goog.string.format("[%s]: %s",cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180)),cljs_time.core.now.call(null)),clojure.string.join.call(null," ",msgs)));
});

cljs_mlb_notifier.log.log.cljs$lang$maxFixedArity = (0);

cljs_mlb_notifier.log.log.cljs$lang$applyTo = (function (seq7331){
return cljs_mlb_notifier.log.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7331));
});

//# sourceMappingURL=log.js.map