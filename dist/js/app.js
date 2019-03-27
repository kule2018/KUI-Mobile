(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/index.jsx":
/*!***********************!*\
  !*** ./app/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./app/router.jsx\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ \"./app/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props);\n    }\n  }));\n};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\index.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./app/index.jsx?");

/***/ }),

/***/ "./app/index.scss":
/*!************************!*\
  !*** ./app/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/index.scss?");

/***/ }),

/***/ "./app/router.jsx":
/*!************************!*\
  !*** ./app/router.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var kui_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kui-mobile */ \"./src/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\nvar Alert = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./containers/Alert */ \"./app/containers/Alert/index.jsx\"));\n});\nvar Badge = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./containers/Badge */ \"./app/containers/Badge/index.jsx\"));\n});\nvar Button = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./containers/Button */ \"./app/containers/Button/index.jsx\"));\n});\nvar Cell = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./containers/Cell */ \"./app/containers/Cell/index.jsx\"));\n});\nvar Collapse = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./containers/Collapse */ \"./app/containers/Collapse/index.jsx\"));\n});\nvar Home = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./containers/Home */ \"./app/containers/Home/index.jsx\"));\n});\nvar Icon = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./containers/Icon */ \"./app/containers/Icon/index.jsx\"));\n});\nvar Layout = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./containers/Layout */ \"./app/containers/Layout/index.jsx\"));\n});\nvar Tabs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./containers/Tabs */ \"./app/containers/Tabs/index.jsx\"));\n});\n\nvar Router = function Router(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(kui_mobile__WEBPACK_IMPORTED_MODULE_2__[\"AnimationRouter\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n    fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Home, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/alert\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Alert, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/badge\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Badge, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/button\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/cell\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cell, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/collapse\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Collapse, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/icon\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/layout\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, null);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/tabs\",\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tabs, null);\n    }\n  }));\n};\n\nvar _default = Router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Alert, \"Alert\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Badge, \"Badge\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Button, \"Button\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Cell, \"Cell\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Collapse, \"Collapse\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Icon, \"Icon\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Layout, \"Layout\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Tabs, \"Tabs\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(Router, \"Router\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\work\\\\git\\\\KUI-Mobile\\\\app\\\\router.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./app/router.jsx?");

/***/ })

},[["./app/index.jsx","runtime","vendors","kui-mobile"]]]);