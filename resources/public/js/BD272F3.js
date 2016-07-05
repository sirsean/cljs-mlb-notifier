goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8795__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8796__i = 0, G__8796__a = new Array(arguments.length -  0);
while (G__8796__i < G__8796__a.length) {G__8796__a[G__8796__i] = arguments[G__8796__i + 0]; ++G__8796__i;}
  args = new cljs.core.IndexedSeq(G__8796__a,0);
} 
return G__8795__delegate.call(this,args);};
G__8795.cljs$lang$maxFixedArity = 0;
G__8795.cljs$lang$applyTo = (function (arglist__8797){
var args = cljs.core.seq(arglist__8797);
return G__8795__delegate(args);
});
G__8795.cljs$core$IFn$_invoke$arity$variadic = G__8795__delegate;
return G__8795;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8798__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8799__i = 0, G__8799__a = new Array(arguments.length -  0);
while (G__8799__i < G__8799__a.length) {G__8799__a[G__8799__i] = arguments[G__8799__i + 0]; ++G__8799__i;}
  args = new cljs.core.IndexedSeq(G__8799__a,0);
} 
return G__8798__delegate.call(this,args);};
G__8798.cljs$lang$maxFixedArity = 0;
G__8798.cljs$lang$applyTo = (function (arglist__8800){
var args = cljs.core.seq(arglist__8800);
return G__8798__delegate(args);
});
G__8798.cljs$core$IFn$_invoke$arity$variadic = G__8798__delegate;
return G__8798;
})()
;

return null;
});
