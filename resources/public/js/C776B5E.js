goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9050__i = 0, G__9050__a = new Array(arguments.length -  0);
while (G__9050__i < G__9050__a.length) {G__9050__a[G__9050__i] = arguments[G__9050__i + 0]; ++G__9050__i;}
  args = new cljs.core.IndexedSeq(G__9050__a,0);
} 
return G__9049__delegate.call(this,args);};
G__9049.cljs$lang$maxFixedArity = 0;
G__9049.cljs$lang$applyTo = (function (arglist__9051){
var args = cljs.core.seq(arglist__9051);
return G__9049__delegate(args);
});
G__9049.cljs$core$IFn$_invoke$arity$variadic = G__9049__delegate;
return G__9049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9053__i = 0, G__9053__a = new Array(arguments.length -  0);
while (G__9053__i < G__9053__a.length) {G__9053__a[G__9053__i] = arguments[G__9053__i + 0]; ++G__9053__i;}
  args = new cljs.core.IndexedSeq(G__9053__a,0);
} 
return G__9052__delegate.call(this,args);};
G__9052.cljs$lang$maxFixedArity = 0;
G__9052.cljs$lang$applyTo = (function (arglist__9054){
var args = cljs.core.seq(arglist__9054);
return G__9052__delegate(args);
});
G__9052.cljs$core$IFn$_invoke$arity$variadic = G__9052__delegate;
return G__9052;
})()
;

return null;
});
