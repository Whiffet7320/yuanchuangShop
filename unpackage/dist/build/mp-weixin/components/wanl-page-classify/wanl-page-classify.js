(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-page-classify/wanl-page-classify"],{"0705":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,a,n,e,r,u,c){try{var o=t[u](c),i=o.value}catch(s){return void n(s)}o.done?a(i):Promise.resolve(i).then(e,r)}function c(t){return function(){var a=this,n=arguments;return new Promise((function(e,r){var c=t.apply(a,n);function o(t){u(c,e,r,o,i,"next",t)}function i(t){u(c,e,r,o,i,"throw",t)}o(void 0)}))}}var o={name:"WanlPageClassify",props:{pageData:{type:Object,default:function(){return{name:"分类橱窗",type:"classify",params:[],style:[],data:[]}}}},data:function(){return{data:[]}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;return c(e.default.mark((function a(){return e.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$api.get({url:"/wanlshop/page/category",data:{col:t.pageData.params.colStyle,data:JSON.stringify(t.pageData.data)},success:function(a){t.data=a}});case 1:case"end":return a.stop()}}),a)})))()}}};a.default=o},"434b":function(t,a,n){},"6dfd":function(t,a,n){"use strict";var e=n("434b"),r=n.n(e);r.a},"8c76":function(t,a,n){"use strict";n.r(a);var e=n("0705"),r=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(a,t,(function(){return e[t]}))}(u);a["default"]=r.a},efca:function(t,a,n){"use strict";n.r(a);var e=n("fcc9"),r=n("8c76");for(var u in r)"default"!==u&&function(t){n.d(a,t,(function(){return r[t]}))}(u);n("6dfd");var c,o=n("f0c5"),i=Object(o["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);a["default"]=i.exports},fcc9:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return u})),n.d(a,"a",(function(){return e}));var r=function(){var t=this,a=t.$createElement,n=(t._self._c,t.__get_style([t.pageData.style])),e=t.__map(t.data,(function(a,n){var e=t.__get_orig(a),r=t.__map(a.list,(function(a,n){var e=t.__get_orig(a),r=t.$wanlshop.oss(a.image,70,65);return{$orig:e,g0:r}}));return{$orig:e,l0:r}}));t.$mp.data=Object.assign({},{$root:{s0:n,l1:e}})},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-page-classify/wanl-page-classify-create-component',
    {
        'components/wanl-page-classify/wanl-page-classify-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("efca"))
        })
    },
    [['components/wanl-page-classify/wanl-page-classify-create-component']]
]);