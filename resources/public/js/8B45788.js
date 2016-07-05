goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8968__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
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

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8971__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8972__i = 0, G__8972__a = new Array(arguments.length -  0);
while (G__8972__i < G__8972__a.length) {G__8972__a[G__8972__i] = arguments[G__8972__i + 0]; ++G__8972__i;}
  args = new cljs.core.IndexedSeq(G__8972__a,0);
} 
return G__8971__delegate.call(this,args);};
G__8971.cljs$lang$maxFixedArity = 0;
G__8971.cljs$lang$applyTo = (function (arglist__8973){
var args = cljs.core.seq(arglist__8973);
return G__8971__delegate(args);
});
G__8971.cljs$core$IFn$_invoke$arity$variadic = G__8971__delegate;
return G__8971;
})()
;

return null;
});
