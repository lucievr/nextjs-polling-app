webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "../node_modules/@restart/context/forwardRef.js":
/*!******************************************************!*\
  !*** ../node_modules/@restart/context/forwardRef.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}

/***/ }),

/***/ "../node_modules/classnames/index.js":
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../node_modules/dom-helpers/util/camelize.js":
/*!****************************************************!*\
  !*** ../node_modules/dom-helpers/util/camelize.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!****************************************************************!*\
  !*** ../node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "../node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "../node_modules/react-bootstrap/Card.js":
/*!***********************************************!*\
  !*** ../node_modules/react-bootstrap/Card.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "../node_modules/react-bootstrap/ThemeProvider.js");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./utils/createWithBsPrefix */ "../node_modules/react-bootstrap/utils/createWithBsPrefix.js"));

var _divWithClassName = _interopRequireDefault(__webpack_require__(/*! ./utils/divWithClassName */ "../node_modules/react-bootstrap/utils/divWithClassName.js"));

var _CardContext = _interopRequireDefault(__webpack_require__(/*! ./CardContext */ "../node_modules/react-bootstrap/CardContext.js"));

var _CardImg = _interopRequireDefault(__webpack_require__(/*! ./CardImg */ "../node_modules/react-bootstrap/CardImg.js"));

var DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var DivStyledAsH6 = (0, _divWithClassName.default)('h6');
var CardBody = (0, _createWithBsPrefix.default)('card-body');
var defaultProps = {
  body: false
};

var Card = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card');
  var cardContext = (0, _react.useMemo)(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return _react.default.createElement(_CardContext.default.Provider, {
    value: cardContext
  }, _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? _react.default.createElement(CardBody, null, children) : children));
});

Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg.default;
Card.Title = (0, _createWithBsPrefix.default)('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
Card.Text = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
Card.Header = (0, _createWithBsPrefix.default)('card-header');
Card.Footer = (0, _createWithBsPrefix.default)('card-footer');
Card.ImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var _default = Card;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/react-bootstrap/CardContext.js":
/*!******************************************************!*\
  !*** ../node_modules/react-bootstrap/CardContext.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _default = _react.default.createContext(null);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/react-bootstrap/CardImg.js":
/*!**************************************************!*\
  !*** ../node_modules/react-bootstrap/CardImg.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "../node_modules/react-bootstrap/ThemeProvider.js");

var defaultProps = {
  variant: null
};

var CardImg = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "variant", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card-img');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});

CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
var _default = CardImg;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/react-bootstrap/Col.js":
/*!**********************************************!*\
  !*** ../node_modules/react-bootstrap/Col.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "../node_modules/react-bootstrap/ThemeProvider.js");

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

var Col = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span, offset, order;

    if (propValue != null && typeof propValue === 'object') {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span != null) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: _classnames.default.apply(void 0, [className].concat(spans, classes))
  }));
});

Col.displayName = 'Col';
var _default = Col;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/react-bootstrap/Container.js":
/*!****************************************************!*\
  !*** ../node_modules/react-bootstrap/Container.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "../node_modules/react-bootstrap/ThemeProvider.js");

var defaultProps = {
  fluid: false
};

var Container = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? prefix + "-fluid" : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/react-bootstrap/Row.js":
/*!**********************************************!*\
  !*** ../node_modules/react-bootstrap/Row.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "../node_modules/react-bootstrap/ThemeProvider.js");

var Row =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        noGutters = _this$props.noGutters,
        _this$props$as = _this$props.as,
        Component = _this$props$as === void 0 ? 'div' : _this$props$as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "noGutters", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, noGutters && 'no-gutters')
    }));
  };

  return Row;
}(_react.default.Component);

Row.defaultProps = {
  noGutters: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Row, 'row');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/react-bootstrap/ThemeProvider.js":
/*!********************************************************!*\
  !*** ../node_modules/react-bootstrap/ThemeProvider.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _forwardRef = _interopRequireDefault(__webpack_require__(/*! @restart/context/forwardRef */ "../node_modules/@restart/context/forwardRef.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var ThemeContext = _react.default.createContext(new Map());

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref, ref) {
    var props = (0, _extends2.default)({}, _ref);
    props[forwardRefAs] = ref;
    var prefixes = (0, _react.useContext)(ThemeContext);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      // eslint-disable-next-line react/prop-types
      bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../node_modules/react-bootstrap/utils/createWithBsPrefix.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-bootstrap/utils/createWithBsPrefix.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _camelize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/camelize */ "../node_modules/dom-helpers/util/camelize.js"));

var _ThemeProvider = __webpack_require__(/*! ../ThemeProvider */ "../node_modules/react-bootstrap/ThemeProvider.js");

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = _react.default.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/react-bootstrap/utils/divWithClassName.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-bootstrap/utils/divWithClassName.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _default = function _default(className) {
  return _react.default.forwardRef(function (p, ref) {
    return _react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, className)
    }));
  });
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/whatwg-fetch/fetch.js":
/*!*********************************************!*\
  !*** ../node_modules/whatwg-fetch/fetch.js ***!
  \*********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./components/Poll.js":
/*!****************************!*\
  !*** ./components/Poll.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Poll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "../node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);

// ./src/components/Poll.js

function Poll(_ref) {
  var poll = _ref.poll;
  var cardStyle = {
    marginTop: "15px"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bg: "secondary",
    text: "white",
    style: cardStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, null, poll.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, null, "by ", poll.author)));
}

/***/ }),

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Latest Thoughts")), props.polls && props.polls.map(function (poll) {
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

/***/ }),

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "../node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Polls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Polls */ "./components/Polls.js");



// ./src/pages/index.js




var Rocket = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Rocket",
  componentId: "sc-1xcbhpx-0"
})(["text-align:center;"]);

function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Thoughts, {
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
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()("".concat(baseURL, "/api/thoughts"));

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
//# sourceMappingURL=index.js.cbac432a55b01d67c4da.hot-update.js.map