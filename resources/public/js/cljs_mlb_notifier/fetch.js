// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.fetch');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs_mlb_notifier.http');
goog.require('cljs_mlb_notifier.mlb');
cljs_mlb_notifier.fetch.boxscore_url = (function cljs_mlb_notifier$fetch$boxscore_url(game_id){
var vec__8830 = cljs_mlb_notifier.mlb.game_id__GT_date.call(null,game_id);
var year = cljs.core.nth.call(null,vec__8830,(0),null);
var month = cljs.core.nth.call(null,vec__8830,(1),null);
var day = cljs.core.nth.call(null,vec__8830,(2),null);
var game_id__$1 = clojure.string.replace.call(null,game_id,/[-\/]/,"_");
return goog.string.format("http://gdx.mlb.com/components/game/mlb/year_%04d/month_%02d/day_%02d/gid_%s/boxscore.json",year,month,day,game_id__$1);
});
cljs_mlb_notifier.fetch.boxscore_BANG_ = (function cljs_mlb_notifier$fetch$boxscore_BANG_(ch,game){
var url = cljs_mlb_notifier.fetch.boxscore_url.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(game));
return cljs_mlb_notifier.http.get.call(null,url,ch,((function (url){
return (function (p1__8831_SHARP_){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"boxscore","boxscore",-1447077970),new cljs.core.Keyword(null,"boxscore","boxscore",-1447077970).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__8831_SHARP_)));
});})(url))
);
});
cljs_mlb_notifier.fetch.scoreboard_url = (function cljs_mlb_notifier$fetch$scoreboard_url(date){
return goog.string.format("http://gdx.mlb.com/components/game/mlb/year_%04d/month_%02d/day_%02d/master_scoreboard.json",cljs_time.core.year.call(null,date),cljs_time.core.month.call(null,date),cljs_time.core.day.call(null,date));
});
cljs_mlb_notifier.fetch.scoreboard_BANG_ = (function cljs_mlb_notifier$fetch$scoreboard_BANG_(ch,date){
var url = cljs_mlb_notifier.fetch.scoreboard_url.call(null,date);
return cljs_mlb_notifier.http.get.call(null,url,ch,((function (url){
return (function (p1__8832_SHARP_){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__8832_SHARP_)));
});})(url))
);
});

//# sourceMappingURL=fetch.js.map