goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8964__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8965__i = 0, G__8965__a = new Array(arguments.length -  0);
while (G__8965__i < G__8965__a.length) {G__8965__a[G__8965__i] = arguments[G__8965__i + 0]; ++G__8965__i;}
  args = new cljs.core.IndexedSeq(G__8965__a,0);
} 
return G__8964__delegate.call(this,args);};
G__8964.cljs$lang$maxFixedArity = 0;
G__8964.cljs$lang$applyTo = (function (arglist__8966){
var args = cljs.core.seq(arglist__8966);
return G__8964__delegate(args);
});
G__8964.cljs$core$IFn$_invoke$arity$variadic = G__8964__delegate;
return G__8964;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8967__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8968__i = 0, G__8968__a = new Array(arguments.length -  0);
while (G__8968__i < G__8968__a.length) {G__8968__a[G__8968__i] = arguments[G__8968__i + 0]; ++G__8968__i;}
  args = new cljs.core.IndexedSeq(G__8968__a,0);
} 
return G__8967__delegate.call(this,args);};
G__8967.cljs$lang$maxFixedArity = 0;
G__8967.cljs$lang$applyTo = (function (arglist__8969){
var args = cljs.core.seq(arglist__8969);
return G__8967__delegate(args);
});
G__8967.cljs$core$IFn$_invoke$arity$variadic = G__8967__delegate;
return G__8967;
})()
;

return null;
});
