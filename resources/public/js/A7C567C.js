goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8967__i = 0, G__8967__a = new Array(arguments.length -  0);
while (G__8967__i < G__8967__a.length) {G__8967__a[G__8967__i] = arguments[G__8967__i + 0]; ++G__8967__i;}
  args = new cljs.core.IndexedSeq(G__8967__a,0);
} 
return G__8966__delegate.call(this,args);};
G__8966.cljs$lang$maxFixedArity = 0;
G__8966.cljs$lang$applyTo = (function (arglist__8968){
var args = cljs.core.seq(arglist__8968);
return G__8966__delegate(args);
});
G__8966.cljs$core$IFn$_invoke$arity$variadic = G__8966__delegate;
return G__8966;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8969__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8970__i = 0, G__8970__a = new Array(arguments.length -  0);
while (G__8970__i < G__8970__a.length) {G__8970__a[G__8970__i] = arguments[G__8970__i + 0]; ++G__8970__i;}
  args = new cljs.core.IndexedSeq(G__8970__a,0);
} 
return G__8969__delegate.call(this,args);};
G__8969.cljs$lang$maxFixedArity = 0;
G__8969.cljs$lang$applyTo = (function (arglist__8971){
var args = cljs.core.seq(arglist__8971);
return G__8969__delegate(args);
});
G__8969.cljs$core$IFn$_invoke$arity$variadic = G__8969__delegate;
return G__8969;
})()
;

return null;
});
