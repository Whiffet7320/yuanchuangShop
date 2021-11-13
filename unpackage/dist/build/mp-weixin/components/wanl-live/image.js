(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-live/image"],{"475a":function(t,e,n){},"782e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"wanlLiveEmpty",props:{screenHeight:{default:0},screenWidth:{default:0},image:{type:String,default:""}},methods:{stcOss:function(t){var e=this.$store.state.common.appUrl.oss,n="";return n=t?/^(http|https):\/\/.+/.test(t)?t:e+t:"",n}}};e.default=a},9703:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.stcOss(t.image));t.$mp.data=Object.assign({},{$root:{m0:n}})},u=[]},bde5:function(t,e,n){"use strict";n.r(e);var a=n("782e"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},d97c:function(t,e,n){"use strict";n.r(e);var a=n("9703"),r=n("bde5");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("dfa9");var c,s=n("f0c5"),i=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=i.exports},dfa9:function(t,e,n){"use strict";var a=n("475a"),r=n.n(a);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-live/image-create-component',
    {
        'components/wanl-live/image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d97c"))
        })
    },
    [['components/wanl-live/image-create-component']]
]);
