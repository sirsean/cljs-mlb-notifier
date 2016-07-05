// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('camel_snake_kebab.extras');
goog.require('cljs.core');
goog.require('clojure.walk');
camel_snake_kebab.extras.transform_keys = (function camel_snake_kebab$extras$transform_keys(t,coll){

var transform = (function camel_snake_kebab$extras$transform_keys_$_transform(p__12395){
var vec__12397 = p__12395;
var k = cljs.core.nth.call(null,vec__12397,(0),null);
var v = cljs.core.nth.call(null,vec__12397,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});

//# sourceMappingURL=extras.js.map