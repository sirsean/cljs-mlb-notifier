// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.handlers');
goog.require('cljs.core');
goog.require('cljs_mlb_notifier.channels');
goog.require('cljs_mlb_notifier.log');
goog.require('cljs_mlb_notifier.fetch');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('cljs_mlb_notifier.store');
goog.require('cljs_mlb_notifier.mailgun');
goog.require('cljs_mlb_notifier.mlb');
goog.require('cljs_mlb_notifier.events');
cljs_mlb_notifier.handlers.scoreboard_handler = (function cljs_mlb_notifier$handlers$scoreboard_handler(scoreboard){
var games = scoreboard;
while(true){
var temp__4657__auto__ = cljs.core.first.call(null,games);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var c__8598__auto___8838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (games,c__8598__auto___8838,g,temp__4657__auto__){
return (function (){
var f__8599__auto__ = (function (){var switch__8577__auto__ = ((function (games,c__8598__auto___8838,g,temp__4657__auto__){
return (function (state_8829){
var state_val_8830 = (state_8829[(1)]);
if((state_val_8830 === (1))){
var state_8829__$1 = state_8829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8829__$1,(2),cljs_mlb_notifier.channels.game_chan,g);
} else {
if((state_val_8830 === (2))){
var inst_8827 = (state_8829[(2)]);
var state_8829__$1 = state_8829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8829__$1,inst_8827);
} else {
return null;
}
}
});})(games,c__8598__auto___8838,g,temp__4657__auto__))
;
return ((function (games,switch__8577__auto__,c__8598__auto___8838,g,temp__4657__auto__){
return (function() {
var cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto__ = null;
var cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto____0 = (function (){
var statearr_8834 = [null,null,null,null,null,null,null];
(statearr_8834[(0)] = cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto__);

(statearr_8834[(1)] = (1));

return statearr_8834;
});
var cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto____1 = (function (state_8829){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_8829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e8835){if((e8835 instanceof Object)){
var ex__8581__auto__ = e8835;
var statearr_8836_8839 = state_8829;
(statearr_8836_8839[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8840 = state_8829;
state_8829 = G__8840;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto__ = function(state_8829){
switch(arguments.length){
case 0:
return cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto____0.call(this);
case 1:
return cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto____1.call(this,state_8829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto____0;
cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto____1;
return cljs_mlb_notifier$handlers$scoreboard_handler_$_state_machine__8578__auto__;
})()
;})(games,switch__8577__auto__,c__8598__auto___8838,g,temp__4657__auto__))
})();
var state__8600__auto__ = (function (){var statearr_8837 = f__8599__auto__.call(null);
(statearr_8837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8598__auto___8838);

return statearr_8837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8600__auto__);
});})(games,c__8598__auto___8838,g,temp__4657__auto__))
);


var G__8841 = cljs.core.rest.call(null,games);
games = G__8841;
continue;
} else {
return null;
}
break;
}
});
cljs_mlb_notifier.handlers.boxscore_handler = (function cljs_mlb_notifier$handlers$boxscore_handler(boxscore){
var prev = cljs_mlb_notifier.store.get_boxscore.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(boxscore));
cljs_mlb_notifier.store.save_boxscore_BANG_.call(null,boxscore);

var events = cljs_mlb_notifier.events.compare_games.call(null,prev,boxscore);
while(true){
var temp__4657__auto__ = cljs.core.first.call(null,events);
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
var c__8598__auto___8866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (events,c__8598__auto___8866,e,temp__4657__auto__,prev){
return (function (){
var f__8599__auto__ = (function (){var switch__8577__auto__ = ((function (events,c__8598__auto___8866,e,temp__4657__auto__,prev){
return (function (state_8857){
var state_val_8858 = (state_8857[(1)]);
if((state_val_8858 === (1))){
var state_8857__$1 = state_8857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8857__$1,(2),cljs_mlb_notifier.channels.event_chan,e);
} else {
if((state_val_8858 === (2))){
var inst_8855 = (state_8857[(2)]);
var state_8857__$1 = state_8857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8857__$1,inst_8855);
} else {
return null;
}
}
});})(events,c__8598__auto___8866,e,temp__4657__auto__,prev))
;
return ((function (events,switch__8577__auto__,c__8598__auto___8866,e,temp__4657__auto__,prev){
return (function() {
var cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto__ = null;
var cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto____0 = (function (){
var statearr_8862 = [null,null,null,null,null,null,null];
(statearr_8862[(0)] = cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto__);

(statearr_8862[(1)] = (1));

return statearr_8862;
});
var cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto____1 = (function (state_8857){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_8857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e8863){if((e8863 instanceof Object)){
var ex__8581__auto__ = e8863;
var statearr_8864_8867 = state_8857;
(statearr_8864_8867[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8868 = state_8857;
state_8857 = G__8868;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto__ = function(state_8857){
switch(arguments.length){
case 0:
return cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto____0.call(this);
case 1:
return cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto____1.call(this,state_8857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto____0;
cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto____1;
return cljs_mlb_notifier$handlers$boxscore_handler_$_state_machine__8578__auto__;
})()
;})(events,switch__8577__auto__,c__8598__auto___8866,e,temp__4657__auto__,prev))
})();
var state__8600__auto__ = (function (){var statearr_8865 = f__8599__auto__.call(null);
(statearr_8865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8598__auto___8866);

return statearr_8865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8600__auto__);
});})(events,c__8598__auto___8866,e,temp__4657__auto__,prev))
);


var G__8869 = cljs.core.rest.call(null,events);
events = G__8869;
continue;
} else {
return null;
}
break;
}
});
cljs_mlb_notifier.handlers.game_handler = (function cljs_mlb_notifier$handlers$game_handler(game){
cljs_mlb_notifier.store.save_game_BANG_.call(null,game);

return cljs_mlb_notifier.fetch.boxscore_BANG_.call(null,cljs_mlb_notifier.channels.boxscore_chan,game);
});
cljs_mlb_notifier.handlers.format_event = (function cljs_mlb_notifier$handlers$format_event(event){
var game = cljs_mlb_notifier.store.get_game.call(null,new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(event));
return goog.string.format("[%s @ %s] %s",new cljs.core.Keyword(null,"away-name-abbrev","away-name-abbrev",-249394503).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"home-name-abbrev","home-name-abbrev",244669606).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(event));
});
cljs_mlb_notifier.handlers.send_event_BANG_ = (function cljs_mlb_notifier$handlers$send_event_BANG_(event){
var message = cljs_mlb_notifier.handlers.format_event.call(null,event);
var credentials = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"api-key","api-key",1037904031),process.env.MAILGUN_API_KEY,new cljs.core.Keyword(null,"domain","domain",1847214937),process.env.MAILGUN_DOMAIN], null);
var params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),process.env.MLB_NOTIFIER_FROM,new cljs.core.Keyword(null,"to","to",192099007),process.env.MLB_NOTIFIER_TO,new cljs.core.Keyword(null,"subject","subject",-1411880451),message,new cljs.core.Keyword(null,"text","text",-1790561697),message], null);
return cljs_mlb_notifier.mailgun.send_email.call(null,credentials,params);
});
cljs_mlb_notifier.handlers.event_handler = (function cljs_mlb_notifier$handlers$event_handler(event){
if(cljs.core.truth_(cljs_mlb_notifier.store.get_event.call(null,event))){
return null;
} else {
cljs_mlb_notifier.log.log.call(null,event);

cljs_mlb_notifier.handlers.send_event_BANG_.call(null,event);

return cljs_mlb_notifier.store.save_event_BANG_.call(null,event);
}
});
cljs_mlb_notifier.handlers.start_BANG_ = (function cljs_mlb_notifier$handlers$start_BANG_(handlers){
var handlers__$1 = handlers;
while(true){
var temp__4657__auto__ = cljs.core.first.call(null,handlers__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__8900 = temp__4657__auto__;
var ch = cljs.core.nth.call(null,vec__8900,(0),null);
var handler = cljs.core.nth.call(null,vec__8900,(1),null);
var c__8598__auto___8930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (handlers__$1,c__8598__auto___8930,vec__8900,ch,handler,temp__4657__auto__){
return (function (){
var f__8599__auto__ = (function (){var switch__8577__auto__ = ((function (handlers__$1,c__8598__auto___8930,vec__8900,ch,handler,temp__4657__auto__){
return (function (state_8913){
var state_val_8914 = (state_8913[(1)]);
if((state_val_8914 === (1))){
var state_8913__$1 = state_8913;
var statearr_8915_8931 = state_8913__$1;
(statearr_8915_8931[(2)] = null);

(statearr_8915_8931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (2))){
var state_8913__$1 = state_8913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8913__$1,(4),ch);
} else {
if((state_val_8914 === (3))){
var inst_8911 = (state_8913[(2)]);
var state_8913__$1 = state_8913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8913__$1,inst_8911);
} else {
if((state_val_8914 === (4))){
var inst_8903 = (state_8913[(7)]);
var inst_8903__$1 = (state_8913[(2)]);
var state_8913__$1 = (function (){var statearr_8916 = state_8913;
(statearr_8916[(7)] = inst_8903__$1);

return statearr_8916;
})();
if(cljs.core.truth_(inst_8903__$1)){
var statearr_8917_8932 = state_8913__$1;
(statearr_8917_8932[(1)] = (5));

} else {
var statearr_8918_8933 = state_8913__$1;
(statearr_8918_8933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (5))){
var inst_8903 = (state_8913[(7)]);
var inst_8905 = handler.call(null,inst_8903);
var state_8913__$1 = (function (){var statearr_8919 = state_8913;
(statearr_8919[(8)] = inst_8905);

return statearr_8919;
})();
var statearr_8920_8934 = state_8913__$1;
(statearr_8920_8934[(2)] = null);

(statearr_8920_8934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (6))){
var state_8913__$1 = state_8913;
var statearr_8921_8935 = state_8913__$1;
(statearr_8921_8935[(2)] = null);

(statearr_8921_8935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8914 === (7))){
var inst_8909 = (state_8913[(2)]);
var state_8913__$1 = state_8913;
var statearr_8922_8936 = state_8913__$1;
(statearr_8922_8936[(2)] = inst_8909);

(statearr_8922_8936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(handlers__$1,c__8598__auto___8930,vec__8900,ch,handler,temp__4657__auto__))
;
return ((function (handlers__$1,switch__8577__auto__,c__8598__auto___8930,vec__8900,ch,handler,temp__4657__auto__){
return (function() {
var cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto__ = null;
var cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto____0 = (function (){
var statearr_8926 = [null,null,null,null,null,null,null,null,null];
(statearr_8926[(0)] = cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto__);

(statearr_8926[(1)] = (1));

return statearr_8926;
});
var cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto____1 = (function (state_8913){
while(true){
var ret_value__8579__auto__ = (function (){try{while(true){
var result__8580__auto__ = switch__8577__auto__.call(null,state_8913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8580__auto__;
}
break;
}
}catch (e8927){if((e8927 instanceof Object)){
var ex__8581__auto__ = e8927;
var statearr_8928_8937 = state_8913;
(statearr_8928_8937[(5)] = ex__8581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8938 = state_8913;
state_8913 = G__8938;
continue;
} else {
return ret_value__8579__auto__;
}
break;
}
});
cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto__ = function(state_8913){
switch(arguments.length){
case 0:
return cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto____0.call(this);
case 1:
return cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto____1.call(this,state_8913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto____0;
cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto____1;
return cljs_mlb_notifier$handlers$start_BANG__$_state_machine__8578__auto__;
})()
;})(handlers__$1,switch__8577__auto__,c__8598__auto___8930,vec__8900,ch,handler,temp__4657__auto__))
})();
var state__8600__auto__ = (function (){var statearr_8929 = f__8599__auto__.call(null);
(statearr_8929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8598__auto___8930);

return statearr_8929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8600__auto__);
});})(handlers__$1,c__8598__auto___8930,vec__8900,ch,handler,temp__4657__auto__))
);


var G__8939 = cljs.core.rest.call(null,handlers__$1);
handlers__$1 = G__8939;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=handlers.js.map