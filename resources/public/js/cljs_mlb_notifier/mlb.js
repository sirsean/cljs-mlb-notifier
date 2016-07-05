// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.mlb');
goog.require('cljs.core');
cljs_mlb_notifier.mlb.game_id__GT_date = (function cljs_mlb_notifier$mlb$game_id__GT_date(game_id){
var vec__12428 = cljs.core.re_matches.call(null,/(\d{4})\/(\d{2})\/(\d{2})\/.*/,game_id);
var _ = cljs.core.nth.call(null,vec__12428,(0),null);
var year = cljs.core.nth.call(null,vec__12428,(1),null);
var month = cljs.core.nth.call(null,vec__12428,(2),null);
var day = cljs.core.nth.call(null,vec__12428,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,month,day], null);
});

//# sourceMappingURL=mlb.js.map