(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-address/wanl-address"],{4952:function(t,e,a){"use strict";var i=a("5842"),n=a.n(i);n.a},5842:function(t,e,a){},6931:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.dataList,(function(e,a){var i=t.__get_orig(e),n=t.__map(t.cityAreaArray[a],(function(e,i){var n=t.__get_orig(e),s=t.selectIndexArr[a]===i?t.$wanlshop.appstc("/common/img_gou3x.png"):null;return{$orig:n,g0:s}}));return{$orig:i,l0:n}})));t.$mp.data=Object.assign({},{$root:{l1:a}})},s=[]},"950a":function(t,e,a){"use strict";a.r(e);var i=a("6931"),n=a("b54e");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("4952");var r,c=a("f0c5"),o=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=o.exports},b54e:function(t,e,a){"use strict";a.r(e);var i=a("c59d"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},c59d:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"WanlAddress",data:function(){return{isShow:!1,isShowMask:!1,dataList:["请选择"],currentIndex:0,cityData:{},cityAreaArray:[],selectIndexArr:[],indicatorStyleLeft:16}},created:function(){var e=this;t.request({url:"".concat(this.$wanlshop.config("appurl"),"/wanlshop/common/area"),success:function(t){t.data.data.length>0?(e.cityData=t.data.data,e.cityAreaArray.push(t.data.data)):e.$wanlshop.msg("数据表area为空，请在后台安装示例插件")}})},mounted:function(){},methods:{show:function(){this.isShow=!0,this.isShowMask=!0},hidden:function(){this.isShow=!1,this.isShowMask=!1},select_top_item_click:function(t){this.currentIndex=t,this.changeIndicator(t)},swiperChange:function(t){var e=t.detail.current;this.currentIndex=e,this.changeIndicator(e)},changeIndicator:function(e){var a=this,i=30,n=t.createSelectorQuery().in(this),s=n.selectAll(".select_top_item .address_value");s.fields({size:!0,scrollOffset:!1},(function(t){var n=10+80*e+t[e]["width"]/2,s=n-i/2;a.indicatorStyleLeft=s})).exec()},address_item_click:function(e,a){var i=this;if(this.selectIndexArr.splice(e,5,a),0===e){var n=this.cityData[a],s=n.name;this.dataList.splice(e,5,s),this.dataList.splice(e+1,0,"请选择"),this.cityAreaArray.splice(e+1,1,n["city"]),setTimeout((function(){i.currentIndex=1,i.changeIndicator(1)}),50)}else{var r=this.cityAreaArray[e],c=r[a],o=c["area"];if(void 0!==o){var u=c.name;this.dataList.splice(e,5,u),this.dataList.splice(e+1,0,"请选择"),this.cityAreaArray.splice(e+1,1,c["area"]),setTimeout((function(){i.currentIndex=e+1,i.changeIndicator(e+1)}),50)}else{var d=c.name;this.dataList.splice(e,1,d),t.request({url:"https://restapi.amap.com/v3/geocode/geo",data:{address:this.dataList.join(""),key:this.$wanlshop.config("amapkey")},success:function(t){i.$emit("selectAddress",t.data.geocodes[0]),i.isShow=!1,i.isShowMask=!1}})}}}}};e.default=a}).call(this,a("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-address/wanl-address-create-component',
    {
        'components/wanl-address/wanl-address-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("950a"))
        })
    },
    [['components/wanl-address/wanl-address-create-component']]
]);