goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8948__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8949__i = 0, G__8949__a = new Array(arguments.length -  0);
while (G__8949__i < G__8949__a.length) {G__8949__a[G__8949__i] = arguments[G__8949__i + 0]; ++G__8949__i;}
  args = new cljs.core.IndexedSeq(G__8949__a,0);
} 
return G__8948__delegate.call(this,args);};
G__8948.cljs$lang$maxFixedArity = 0;
G__8948.cljs$lang$applyTo = (function (arglist__8950){
var args = cljs.core.seq(arglist__8950);
return G__8948__delegate(args);
});
G__8948.cljs$core$IFn$_invoke$arity$variadic = G__8948__delegate;
return G__8948;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8951__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8952__i = 0, G__8952__a = new Array(arguments.length -  0);
while (G__8952__i < G__8952__a.length) {G__8952__a[G__8952__i] = arguments[G__8952__i + 0]; ++G__8952__i;}
  args = new cljs.core.IndexedSeq(G__8952__a,0);
} 
return G__8951__delegate.call(this,args);};
G__8951.cljs$lang$maxFixedArity = 0;
G__8951.cljs$lang$applyTo = (function (arglist__8953){
var args = cljs.core.seq(arglist__8953);
return G__8951__delegate(args);
});
G__8951.cljs$core$IFn$_invoke$arity$variadic = G__8951__delegate;
return G__8951;
})()
;

return null;
});
