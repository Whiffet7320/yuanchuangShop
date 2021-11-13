(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-bank/wanl-bank"],{"0b6b":function(n,t,e){"use strict";e.r(t);var a=e("cd9a"),r=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=r.a},6784:function(n,t,e){"use strict";var a=e("9af9"),r=e.n(a);r.a},"9af9":function(n,t,e){},"9ece":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var r=function(){var n=this,t=n.$createElement;n._self._c},o=[]},a908:function(n,t,e){"use strict";e.r(t);var a=e("9ece"),r=e("0b6b");for(var o in r)"default"!==o&&function(n){e.d(t,n,(function(){return r[n]}))}(o);e("6784");var i,c=e("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=u.exports},cd9a:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,a,r,o,i){try{var c=n[o](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(a,r)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var i=n.apply(t,e);function c(n){o(i,a,r,c,u,"next",n)}function u(n){o(i,a,r,c,u,"throw",n)}c(void 0)}))}}var c={name:"wanlBank",props:{bankCode:{type:String,required:!0},bankName:{type:String,required:!0},cardType:{type:String,default:"储蓄卡"},cardCode:{type:String,required:!0}},computed:{waterMark:function(){return this.image},endNumber:function(){var n=this.cardCode.length;return this.cardCode.substr(n-4,n)}},data:function(){return{bankThem:"",image:"",showCanvas:!0,uuid:"bankIcon"}},methods:{buildItem:function(){var t=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.bankThem=n.getStorageSync("BANK_".concat(t.bankCode)),t.image="/static/images/bank/".concat(t.bankCode,".png"),e.next=4,t.getThemColor();case 4:t.showCanvas=!1;case 5:case"end":return e.stop()}}),e)})))()},getThemColor:function(){var t=this;return i(a.default.mark((function e(){var r,o,i,c,u;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==t.bankThem||""==t.bankThem){e.next=2;break}return e.abrupt("return");case 2:return r=n.upx2px(100),o=n.upx2px(72),t.iconContext=n.createCanvasContext(t.uuid,t),t.iconContext.width=r,t.iconContext.height=r,t.iconContext.fillStyle="#FFFFFF",t.iconContext.beginPath(),i=r/2,t.iconContext.arc(i,i,i-1,0,2*Math.PI,0,!0),t.iconContext.closePath(),t.iconContext.fill(),c=r/2-o/2,t.iconContext.drawImage(t.image,c,c,o,o),e.next=17,t.draw(t.iconContext);case 17:return e.next=19,t.getImageData(c,o);case 19:u=e.sent,t.parsingImageData(u);case 21:case"end":return e.stop()}}),e)})))()},parsingImageData:function(t){for(var e={},a=0,r=t.length;a<r;a+=4){var o=t[a],i=t[a+1],c=t[a+2];if(o+i+c<400){var u=[o,i,c],s=u.join(", ");e[s]=null==e[s]?1:e[s]+1}}var f="";Object.keys(e).forEach((function(n){f=""===f?n:e[f]>e[n]?f:n}));var d=f.split(", ").map((function(n,t){if(n=parseInt(n),t>1)return n;var e=n+50;return e>255?255:e})).join(", ");this.bankThem="background-image: linear-gradient(45deg, rgba(".concat(d,", 1), rgba(").concat(f,", 1));"),n.setStorageSync("BANK_".concat(this.bankCode),this.bankThem)},getImageData:function(t,e){var a=this;return new Promise((function(r,o){n.canvasGetImageData({canvasId:a.uuid,x:t,y:t,width:e,height:e,success:function(n){r(n.data)},fail:function(n){console.log(n),o()}},a)}))},getBankLogo:function(){var t=this;return new Promise((function(e,a){n.downloadFile({url:t.$wanlshop.appstc("/bank/".concat(t.bankCode,".png")),success:function(n){e(n.tempFilePath)},fail:function(n){console.log(n),a()}})}))},draw:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(e){n.draw(t,(function(){e()}))}))}},created:function(){var n=this;this.$nextTick((function(){n.buildItem()}))}};t.default=c}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-bank/wanl-bank-create-component',
    {
        'components/wanl-bank/wanl-bank-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a908"))
        })
    },
    [['components/wanl-bank/wanl-bank-create-component']]
]);
