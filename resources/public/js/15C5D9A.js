goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8926__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8927__i = 0, G__8927__a = new Array(arguments.length -  0);
while (G__8927__i < G__8927__a.length) {G__8927__a[G__8927__i] = arguments[G__8927__i + 0]; ++G__8927__i;}
  args = new cljs.core.IndexedSeq(G__8927__a,0);
} 
return G__8926__delegate.call(this,args);};
G__8926.cljs$lang$maxFixedArity = 0;
G__8926.cljs$lang$applyTo = (function (arglist__8928){
var args = cljs.core.seq(arglist__8928);
return G__8926__delegate(args);
});
G__8926.cljs$core$IFn$_invoke$arity$variadic = G__8926__delegate;
return G__8926;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8929__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
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

return null;
});
