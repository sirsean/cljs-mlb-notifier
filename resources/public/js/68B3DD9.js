goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8997__i = 0, G__8997__a = new Array(arguments.length -  0);
while (G__8997__i < G__8997__a.length) {G__8997__a[G__8997__i] = arguments[G__8997__i + 0]; ++G__8997__i;}
  args = new cljs.core.IndexedSeq(G__8997__a,0);
} 
return G__8996__delegate.call(this,args);};
G__8996.cljs$lang$maxFixedArity = 0;
G__8996.cljs$lang$applyTo = (function (arglist__8998){
var args = cljs.core.seq(arglist__8998);
return G__8996__delegate(args);
});
G__8996.cljs$core$IFn$_invoke$arity$variadic = G__8996__delegate;
return G__8996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9000__i = 0, G__9000__a = new Array(arguments.length -  0);
while (G__9000__i < G__9000__a.length) {G__9000__a[G__9000__i] = arguments[G__9000__i + 0]; ++G__9000__i;}
  args = new cljs.core.IndexedSeq(G__9000__a,0);
} 
return G__8999__delegate.call(this,args);};
G__8999.cljs$lang$maxFixedArity = 0;
G__8999.cljs$lang$applyTo = (function (arglist__9001){
var args = cljs.core.seq(arglist__9001);
return G__8999__delegate(args);
});
G__8999.cljs$core$IFn$_invoke$arity$variadic = G__8999__delegate;
return G__8999;
})()
;

return null;
});
