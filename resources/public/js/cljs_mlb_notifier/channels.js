// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs_mlb_notifier.channels.scoreboard_chan = cljs.core.async.chan.call(null);
cljs_mlb_notifier.channels.game_chan = cljs.core.async.chan.call(null);
cljs_mlb_notifier.channels.boxscore_chan = cljs.core.async.chan.call(null);
cljs_mlb_notifier.channels.event_chan = cljs.core.async.chan.call(null);

//# sourceMappingURL=channels.js.map