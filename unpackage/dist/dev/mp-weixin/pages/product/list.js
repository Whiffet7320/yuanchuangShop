(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/product/list"],{

/***/ 173:
/*!************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wanlshop_v1.0.8/main.js?{"page":"pages%2Fproduct%2Flist"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/product/list.vue */ 174));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 174:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wanlshop_v1.0.8/pages/product/list.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=4906f7b7& */ 175);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 177);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ 179);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/product/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 175:
/*!************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wanlshop_v1.0.8/pages/product/list.vue?vue&type=template&id=4906f7b7& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=4906f7b7& */ 176);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_4906f7b7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 176:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wanlshop_v1.0.8/pages/product/list.vue?vue&type=template&id=4906f7b7& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    wanlEmpty: function() {
      return __webpack_require__.e(/*! import() | components/wanl-empty/wanl-empty */ "components/wanl-empty/wanl-empty").then(__webpack_require__.bind(null, /*! @/components/wanl-empty/wanl-empty.vue */ 1130))
    },
    wanlDivider: function() {
      return __webpack_require__.e(/*! import() | components/wanl-divider/wanl-divider */ "components/wanl-divider/wanl-divider").then(__webpack_require__.bind(null, /*! @/components/wanl-divider/wanl-divider.vue */ 1149))
    },
    wanlProduct: function() {
      return __webpack_require__.e(/*! import() | components/wanl-product/wanl-product */ "components/wanl-product/wanl-product").then(__webpack_require__.bind(null, /*! @/components/wanl-product/wanl-product.vue */ 1137))
    },
    uniDrawer: function() {
      return __webpack_require__.e(/*! import() | components/uni-drawer/uni-drawer */ "components/uni-drawer/uni-drawer").then(__webpack_require__.bind(null, /*! @/components/uni-drawer/uni-drawer.vue */ 1163))
    },
    uniLoadMore: function() {
      return __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 1109))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      return _vm.$wanlshop.back(1)
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 177:
/*!******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wanlshop_v1.0.8/pages/product/list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 178);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 178:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wanlshop_v1.0.8/pages/product/list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      wanlsys: this.$wanlshop.wanlsys(),
      height: this.$wanlshop.wanlsys().windowHeight,
      WanlScroll: 0, //记录页面滚动
      scrollStype: false, //滚动状态
      filterIndex: 0, //
      priceOrder: 0, //1 价格从低到高 2价格从高到低
      liststyle: 'col-2-20', //列表样式
      goodsData: [], //商品列表数据
      showRight: false,
      category: '',
      empty: '没有找到任何宝贝',
      params: {
        search: '',
        sort: 'weigh',
        order: 'asc',
        page: 1,
        filter: {},
        op: {} },

      likeData: [],
      drawerType: {
        attribute: false,
        first: false,
        city: false },

      drawerData: {
        price: {
          low: '',
          high: '' },

        brand: [],
        attribute: [],
        sameCity: {
          name: ' 定位中..',
          choice: false },

        city: [
        { name: '北京', choice: false },
        { name: '天津', choice: false },
        { name: '河北', choice: false },
        { name: '山西', choice: false },
        { name: '内蒙古', choice: false },
        { name: '山东', choice: false },
        { name: '江苏', choice: false },
        { name: '上海', choice: false },
        { name: '浙江', choice: false },
        { name: '安徽', choice: false },
        { name: '福建', choice: false },
        { name: '江西', choice: false },
        { name: '河南', choice: false },
        { name: '湖南', choice: false },
        { name: '湖北', choice: false },
        { name: '广东', choice: false },
        { name: '广西', choice: false },
        { name: '海南', choice: false },
        { name: '辽宁', choice: false },
        { name: '吉林', choice: false },
        { name: '黑龙江', choice: false },
        { name: '四川', choice: false },
        { name: '贵州', choice: false },
        { name: '云南', choice: false },
        { name: '重庆', choice: false },
        { name: '宁夏', choice: false },
        { name: '青海', choice: false },
        { name: '陕西', choice: false },
        { name: '甘肃', choice: false },
        { name: '新疆', choice: false },
        { name: '西藏', choice: false },
        { name: '香港', choice: false },
        { name: '澳门', choice: false },
        { name: '台湾', choice: false }] },


      drawerParams: {},
      reload: false, //判断是否上拉
      last_page: 0,
      status: 'loading',
      contentText: {
        contentdown: '',
        contentrefresh: '正在加载..',
        contentnomore: '没有更多数据了' } };


  },
  onLoad: function onLoad(option) {var _this = this;
    if (option.search) {
      //如果搜索存在
      this.params.search = option.search;
      this.drawerParams.search = option.search;
    } else if (option.data) {
      var data = JSON.parse(option.data);
      this.drawerParams.category_id = data.category_id;
      this.category = data.category_name;
      this.params.filter.category_id = data.category_id;
      this.params.op.category_id = 'in';
    } else {
      console.log('调试模式');
    }
    // 加载位置，后续版本开启加载写入全局
    uni.getLocation({
      type: 'wgs84',
      geocode: true,
      success: function success(mres) {
        uni.request({
          url: 'https://restapi.amap.com/v3/geocode/regeo',
          data: {
            key: _this.$wanlshop.config('amapkey'),
            location: mres.longitude + ',' + mres.latitude },

          success: function success(res) {
            if (res.statusCode == 200) {
              // console.log(res);
              var address = res.data.regeocode.addressComponent;
              _this.drawerData.sameCity.name = address.province;
            }
          } });

      } });

    this.loadData();
    if (this.goodsData.length == 0) {
      this.loadlikeData();
    }
  },
  // 监听上拉
  onPullDownRefresh: function onPullDownRefresh() {
    this.params.page = 1;
    this.reload = true;
    this.loadData();
  },
  // 下拉刷新
  onReachBottom: function onReachBottom() {
    if (this.params.page >= this.last_page) {
      this.status = 'noMore';
    } else {
      this.reload = false;
      this.contentText.contentdown = '上拉显示更多';
      this.params.page = this.params.page + 1; //页码+1
      this.status = 'loading';
      this.loadData();
    }
  },
  // 监听滚动
  onPageScroll: function onPageScroll(object) {
    if (object.scrollTop > this.WanlScroll) {
      this.scrollStype = false;
    } else {
      this.scrollStype = true;
    }
    if (object.scrollTop < 0) {
      this.scrollStype = false;
    }
    this.WanlScroll = object.scrollTop;
  },
  // 监听返回
  onUnload: function onUnload() {
    if (this.showRight) {
      this.closeDrawer();
      return true;
    }
  },
  methods: {
    //异步加载商品列表
    loadData: function loadData() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this2.$api.get({
                  url: '/wanlshop/product/lists',
                  data: _this2.params,
                  success: function success(res) {
                    uni.stopPullDownRefresh();
                    _this2.status = 'more';
                    _this2.goodsData = _this2.reload ? res.data : _this2.goodsData.concat(res.data); //数据 追加
                    if (res.data.length == 0) {
                      _this2.empty = "\u6CA1\u627E\u5230\u4E0E\u201C".concat(_this2.category).concat(_this2.params.search, "\"\u76F8\u5173\u7684\u5B9D\u8D1D");
                    }
                    _this2.params.page = res.current_page; //当前页码
                    _this2.last_page = res.last_page; //总页码
                  } });case 1:case "end":return _context.stop();}}}, _callee);}))();

    },
    // 滚动底部加载猜你喜欢
    loadlikeData: function loadlikeData() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                _this3.$api.get({
                  url: '/wanlshop/product/likes?pages=cart',
                  success: function success(res) {
                    _this3.likeData = res.data; //评论数据 追加
                  } });case 1:case "end":return _context2.stop();}}}, _callee2);}))();

    },
    // 加载侧边栏数据
    loadDrawer: function loadDrawer() {var _this4 = this;
      this.$api.get({
        url: '/wanlshop/product/drawer',
        data: this.drawerParams,
        success: function success(res) {
          var brand = [],
          attribute = [];
          res.brand.forEach(function (item) {
            var brandData = {
              id: item.id,
              name: item.name,
              fold: false, // 展开
              choice: false };

            brand.push(brandData);
          });
          res.attribute.forEach(function (item) {
            var value = [];
            item.value.forEach(function (vo) {
              var valueData = {
                name: vo.name,
                choice: false };

              value.push(valueData);
            });
            var attributeData = {
              name: item.name,
              value: value,
              fold: false };

            attribute.push(attributeData);
          });
          _this4.drawerData.brand = brand;
          _this4.drawerData.attribute = attribute;
        } });

    },
    //筛选点击
    tabClick: function tabClick(index) {
      if (this.filterIndex === index && index !== 3) {
        return;
      }
      this.filterIndex = index;
      if (index === 3) {
        this.priceOrder = this.priceOrder === 1 ? 2 : 1;
      } else {
        this.priceOrder = 0;
      }

      // 排序方式
      if (index === 0) {
        this.params.sort = 'weigh';
        this.params.order = 'desc';
      }
      if (index === 1) {
        this.params.sort = 'sales';
        this.params.order = 'desc';
      }
      if (index === 2) {
        this.params.sort = 'createtime';
        this.params.order = 'desc';
      }
      if (index === 3 && this.priceOrder === 1) {
        this.params.sort = 'price';
        this.params.order = 'desc';
      }
      if (index === 3 && this.priceOrder === 2) {
        this.params.sort = 'price';
        this.params.order = 'asc';
      }
      this.status = 'loading';
      this.params.page = 1;
      this.reload = true;
      this.loadData();
      uni.pageScrollTo({
        duration: 300,
        scrollTop: 0 });

    },
    // 打开抽屉，并且加载品牌和类目属性
    showDrawer: function showDrawer() {
      this.showRight = true;
      if (!this.drawerType.first) {
        this.loadDrawer();
        this.drawerType.first = true;
      }
    },
    // 点击抽屉
    onDraver: function onDraver(e) {
      var index = e.currentTarget.dataset.attribute,
      key = e.currentTarget.dataset.key;
      if (key == 'brand' || key == 'city') {
        // 取消所有选项,选中下面
        this.drawerData[key].forEach(function (item, keys) {
          keys != index ? item.choice = false : '';
        });
        // 取消同城
        this.drawerData.sameCity.choice = false;
        this.drawerData[key][index].choice = !this.drawerData[key][index].choice;
      } else if (key == 'sameCity') {
        // 取消所有城市选项
        this.drawerData.city.forEach(function (item) {
          item.choice = false;
        });
        this.drawerData.sameCity.choice = !this.drawerData.sameCity.choice;
      } else {
        // 取消所有选项,选中下面
        this.drawerData.attribute[index].value.forEach(function (item, keys) {
          keys != key ? item.choice = false : '';
        });
        this.drawerData.attribute[index].value[key].choice = !this.drawerData.attribute[index].value[key].choice;
      }
    },
    // 提交抽屉
    onDrawerTo: function onDrawerTo() {
      // 查询价格
      if (this.drawerData.price.low != '' && this.drawerData.price.high != '') {
        this.params.filter.price = this.drawerData.price.low + ',' + this.drawerData.price.high;
        this.params.op.price = 'BETWEEN';
      } else {
        delete this.params.filter.price;
        delete this.params.op.price;
      }
      // 查询地址
      var cityData = '';
      this.drawerData.city.forEach(function (item) {
        if (item.choice) {
          cityData = item.name;
        }
      });
      if (cityData) {
        this.params.filter['shop.city'] = '%' + cityData + '%';
        this.params.op['shop.city'] = 'LIKE';
      } else if (this.drawerData.sameCity.choice) {
        this.params.filter['shop.city'] = this.drawerData.sameCity.name;
        this.params.op['shop.city'] = 'LIKE';
      } else {
        delete this.params.filter['shop.city'];
        delete this.params.op['shop.city'];
      }
      // 查询品牌
      var brandData = '';
      this.drawerData.brand.forEach(function (item) {
        if (item.choice) {
          brandData = item.id;
        }
      });
      if (brandData) {
        this.params.filter.brand_id = brandData;
        this.params.op.brand_id = '=';
      } else {
        delete this.params.filter.brand_id;
        delete this.params.op.brand_id;
      }
      // 查询属性
      var attributeData = [];
      this.drawerData.attribute.forEach(function (item, index) {
        // item.name
        item.value.forEach(function (vo, index) {
          if (vo.choice) {
            attributeData.push('%' + vo.name + '%');
          }
        });
      });
      if (attributeData) {
        this.params.filter.category_attribute = attributeData.join(',');
        this.params.op.category_attribute = 'LIKE';
      } else {
        delete this.params.filter.category_attribute;
        delete this.params.op.category_attribute;
      }
      this.status = 'loading';
      this.loadData();
      this.closeDrawer();
    },
    // 重置抽屉
    onDrawerReset: function onDrawerReset() {
      this.drawerData.city.forEach(function (item) {
        item.choice = false;
      });
      this.drawerData.sameCity.choice = false;
      this.loadDrawer();
    },
    // 点击抽屉标题
    onDraverTitle: function onDraverTitle(e) {
      var stype = e.currentTarget.dataset.key;
      if (stype === 'city') {
        this.drawerType[stype] = !this.drawerType[stype];
      } else {
        this.drawerData.attribute[stype].fold = !this.drawerData.attribute[stype].fold;
      }
    },
    // 关闭抽屉
    closeDrawer: function closeDrawer() {
      this.showRight = false;
    },
    search: function search() {
      this.$wanlshop.to('/pages/product/search', 'fade-in', 100);
    },
    editListstyle: function editListstyle() {
      this.liststyle = this.liststyle == 'col-1-10' ? 'col-2-20' : 'col-1-10';
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 179:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wanlshop_v1.0.8/pages/product/list.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=css& */ 180);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 180:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wanlshop_v1.0.8/pages/product/list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[173,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/list.js.map