goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8930__i = 0, G__8930__a = new Array(arguments.length -  0);
while (G__8930__i < G__8930__a.length) {G__8930__a[G__8930__i] = arguments[G__8930__i + 0]; ++G__8930__i;}
  args = new cljs.core.IndexedSeq(G__8930__a,0);
} 
return G__8929__delegate.call(this,args);};
G__8929.cljs$lang$maxFixedArity = 0;
G__8929.cljs$lang$applyTo = (function (arglist__8931){
var args = cljs.core.seq(arglist__8931);
return G__8929__delegate(args);
});
G__8929.cljs$core$IFn$_invoke$arity$variadic = G__8929__delegate;
return G__8929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8933__i = 0, G__8933__a = new Array(arguments.length -  0);
while (G__8933__i < G__8933__a.length) {G__8933__a[G__8933__i] = arguments[G__8933__i + 0]; ++G__8933__i;}
  args = new cljs.core.IndexedSeq(G__8933__a,0);
} 
return G__8932__delegate.call(this,args);};
G__8932.cljs$lang$maxFixedArity = 0;
G__8932.cljs$lang$applyTo = (function (arglist__8934){
var args = cljs.core.seq(arglist__8934);
return G__8932__delegate(args);
});
G__8932.cljs$core$IFn$_invoke$arity$variadic = G__8932__delegate;
return G__8932;
})()
;

return null;
});