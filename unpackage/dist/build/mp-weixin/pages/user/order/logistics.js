(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order/logistics"],{"34aa":function(n,t,a){"use strict";(function(n){a("0429");e(a("66fd"));var t=e(a("cc41"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,a("543d")["createPage"])},"40a9":function(n,t,a){"use strict";a.r(t);var e=a("aad9"),o=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,(function(){return e[n]}))}(u);t["default"]=o.a},"43ba":function(n,t,a){"use strict";var e=a("ceb9"),o=a.n(e);o.a},aad9:function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(a("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n,t,a,e,o,u,r){try{var c=n[u](r),i=c.value}catch(d){return void a(d)}c.done?t(i):Promise.resolve(i).then(e,o)}function r(n){return function(){var t=this,a=arguments;return new Promise((function(e,o){var r=n.apply(t,a);function c(n){u(r,e,o,c,i,"next",n)}function i(n){u(r,e,o,c,i,"throw",n)}c(void 0)}))}}var c=a("05a7"),i={data:function(){return{data:{order_no:"加载中...",goods:[]},isLoad:!1}},onLoad:function(n){this.loadData({id:n.id})},methods:{loadData:function(n){var t=this;return r(e.default.mark((function a(){return e.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$api.post({url:"/wanlshop/order/getLogistics",loadingTip:"加载中",data:n,success:function(n){t.data=n,t.isLoad=!0}});case 1:case"end":return a.stop()}}),a)})))()},phoneCall:function(t){n.makePhoneCall({phoneNumber:t})},onCopy:function(n){c.getClipboardData(n,(function(n){}))}}};t.default=i}).call(this,a("543d")["default"])},abc7:function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return e}));var o=function(){var n=this,t=n.$createElement,a=(n._self._c,n.isLoad?n.$wanlshop.oss(n.data.kuaidi.logo,40,40):null);n.$mp.data=Object.assign({},{$root:{g0:a}})},u=[]},cc41:function(n,t,a){"use strict";a.r(t);var e=a("abc7"),o=a("40a9");for(var u in o)"default"!==u&&function(n){a.d(t,n,(function(){return o[n]}))}(u);a("43ba");var r,c=a("f0c5"),i=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=i.exports},ceb9:function(n,t,a){}},[["34aa","common/runtime","common/vendor"]]]);