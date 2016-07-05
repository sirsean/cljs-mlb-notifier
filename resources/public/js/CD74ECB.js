goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8965__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8966__i = 0, G__8966__a = new Array(arguments.length -  0);
while (G__8966__i < G__8966__a.length) {G__8966__a[G__8966__i] = arguments[G__8966__i + 0]; ++G__8966__i;}
  args = new cljs.core.IndexedSeq(G__8966__a,0);
} 
return G__8965__delegate.call(this,args);};
G__8965.cljs$lang$maxFixedArity = 0;
G__8965.cljs$lang$applyTo = (function (arglist__8967){
var args = cljs.core.seq(arglist__8967);
return G__8965__delegate(args);
});
G__8965.cljs$core$IFn$_invoke$arity$variadic = G__8965__delegate;
return G__8965;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8968__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8969__i = 0, G__8969__a = new Array(arguments.length -  0);
while (G__8969__i < G__8969__a.length) {G__8969__a[G__8969__i] = arguments[G__8969__i + 0]; ++G__8969__i;}
  args = new cljs.core.IndexedSeq(G__8969__a,0);
} 
return G__8968__delegate.call(this,args);};
G__8968.cljs$lang$maxFixedArity = 0;
G__8968.cljs$lang$applyTo = (function (arglist__8970){
var args = cljs.core.seq(arglist__8970);
return G__8968__delegate(args);
});
G__8968.cljs$core$IFn$_invoke$arity$variadic = G__8968__delegate;
return G__8968;
})()
;

return null;
});
