(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/apps/find/details/live"],{"2aba":function(e,t,n){},"39a4":function(e,t,n){"use strict";(function(e){n("0429");a(n("66fd"));var t=a(n("ebc3"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"497c":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},5683:function(e,t,n){"use strict";var a=n("2aba"),i=n.n(a);i.a},"56a4":function(e,t,n){"use strict";n.r(t);var a=n("ad68"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"73f9":function(e,t,n){},abd9:function(e,t,n){"use strict";var a=n("73f9"),i=n.n(a);i.a},ad68:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,i,o,s){try{var r=e[o](s),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(a,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function r(e){o(s,a,i,r,l,"next",e)}function l(e){o(s,a,i,r,l,"throw",e)}r(void 0)}))}}var r=e.getSystemInfoSync(),l=10;l=r.safeAreaInsets.bottom;var c=function(){n.e("components/wanl-live/header").then(function(){return resolve(n("bff9"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/wanl-live/empty").then(function(){return resolve(n("7fef"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/wanl-live/image").then(function(){return resolve(n("d97c"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/wanl-live/play").then(function(){return resolve(n("d0e1"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/wanl-live/comment").then(function(){return resolve(n("5a97"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/wanl-live/footer").then(function(){return resolve(n("eed4"))}.bind(null,n)).catch(n.oe)},p={components:{wanlLiveHeader:c,wanlLiveEmpty:u,wanlLiveImage:d,wanlLivePlay:v,wanlLiveComment:h,wanlLiveFooter:f},data:function(){return{statusBarHeight:r.statusBarHeight,statusFootHeight:l,screenHeight:r.screenHeight,screenWidth:r.screenWidth,playUrl:"",iSstart:!1,liveId:0,liveData:{shop:{id:0,avatar:"",shopname:"加载中.."},state:0,isFollow:!1},liveStatis:{online:1,like:0}}},onUnload:function(){this.pageUnload()},onLoad:function(t){this.liveId=t.id,this.loadData(),e.$on("onLive",this.onSocketLive);e.getSystemInfoSync();wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]})},methods:{loadData:function(){var t=this;return s(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.request({url:"".concat(t.$store.state.common.appUrl.api,"/wanlshop/live/play"),data:{id:t.liveId},header:{token:t.$store.state.user.token},success:function(n){if(1==n.data.code){var a=n.data.data;if(t.liveData=a,t.iSstart=!0,t.liveStatis.like=a.like,0==a.state||1==a.state){var i=a.liveurl.split(",");t.playUrl=i[1]}else 2==a.state&&(t.playUrl=a.recordurl)}else e.showToast({title:n.data.msg,icon:"none"})}});case 1:case"end":return n.stop()}}),n)})))()},onSocketLive:function(t){1==this.liveData.state&&this.liveData.liveid==t.group&&("update"==t.message.type&&(this.liveData.goods=t.message.data),"end"==t.message.type?e.redirectTo({url:"/pages/page/end_live?id=".concat(this.liveData.id)}):(this.liveStatis.like=t.like,this.liveStatis.online=t.online))},pageUnload:function(){e.request({url:"".concat(this.$store.state.common.appUrl.api,"/wanlshop/live/unload"),data:{group:this.liveData.liveid,type:"play"},header:{token:this.$store.state.user.token}})},sendLive:function(t){switch(t.type){case"msg":e.request({url:"".concat(this.$store.state.common.appUrl.api,"/wanlshop/live/send"),data:{message:t.message,group:this.liveData.liveid},header:{token:this.$store.state.user.token}});break;case"like":this.liveStatis.like+=1,e.request({url:"".concat(this.$store.state.common.appUrl.api,"/wanlshop/live/like"),data:{id:this.liveId},header:{token:this.$store.state.user.token}});break;case"seek":e.request({url:"".concat(this.$store.state.common.appUrl.api,"/wanlshop/live/seek"),data:{group:this.liveData.liveid,goods_index:t.key},header:{token:this.$store.state.user.token}});break}},onShopLike:function(){this.liveData.isFollow=!0,e.request({url:"".concat(this.$store.state.common.appUrl.api,"/wanlshop/live/follow"),data:{id:this.liveData.shop_id,group:this.liveData.liveid},header:{token:this.$store.state.user.token}})}}};t.default=p}).call(this,n("543d")["default"])},ebc3:function(e,t,n){"use strict";n.r(t);var a=n("497c"),i=n("56a4");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("5683"),n("abd9");var s,r=n("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"983cdcba",null,!1,a["a"],s);t["default"]=l.exports}},[["39a4","common/runtime","common/vendor"]]]);