"use strict";
(self["webpackChunkcomponent_app"] = self["webpackChunkcomponent_app"] || []).push([["src_Button_jsx"],{

/***/ "./src/Button.jsx":
/*!************************!*\
  !*** ./src/Button.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const styleMapping = {
  primary: {
    marginLeft: '10px',
    color: '#fff',
    backgroundColor: '#409eff',
    borderColor: '#409eff',
    padding: '12px 20px',
    fontSize: '14px',
    borderRadius: '4px',
    outline: 'none',
    border: '1px solid #dcdfe6',
    cursor: 'pointer'
  },
  warning: {
    marginLeft: '10px',
    color: '#fff',
    backgroundColor: '#e6a23c',
    borderColor: '#e6a23c',
    padding: '12px 20px',
    fontSize: '14px',
    borderRadius: '4px',
    outline: 'none',
    border: '1px solid #dcdfe6',
    cursor: 'pointer'
  }
};
class Button extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var type = this.props.type || 'primary';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      style: styleMapping[type]
    }, type, " Button");
  }

}

/***/ })

}]);