(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/refund/edit"],{"0328":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$wanlshop.oss(e.refund.goods.image,70,70)),a=e.__map(e.refund.images,(function(n,t){var a=e.__get_orig(n),r=e.$wanlshop.oss(n,90,90);return{$orig:a,g1:r}}));e.$mp.data=Object.assign({},{$root:{g0:t,l0:a}})},u=[]},"1d47":function(e,n,t){"use strict";t.r(n);var a=t("0328"),r=t("7135");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("22a7");var o,s=t("f0c5"),i=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=i.exports},"22a7":function(e,n,t){"use strict";var a=t("b376"),r=t.n(a);r.a},"64ee":function(e,n,t){"use strict";(function(e){t("0429");a(t("66fd"));var n=a(t("1d47"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},7135:function(e,n,t){"use strict";t.r(n);var a=t("b19c"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},b19c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,a,r,u,o){try{var s=e[u](o),i=s.value}catch(c){return void t(c)}s.done?n(i):Promise.resolve(i).then(a,r)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function s(e){u(o,a,r,s,i,"next",e)}function i(e){u(o,a,r,s,i,"throw",e)}s(void 0)}))}}var s={data:function(){return{refund:{expressType:-1,type:-1,reason:-1,images:[],goods:{},freight_type:0},expressList:["未收到货","已收到货"],typeList:["我要退款(无需退货)","退货退款"],reasonList:["不喜欢","空包裹","一直未送达","颜色/尺码不符","质量问题","少件漏发","假冒品牌"],amount:{total:0,freight:0,info:""}}},onLoad:function(e){this.loadData(e.id)},methods:{loadData:function(e){var n=this;return o(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.$api.get({url:"/wanlshop/refund/getRefundInfo",data:{id:e},success:function(e){n.refund=e;var t=e.goods.price*e.goods.number,a=parseInt(e.goods.freight_price);n.amount.freight=a,1==e.goods_number||2==e.freight_type?(n.amount.info="最多退款".concat(t+a,"元，包含运费").concat(a,"元"),n.amount.total=t+a):(n.amount.info="最多退".concat(t,"元，运费策略不含运费").concat(a,"元"),n.amount.total=t)}});case 1:case"end":return t.stop()}}),t)})))()},addData:function(){var e=this;return o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.refund.price<=0)){n.next=3;break}return e.$wanlshop.msg("价格不能为空"),n.abrupt("return",!1);case 3:if(!(e.refund.price>e.amount.total)){n.next=6;break}return e.$wanlshop.msg("退款不能超过￥"+e.amount.total+"元"),n.abrupt("return",!1);case 6:e.$api.post({url:"/wanlshop/refund/editRefund",data:{id:e.refund.id,expressType:e.refund.expressType,type:e.refund.type,reason:e.refund.reason,price:e.refund.price,images:e.refund.images,refund_content:e.refund.refund_content},success:function(n){e.$wanlshop.to("/pages/user/refund/details?id=".concat(n))}});case 7:case"end":return n.stop()}}),n)})))()},moneyInput:function(e){var n=e.detail.value;n>this.amount.total&&this.$wanlshop.msg("退款不能超过￥"+this.amount.total+"元"),this.refund.price=n},expressChange:function(e){this.refund.expressType=e.detail.value},typeChange:function(e){this.refund.type=e.detail.value},reasonChange:function(e){this.refund.reason=e.detail.value},chooseImage:function(n){var t=this;e.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(n){t.$api.get({url:"/wanlshop/common/uploadData",success:function(a){for(var r=0;r<n.tempFilePaths.length;r++)e.getImageInfo({src:n.tempFilePaths[r],success:function(e){t.$api.upload({url:a.uploadurl,filePath:e.path,name:"file",formData:"local"==a.storage?null:a.multipart,success:function(e){t.refund.images.push(e.fullurl)}})}})}})}})},viewImage:function(n){e.previewImage({urls:this.refund.images,current:this.refund.images[n]})},delImg:function(e){this.refund.images.splice(e,1)}}};n.default=s}).call(this,t("543d")["default"])},b376:function(e,n,t){}},[["64ee","common/runtime","common/vendor"]]]);