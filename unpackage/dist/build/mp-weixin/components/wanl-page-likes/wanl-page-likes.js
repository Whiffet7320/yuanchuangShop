(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-page-likes/wanl-page-likes"],{"0dd8":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={wanlProduct:function(){return e.e("components/wanl-product/wanl-product").then(e.bind(null,"2e36"))}},r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.pageData.style]));t.$mp.data=Object.assign({},{$root:{s0:e}})},u=[]},"3a93":function(t,n,e){"use strict";e.r(n);var a=e("b346"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},a4ef:function(t,n,e){"use strict";e.r(n);var a=e("0dd8"),r=e("3a93");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);var o,c=e("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=i.exports},b346:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,r,u,o){try{var c=t[u](o),i=c.value}catch(l){return void e(l)}c.done?n(i):Promise.resolve(i).then(a,r)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var o=t.apply(n,e);function c(t){u(o,a,r,c,i,"next",t)}function i(t){u(o,a,r,c,i,"throw",t)}c(void 0)}))}}var c={name:"WanlPageLikes",props:{pageData:{type:Object,default:function(){return{name:"猜你喜欢",type:"likes",params:[],style:[],data:[]}}},list:{type:Array,default:function(){return[]}}},data:function(){return{data:[]}},created:function(){},methods:{loadData:function(){var t=this;return o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$api.get({url:"/wanlshop/product/likes?page=index",success:function(n){t.data=n}});case 1:case"end":return n.stop()}}),n)})))()}}};n.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-page-likes/wanl-page-likes-create-component',
    {
        'components/wanl-page-likes/wanl-page-likes-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a4ef"))
        })
    },
    [['components/wanl-page-likes/wanl-page-likes-create-component']]
]);