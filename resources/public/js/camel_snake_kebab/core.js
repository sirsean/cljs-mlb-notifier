// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7591 = arguments.length;
var i__7278__auto___7592 = (0);
while(true){
if((i__7278__auto___7592 < len__7277__auto___7591)){
args__7284__auto__.push((arguments[i__7278__auto___7592]));

var G__7593 = (i__7278__auto___7592 + (1));
i__7278__auto___7592 = G__7593;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((4) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7285__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq7586){
var G__7587 = cljs.core.first.call(null,seq7586);
var seq7586__$1 = cljs.core.next.call(null,seq7586);
var G__7588 = cljs.core.first.call(null,seq7586__$1);
var seq7586__$2 = cljs.core.next.call(null,seq7586__$1);
var G__7589 = cljs.core.first.call(null,seq7586__$2);
var seq7586__$3 = cljs.core.next.call(null,seq7586__$2);
var G__7590 = cljs.core.first.call(null,seq7586__$3);
var seq7586__$4 = cljs.core.next.call(null,seq7586__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__7587,G__7588,G__7589,G__7590,seq7586__$4);
});
camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7602 = arguments.length;
var i__7278__auto___7603 = (0);
while(true){
if((i__7278__auto___7603 < len__7277__auto___7602)){
args__7284__auto__.push((arguments[i__7278__auto___7603]));

var G__7604 = (i__7278__auto___7603 + (1));
i__7278__auto___7603 = G__7604;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__7553__auto__,rest__7554__auto__){
var convert_case__7555__auto__ = (function (p1__7552__7556__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__7552__7556__auto__,rest__7554__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__7553__auto__,convert_case__7555__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq7594){
var G__7595 = cljs.core.first.call(null,seq7594);
var seq7594__$1 = cljs.core.next.call(null,seq7594);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__7595,seq7594__$1);
});

camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7605 = arguments.length;
var i__7278__auto___7606 = (0);
while(true){
if((i__7278__auto___7606 < len__7277__auto___7605)){
args__7284__auto__.push((arguments[i__7278__auto___7606]));

var G__7607 = (i__7278__auto___7606 + (1));
i__7278__auto___7606 = G__7607;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq7596){
var G__7597 = cljs.core.first.call(null,seq7596);
var seq7596__$1 = cljs.core.next.call(null,seq7596);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__7597,seq7596__$1);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7608 = arguments.length;
var i__7278__auto___7609 = (0);
while(true){
if((i__7278__auto___7609 < len__7277__auto___7608)){
args__7284__auto__.push((arguments[i__7278__auto___7609]));

var G__7610 = (i__7278__auto___7609 + (1));
i__7278__auto___7609 = G__7610;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq7598){
var G__7599 = cljs.core.first.call(null,seq7598);
var seq7598__$1 = cljs.core.next.call(null,seq7598);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__7599,seq7598__$1);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7611 = arguments.length;
var i__7278__auto___7612 = (0);
while(true){
if((i__7278__auto___7612 < len__7277__auto___7611)){
args__7284__auto__.push((arguments[i__7278__auto___7612]));

var G__7613 = (i__7278__auto___7612 + (1));
i__7278__auto___7612 = G__7613;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq7600){
var G__7601 = cljs.core.first.call(null,seq7600);
var seq7600__$1 = cljs.core.next.call(null,seq7600);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__7601,seq7600__$1);
});
camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7622 = arguments.length;
var i__7278__auto___7623 = (0);
while(true){
if((i__7278__auto___7623 < len__7277__auto___7622)){
args__7284__auto__.push((arguments[i__7278__auto___7623]));

var G__7624 = (i__7278__auto___7623 + (1));
i__7278__auto___7623 = G__7624;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__7553__auto__,rest__7554__auto__){
var convert_case__7555__auto__ = (function (p1__7552__7556__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__7552__7556__auto__,rest__7554__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__7553__auto__,convert_case__7555__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq7614){
var G__7615 = cljs.core.first.call(null,seq7614);
var seq7614__$1 = cljs.core.next.call(null,seq7614);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__7615,seq7614__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7625 = arguments.length;
var i__7278__auto___7626 = (0);
while(true){
if((i__7278__auto___7626 < len__7277__auto___7625)){
args__7284__auto__.push((arguments[i__7278__auto___7626]));

var G__7627 = (i__7278__auto___7626 + (1));
i__7278__auto___7626 = G__7627;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq7616){
var G__7617 = cljs.core.first.call(null,seq7616);
var seq7616__$1 = cljs.core.next.call(null,seq7616);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__7617,seq7616__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7628 = arguments.length;
var i__7278__auto___7629 = (0);
while(true){
if((i__7278__auto___7629 < len__7277__auto___7628)){
args__7284__auto__.push((arguments[i__7278__auto___7629]));

var G__7630 = (i__7278__auto___7629 + (1));
i__7278__auto___7629 = G__7630;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq7618){
var G__7619 = cljs.core.first.call(null,seq7618);
var seq7618__$1 = cljs.core.next.call(null,seq7618);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__7619,seq7618__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7631 = arguments.length;
var i__7278__auto___7632 = (0);
while(true){
if((i__7278__auto___7632 < len__7277__auto___7631)){
args__7284__auto__.push((arguments[i__7278__auto___7632]));

var G__7633 = (i__7278__auto___7632 + (1));
i__7278__auto___7632 = G__7633;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq7620){
var G__7621 = cljs.core.first.call(null,seq7620);
var seq7620__$1 = cljs.core.next.call(null,seq7620);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__7621,seq7620__$1);
});
camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7642 = arguments.length;
var i__7278__auto___7643 = (0);
while(true){
if((i__7278__auto___7643 < len__7277__auto___7642)){
args__7284__auto__.push((arguments[i__7278__auto___7643]));

var G__7644 = (i__7278__auto___7643 + (1));
i__7278__auto___7643 = G__7644;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__7553__auto__,rest__7554__auto__){
var convert_case__7555__auto__ = (function (p1__7552__7556__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__7552__7556__auto__,rest__7554__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__7553__auto__,convert_case__7555__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq7634){
var G__7635 = cljs.core.first.call(null,seq7634);
var seq7634__$1 = cljs.core.next.call(null,seq7634);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__7635,seq7634__$1);
});

camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7645 = arguments.length;
var i__7278__auto___7646 = (0);
while(true){
if((i__7278__auto___7646 < len__7277__auto___7645)){
args__7284__auto__.push((arguments[i__7278__auto___7646]));

var G__7647 = (i__7278__auto___7646 + (1));
i__7278__auto___7646 = G__7647;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq7636){
var G__7637 = cljs.core.first.call(null,seq7636);
var seq7636__$1 = cljs.core.next.call(null,seq7636);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__7637,seq7636__$1);
});

camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7648 = arguments.length;
var i__7278__auto___7649 = (0);
while(true){
if((i__7278__auto___7649 < len__7277__auto___7648)){
args__7284__auto__.push((arguments[i__7278__auto___7649]));

var G__7650 = (i__7278__auto___7649 + (1));
i__7278__auto___7649 = G__7650;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq7638){
var G__7639 = cljs.core.first.call(null,seq7638);
var seq7638__$1 = cljs.core.next.call(null,seq7638);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__7639,seq7638__$1);
});

camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7651 = arguments.length;
var i__7278__auto___7652 = (0);
while(true){
if((i__7278__auto___7652 < len__7277__auto___7651)){
args__7284__auto__.push((arguments[i__7278__auto___7652]));

var G__7653 = (i__7278__auto___7652 + (1));
i__7278__auto___7652 = G__7653;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq7640){
var G__7641 = cljs.core.first.call(null,seq7640);
var seq7640__$1 = cljs.core.next.call(null,seq7640);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__7641,seq7640__$1);
});
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7662 = arguments.length;
var i__7278__auto___7663 = (0);
while(true){
if((i__7278__auto___7663 < len__7277__auto___7662)){
args__7284__auto__.push((arguments[i__7278__auto___7663]));

var G__7664 = (i__7278__auto___7663 + (1));
i__7278__auto___7663 = G__7664;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__7553__auto__,rest__7554__auto__){
var convert_case__7555__auto__ = (function (p1__7552__7556__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__7552__7556__auto__,rest__7554__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__7553__auto__,convert_case__7555__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq7654){
var G__7655 = cljs.core.first.call(null,seq7654);
var seq7654__$1 = cljs.core.next.call(null,seq7654);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__7655,seq7654__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7665 = arguments.length;
var i__7278__auto___7666 = (0);
while(true){
if((i__7278__auto___7666 < len__7277__auto___7665)){
args__7284__auto__.push((arguments[i__7278__auto___7666]));

var G__7667 = (i__7278__auto___7666 + (1));
i__7278__auto___7666 = G__7667;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq7656){
var G__7657 = cljs.core.first.call(null,seq7656);
var seq7656__$1 = cljs.core.next.call(null,seq7656);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__7657,seq7656__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7668 = arguments.length;
var i__7278__auto___7669 = (0);
while(true){
if((i__7278__auto___7669 < len__7277__auto___7668)){
args__7284__auto__.push((arguments[i__7278__auto___7669]));

var G__7670 = (i__7278__auto___7669 + (1));
i__7278__auto___7669 = G__7670;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq7658){
var G__7659 = cljs.core.first.call(null,seq7658);
var seq7658__$1 = cljs.core.next.call(null,seq7658);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__7659,seq7658__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7671 = arguments.length;
var i__7278__auto___7672 = (0);
while(true){
if((i__7278__auto___7672 < len__7277__auto___7671)){
args__7284__auto__.push((arguments[i__7278__auto___7672]));

var G__7673 = (i__7278__auto___7672 + (1));
i__7278__auto___7672 = G__7673;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq7660){
var G__7661 = cljs.core.first.call(null,seq7660);
var seq7660__$1 = cljs.core.next.call(null,seq7660);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__7661,seq7660__$1);
});
camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7682 = arguments.length;
var i__7278__auto___7683 = (0);
while(true){
if((i__7278__auto___7683 < len__7277__auto___7682)){
args__7284__auto__.push((arguments[i__7278__auto___7683]));

var G__7684 = (i__7278__auto___7683 + (1));
i__7278__auto___7683 = G__7684;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__7553__auto__,rest__7554__auto__){
var convert_case__7555__auto__ = (function (p1__7552__7556__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__7552__7556__auto__,rest__7554__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__7553__auto__,convert_case__7555__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq7674){
var G__7675 = cljs.core.first.call(null,seq7674);
var seq7674__$1 = cljs.core.next.call(null,seq7674);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__7675,seq7674__$1);
});

camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7685 = arguments.length;
var i__7278__auto___7686 = (0);
while(true){
if((i__7278__auto___7686 < len__7277__auto___7685)){
args__7284__auto__.push((arguments[i__7278__auto___7686]));

var G__7687 = (i__7278__auto___7686 + (1));
i__7278__auto___7686 = G__7687;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq7676){
var G__7677 = cljs.core.first.call(null,seq7676);
var seq7676__$1 = cljs.core.next.call(null,seq7676);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__7677,seq7676__$1);
});

camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7688 = arguments.length;
var i__7278__auto___7689 = (0);
while(true){
if((i__7278__auto___7689 < len__7277__auto___7688)){
args__7284__auto__.push((arguments[i__7278__auto___7689]));

var G__7690 = (i__7278__auto___7689 + (1));
i__7278__auto___7689 = G__7690;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq7678){
var G__7679 = cljs.core.first.call(null,seq7678);
var seq7678__$1 = cljs.core.next.call(null,seq7678);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__7679,seq7678__$1);
});

camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7691 = arguments.length;
var i__7278__auto___7692 = (0);
while(true){
if((i__7278__auto___7692 < len__7277__auto___7691)){
args__7284__auto__.push((arguments[i__7278__auto___7692]));

var G__7693 = (i__7278__auto___7692 + (1));
i__7278__auto___7692 = G__7693;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq7680){
var G__7681 = cljs.core.first.call(null,seq7680);
var seq7680__$1 = cljs.core.next.call(null,seq7680);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__7681,seq7680__$1);
});
camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7702 = arguments.length;
var i__7278__auto___7703 = (0);
while(true){
if((i__7278__auto___7703 < len__7277__auto___7702)){
args__7284__auto__.push((arguments[i__7278__auto___7703]));

var G__7704 = (i__7278__auto___7703 + (1));
i__7278__auto___7703 = G__7704;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__7553__auto__,rest__7554__auto__){
var convert_case__7555__auto__ = (function (p1__7552__7556__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__7552__7556__auto__,rest__7554__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__7553__auto__,convert_case__7555__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq7694){
var G__7695 = cljs.core.first.call(null,seq7694);
var seq7694__$1 = cljs.core.next.call(null,seq7694);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__7695,seq7694__$1);
});

camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7705 = arguments.length;
var i__7278__auto___7706 = (0);
while(true){
if((i__7278__auto___7706 < len__7277__auto___7705)){
args__7284__auto__.push((arguments[i__7278__auto___7706]));

var G__7707 = (i__7278__auto___7706 + (1));
i__7278__auto___7706 = G__7707;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq7696){
var G__7697 = cljs.core.first.call(null,seq7696);
var seq7696__$1 = cljs.core.next.call(null,seq7696);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__7697,seq7696__$1);
});

camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7708 = arguments.length;
var i__7278__auto___7709 = (0);
while(true){
if((i__7278__auto___7709 < len__7277__auto___7708)){
args__7284__auto__.push((arguments[i__7278__auto___7709]));

var G__7710 = (i__7278__auto___7709 + (1));
i__7278__auto___7709 = G__7710;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq7698){
var G__7699 = cljs.core.first.call(null,seq7698);
var seq7698__$1 = cljs.core.next.call(null,seq7698);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__7699,seq7698__$1);
});

camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7711 = arguments.length;
var i__7278__auto___7712 = (0);
while(true){
if((i__7278__auto___7712 < len__7277__auto___7711)){
args__7284__auto__.push((arguments[i__7278__auto___7712]));

var G__7713 = (i__7278__auto___7712 + (1));
i__7278__auto___7712 = G__7713;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq7700){
var G__7701 = cljs.core.first.call(null,seq7700);
var seq7700__$1 = cljs.core.next.call(null,seq7700);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__7701,seq7700__$1);
});
camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7722 = arguments.length;
var i__7278__auto___7723 = (0);
while(true){
if((i__7278__auto___7723 < len__7277__auto___7722)){
args__7284__auto__.push((arguments[i__7278__auto___7723]));

var G__7724 = (i__7278__auto___7723 + (1));
i__7278__auto___7723 = G__7724;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__7553__auto__,rest__7554__auto__){
var convert_case__7555__auto__ = (function (p1__7552__7556__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__7552__7556__auto__,rest__7554__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__7553__auto__,convert_case__7555__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq7714){
var G__7715 = cljs.core.first.call(null,seq7714);
var seq7714__$1 = cljs.core.next.call(null,seq7714);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__7715,seq7714__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7725 = arguments.length;
var i__7278__auto___7726 = (0);
while(true){
if((i__7278__auto___7726 < len__7277__auto___7725)){
args__7284__auto__.push((arguments[i__7278__auto___7726]));

var G__7727 = (i__7278__auto___7726 + (1));
i__7278__auto___7726 = G__7727;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq7716){
var G__7717 = cljs.core.first.call(null,seq7716);
var seq7716__$1 = cljs.core.next.call(null,seq7716);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__7717,seq7716__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7728 = arguments.length;
var i__7278__auto___7729 = (0);
while(true){
if((i__7278__auto___7729 < len__7277__auto___7728)){
args__7284__auto__.push((arguments[i__7278__auto___7729]));

var G__7730 = (i__7278__auto___7729 + (1));
i__7278__auto___7729 = G__7730;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq7718){
var G__7719 = cljs.core.first.call(null,seq7718);
var seq7718__$1 = cljs.core.next.call(null,seq7718);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__7719,seq7718__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__7284__auto__ = [];
var len__7277__auto___7731 = arguments.length;
var i__7278__auto___7732 = (0);
while(true){
if((i__7278__auto___7732 < len__7277__auto___7731)){
args__7284__auto__.push((arguments[i__7278__auto___7732]));

var G__7733 = (i__7278__auto___7732 + (1));
i__7278__auto___7732 = G__7733;
continue;
} else {
}
break;
}

var argseq__7285__auto__ = ((((1) < args__7284__auto__.length))?(new cljs.core.IndexedSeq(args__7284__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7285__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__7558__auto__,rest__7559__auto__){
if(!((s__7558__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__7558__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__7558__auto__),rest__7559__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq7720){
var G__7721 = cljs.core.first.call(null,seq7720);
var seq7720__$1 = cljs.core.next.call(null,seq7720);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__7721,seq7720__$1);
});

//# sourceMappingURL=core.js.map