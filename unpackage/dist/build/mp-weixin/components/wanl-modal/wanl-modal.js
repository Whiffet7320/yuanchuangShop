(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-modal/wanl-modal"],{"3e8c":function(t,e,n){},"5cad":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"6c7b":function(t,e,n){"use strict";var a=n("3e8c"),u=n.n(a);u.a},addf:function(t,e,n){"use strict";n.r(e);var a=n("5cad"),u=n("fa8b");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("6c7b");var l,i=n("f0c5"),c=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],l);e["default"]=c.exports},c722:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"WanlModal",props:{show:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},width:{type:String,default:"84%"},padding:{type:String,default:"40rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadein:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:Number(e.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};e.default=a},fa8b:function(t,e,n){"use strict";n.r(e);var a=n("c722"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-modal/wanl-modal-create-component',
    {
        'components/wanl-modal/wanl-modal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("addf"))
        })
    },
    [['components/wanl-modal/wanl-modal-create-component']]
]);
