"use strict";
(self["webpackChunksdp_client"] = self["webpackChunksdp_client"] || []).push([["src_expose_Starred_jsx"],{

/***/ "./src/Starred.jsx":
/*!*************************!*\
  !*** ./src/Starred.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Starred)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/table/index.js");



const columns = [{
  title: 'name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'password',
  dataIndex: 'password',
  key: 'password'
}];
function Starred() {
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(data => data.listData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "sdp-client Starred"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    columns: columns,
    dataSource: data
  }));
}

/***/ }),

/***/ "./src/expose/Provider.jsx":
/*!*********************************!*\
  !*** ./src/expose/Provider.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.js");



function StoreProvider(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, props.children);
}

/***/ }),

/***/ "./src/expose/Starred.jsx":
/*!********************************!*\
  !*** ./src/expose/Starred.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Provider */ "./src/expose/Provider.jsx");
/* harmony import */ var _Starred__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Starred */ "./src/Starred.jsx");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Provider__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Starred__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");


const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


function listData(state = [{
  name: 'spd-name1',
  password: 'spd-password1'
}, {
  name: 'spd-name2',
  password: 'spd-password2'
}, {
  name: 'spd-name3',
  password: 'spd-password3'
}], action) {
  switch (action.type) {
    case 'CHANGE_LIST_DATA':
      {
        return action.data;
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  listData
}));

/***/ })

}]);