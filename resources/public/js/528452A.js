goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8979__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8980__i = 0, G__8980__a = new Array(arguments.length -  0);
while (G__8980__i < G__8980__a.length) {G__8980__a[G__8980__i] = arguments[G__8980__i + 0]; ++G__8980__i;}
  args = new cljs.core.IndexedSeq(G__8980__a,0);
} 
return G__8979__delegate.call(this,args);};
G__8979.cljs$lang$maxFixedArity = 0;
G__8979.cljs$lang$applyTo = (function (arglist__8981){
var args = cljs.core.seq(arglist__8981);
return G__8979__delegate(args);
});
G__8979.cljs$core$IFn$_invoke$arity$variadic = G__8979__delegate;
return G__8979;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8982__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8983__i = 0, G__8983__a = new Array(arguments.length -  0);
while (G__8983__i < G__8983__a.length) {G__8983__a[G__8983__i] = arguments[G__8983__i + 0]; ++G__8983__i;}
  args = new cljs.core.IndexedSeq(G__8983__a,0);
} 
return G__8982__delegate.call(this,args);};
G__8982.cljs$lang$maxFixedArity = 0;
G__8982.cljs$lang$applyTo = (function (arglist__8984){
var args = cljs.core.seq(arglist__8984);
return G__8982__delegate(args);
});
G__8982.cljs$core$IFn$_invoke$arity$variadic = G__8982__delegate;
return G__8982;
})()
;

return null;
});
