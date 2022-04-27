"use strict";
(self["webpackChunkmain_app"] = self["webpackChunkmain_app"] || []).push([["bootstrap_js-data_image_svg_xml_base64_PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMC-d6a17f"],{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./Layout.jsx");

 // import SdpPage1 from 'sdp-client/Page1';
// import SdpPage2 from 'sdp-client/Page2';
// import SdpPage3 from 'sdp-client/Page3';
// import PwmPage1 from 'pwm-client/Page1';
// import PwmPage2 from 'pwm-client/Page2';
// import PwmPage3 from 'pwm-client/Page3';

const SdpPage1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_sdp-client_Page1").then(__webpack_require__.t.bind(__webpack_require__, /*! sdp-client/Page1 */ "webpack/container/remote/sdp-client/Page1", 23)));
const SdpPage2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_sdp-client_Page2").then(__webpack_require__.t.bind(__webpack_require__, /*! sdp-client/Page2 */ "webpack/container/remote/sdp-client/Page2", 23)));
const SdpPage3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_sdp-client_Page3").then(__webpack_require__.t.bind(__webpack_require__, /*! sdp-client/Page3 */ "webpack/container/remote/sdp-client/Page3", 23)));
const PwmPage1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_pwm-client_Page1").then(__webpack_require__.t.bind(__webpack_require__, /*! pwm-client/Page1 */ "webpack/container/remote/pwm-client/Page1", 23)));
const PwmPage2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_pwm-client_Page2").then(__webpack_require__.t.bind(__webpack_require__, /*! pwm-client/Page2 */ "webpack/container/remote/pwm-client/Page2", 23)));
const PwmPage3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_pwm-client_Page3").then(__webpack_require__.t.bind(__webpack_require__, /*! pwm-client/Page3 */ "webpack/container/remote/pwm-client/Page3", 23)));

function LoadCompoent(props) {
  const {
    activeKey,
    menuActiveKey
  } = props;

  if (activeKey === "1") {
    if (menuActiveKey === "1") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
        fallback: "loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SdpPage1, null));
    } else if (menuActiveKey === "2") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
        fallback: "loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SdpPage2, null));
    } else if (menuActiveKey === "3") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
        fallback: "loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SdpPage3, null));
    }
  } else if (activeKey === "2") {
    if (menuActiveKey === "1") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
        fallback: "loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PwmPage1, null));
    } else if (menuActiveKey === "2") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
        fallback: "loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PwmPage2, null));
    } else if (menuActiveKey === "3") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
        fallback: "loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PwmPage3, null));
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "404");
}

class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadCompoent, null));
  }

}

/***/ }),

/***/ "./Layout.jsx":
/*!********************!*\
  !*** ./Layout.jsx ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/layout/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");



const {
  Header,
  Sider,
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_2__["default"];
const data = [[], [{
  key: "1",
  name: 'Peronal options1'
}, {
  key: "2",
  name: 'Peronal options2'
}, {
  key: "3",
  name: 'Peronal options3'
}], [{
  key: "1",
  name: 'ACME Company options1'
}, {
  key: "2",
  name: 'ACME Company options2'
}, {
  key: "3",
  name: 'ACME Company options3'
}], [{
  key: "1",
  name: 'Jump Crypto options1'
}, {
  key: "2",
  name: 'Jump Crypto options2'
}, {
  key: "3",
  name: 'Jump Crypto options3'
}]];
function BaseLayout(props) {
  const [activeKey, setActiveKey] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("1");
  const [menuActiveKey, setMenuActiveKey] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("1");

  function onSelect(value) {
    setActiveKey(value);
  }

  function onMenuSelect(value) {
    setMenuActiveKey(value.key);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSelect: onSelect,
    style: {
      width: '240px'
    },
    defaultValue: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Option, {
    key: "1"
  }, "Peronal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Option, {
    key: "2"
  }, "ACME Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_3__["default"].Option, {
    key: "3"
  }, "Jump Crypto"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Sider, {
    theme: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSelect: onMenuSelect
  }, data[activeKey].map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
      key: item.key
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(props.children, child => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, { ...child.porps,
      activeKey,
      menuActiveKey
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null, "Footer"));
}

/***/ }),

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./App.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('app'));

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ })

}]);