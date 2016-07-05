// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.core');
goog.require('cljs.core');
goog.require('cljs_mlb_notifier.channels');
goog.require('cljs_mlb_notifier.fetch');
goog.require('cljs_mlb_notifier.handlers');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('cljs_mlb_notifier.ticker');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_mlb_notifier.core._main = (function cljs_mlb_notifier$core$_main(var_args){
var args__7284__auto__ = [];
var len__7277__auto___8943 = arguments.length;
var i__7278__auto___8944 = (0);
while(true){
if((i__7278__auto___8944 < len__7277__auto___8943)){
args__7284__auto__.push((arguments[i__7278__auto___8944]));

var G__8945 = (i__7278__auto___8944 + (1));
i__7278__auto___8944 = G__8945;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((0) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((0)),(0),null)):null);
return cljs_mlb_notifier.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7285__auto__);
});

cljs_mlb_notifier.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs_mlb_notifier.handlers.start_BANG_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_mlb_notifier.channels.scoreboard_chan,cljs_mlb_notifier.handlers.scoreboard_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_mlb_notifier.channels.game_chan,cljs_mlb_notifier.handlers.game_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_mlb_notifier.channels.boxscore_chan,cljs_mlb_notifier.handlers.boxscore_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_mlb_notifier.channels.event_chan,cljs_mlb_notifier.handlers.event_handler], null)], null));

cljs_mlb_notifier.fetch.scoreboard_BANG_.call(null,cljs_mlb_notifier.channels.scoreboard_chan,cljs_time.core.now.call(null));

return cljs_mlb_notifier.ticker.start.call(null,(10),(function (){
cljs_mlb_notifier.fetch.scoreboard_BANG_.call(null,cljs_mlb_notifier.channels.scoreboard_chan,cljs_time.core.now.call(null));

return cljs_mlb_notifier.fetch.scoreboard_BANG_.call(null,cljs_mlb_notifier.channels.scoreboard_chan,cljs_time.core.minus.call(null,cljs_time.core.now.call(null),cljs_time.core.days.call(null,(1))));
}));
});

cljs_mlb_notifier.core._main.cljs$lang$maxFixedArity = (0);

cljs_mlb_notifier.core._main.cljs$lang$applyTo = (function (seq8942){
return cljs_mlb_notifier.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8942));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_mlb_notifier.core._main;

//# sourceMappingURL=core.js.map