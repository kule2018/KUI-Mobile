(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./app/containers/Icon/Basic.jsx":
/*!***************************************!*\
  !*** ./app/containers/Icon/Basic.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Demo; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var kui_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kui-mobile */ \"./src/index.ts\");\n\n\n\n\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar ButtonGroup = kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"Button\"].Group;\nvar outline = kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"].outline;\nvar filled = kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"].filled;\nvar icons = [{\n  key: 'direction',\n  title: '方向性图标'\n}, {\n  key: 'tips',\n  title: '提示建议性图标'\n}, {\n  key: 'edit',\n  title: '编辑类图标'\n}, {\n  key: 'data',\n  title: '数据类图标'\n}, {\n  key: 'common',\n  title: '网站通用图标'\n}, {\n  key: 'brand',\n  title: '品牌和标识'\n}];\n\nvar Demo =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Demo, _Component);\n\n  function Demo() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Demo);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {\n      iconTheme: '',\n      typeIndex: -1,\n      iconName: ''\n    };\n\n    _this.handleClick = function (typeIndex, key, theme) {\n      _this.setState({\n        typeIndex: typeIndex,\n        iconName: key,\n        iconTheme: theme\n      });\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Demo, [{\n    key: \"renderIcons\",\n    value: function renderIcons(theme) {\n      var _this$state = this.state,\n          typeIndex = _this$state.typeIndex,\n          iconName = _this$state.iconName,\n          iconTheme = _this$state.iconTheme;\n      var source = theme == 'outline' ? kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"presetIcon\"].outline : kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"presetIcon\"].filled;\n      var content = [];\n\n      for (var i = 0; i < icons.length; i++) {\n        var item = icons[i];\n        var items = [];\n        content.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"h3\", {\n          key: \"title_\".concat(i)\n        }, item.title, typeIndex === i && iconName && iconTheme === theme ? \":\".concat(iconName) : ''));\n\n        for (var key in source[item.key]) {\n          if (source[item.key].hasOwnProperty(key)) {\n            var element = source[item.key][key];\n            items.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"li\", {\n              key: key,\n              className: iconName === key ? 'active' : '',\n              onClick: this.handleClick.bind(this, i, key, theme)\n            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"Icon\"], {\n              type: key,\n              className: \"anticon\",\n              theme: theme\n            })));\n          }\n        }\n\n        content.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"ul\", {\n          className: \"icon-list\",\n          key: \"ul_\".concat(i)\n        }, items));\n      }\n\n      return content;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"Tabs\"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"TabPanel\"], {\n        tab: \"\\u7EBF\\u6846\\u98CE\\u683C\"\n      }, this.renderIcons('outline')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(kui_mobile__WEBPACK_IMPORTED_MODULE_6__[\"TabPanel\"], {\n        tab: \"\\u5B9E\\u5E95\\u98CE\\u683C\"\n      }, this.renderIcons('filled')));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Demo;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ButtonGroup, \"ButtonGroup\", \"D:\\\\GitHub\\\\KUI-Mobile\\\\app\\\\containers\\\\Icon\\\\Basic.jsx\");\n  reactHotLoader.register(outline, \"outline\", \"D:\\\\GitHub\\\\KUI-Mobile\\\\app\\\\containers\\\\Icon\\\\Basic.jsx\");\n  reactHotLoader.register(filled, \"filled\", \"D:\\\\GitHub\\\\KUI-Mobile\\\\app\\\\containers\\\\Icon\\\\Basic.jsx\");\n  reactHotLoader.register(icons, \"icons\", \"D:\\\\GitHub\\\\KUI-Mobile\\\\app\\\\containers\\\\Icon\\\\Basic.jsx\");\n  reactHotLoader.register(Demo, \"Demo\", \"D:\\\\GitHub\\\\KUI-Mobile\\\\app\\\\containers\\\\Icon\\\\Basic.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./app/containers/Icon/Basic.jsx?");

/***/ }),

/***/ "./app/containers/Icon/index.jsx":
/*!***************************************!*\
  !*** ./app/containers/Icon/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Page */ \"./app/components/Page/index.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ \"./app/components/Header/index.jsx\");\n/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Block */ \"./app/components/Block/index.jsx\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Basic */ \"./app/containers/Icon/Basic.jsx\");\n\n\n\n\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\nvar prefixCls = 'app-icon';\n\nvar View =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(View, _Component);\n\n  function View() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, View);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(View).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(View, [{\n    key: \"render\",\n    value: function render() {\n      var header = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        goBack: true\n      }, \"Icon \\u56FE\\u6807\");\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        header: header,\n        fixedHeader: true,\n        className: prefixCls\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Block__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        bodyPadding: false\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)));\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return View;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(prefixCls, \"prefixCls\", \"D:\\\\GitHub\\\\KUI-Mobile\\\\app\\\\containers\\\\Icon\\\\index.jsx\");\n  reactHotLoader.register(View, \"View\", \"D:\\\\GitHub\\\\KUI-Mobile\\\\app\\\\containers\\\\Icon\\\\index.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./app/containers/Icon/index.jsx?");

/***/ })

}]);