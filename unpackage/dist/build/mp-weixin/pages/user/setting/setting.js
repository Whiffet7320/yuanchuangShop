(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/setting"],{"0315":function(t,e,n){"use strict";n.r(e);var r=n("2f48"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},2094:function(t,e,n){"use strict";n.r(e);var r=n("a24b"),o=n("0315");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);var a,c=n("f0c5"),i=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=i.exports},"2f48":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{fileSizeString:"0 B",usermaks:""}},computed:u({},(0,r.mapState)(["user","common"])),onLoad:function(){this.usermaks=this.$wanlshop.maks()},methods:{formatSize:function(){var t=this;plus.cache.calculate((function(e){var n=parseInt(e);t.fileSizeString=0==n?"0 B":n<1024?n+" B":n<1048576?(n/1024).toFixed(2)+" KB":n<1073741824?(n/1048576).toFixed(2)+" MB":(n/1073741824).toFixed(2)+" GB"}))},clearCache:function(){this.$wanlshop.msg("没有发现任何缓存")}}};e.default=c},a24b:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.user.avatar?t.$wanlshop.oss(t.user.avatar,52,52,2,"avatar"):null);t._isMounted||(t.e0=function(e){return t.$wanlshop.auth("user")},t.e1=function(e){return t.$wanlshop.auth("../address/address")},t.e2=function(e){return t.$wanlshop.auth("security")},t.e3=function(e){return t.$wanlshop.to("notice")},t.e4=function(e){return t.$wanlshop.to("currency")},t.e5=function(e){return t.$wanlshop.to("about","pop-in",200)}),t.$mp.data=Object.assign({},{$root:{g0:n}})},u=[]},e679:function(t,e,n){"use strict";(function(t){n("0429");r(n("66fd"));var e=r(n("2094"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["e679","common/runtime","common/vendor"]]]);