(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order/addorder"],{"2e73":function(t,e,a){"use strict";a.r(e);var o=a("9f82"),r=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},4585:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.orderData.lists,(function(e,a){var o=t.__get_orig(e),r=t.__map(e.products,(function(e,a){var o=t.__get_orig(e),r=t.$wanlshop.oss(e.image,77,77);return{$orig:o,g0:r}})),n=t.couponData[a]&&("reduction"==t.couponData[a].type||"vip"==t.couponData[a].type&&"reduction"==t.couponData[a].usertype)?Number(t.couponData[a].limit):null,s=t.couponData[a]&&("reduction"==t.couponData[a].type||"vip"==t.couponData[a].type&&"reduction"==t.couponData[a].usertype)?Number(t.couponData[a].price):null,i=t.couponData[a]&&("discount"==t.couponData[a].type||"vip"==t.couponData[a].type&&"discount"==t.couponData[a].usertype)?Number(t.couponData[a].limit):null,u=t.couponData[a]&&("discount"==t.couponData[a].type||"vip"==t.couponData[a].type&&"discount"==t.couponData[a].usertype)?Number(t.couponData[a].discount):null,c=t.couponData[a]&&"shipping"==t.couponData[a].type?Number(t.couponData[a].limit):null;return{$orig:o,l0:r,m0:n,m1:s,m2:i,m3:u,m4:c}}))),o=t.$wanlshop.appstc("/coupon/bg_coupon_3x.png"),r=null!=t.couponIndex?t.__map(t.orderData.lists[t.couponIndex].coupon,(function(e,a){var o=t.__get_orig(e),r=e.state?t.$wanlshop.appstc("/coupon/img_couponcentre_received_3x.png"):null,n="reduction"==e.type||"vip"==e.type&&"reduction"==e.usertype?Number(e.price):null,s="reduction"==e.type||"vip"==e.type&&"reduction"==e.usertype?Number(e.limit):null,i="reduction"==e.type||"vip"==e.type&&"reduction"==e.usertype?Number(e.price):null,u="discount"==e.type||"vip"==e.type&&"discount"==e.usertype?Number(e.discount):null,c="discount"==e.type||"vip"==e.type&&"discount"==e.usertype?Number(e.limit):null,p="discount"==e.type||"vip"==e.type&&"discount"==e.usertype?Number(e.discount):null,d="shipping"==e.type?Number(e.limit):null;return{$orig:o,g2:r,m5:n,m6:s,m7:i,m8:u,m9:c,m10:p,m11:d}})):null;t.$mp.data=Object.assign({},{$root:{l1:a,g1:o,l2:r}})},n=[]},"9f82":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(a("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e,a,o,r,n,s){try{var i=t[n](s),u=i.value}catch(c){return void a(c)}i.done?e(u):Promise.resolve(u).then(o,r)}function s(t){return function(){var e=this,a=arguments;return new Promise((function(o,r){var s=t.apply(e,a);function i(t){n(s,o,r,i,u,"next",t)}function u(t){n(s,o,r,i,u,"throw",t)}i(void 0)}))}}var i={data:function(){return{optionData:{},addressData:{},modalName:null,cartType:null,couponData:{},couponIndex:null,orderData:{lists:[],statis:{allnum:1,allsub:0}}}},onLoad:function(t){this.optionData=JSON.parse(t.data),this.loadData(),this.cartType=t.type},methods:{loadData:function(t){var e=this;return s(o.default.mark((function a(){return o.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$api.post({url:"/wanlshop/order/getOrderGoodsList",loadingTip:"加载中",data:{data:e.optionData,address_id:t},success:function(t){e.orderData=t.orderData,t.addressData?e.addressData=t.addressData:e.addAddress("newadd")}});case 1:case"end":return a.stop()}}),a)})))()},addOrder:function(){var t=this;return s(o.default.mark((function e(){var a,r,n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.orderData.statis.allnum){e.next=3;break}return t.$wanlshop.msg("订单异常"),e.abrupt("return");case 3:if(a=t.addressData.id,0!==a){e.next=7;break}return t.$wanlshop.msg("请填写地址"),e.abrupt("return");case 7:r={lists:[],address_id:a},n=[],t.orderData.lists.forEach((function(e,a){r.lists.push({shop_id:e.shop_id,remarks:e.remarks,products:[],coupon_id:t.couponData[a]?t.couponData[a].id:0}),e.products.forEach((function(t){n.push({goods_id:t.id,sku_id:t.sku.id}),r.lists[a].products.push({goods_id:t.id,number:t.number,sku_id:t.sku.id,freight_id:t.freight_id})}))})),t.$api.post({url:"/wanlshop/order/addOrder",data:{order:r},loadingTip:"提交订单中...",success:function(e){t.$store.commit("statistics/order",{pay:t.$store.state.statistics.order.pay+n.length});var a=Object.keys(t.couponData).length;0!=a&&t.$store.commit("statistics/dynamic",{coupon:t.$store.state.statistics.dynamic.coupon-a}),"cart"==t.cartType&&t.$store.dispatch("cart/del"),t.$wanlshop.to("/pages/user/money/pay?data=".concat(JSON.stringify(e)))}});case 10:case"end":return e.stop()}}),e)})))()},refreshList:function(t,e){var a=this;return s(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.$api.post({url:"/wanlshop/address/address",data:{data:t,type:"add"},success:function(t){a.addressData=t}});case 1:case"end":return e.stop()}}),e)})))()},queryCoupon:function(t){var e=this;return s(o.default.mark((function a(){var r,n,s,i;return o.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.orderData.lists[t],0==r.coupon.length){for(n=[],s=[],i=0;i<r.products.length;i++)n.push(r.products[i]["id"]),s.push(r.products[i]["shop_category_id"]);e.$api.post({url:"/wanlshop/coupon/query",data:{shop_id:r.shop_id,goods_id:e.unique(n),shop_category_id:e.unique(s),price:r.order_price},success:function(t){r.coupon=t}})}e.couponIndex=t,e.modalName="coupon";case 4:case"end":return a.stop()}}),a)})))()},onReceive:function(t){var e=this;return s(o.default.mark((function a(){var r;return o.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=e.orderData.lists[e.couponIndex].coupon[t],e.$api.post({url:"/wanlshop/coupon/receive",loadingTip:"领取中",data:{id:r.id},success:function(t){r.id=t.id,r.state=!0,e.$wanlshop.msg(t.msg),e.$store.commit("statistics/dynamic",{coupon:e.$store.state.statistics.dynamic.coupon+1})}});case 2:case"end":return a.stop()}}),a)})))()},onCoupons:function(t){var e=this.orderData.lists[this.couponIndex],a=this.orderData.lists[this.couponIndex].coupon;if(a[t].choice=!a[t].choice,a[t].choice){for(var o=0;o<a.length;o++)o!=t&&(a[o].choice=!1);if(this.couponData[this.couponIndex]=a[t],("reduction"==a[t].type||"vip"==a[t].type&&"reduction"==a[t].usertype)&&(e.freight.price=e.freight_price_bak,e.sub_price=this.$wanlshop.bcsub(this.$wanlshop.bcadd(e.order_price,e.freight.price),a[t].price),e.sub_price<0&&(e.sub_price=.01)),"discount"==a[t].type||"vip"==a[t].type&&"discount"==a[t].usertype){var r=a[t].discount>10?this.$wanlshop.bcdiv(a[t].discount,100):this.$wanlshop.bcdiv(a[t].discount,10);e.freight.price=e.freight_price_bak,e.sub_price=this.$wanlshop.bcadd(this.$wanlshop.bcmul(e.order_price,r),e.freight.price)}"shipping"==a[t].type&&(e.freight.price=0,e.sub_price=e.order_price)}else this.couponData={},"shipping"==a[t].type&&(e.freight.price=e.freight_price_bak),e.sub_price=this.$wanlshop.bcadd(e.order_price,e.freight.price);this.orderData.statis.allsub=0;for(o=0;o<this.orderData.lists.length;o++)this.orderData.statis.allsub=this.$wanlshop.bcadd(this.orderData.statis.allsub,this.orderData.lists[o].sub_price);this.modalName=null},changeNum:function(t){t=0==t?1:t,this.orderData.lists[0].number=t,this.orderData.lists[0].products[0].number=t,this.orderData.statis.allnum=t,this.orderData.lists[0].sub_price=this.$wanlshop.bcmul(this.orderData.lists[0].products[0].sku.price,t),this.orderData.statis.allsub=this.$wanlshop.bcmul(this.orderData.lists[0].products[0].sku.price,t)},addAddress:function(t){this.$wanlshop.to("/pages/user/address/addressManage?type=".concat(t))},userAddress:function(){this.$wanlshop.to("/pages/user/address/address?source=1")},showModal:function(t){this.modalName=t},hideModal:function(){this.modalName=null},unique:function(t){return Array.from(new Set(t)).join(",")},moveHandle:function(){}}};e.default=i},a2cd:function(t,e,a){"use strict";(function(t){a("0429");o(a("66fd"));var e=o(a("c40f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},c40f:function(t,e,a){"use strict";a.r(e);var o=a("4585"),r=a("2e73");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);var s,i=a("f0c5"),u=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports}},[["a2cd","common/runtime","common/vendor"]]]);