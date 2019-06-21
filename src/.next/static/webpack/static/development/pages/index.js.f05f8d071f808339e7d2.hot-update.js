webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "../node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "../node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "../node_modules/is-what/dist/index.esm.js":
false,

/***/ "../node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "../node_modules/merge-anything/dist/index.esm.js":
false,

/***/ "../node_modules/object-assign/index.js":
false,

/***/ "../node_modules/process/browser.js":
false,

/***/ "../node_modules/prop-types/checkPropTypes.js":
false,

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "../node_modules/prop-types/index.js":
false,

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "../node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "../node_modules/react-is/index.js":
false,

/***/ "../node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "../node_modules/stylis-rule-sheet/index.js":
false,

/***/ "../node_modules/stylis/stylis.min.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "../node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Polls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Polls */ "./components/Polls.js");



// ./src/pages/index.js
// import styled from "styled-components";




function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Thoughts, {
    thoughts: props.thoughts
  }));
}

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, baseURL, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            baseURL = req ? "".concat(req.protocol, "://").concat(req.get("Host")) : "";
            _context.next = 4;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat(baseURL, "/api/thoughts"));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              thoughts: _context.t0
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f05f8d071f808339e7d2.hot-update.js.map