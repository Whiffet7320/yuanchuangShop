(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/addressManage"],{"1d78":function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{addressData:{name:"",mobile:"",default:0,country:"",province:"",city:"",citycode:"",district:"",adcode:"",formatted_address:"",address:"",address_name:"",location:""},addressList:{location:"",adcode:"",tips:{}},addressType:!0}},onLoad:function(t){var s="新增地址 ";"newadd"===t.type&&(this.addressData.default=1),"edit"===t.type&&(s="编辑地址",this.addressData=JSON.parse(t.data)),this.manageType=t.type,this.$wanlshop.title(s)},onNavigationBarButtonTap:function(){this.confirm()},methods:{switchChange:function(t){t.detail.value?this.addressData.default=1:this.addressData.default=0},btnClick:function(){this.$refs.wanlAddress.show()},successSelectAddress:function(t){console.log(t),this.addressData.country=t.country,this.addressData.province=t.province,this.addressData.city=t.city,this.addressData.citycode=t.citycode,this.addressData.district=t.district,this.addressData.formatted_address=t.formatted_address,this.addressData.location=t.location,this.addressData.adcode=t.adcode,this.addressList.location=t.location,this.addressList.adcode=t.adcode},getInputtips:function(s){var a=this,e=s.detail.value;e&&t.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:{key:this.$wanlshop.config("amapkey"),keywords:e,location:this.addressList.location,city:this.addressList.adcode},success:function(t){var s=[];t.data.tips.forEach((function(t){0==t.address.length&&(t.address="暂未收录地址",t.location="113.294701,22.666562"),s.push(t)})),a.addressList.tips=s}})},blurInputtips:function(t){var s=this;this.addressData.address=t.detail.value,setTimeout((function(){s.addressType=!0}),10)},confirmInputtips:function(t){this.addressType=!0},focusInputtips:function(t){this.addressType=!1},addressTisp:function(t){this.addressData.adcode=t.adcode,this.addressData.address=t.address,this.addressData.address_name=t.name,this.addressData.location=t.location,this.addressType=!0},confirm:function(){var t=this.addressData;t.name?/^1[0-9]{10,10}$/.test(t.mobile)?t.city?t.address?(this.$wanlshop.prePage().refreshList(t,this.manageType),this.$wanlshop.msg("地址".concat("edit"==this.manageType?"修改":"添加","成功")),this.$wanlshop.back(1)):this.$wanlshop.msg("请填写详细信息"):this.$wanlshop.msg("请选择地区"):this.$wanlshop.msg("请输入正确的手机号码"):this.$wanlshop.msg("请填写收货人姓名")}}};s.default=a}).call(this,a("543d")["default"])},"5b20":function(t,s,a){},9316:function(t,s,a){"use strict";(function(t){a("0429");e(a("66fd"));var s=e(a("ee0c"));function e(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,a("543d")["createPage"])},c70f:function(t,s,a){"use strict";a.d(s,"b",(function(){return d})),a.d(s,"c",(function(){return n})),a.d(s,"a",(function(){return e}));var e={wanlAddress:function(){return a.e("components/wanl-address/wanl-address").then(a.bind(null,"950a"))}},d=function(){var t=this,s=t.$createElement;t._self._c},n=[]},ebb6:function(t,s,a){"use strict";a.r(s);var e=a("1d78"),d=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,(function(){return e[t]}))}(n);s["default"]=d.a},ee0c:function(t,s,a){"use strict";a.r(s);var e=a("c70f"),d=a("ebb6");for(var n in d)"default"!==n&&function(t){a.d(s,t,(function(){return d[t]}))}(n);a("f595");var i,o=a("f0c5"),r=Object(o["a"])(d["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],i);s["default"]=r.exports},f595:function(t,s,a){"use strict";var e=a("5b20"),d=a.n(e);d.a}},[["9316","common/runtime","common/vendor"]]]);