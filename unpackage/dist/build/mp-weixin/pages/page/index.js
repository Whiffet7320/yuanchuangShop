(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/page/index"],{"2d54":function(n,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return t}));var t={wanlPageBanner:function(){return a.e("components/wanl-page-banner/wanl-page-banner").then(a.bind(null,"d06b"))},wanlPageImage:function(){return a.e("components/wanl-page-image/wanl-page-image").then(a.bind(null,"5c7e"))},wanlPageVideo:function(){return a.e("components/wanl-page-video/wanl-page-video").then(a.bind(null,"a8c4"))},wanlPageMenu:function(){return a.e("components/wanl-page-menu/wanl-page-menu").then(a.bind(null,"8a5d"))},wanlPageNotice:function(){return a.e("components/wanl-page-notice/wanl-page-notice").then(a.bind(null,"7487"))},wanlPageArticle:function(){return a.e("components/wanl-page-article/wanl-page-article").then(a.bind(null,"c1f9"))},wanlPageHeadlines:function(){return a.e("components/wanl-page-headlines/wanl-page-headlines").then(a.bind(null,"e8eb"))},wanlPageSearch:function(){return a.e("components/wanl-page-search/wanl-page-search").then(a.bind(null,"d5a8"))},wanlPageActivity:function(){return a.e("components/wanl-page-activity/wanl-page-activity").then(a.bind(null,"4d29"))},wanlPageCategoryTitle:function(){return a.e("components/wanl-page-category-title/wanl-page-category-title").then(a.bind(null,"9c0f"))},wanlPageClassify:function(){return a.e("components/wanl-page-classify/wanl-page-classify").then(a.bind(null,"efca"))},wanlPageLikes:function(){return a.e("components/wanl-page-likes/wanl-page-likes").then(a.bind(null,"a4ef"))},wanlPageGoods:function(){return a.e("components/wanl-page-goods/wanl-page-goods").then(a.bind(null,"63a8"))},wanlPageBargain:function(){return a.e("components/wanl-page-bargain/wanl-page-bargain").then(a.bind(null,"92e9"))},wanlPageSeckill:function(){return a.e("components/wanl-page-seckill/wanl-page-seckill").then(a.bind(null,"a3e6"))},wanlPageEmpty:function(){return a.e("components/wanl-page-empty/wanl-page-empty").then(a.bind(null,"ef23"))},wanlPageDivision:function(){return a.e("components/wanl-page-division/wanl-page-division").then(a.bind(null,"3e16"))},wanlShare:function(){return Promise.all([a.e("common/vendor"),a.e("components/wanl-share/wanl-share")]).then(a.bind(null,"c63c"))}},o=function(){var n=this,e=n.$createElement,a=(n._self._c,n.$wanlshop.oss(n.pageData.style.pageBackgroundImage,0,50,1,"transparent","png")),t=n.$wanlshop.oss(n.pageData.style.navigationBackgroundImage,414,0,1,"transparent","png"),o=n.$wanlshop.appstc("/common/logo.png");n._isMounted||(n.e0=function(e){return n.$wanlshop.back(1)}),n.$mp.data=Object.assign({},{$root:{g0:a,g1:t,g2:o}})},r=[]},7547:function(n,e,a){"use strict";a.r(e);var t=a("d83b"),o=a.n(t);for(var r in t)"default"!==r&&function(n){a.d(e,n,(function(){return t[n]}))}(r);e["default"]=o.a},c252:function(n,e,a){"use strict";a.r(e);var t=a("2d54"),o=a("7547");for(var r in o)"default"!==r&&function(n){a.d(e,n,(function(){return o[n]}))}(r);var l,i=a("f0c5"),c=Object(i["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],l);e["default"]=c.exports},d83b:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(a("a34a")),o=a("2f62");function r(n){return n&&n.__esModule?n:{default:n}}function l(n,e,a,t,o,r,l){try{var i=n[r](l),c=i.value}catch(u){return void a(u)}i.done?e(c):Promise.resolve(c).then(t,o)}function i(n){return function(){var e=this,a=arguments;return new Promise((function(t,o){var r=n.apply(e,a);function i(n){l(r,t,o,i,c,"next",n)}function c(n){l(r,t,o,i,c,"throw",n)}i(void 0)}))}}function c(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function u(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){s(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var p={data:function(){return{pageId:null,itemData:[],pageData:{params:{navigationBarTitleText:"加载中..",share_title:"分享"},style:{}},wanlsys:this.$wanlshop.wanlsys(),modalName:"",scrollAnimation:300}},computed:u({},(0,o.mapState)(["common"])),onLoad:function(n){this.pageId=n.id,this.loadData(n)},onShow:function(){var e=this;wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),setTimeout((function(){n.setNavigationBarColor({frontColor:e.pageData.style.navigationBarTextStyle,backgroundColor:e.pageData.style.navigationBarBackgroundColor})}),200)},methods:{loadData:function(n){var e=this;return i(t.default.mark((function a(){return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$api.get({url:"/wanlshop/page/index",data:n,success:function(n){e.itemData=n.item,e.pageData=n.page,e.$wanlshop.title(n.page.params.navigationBarTitleText,{frontColor:n.page.style.navigationBarTextStyle,backgroundColor:n.page.style.navigationBarBackgroundColor})}});case 1:case"end":return a.stop()}}),a)})))()},showModal:function(n){var e=this;setTimeout((function(){e.scrollAnimation=0}),300),this.modalName=n},hideModal:function(){this.modalName=null}}};e.default=p}).call(this,a("543d")["default"])},df52:function(n,e,a){"use strict";(function(n){a("0429");t(a("66fd"));var e=t(a("c252"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])}},[["df52","common/runtime","common/vendor"]]]);