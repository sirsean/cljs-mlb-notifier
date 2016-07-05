goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8938__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8939__i = 0, G__8939__a = new Array(arguments.length -  0);
while (G__8939__i < G__8939__a.length) {G__8939__a[G__8939__i] = arguments[G__8939__i + 0]; ++G__8939__i;}
  args = new cljs.core.IndexedSeq(G__8939__a,0);
} 
return G__8938__delegate.call(this,args);};
G__8938.cljs$lang$maxFixedArity = 0;
G__8938.cljs$lang$applyTo = (function (arglist__8940){
var args = cljs.core.seq(arglist__8940);
return G__8938__delegate(args);
});
G__8938.cljs$core$IFn$_invoke$arity$variadic = G__8938__delegate;
return G__8938;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8941__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8942__i = 0, G__8942__a = new Array(arguments.length -  0);
while (G__8942__i < G__8942__a.length) {G__8942__a[G__8942__i] = arguments[G__8942__i + 0]; ++G__8942__i;}
  args = new cljs.core.IndexedSeq(G__8942__a,0);
} 
return G__8941__delegate.call(this,args);};
G__8941.cljs$lang$maxFixedArity = 0;
G__8941.cljs$lang$applyTo = (function (arglist__8943){
var args = cljs.core.seq(arglist__8943);
return G__8941__delegate(args);
});
G__8941.cljs$core$IFn$_invoke$arity$variadic = G__8941__delegate;
return G__8941;
})()
;

return null;
});
