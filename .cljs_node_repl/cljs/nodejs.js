// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7820__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7821__i = 0, G__7821__a = new Array(arguments.length -  0);
while (G__7821__i < G__7821__a.length) {G__7821__a[G__7821__i] = arguments[G__7821__i + 0]; ++G__7821__i;}
  args = new cljs.core.IndexedSeq(G__7821__a,0);
} 
return G__7820__delegate.call(this,args);};
G__7820.cljs$lang$maxFixedArity = 0;
G__7820.cljs$lang$applyTo = (function (arglist__7822){
var args = cljs.core.seq(arglist__7822);
return G__7820__delegate(args);
});
G__7820.cljs$core$IFn$_invoke$arity$variadic = G__7820__delegate;
return G__7820;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7823__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7824__i = 0, G__7824__a = new Array(arguments.length -  0);
while (G__7824__i < G__7824__a.length) {G__7824__a[G__7824__i] = arguments[G__7824__i + 0]; ++G__7824__i;}
  args = new cljs.core.IndexedSeq(G__7824__a,0);
} 
return G__7823__delegate.call(this,args);};
G__7823.cljs$lang$maxFixedArity = 0;
G__7823.cljs$lang$applyTo = (function (arglist__7825){
var args = cljs.core.seq(arglist__7825);
return G__7823__delegate(args);
});
G__7823.cljs$core$IFn$_invoke$arity$variadic = G__7823__delegate;
return G__7823;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map