// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9624_9638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9625_9639 = null;
var count__9626_9640 = (0);
var i__9627_9641 = (0);
while(true){
if((i__9627_9641 < count__9626_9640)){
var f_9642 = cljs.core._nth.call(null,chunk__9625_9639,i__9627_9641);
cljs.core.println.call(null,"  ",f_9642);

var G__9643 = seq__9624_9638;
var G__9644 = chunk__9625_9639;
var G__9645 = count__9626_9640;
var G__9646 = (i__9627_9641 + (1));
seq__9624_9638 = G__9643;
chunk__9625_9639 = G__9644;
count__9626_9640 = G__9645;
i__9627_9641 = G__9646;
continue;
} else {
var temp__4657__auto___9647 = cljs.core.seq.call(null,seq__9624_9638);
if(temp__4657__auto___9647){
var seq__9624_9648__$1 = temp__4657__auto___9647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9624_9648__$1)){
var c__7409__auto___9649 = cljs.core.chunk_first.call(null,seq__9624_9648__$1);
var G__9650 = cljs.core.chunk_rest.call(null,seq__9624_9648__$1);
var G__9651 = c__7409__auto___9649;
var G__9652 = cljs.core.count.call(null,c__7409__auto___9649);
var G__9653 = (0);
seq__9624_9638 = G__9650;
chunk__9625_9639 = G__9651;
count__9626_9640 = G__9652;
i__9627_9641 = G__9653;
continue;
} else {
var f_9654 = cljs.core.first.call(null,seq__9624_9648__$1);
cljs.core.println.call(null,"  ",f_9654);

var G__9655 = cljs.core.next.call(null,seq__9624_9648__$1);
var G__9656 = null;
var G__9657 = (0);
var G__9658 = (0);
seq__9624_9638 = G__9655;
chunk__9625_9639 = G__9656;
count__9626_9640 = G__9657;
i__9627_9641 = G__9658;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9659 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6598__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6598__auto__)){
return or__6598__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9659);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9659)))?cljs.core.second.call(null,arglists_9659):arglists_9659));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9628 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9629 = null;
var count__9630 = (0);
var i__9631 = (0);
while(true){
if((i__9631 < count__9630)){
var vec__9632 = cljs.core._nth.call(null,chunk__9629,i__9631);
var name = cljs.core.nth.call(null,vec__9632,(0),null);
var map__9633 = cljs.core.nth.call(null,vec__9632,(1),null);
var map__9633__$1 = ((((!((map__9633 == null)))?((((map__9633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9633):map__9633);
var doc = cljs.core.get.call(null,map__9633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9660 = seq__9628;
var G__9661 = chunk__9629;
var G__9662 = count__9630;
var G__9663 = (i__9631 + (1));
seq__9628 = G__9660;
chunk__9629 = G__9661;
count__9630 = G__9662;
i__9631 = G__9663;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9628);
if(temp__4657__auto__){
var seq__9628__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9628__$1)){
var c__7409__auto__ = cljs.core.chunk_first.call(null,seq__9628__$1);
var G__9664 = cljs.core.chunk_rest.call(null,seq__9628__$1);
var G__9665 = c__7409__auto__;
var G__9666 = cljs.core.count.call(null,c__7409__auto__);
var G__9667 = (0);
seq__9628 = G__9664;
chunk__9629 = G__9665;
count__9630 = G__9666;
i__9631 = G__9667;
continue;
} else {
var vec__9635 = cljs.core.first.call(null,seq__9628__$1);
var name = cljs.core.nth.call(null,vec__9635,(0),null);
var map__9636 = cljs.core.nth.call(null,vec__9635,(1),null);
var map__9636__$1 = ((((!((map__9636 == null)))?((((map__9636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9636):map__9636);
var doc = cljs.core.get.call(null,map__9636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9668 = cljs.core.next.call(null,seq__9628__$1);
var G__9669 = null;
var G__9670 = (0);
var G__9671 = (0);
seq__9628 = G__9668;
chunk__9629 = G__9669;
count__9630 = G__9670;
i__9631 = G__9671;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map