(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/money/pay"],{"0ec6":function(e,t,n){"use strict";(function(e){n("0429");a(n("66fd"));var t=a(n("a0bb"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"1ed4":function(e,t,n){"use strict";var a=n("9b2d"),o=n.n(a);o.a},"33b8":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement;e._self._c},s=[]},4069:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("a34a")),o=n("2f62");function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,o,s,r){try{var i=e[s](r),c=i.value}catch(p){return void n(p)}i.done?t(c):Promise.resolve(c).then(a,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var s=e.apply(t,n);function i(e){r(s,a,o,i,c,"next",e)}function c(e){r(s,a,o,i,c,"throw",e)}i(void 0)}))}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={data:function(){return{loading:!1,disabled:!1,price:"0.00",isbalance:!1,order_no:"",order_pay_no:"",payNum:1,payList:[]}},computed:p({},(0,o.mapState)(["user"])),watch:{price:function(e,t){e<=parseFloat(this.$store.state.user.money)&&(this.isbalance=!0,this.getPayment())}},onLoad:function(t){var n=this;if(this.$api.post({url:"/wanlshop/pay/getBalance",success:function(e){n.$store.commit("user/setUserInfo",{money:e}),n.getPayment()}}),t.data){var a=0,o=JSON.parse(t.data),s=[];o.length<=1?(this.price=o[0].price,this.order_no="订单号："+o[0].order_no,this.order_pay_no=o[0].pay_no,this.order_id=o[0].order_id):(o.forEach((function(e){a=n.$wanlshop.bcadd(a,e.price),s.push(e.order_id)})),this.price=a,this.order_id=s,this.payNum=o.length,this.order_no="合并支付 "+o.length+"个订单")}else t.order_id?(e.showLoading({title:"结算中..."}),this.$api.post({url:"/wanlshop/pay/getPay",data:{order_id:t.order_id},success:function(t){e.hideLoading(),n.price=t.price,n.order_no="订单号："+t.order_no,n.order_pay_no=t.pay_no,n.order_id=t.order_id}})):console.log("非法访问")},methods:{getPayment:function(){var t=this,n="wap";n="miniapp",this.payList=[{name:"余额支付",describe:"",type:"balance",method:"balance",state:!!this.isbalance,select:!!this.isbalance}],e.getProvider({service:"payment",success:function(e){e.provider.map((function(e){"alipay"==e?t.payList.push({name:"支付宝",describe:"",type:e,method:n,state:!0,select:!1}):"wxpay"==e?t.payList.push({name:"微信支付",describe:"推荐使用微信支付",type:"wechat",method:n,state:!0,select:!t.isbalance}):"baidu"==e?t.payList.push({name:"百度收银台",describe:"",type:e,method:n,state:!0,select:!1}):"appleiap"==e&&t.payList.push({name:"Apple支付",describe:"",type:"apple",method:n,state:!0,select:!1})}))}})},confirm:function(){var t=this,n=null;this.disabled||(this.payList.map((function(e,t,a){e.select&&(n=e)})),n?(this.loading=!0,this.disabled=!0,e.login({success:function(e){t.wanlPay(n,e.code)},fail:function(t){e.showModal({content:"无法获取微信code,原因为: "+t.errMsg,showCancel:!1})}})):e.showModal({content:"请选择支付方式",showCancel:!1}))},wanlPay:function(t){var n=arguments,o=this;return i(a.default.mark((function s(){var r;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=n.length>1&&void 0!==n[1]?n[1]:null,o.$api.post({url:"/wanlshop/pay/payment",data:{type:t.type,method:t.method,code:r,order_id:o.order_id},success:function(n){if("balance"==t.type&&(o.$store.commit("user/setUserInfo",{money:o.$wanlshop.bcsub(o.$store.state.user.money,o.price)}),o.paySuccess()),"wechat"==t.type&&"wap"==t.method&&(o.loading=!1,e.showModal({title:"微信支付",content:"是否已完成支付",success:function(e){e.confirm?o.paySuccess():e.cancel&&console.log("用户点击取消")}}),window.location.href=n),"alipay"==t.type&&"wap"==t.method&&(o.loading=!1,o.$store.commit("statistics/order",{pay:o.$wanlshop.bcsub(o.$store.state.statistics.order.pay,o.payNum),delive:o.$wanlshop.bcadd(o.$store.state.statistics.order.delive,o.payNum)}),document.write(n)),"wechat"==t.type&&"miniapp"==t.method&&e.requestPayment({appId:n.appId,nonceStr:n.nonceStr,package:n.package,paySign:n.paySign,signType:n.signType,timeStamp:n.timeStamp,success:function(e){o.paySuccess()},fail:function(t){e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})}}),("alipay"==t.type||"wechat"==t.type)&&"app"==t.method){var a=t.type;"wechat"==t.type&&(a="wxpay"),e.requestPayment({provider:a,orderInfo:n,success:function(e){console.log("success",e),o.paySuccess()},fail:function(t){e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){o.loading=!1,o.disabled=!1}})}}});case 2:case"end":return a.stop()}}),s)})))()},onSelect:function(e){this.payList.map((function(t,n,a){t.select=n==e&&!t.select}))},paySuccess:function(){this.loading=!1,this.$store.commit("statistics/order",{pay:this.$wanlshop.bcsub(this.$store.state.statistics.order.pay,this.payNum),delive:this.$wanlshop.bcadd(this.$store.state.statistics.order.delive,this.payNum)}),this.$wanlshop.to("/pages/page/success?type=pay")}}};t.default=d}).call(this,n("543d")["default"])},5462:function(e,t,n){"use strict";n.r(t);var a=n("4069"),o=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=o.a},"9b2d":function(e,t,n){},a0bb:function(e,t,n){"use strict";n.r(t);var a=n("33b8"),o=n("5462");for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("1ed4");var r,i=n("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=c.exports}},[["0ec6","common/runtime","common/vendor"]]]);