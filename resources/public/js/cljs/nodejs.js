// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12368__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12369__i = 0, G__12369__a = new Array(arguments.length -  0);
while (G__12369__i < G__12369__a.length) {G__12369__a[G__12369__i] = arguments[G__12369__i + 0]; ++G__12369__i;}
  args = new cljs.core.IndexedSeq(G__12369__a,0);
} 
return G__12368__delegate.call(this,args);};
G__12368.cljs$lang$maxFixedArity = 0;
G__12368.cljs$lang$applyTo = (function (arglist__12370){
var args = cljs.core.seq(arglist__12370);
return G__12368__delegate(args);
});
G__12368.cljs$core$IFn$_invoke$arity$variadic = G__12368__delegate;
return G__12368;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12371__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12372__i = 0, G__12372__a = new Array(arguments.length -  0);
while (G__12372__i < G__12372__a.length) {G__12372__a[G__12372__i] = arguments[G__12372__i + 0]; ++G__12372__i;}
  args = new cljs.core.IndexedSeq(G__12372__a,0);
} 
return G__12371__delegate.call(this,args);};
G__12371.cljs$lang$maxFixedArity = 0;
G__12371.cljs$lang$applyTo = (function (arglist__12373){
var args = cljs.core.seq(arglist__12373);
return G__12371__delegate(args);
});
G__12371.cljs$core$IFn$_invoke$arity$variadic = G__12371__delegate;
return G__12371;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map