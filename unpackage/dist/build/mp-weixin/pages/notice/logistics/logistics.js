(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/logistics/logistics"],{1749:function(t,n,e){"use strict";e.r(n);var a=e("994a"),o=e("c0a7");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);var u,i=e("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},"70d1":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,a,o,r,u){try{var i=t[r](u),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(a,o)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(a,o){var u=t.apply(n,e);function i(t){r(u,a,o,i,c,"next",t)}function c(t){r(u,a,o,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{dataList:[],reload:!1,total:0,current_page:1,last_page:1,status:"more",contentText:{contentdown:" ",contentrefresh:"加载中",contentnomore:""}}},onLoad:function(){this.loadData(),this.$store.commit("statistics/noticec",{order:0})},onPullDownRefresh:function(){this.current_page=1,this.reload=!0,this.loadData()},onReachBottom:function(){this.current_page>=this.last_page?this.status="noMore":(this.reload=!1,this.current_page=this.current_page+1,this.status="loading",this.loadData())},methods:{loadData:function(){var n=this;return u(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$api.get({url:"/wanlshop/notice/getNoticeList",data:{type:"order",page:n.current_page},success:function(e){t.stopPullDownRefresh(),n.dataList=n.reload?e.data:n.dataList.concat(e.data),n.total=e.total,n.current_page=e.current_page,n.last_page=e.last_page,n.status=0==e.total?"noMore":"more"}});case 1:case"end":return e.stop()}}),e)})))()}}};n.default=i}).call(this,e("543d")["default"])},"994a":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={wanlEmpty:function(){return e.e("components/wanl-empty/wanl-empty").then(e.bind(null,"8fd5"))},uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"0b06"))}},o=function(){var t=this,n=t.$createElement,e=(t._self._c,0!=t.dataList.length?t.__map(t.dataList,(function(n,e){var a=t.__get_orig(n),o=t.$wanlshop.timeToChat(n.createtime),r=t.$wanlshop.oss(n.image,82,82);return{$orig:a,g0:o,g1:r}})):null);t._isMounted||(t.e0=function(n,e){var a=arguments[arguments.length-1].currentTarget.dataset,o=a.eventParams||a["event-params"];e=o.item;return t.$wanlshop.to(e.url)}),t.$mp.data=Object.assign({},{$root:{l0:e}})},r=[]},c0a7:function(t,n,e){"use strict";e.r(n);var a=e("70d1"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=o.a},f3e1:function(t,n,e){"use strict";(function(t){e("0429");a(e("66fd"));var n=a(e("1749"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["f3e1","common/runtime","common/vendor"]]]);