(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/auth/validcode"],{"214b":function(e,t,n){},"34c8":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var i={wanlKeyboard:function(){return n.e("components/wanl-keyboard/wanl-keyboard").then(n.bind(null,"6cb1"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.keyboardVisible=!1})},c=[]},"525e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{config:{count:[{index:1,key:"valid-code-input-1"},{index:2,key:"valid-code-input-2"},{index:3,key:"valid-code-input-3"},{index:4,key:"valid-code-input-4"},{index:5,key:"valid-code-input-5"},{index:6,key:"valid-code-input-6"}]},keyboardVisible:!0,currentFocus:1,mobile:"",code:[],style:{inputWidth:"40upx",inputHeight:"100upx"},countdown:60,cTimer:null,event:"",pageroute:""}},onLoad:function(e){this.mobile=e.mobile,this.event=e.event,this.pageroute=e.url,this.sendMessage(),this.startTimer()},methods:{inputCode:function(e){this.code[this.currentFocus-1]=e,6==this.currentFocus&&this.login(),this.currentFocus<=6&&this.currentFocus++},login:function(){var t=this;e.showLoading(),"resetpwd"==this.event&&(this.$wanlshop.to("resetpwd?mobile=".concat(this.mobile,"&captcha=").concat(this.code.join(""),"&url=").concat(this.pageroute)),e.hideLoading()),this.event,"mobilelogin"==this.event&&this.$api.post({url:"/wanlshop/user/mobilelogin",data:{mobile:this.mobile,captcha:this.code.join(""),client_id:e.getStorageSync("wanlshop:chat_client_id")?e.getStorageSync("wanlshop:chat_client_id"):null},success:function(n){e.hideLoading(),t.$store.dispatch("user/login",n),t.$store.dispatch("cart/login"),e.reLaunch({url:decodeURIComponent(t.pageroute)})}}),"register"==this.event&&this.$api.post({url:"/wanlshop/user/register",data:{mobile:this.mobile,captcha:this.code.join(""),client_id:e.getStorageSync("wanlshop:chat_client_id")?e.getStorageSync("wanlshop:chat_client_id"):null},success:function(n){e.hideLoading(),t.$store.dispatch("user/login",n),t.$store.dispatch("cart/login"),t.$store.dispatch("chat/get"),e.reLaunch({url:decodeURIComponent(t.pageroute)})}}),this.currentFocus=0,this.code=[]},deleteCode:function(){this.currentFocus--,this.code.splice(-1,1)},emptyCode:function(){this.code=[],this.currentFocus=0},hanldeOpenKeyboard:function(){this.keyboardVisible=!0},sendMessage:function(){var e=this;this.$api.get({url:"/wanlshop/sms/send",data:{event:this.event,mobile:this.mobile},loadingTip:"验证码发送中...",success:function(t){e.$wanlshop.msg("验证码发送成功")}})},startTimer:function(){var e=this;null==this.cTimer&&(this.cTimer=setInterval((function(){e.countdown--,0==e.countdown&&e.clearTimer()}),1e3))},clearTimer:function(){clearInterval(this.cTimer),this.cTimer=null},resend:function(){this.startTimer(),this.code=[],this.currentFocus=0,this.countdown=60,this.sendMessage()}}};t.default=n}).call(this,n("543d")["default"])},a084:function(e,t,n){"use strict";n.r(t);var i=n("34c8"),o=n("d0d1");for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("a947");var s,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=u.exports},a947:function(e,t,n){"use strict";var i=n("214b"),o=n.n(i);o.a},d0d1:function(e,t,n){"use strict";n.r(t);var i=n("525e"),o=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=o.a},fcb8:function(e,t,n){"use strict";(function(e){n("0429");i(n("66fd"));var t=i(n("a084"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["fcb8","common/runtime","common/vendor"]]]);