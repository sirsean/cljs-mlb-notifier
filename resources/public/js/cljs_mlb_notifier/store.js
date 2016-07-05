// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.store');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs_mlb_notifier.mlb');
cljs_mlb_notifier.store.game_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_mlb_notifier.store.boxscore_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_mlb_notifier.store.event_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_mlb_notifier.store.date_key = (function cljs_mlb_notifier$store$date_key(game_id){
var vec__7332 = cljs_mlb_notifier.mlb.game_id__GT_date.call(null,game_id);
var year = cljs.core.nth.call(null,vec__7332,(0),null);
var month = cljs.core.nth.call(null,vec__7332,(1),null);
var day = cljs.core.nth.call(null,vec__7332,(2),null);
return goog.string.format("%04d/%02d/%02d",year,month,day);
});
cljs_mlb_notifier.store.get_game = (function cljs_mlb_notifier$store$get_game(game_id){
var date_key = cljs_mlb_notifier.store.date_key.call(null,game_id);
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cljs_mlb_notifier.store.game_store),date_key),game_id);
});
cljs_mlb_notifier.store.save_game_BANG_ = (function cljs_mlb_notifier$store$save_game_BANG_(game){
var game_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(game);
var date_key = cljs_mlb_notifier.store.date_key.call(null,game_id);
return cljs.core.swap_BANG_.call(null,cljs_mlb_notifier.store.game_store,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_key,game_id], null),game);
});
cljs_mlb_notifier.store.get_boxscore = (function cljs_mlb_notifier$store$get_boxscore(game_id){
var date_key = cljs_mlb_notifier.store.date_key.call(null,game_id);
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cljs_mlb_notifier.store.boxscore_store),date_key),game_id);
});
cljs_mlb_notifier.store.save_boxscore_BANG_ = (function cljs_mlb_notifier$store$save_boxscore_BANG_(boxscore){
var game_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(boxscore);
var date_key = cljs_mlb_notifier.store.date_key.call(null,game_id);
return cljs.core.swap_BANG_.call(null,cljs_mlb_notifier.store.boxscore_store,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_key,game_id], null),boxscore);
});
cljs_mlb_notifier.store.get_event = (function cljs_mlb_notifier$store$get_event(event){
var date_key = cljs_mlb_notifier.store.date_key.call(null,new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(event));
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cljs_mlb_notifier.store.event_store),date_key),event);
});
cljs_mlb_notifier.store.save_event_BANG_ = (function cljs_mlb_notifier$store$save_event_BANG_(event){
var date_key = cljs_mlb_notifier.store.date_key.call(null,new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(event));
return cljs.core.swap_BANG_.call(null,cljs_mlb_notifier.store.event_store,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_key,event], null),true);
});

//# sourceMappingURL=store.js.map