// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs_mlb_notifier.ticker');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs_mlb_notifier.ticker.make_chan = (function cljs_mlb_notifier$ticker$make_chan(seconds){
var ch = cljs.core.async.chan.call(null);
var c__8573__auto___8972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8573__auto___8972,ch){
return (function (){
var f__8574__auto__ = (function (){var switch__8552__auto__ = ((function (c__8573__auto___8972,ch){
return (function (state_8958){
var state_val_8959 = (state_8958[(1)]);
if((state_val_8959 === (1))){
var state_8958__$1 = state_8958;
var statearr_8960_8973 = state_8958__$1;
(statearr_8960_8973[(2)] = null);

(statearr_8960_8973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8959 === (2))){
var inst_8947 = ((1000) * seconds);
var inst_8948 = cljs.core.async.timeout.call(null,inst_8947);
var state_8958__$1 = state_8958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8958__$1,(4),inst_8948);
} else {
if((state_val_8959 === (3))){
var inst_8955 = (state_8958[(2)]);
var inst_8956 = cljs.core.async.close_BANG_.call(null,ch);
var state_8958__$1 = (function (){var statearr_8961 = state_8958;
(statearr_8961[(7)] = inst_8955);

return statearr_8961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8958__$1,inst_8956);
} else {
if((state_val_8959 === (4))){
var inst_8950 = (state_8958[(2)]);
var state_8958__$1 = (function (){var statearr_8962 = state_8958;
(statearr_8962[(8)] = inst_8950);

return statearr_8962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8958__$1,(5),ch,new cljs.core.Keyword(null,"tick","tick",-835886976));
} else {
if((state_val_8959 === (5))){
var inst_8952 = (state_8958[(2)]);
var state_8958__$1 = (function (){var statearr_8963 = state_8958;
(statearr_8963[(9)] = inst_8952);

return statearr_8963;
})();
var statearr_8964_8974 = state_8958__$1;
(statearr_8964_8974[(2)] = null);

(statearr_8964_8974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__8573__auto___8972,ch))
;
return ((function (switch__8552__auto__,c__8573__auto___8972,ch){
return (function() {
var cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto__ = null;
var cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto____0 = (function (){
var statearr_8968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8968[(0)] = cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto__);

(statearr_8968[(1)] = (1));

return statearr_8968;
});
var cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto____1 = (function (state_8958){
while(true){
var ret_value__8554__auto__ = (function (){try{while(true){
var result__8555__auto__ = switch__8552__auto__.call(null,state_8958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8555__auto__;
}
break;
}
}catch (e8969){if((e8969 instanceof Object)){
var ex__8556__auto__ = e8969;
var statearr_8970_8975 = state_8958;
(statearr_8970_8975[(5)] = ex__8556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8976 = state_8958;
state_8958 = G__8976;
continue;
} else {
return ret_value__8554__auto__;
}
break;
}
});
cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto__ = function(state_8958){
switch(arguments.length){
case 0:
return cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto____0.call(this);
case 1:
return cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto____1.call(this,state_8958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto____0;
cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto____1;
return cljs_mlb_notifier$ticker$make_chan_$_state_machine__8553__auto__;
})()
;})(switch__8552__auto__,c__8573__auto___8972,ch))
})();
var state__8575__auto__ = (function (){var statearr_8971 = f__8574__auto__.call(null);
(statearr_8971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8573__auto___8972);

return statearr_8971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8575__auto__);
});})(c__8573__auto___8972,ch))
);


return ch;
});
cljs_mlb_notifier.ticker.start = (function cljs_mlb_notifier$ticker$start(seconds,f){
var ch = cljs_mlb_notifier.ticker.make_chan.call(null,seconds);
var c__8573__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8573__auto__,ch){
return (function (){
var f__8574__auto__ = (function (){var switch__8552__auto__ = ((function (c__8573__auto__,ch){
return (function (state_9017){
var state_val_9018 = (state_9017[(1)]);
if((state_val_9018 === (1))){
var state_9017__$1 = state_9017;
var statearr_9019_9033 = state_9017__$1;
(statearr_9019_9033[(2)] = null);

(statearr_9019_9033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9018 === (2))){
var state_9017__$1 = state_9017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9017__$1,(4),ch);
} else {
if((state_val_9018 === (3))){
var inst_9015 = (state_9017[(2)]);
var state_9017__$1 = state_9017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9017__$1,inst_9015);
} else {
if((state_val_9018 === (4))){
var inst_9007 = (state_9017[(2)]);
var state_9017__$1 = state_9017;
if(cljs.core.truth_(inst_9007)){
var statearr_9020_9034 = state_9017__$1;
(statearr_9020_9034[(1)] = (5));

} else {
var statearr_9021_9035 = state_9017__$1;
(statearr_9021_9035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9018 === (5))){
var inst_9009 = f.call(null);
var state_9017__$1 = (function (){var statearr_9022 = state_9017;
(statearr_9022[(7)] = inst_9009);

return statearr_9022;
})();
var statearr_9023_9036 = state_9017__$1;
(statearr_9023_9036[(2)] = null);

(statearr_9023_9036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9018 === (6))){
var state_9017__$1 = state_9017;
var statearr_9024_9037 = state_9017__$1;
(statearr_9024_9037[(2)] = null);

(statearr_9024_9037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9018 === (7))){
var inst_9013 = (state_9017[(2)]);
var state_9017__$1 = state_9017;
var statearr_9025_9038 = state_9017__$1;
(statearr_9025_9038[(2)] = inst_9013);

(statearr_9025_9038[(1)] = (3));


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
});})(c__8573__auto__,ch))
;
return ((function (switch__8552__auto__,c__8573__auto__,ch){
return (function() {
var cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto__ = null;
var cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto____0 = (function (){
var statearr_9029 = [null,null,null,null,null,null,null,null];
(statearr_9029[(0)] = cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto__);

(statearr_9029[(1)] = (1));

return statearr_9029;
});
var cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto____1 = (function (state_9017){
while(true){
var ret_value__8554__auto__ = (function (){try{while(true){
var result__8555__auto__ = switch__8552__auto__.call(null,state_9017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8555__auto__;
}
break;
}
}catch (e9030){if((e9030 instanceof Object)){
var ex__8556__auto__ = e9030;
var statearr_9031_9039 = state_9017;
(statearr_9031_9039[(5)] = ex__8556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9040 = state_9017;
state_9017 = G__9040;
continue;
} else {
return ret_value__8554__auto__;
}
break;
}
});
cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto__ = function(state_9017){
switch(arguments.length){
case 0:
return cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto____0.call(this);
case 1:
return cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto____1.call(this,state_9017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto____0;
cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto____1;
return cljs_mlb_notifier$ticker$start_$_state_machine__8553__auto__;
})()
;})(switch__8552__auto__,c__8573__auto__,ch))
})();
var state__8575__auto__ = (function (){var statearr_9032 = f__8574__auto__.call(null);
(statearr_9032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8573__auto__);

return statearr_9032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8575__auto__);
});})(c__8573__auto__,ch))
);

return c__8573__auto__;
});

//# sourceMappingURL=ticker.js.map