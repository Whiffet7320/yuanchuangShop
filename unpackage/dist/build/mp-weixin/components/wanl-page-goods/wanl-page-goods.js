(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-page-goods/wanl-page-goods"],{"10c1":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o(a("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,n,a,e,o,r,u){try{var c=t[r](u),i=c.value}catch(s){return void a(s)}c.done?n(i):Promise.resolve(i).then(e,o)}function u(t){return function(){var n=this,a=arguments;return new Promise((function(e,o){var u=t.apply(n,a);function c(t){r(u,e,o,c,i,"next",t)}function i(t){r(u,e,o,c,i,"throw",t)}c(void 0)}))}}var c={name:"WanlPageGoods",props:{pageData:{type:Object,default:function(){return{name:"商品组件",type:"goods",params:[],style:[],data:[]}}}},data:function(){return{data:[]}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;return u(e.default.mark((function n(){var a,o,r;return e.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(a=[],o=t.pageData.data,r=0;r<o.length;r++)a.push(o[r].goodsLink);t.$api.get({url:"/wanlshop/page/goods",data:{ids:a.join(",")},success:function(n){t.data=n}});case 4:case"end":return n.stop()}}),n)})))()}}};n.default=c},"281a":function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var e={wanlProduct:function(){return a.e("components/wanl-product/wanl-product").then(a.bind(null,"2e36"))}},o=function(){var t=this,n=t.$createElement,a=(t._self._c,t.__get_style([t.pageData.style]));t.$mp.data=Object.assign({},{$root:{s0:a}})},r=[]},"63a8":function(t,n,a){"use strict";a.r(n);var e=a("281a"),o=a("d56e");for(var r in o)"default"!==r&&function(t){a.d(n,t,(function(){return o[t]}))}(r);var u,c=a("f0c5"),i=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=i.exports},d56e:function(t,n,a){"use strict";a.r(n);var e=a("10c1"),o=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-page-goods/wanl-page-goods-create-component',
    {
        'components/wanl-page-goods/wanl-page-goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("63a8"))
        })
    },
    [['components/wanl-page-goods/wanl-page-goods-create-component']]
]);