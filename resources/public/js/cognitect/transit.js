// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12218_12222 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__12219_12223 = null;
var count__12220_12224 = (0);
var i__12221_12225 = (0);
while(true){
if((i__12221_12225 < count__12220_12224)){
var k_12226 = cljs.core._nth.call(null,chunk__12219_12223,i__12221_12225);
var v_12227 = (b[k_12226]);
(a[k_12226] = v_12227);

var G__12228 = seq__12218_12222;
var G__12229 = chunk__12219_12223;
var G__12230 = count__12220_12224;
var G__12231 = (i__12221_12225 + (1));
seq__12218_12222 = G__12228;
chunk__12219_12223 = G__12229;
count__12220_12224 = G__12230;
i__12221_12225 = G__12231;
continue;
} else {
var temp__4657__auto___12232 = cljs.core.seq.call(null,seq__12218_12222);
if(temp__4657__auto___12232){
var seq__12218_12233__$1 = temp__4657__auto___12232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12218_12233__$1)){
var c__7018__auto___12234 = cljs.core.chunk_first.call(null,seq__12218_12233__$1);
var G__12235 = cljs.core.chunk_rest.call(null,seq__12218_12233__$1);
var G__12236 = c__7018__auto___12234;
var G__12237 = cljs.core.count.call(null,c__7018__auto___12234);
var G__12238 = (0);
seq__12218_12222 = G__12235;
chunk__12219_12223 = G__12236;
count__12220_12224 = G__12237;
i__12221_12225 = G__12238;
continue;
} else {
var k_12239 = cljs.core.first.call(null,seq__12218_12233__$1);
var v_12240 = (b[k_12239]);
(a[k_12239] = v_12240);

var G__12241 = cljs.core.next.call(null,seq__12218_12233__$1);
var G__12242 = null;
var G__12243 = (0);
var G__12244 = (0);
seq__12218_12222 = G__12241;
chunk__12219_12223 = G__12242;
count__12220_12224 = G__12243;
i__12221_12225 = G__12244;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args12245 = [];
var len__7277__auto___12248 = arguments.length;
var i__7278__auto___12249 = (0);
while(true){
if((i__7278__auto___12249 < len__7277__auto___12248)){
args12245.push((arguments[i__7278__auto___12249]));

var G__12250 = (i__7278__auto___12249 + (1));
i__7278__auto___12249 = G__12250;
continue;
} else {
}
break;
}

var G__12247 = args12245.length;
switch (G__12247) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12245.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12252 = (i + (2));
var G__12253 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12252;
ret = G__12253;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12254_12258 = cljs.core.seq.call(null,v);
var chunk__12255_12259 = null;
var count__12256_12260 = (0);
var i__12257_12261 = (0);
while(true){
if((i__12257_12261 < count__12256_12260)){
var x_12262 = cljs.core._nth.call(null,chunk__12255_12259,i__12257_12261);
ret.push(x_12262);

var G__12263 = seq__12254_12258;
var G__12264 = chunk__12255_12259;
var G__12265 = count__12256_12260;
var G__12266 = (i__12257_12261 + (1));
seq__12254_12258 = G__12263;
chunk__12255_12259 = G__12264;
count__12256_12260 = G__12265;
i__12257_12261 = G__12266;
continue;
} else {
var temp__4657__auto___12267 = cljs.core.seq.call(null,seq__12254_12258);
if(temp__4657__auto___12267){
var seq__12254_12268__$1 = temp__4657__auto___12267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12254_12268__$1)){
var c__7018__auto___12269 = cljs.core.chunk_first.call(null,seq__12254_12268__$1);
var G__12270 = cljs.core.chunk_rest.call(null,seq__12254_12268__$1);
var G__12271 = c__7018__auto___12269;
var G__12272 = cljs.core.count.call(null,c__7018__auto___12269);
var G__12273 = (0);
seq__12254_12258 = G__12270;
chunk__12255_12259 = G__12271;
count__12256_12260 = G__12272;
i__12257_12261 = G__12273;
continue;
} else {
var x_12274 = cljs.core.first.call(null,seq__12254_12268__$1);
ret.push(x_12274);

var G__12275 = cljs.core.next.call(null,seq__12254_12268__$1);
var G__12276 = null;
var G__12277 = (0);
var G__12278 = (0);
seq__12254_12258 = G__12275;
chunk__12255_12259 = G__12276;
count__12256_12260 = G__12277;
i__12257_12261 = G__12278;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12279_12283 = cljs.core.seq.call(null,v);
var chunk__12280_12284 = null;
var count__12281_12285 = (0);
var i__12282_12286 = (0);
while(true){
if((i__12282_12286 < count__12281_12285)){
var x_12287 = cljs.core._nth.call(null,chunk__12280_12284,i__12282_12286);
ret.push(x_12287);

var G__12288 = seq__12279_12283;
var G__12289 = chunk__12280_12284;
var G__12290 = count__12281_12285;
var G__12291 = (i__12282_12286 + (1));
seq__12279_12283 = G__12288;
chunk__12280_12284 = G__12289;
count__12281_12285 = G__12290;
i__12282_12286 = G__12291;
continue;
} else {
var temp__4657__auto___12292 = cljs.core.seq.call(null,seq__12279_12283);
if(temp__4657__auto___12292){
var seq__12279_12293__$1 = temp__4657__auto___12292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12279_12293__$1)){
var c__7018__auto___12294 = cljs.core.chunk_first.call(null,seq__12279_12293__$1);
var G__12295 = cljs.core.chunk_rest.call(null,seq__12279_12293__$1);
var G__12296 = c__7018__auto___12294;
var G__12297 = cljs.core.count.call(null,c__7018__auto___12294);
var G__12298 = (0);
seq__12279_12283 = G__12295;
chunk__12280_12284 = G__12296;
count__12281_12285 = G__12297;
i__12282_12286 = G__12298;
continue;
} else {
var x_12299 = cljs.core.first.call(null,seq__12279_12293__$1);
ret.push(x_12299);

var G__12300 = cljs.core.next.call(null,seq__12279_12293__$1);
var G__12301 = null;
var G__12302 = (0);
var G__12303 = (0);
seq__12279_12283 = G__12300;
chunk__12280_12284 = G__12301;
count__12281_12285 = G__12302;
i__12282_12286 = G__12303;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12304_12308 = cljs.core.seq.call(null,v);
var chunk__12305_12309 = null;
var count__12306_12310 = (0);
var i__12307_12311 = (0);
while(true){
if((i__12307_12311 < count__12306_12310)){
var x_12312 = cljs.core._nth.call(null,chunk__12305_12309,i__12307_12311);
ret.push(x_12312);

var G__12313 = seq__12304_12308;
var G__12314 = chunk__12305_12309;
var G__12315 = count__12306_12310;
var G__12316 = (i__12307_12311 + (1));
seq__12304_12308 = G__12313;
chunk__12305_12309 = G__12314;
count__12306_12310 = G__12315;
i__12307_12311 = G__12316;
continue;
} else {
var temp__4657__auto___12317 = cljs.core.seq.call(null,seq__12304_12308);
if(temp__4657__auto___12317){
var seq__12304_12318__$1 = temp__4657__auto___12317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12304_12318__$1)){
var c__7018__auto___12319 = cljs.core.chunk_first.call(null,seq__12304_12318__$1);
var G__12320 = cljs.core.chunk_rest.call(null,seq__12304_12318__$1);
var G__12321 = c__7018__auto___12319;
var G__12322 = cljs.core.count.call(null,c__7018__auto___12319);
var G__12323 = (0);
seq__12304_12308 = G__12320;
chunk__12305_12309 = G__12321;
count__12306_12310 = G__12322;
i__12307_12311 = G__12323;
continue;
} else {
var x_12324 = cljs.core.first.call(null,seq__12304_12318__$1);
ret.push(x_12324);

var G__12325 = cljs.core.next.call(null,seq__12304_12318__$1);
var G__12326 = null;
var G__12327 = (0);
var G__12328 = (0);
seq__12304_12308 = G__12325;
chunk__12305_12309 = G__12326;
count__12306_12310 = G__12327;
i__12307_12311 = G__12328;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args12329 = [];
var len__7277__auto___12340 = arguments.length;
var i__7278__auto___12341 = (0);
while(true){
if((i__7278__auto___12341 < len__7277__auto___12340)){
args12329.push((arguments[i__7278__auto___12341]));

var G__12342 = (i__7278__auto___12341 + (1));
i__7278__auto___12341 = G__12342;
continue;
} else {
}
break;
}

var G__12331 = args12329.length;
switch (G__12331) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12329.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12332 = obj;
G__12332.push(kfn.call(null,k),vfn.call(null,v));

return G__12332;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12333 = cljs.core.clone.call(null,handlers);
x12333.forEach = ((function (x12333,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12334 = cljs.core.seq.call(null,coll);
var chunk__12335 = null;
var count__12336 = (0);
var i__12337 = (0);
while(true){
if((i__12337 < count__12336)){
var vec__12338 = cljs.core._nth.call(null,chunk__12335,i__12337);
var k = cljs.core.nth.call(null,vec__12338,(0),null);
var v = cljs.core.nth.call(null,vec__12338,(1),null);
f.call(null,v,k);

var G__12344 = seq__12334;
var G__12345 = chunk__12335;
var G__12346 = count__12336;
var G__12347 = (i__12337 + (1));
seq__12334 = G__12344;
chunk__12335 = G__12345;
count__12336 = G__12346;
i__12337 = G__12347;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12334);
if(temp__4657__auto__){
var seq__12334__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12334__$1)){
var c__7018__auto__ = cljs.core.chunk_first.call(null,seq__12334__$1);
var G__12348 = cljs.core.chunk_rest.call(null,seq__12334__$1);
var G__12349 = c__7018__auto__;
var G__12350 = cljs.core.count.call(null,c__7018__auto__);
var G__12351 = (0);
seq__12334 = G__12348;
chunk__12335 = G__12349;
count__12336 = G__12350;
i__12337 = G__12351;
continue;
} else {
var vec__12339 = cljs.core.first.call(null,seq__12334__$1);
var k = cljs.core.nth.call(null,vec__12339,(0),null);
var v = cljs.core.nth.call(null,vec__12339,(1),null);
f.call(null,v,k);

var G__12352 = cljs.core.next.call(null,seq__12334__$1);
var G__12353 = null;
var G__12354 = (0);
var G__12355 = (0);
seq__12334 = G__12352;
chunk__12335 = G__12353;
count__12336 = G__12354;
i__12337 = G__12355;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12333,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12333;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args12356 = [];
var len__7277__auto___12362 = arguments.length;
var i__7278__auto___12363 = (0);
while(true){
if((i__7278__auto___12363 < len__7277__auto___12362)){
args12356.push((arguments[i__7278__auto___12363]));

var G__12364 = (i__7278__auto___12363 + (1));
i__7278__auto___12363 = G__12364;
continue;
} else {
}
break;
}

var G__12358 = args12356.length;
switch (G__12358) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12356.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit12359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit12359 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12360){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12360 = meta12360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit12359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12361,meta12360__$1){
var self__ = this;
var _12361__$1 = this;
return (new cognitect.transit.t_cognitect$transit12359(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12360__$1));
});

cognitect.transit.t_cognitect$transit12359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12361){
var self__ = this;
var _12361__$1 = this;
return self__.meta12360;
});

cognitect.transit.t_cognitect$transit12359.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12359.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12359.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12359.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12360","meta12360",969561370,null)], null);
});

cognitect.transit.t_cognitect$transit12359.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit12359.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit12359";

cognitect.transit.t_cognitect$transit12359.cljs$lang$ctorPrWriter = (function (this__6813__auto__,writer__6814__auto__,opt__6815__auto__){
return cljs.core._write.call(null,writer__6814__auto__,"cognitect.transit/t_cognitect$transit12359");
});

cognitect.transit.__GT_t_cognitect$transit12359 = (function cognitect$transit$__GT_t_cognitect$transit12359(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12360){
return (new cognitect.transit.t_cognitect$transit12359(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12360));
});

}

return (new cognitect.transit.t_cognitect$transit12359(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6207__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map