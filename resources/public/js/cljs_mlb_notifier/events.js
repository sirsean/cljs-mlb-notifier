// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.events');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('cljs_mlb_notifier.log');
cljs_mlb_notifier.events.leader = (function cljs_mlb_notifier$events$leader(game){
var boxscore = new cljs.core.Keyword(null,"boxscore","boxscore",-1447077970).cljs$core$IFn$_invoke$arity$1(game);
var home_runs = parseInt(new cljs.core.Keyword(null,"home-team-runs","home-team-runs",341591539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"linescore","linescore",-632259368).cljs$core$IFn$_invoke$arity$1(boxscore)));
var away_runs = parseInt(new cljs.core.Keyword(null,"away-team-runs","away-team-runs",688098590).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"linescore","linescore",-632259368).cljs$core$IFn$_invoke$arity$1(boxscore)));
if((home_runs > away_runs)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leader","leader",1888892947),new cljs.core.Keyword(null,"home-name-abbrev","home-name-abbrev",244669606).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"leader-runs","leader-runs",-930106314),home_runs,new cljs.core.Keyword(null,"trailer","trailer",-1354572924),new cljs.core.Keyword(null,"away-name-abbrev","away-name-abbrev",-249394503).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"trailer-runs","trailer-runs",-985766873),away_runs], null);
} else {
if((home_runs < away_runs)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leader","leader",1888892947),new cljs.core.Keyword(null,"away-name-abbrev","away-name-abbrev",-249394503).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"leader-runs","leader-runs",-930106314),away_runs,new cljs.core.Keyword(null,"trailer","trailer",-1354572924),new cljs.core.Keyword(null,"home-name-abbrev","home-name-abbrev",244669606).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"trailer-runs","trailer-runs",-985766873),home_runs], null);
} else {
return null;
}
}
});
cljs_mlb_notifier.events.leader_equal_QMARK_ = (function cljs_mlb_notifier$events$leader_equal_QMARK_(a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"leader","leader",1888892947).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"leader","leader",1888892947).cljs$core$IFn$_invoke$arity$1(b));
});
cljs_mlb_notifier.events.friendly_inning = (function cljs_mlb_notifier$events$friendly_inning(inning){
if((cljs.core._EQ_.call(null,(1),inning)) || (cljs.core._EQ_.call(null,(21),inning)) || (cljs.core._EQ_.call(null,(31),inning))){
return [cljs.core.str(inning),cljs.core.str("st")].join('');
} else {
if((cljs.core._EQ_.call(null,(2),inning)) || (cljs.core._EQ_.call(null,(22),inning)) || (cljs.core._EQ_.call(null,(32),inning))){
return [cljs.core.str(inning),cljs.core.str("nd")].join('');
} else {
if((cljs.core._EQ_.call(null,(3),inning)) || (cljs.core._EQ_.call(null,(23),inning)) || (cljs.core._EQ_.call(null,(33),inning))){
return [cljs.core.str(inning),cljs.core.str("rd")].join('');
} else {
return [cljs.core.str(inning),cljs.core.str("th")].join('');

}
}
}
});
cljs_mlb_notifier.events.lead_change_determiner = (function cljs_mlb_notifier$events$lead_change_determiner(from,to){
var inning = parseInt(new cljs.core.Keyword(null,"inning","inning",-414438279).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(to)));
var from_leader = cljs_mlb_notifier.events.leader.call(null,from);
var to_leader = cljs_mlb_notifier.events.leader.call(null,to);
if((!((from == null))) && (!((to == null))) && ((inning >= (7)))){
if(cljs.core.truth_((function (){var and__6195__auto__ = (from_leader == null);
if(and__6195__auto__){
return to_leader;
} else {
return and__6195__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",385578016),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(to),new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.format("%s broke the tie in the %s, %d-%d",clojure.string.upper_case.call(null,new cljs.core.Keyword(null,"leader","leader",1888892947).cljs$core$IFn$_invoke$arity$1(to_leader)),cljs_mlb_notifier.events.friendly_inning.call(null,inning),new cljs.core.Keyword(null,"leader-runs","leader-runs",-930106314).cljs$core$IFn$_invoke$arity$1(to_leader),new cljs.core.Keyword(null,"trailer-runs","trailer-runs",-985766873).cljs$core$IFn$_invoke$arity$1(to_leader))], null)], null);
} else {
if(cljs.core.truth_((function (){var and__6195__auto__ = from_leader;
if(cljs.core.truth_(and__6195__auto__)){
return (to_leader == null);
} else {
return and__6195__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",385578016),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(to),new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.format("%s tied it up in the %s, %d-%d",clojure.string.upper_case.call(null,new cljs.core.Keyword(null,"trailer","trailer",-1354572924).cljs$core$IFn$_invoke$arity$1(from_leader)),cljs_mlb_notifier.events.friendly_inning.call(null,inning),new cljs.core.Keyword(null,"leader-runs","leader-runs",-930106314).cljs$core$IFn$_invoke$arity$1(from_leader),new cljs.core.Keyword(null,"leader-runs","leader-runs",-930106314).cljs$core$IFn$_invoke$arity$1(from_leader))], null)], null);
} else {
if(cljs.core.truth_((function (){var and__6195__auto__ = from_leader;
if(cljs.core.truth_(and__6195__auto__)){
return cljs.core.not.call(null,cljs_mlb_notifier.events.leader_equal_QMARK_.call(null,from_leader,to_leader));
} else {
return and__6195__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",385578016),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(to),new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.format("%s took the lead in the %s, %d-%d",clojure.string.upper_case.call(null,new cljs.core.Keyword(null,"leader","leader",1888892947).cljs$core$IFn$_invoke$arity$1(to_leader)),cljs_mlb_notifier.events.friendly_inning.call(null,inning),new cljs.core.Keyword(null,"leader-runs","leader-runs",-930106314).cljs$core$IFn$_invoke$arity$1(to_leader),new cljs.core.Keyword(null,"trailer-runs","trailer-runs",-985766873).cljs$core$IFn$_invoke$arity$1(to_leader))], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
cljs_mlb_notifier.events.feat_order = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"rbi","rbi",-1941253782),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"bb","bb",75940837),new cljs.core.Keyword(null,"sb","sb",1404689327)], null);
cljs_mlb_notifier.events.min_feats = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"h","h",1109658740),(4),new cljs.core.Keyword(null,"hr","hr",1377740067),(2),new cljs.core.Keyword(null,"rbi","rbi",-1941253782),(4),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"bb","bb",75940837),(3),new cljs.core.Keyword(null,"sb","sb",1404689327),(3)], null);
cljs_mlb_notifier.events.batter_feats = (function cljs_mlb_notifier$events$batter_feats(b){
return cljs.core.sort_by.call(null,(function (p__7335){
var vec__7336 = p__7335;
var k = cljs.core.nth.call(null,vec__7336,(0),null);
var _ = cljs.core.nth.call(null,vec__7336,(1),null);
return cljs_mlb_notifier.events.feat_order.indexOf(k);
}),cljs.core.reduce.call(null,(function (feats,p__7337){
var vec__7338 = p__7337;
var k = cljs.core.nth.call(null,vec__7338,(0),null);
var v = cljs.core.nth.call(null,vec__7338,(1),null);
if((!((cljs.core.get.call(null,cljs_mlb_notifier.events.min_feats,k) == null))) && ((v >= cljs.core.get.call(null,cljs_mlb_notifier.events.min_feats,k)))){
return cljs.core.conj.call(null,feats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return feats;
}
}),cljs.core.PersistentVector.EMPTY,b));
});
cljs_mlb_notifier.events.friendly_feats = (function cljs_mlb_notifier$events$friendly_feats(feats){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p__7341){
var vec__7342 = p__7341;
var k = cljs.core.nth.call(null,vec__7342,(0),null);
var v = cljs.core.nth.call(null,vec__7342,(1),null);
return [cljs.core.str(v),cljs.core.str(" "),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,k)))].join('');
}),feats));
});
cljs_mlb_notifier.events.all_batters = (function cljs_mlb_notifier$events$all_batters(boxscore){
return cljs.core.reduce.call(null,(function (all,batters){
return cljs.core.concat.call(null,all,batters);
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__7343_SHARP_){
return new cljs.core.Keyword(null,"batter","batter",117920389).cljs$core$IFn$_invoke$arity$1(p1__7343_SHARP_);
}),new cljs.core.Keyword(null,"batting","batting",-1371063087).cljs$core$IFn$_invoke$arity$1(boxscore)));
});
cljs_mlb_notifier.events.batter_determiner = (function cljs_mlb_notifier$events$batter_determiner(prev,p__7344){
var map__7347 = p__7344;
var map__7347__$1 = ((((!((map__7347 == null)))?((((map__7347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7347):map__7347);
var boxscore = cljs.core.get.call(null,map__7347__$1,new cljs.core.Keyword(null,"boxscore","boxscore",-1447077970));
if(!((prev == null))){
return cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (map__7347,map__7347__$1,boxscore){
return (function (b){
var feats = cljs_mlb_notifier.events.batter_feats.call(null,b);
if((cljs.core.count.call(null,feats) > (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",385578016),new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(boxscore),new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(new cljs.core.Keyword(null,"name-display-first-last","name-display-first-last",1168914158).cljs$core$IFn$_invoke$arity$1(b)),cljs.core.str(" has "),cljs.core.str(cljs_mlb_notifier.events.friendly_feats.call(null,feats))].join('')], null);
} else {
return null;
}
});})(map__7347,map__7347__$1,boxscore))
,cljs_mlb_notifier.events.all_batters.call(null,boxscore))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
cljs_mlb_notifier.events.starting_pitchers = (function cljs_mlb_notifier$events$starting_pitchers(boxscore){
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (team){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"pitcher","pitcher",29772921).cljs$core$IFn$_invoke$arity$1(team));
}),new cljs.core.Keyword(null,"pitching","pitching",-720286578).cljs$core$IFn$_invoke$arity$1(boxscore)));
});
cljs_mlb_notifier.events.pitcher_k = (function cljs_mlb_notifier$events$pitcher_k(pitcher){
if((new cljs.core.Keyword(null,"so","so",732143212).cljs$core$IFn$_invoke$arity$1(pitcher) >= (10))){
return [cljs.core.str(new cljs.core.Keyword(null,"name-display-first-last","name-display-first-last",1168914158).cljs$core$IFn$_invoke$arity$1(pitcher)),cljs.core.str(" has "),cljs.core.str(new cljs.core.Keyword(null,"so","so",732143212).cljs$core$IFn$_invoke$arity$1(pitcher)),cljs.core.str(" K")].join('');
} else {
return null;
}
});
cljs_mlb_notifier.events.outs__GT_innings = (function cljs_mlb_notifier$events$outs__GT_innings(outs){
return cljs.core.quot.call(null,outs,(3));
});
cljs_mlb_notifier.events.perfect_game_QMARK_ = (function cljs_mlb_notifier$events$perfect_game_QMARK_(pitcher){
return ((new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(pitcher) >= (15))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(pitcher),new cljs.core.Keyword(null,"bf","bf",933973458).cljs$core$IFn$_invoke$arity$1(pitcher))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(pitcher))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"bb","bb",75940837).cljs$core$IFn$_invoke$arity$1(pitcher)));
});
cljs_mlb_notifier.events.no_hitter_QMARK_ = (function cljs_mlb_notifier$events$no_hitter_QMARK_(pitcher){
return ((new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(pitcher) >= (15))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(pitcher)));
});
cljs_mlb_notifier.events.shutout_QMARK_ = (function cljs_mlb_notifier$events$shutout_QMARK_(pitcher){
return ((new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(pitcher) >= (24))) && (cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(pitcher)));
});
cljs_mlb_notifier.events.pitcher_game_progress = (function cljs_mlb_notifier$events$pitcher_game_progress(pitcher){
if(cljs.core.truth_(cljs_mlb_notifier.events.perfect_game_QMARK_.call(null,pitcher))){
return goog.string.format("%s is perfect through %d",new cljs.core.Keyword(null,"name-display-first-last","name-display-first-last",1168914158).cljs$core$IFn$_invoke$arity$1(pitcher),cljs_mlb_notifier.events.outs__GT_innings.call(null,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(pitcher)));
} else {
if(cljs.core.truth_(cljs_mlb_notifier.events.no_hitter_QMARK_.call(null,pitcher))){
return goog.string.format("%s has a no-hitter through %d",new cljs.core.Keyword(null,"name-display-first-last","name-display-first-last",1168914158).cljs$core$IFn$_invoke$arity$1(pitcher),cljs_mlb_notifier.events.outs__GT_innings.call(null,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(pitcher)));
} else {
if(cljs.core.truth_(cljs_mlb_notifier.events.shutout_QMARK_.call(null,pitcher))){
return goog.string.format("%s has a shutout through %d",new cljs.core.Keyword(null,"name-display-first-last","name-display-first-last",1168914158).cljs$core$IFn$_invoke$arity$1(pitcher),cljs_mlb_notifier.events.outs__GT_innings.call(null,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(pitcher)));
} else {
return null;
}
}
}
});
cljs_mlb_notifier.events.pitcher_determiner = (function cljs_mlb_notifier$events$pitcher_determiner(prev,p__7349){
var map__7352 = p__7349;
var map__7352__$1 = ((((!((map__7352 == null)))?((((map__7352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7352):map__7352);
var boxscore = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword(null,"boxscore","boxscore",-1447077970));
if(!((prev == null))){
return cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (map__7352,map__7352__$1,boxscore){
return (function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__4657__auto__ = cljs_mlb_notifier.events.pitcher_k.call(null,p);
if(cljs.core.truth_(temp__4657__auto__)){
var text = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",385578016),new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(boxscore),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = cljs_mlb_notifier.events.pitcher_game_progress.call(null,p);
if(cljs.core.truth_(temp__4657__auto__)){
var text = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game-id","game-id",385578016),new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(boxscore),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
} else {
return null;
}
})()], null);
});})(map__7352,map__7352__$1,boxscore))
,cljs_mlb_notifier.events.starting_pitchers.call(null,boxscore)))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
cljs_mlb_notifier.events.determiners = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_mlb_notifier.events.lead_change_determiner,cljs_mlb_notifier.events.batter_determiner,cljs_mlb_notifier.events.pitcher_determiner], null);
cljs_mlb_notifier.events.compare_games = (function cljs_mlb_notifier$events$compare_games(from,to){
return cljs.core.reduce.call(null,(function (events,determiner){
return cljs.core.concat.call(null,events,determiner.call(null,from,to));
}),cljs.core.PersistentVector.EMPTY,cljs_mlb_notifier.events.determiners);
});

//# sourceMappingURL=events.js.map