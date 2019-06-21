webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Polls.js":
/*!*****************************!*\
  !*** ./components/Polls.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Col */ "../node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "../node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Poll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Poll */ "./components/Poll.js");

// ./src/components/Polls.js



function Polls(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Latest Polls")), props.polls && props.polls.map(function (poll) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: poll._id,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Poll__WEBPACK_IMPORTED_MODULE_3__["default"], {
      poll: poll
    }));
  }), !props.polls && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 12
  }, "Loading..."));
}

/***/ })

})
//# sourceMappingURL=index.js.80ab5a82e041decf6971.hot-update.js.map