(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-page-activity/wanl-page-activity"],{"4d29":function(t,a,n){"use strict";n.r(a);var e=n("ba87"),r=n("947a");for(var u in r)"default"!==u&&function(t){n.d(a,t,(function(){return r[t]}))}(u);n("b909");var i,c=n("f0c5"),o=Object(c["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],i);a["default"]=o.exports},"5ec5":function(t,a,n){},"947a":function(t,a,n){"use strict";n.r(a);var e=n("ff2f"),r=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(a,t,(function(){return e[t]}))}(u);a["default"]=r.a},b909:function(t,a,n){"use strict";var e=n("5ec5"),r=n.n(e);r.a},ba87:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return u})),n.d(a,"a",(function(){return e}));var r=function(){var t=this,a=t.$createElement,n=(t._self._c,t.__get_style([t.pageData.style])),e=t.$wanlshop.appstc("/common/img_default3x.png"),r=t.__map(t.data,(function(a,n){var e=t.__get_orig(a),r=2==a.list?t.$wanlshop.appstc("/common/img_default3x.png"):null;return{$orig:e,g1:r}}));t.$mp.data=Object.assign({},{$root:{s0:n,g0:e,l0:r}})},u=[]},ff2f:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,a,n,e,r,u,i){try{var c=t[u](i),o=c.value}catch(f){return void n(f)}c.done?a(o):Promise.resolve(o).then(e,r)}function i(t){return function(){var a=this,n=arguments;return new Promise((function(e,r){var i=t.apply(a,n);function c(t){u(i,e,r,c,o,"next",t)}function o(t){u(i,e,r,c,o,"throw",t)}c(void 0)}))}}var c={name:"WanlPageActivity",props:{pageData:{type:Object,default:function(){return{name:"活动橱窗",type:"activity",params:[],style:[],data:[]}}}},data:function(){return{data:[]}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;return i(e.default.mark((function a(){return e.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$api.get({url:"/wanlshop/page/activity",data:{data:JSON.stringify(t.pageData.data)},success:function(a){t.data=a}});case 1:case"end":return a.stop()}}),a)})))()}}};a.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-page-activity/wanl-page-activity-create-component',
    {
        'components/wanl-page-activity/wanl-page-activity-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4d29"))
        })
    },
    [['components/wanl-page-activity/wanl-page-activity-create-component']]
]);
