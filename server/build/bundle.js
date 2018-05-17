/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _ProductPage = __webpack_require__(11);

var _ProductPage2 = _interopRequireDefault(_ProductPage);

var _NotFoundPage = __webpack_require__(17);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    component: _App2.default,
    routes: [{
        key: "product",
        numberOfParamsInUrl: 1,
        path: "/product/:productKey",
        component: _ProductPage2.default
    }, {
        path: "*",
        component: _NotFoundPage2.default,
        exact: true
    }]
}];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_PRODUCT = exports.FETCH_PRODUCT = "fetch_product";
var fetchProduct = exports.fetchProduct = function fetchProduct(productKey) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get("/product?productKey=" + productKey);

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_PRODUCT,
                                payload: res
                            });

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var SET_SELECTED_PRODUCT_CONTENT = exports.SET_SELECTED_PRODUCT_CONTENT = "set_selected_product_content";
var setSelectedContentByIndex = exports.setSelectedContentByIndex = function setSelectedContentByIndex(index) {
    return function (dispatch) {

        dispatch({
            type: SET_SELECTED_PRODUCT_CONTENT,
            index: index
        });
    };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(18);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _renderer = __webpack_require__(19);

var _renderer2 = _interopRequireDefault(_renderer);

var _storeHelpers = __webpack_require__(22);

var _storeHelpers2 = _interopRequireDefault(_storeHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:8765', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(_express2.default.static('public'));
app.use('/images', _express2.default.static('images'));
app.get("*", function (req, res) {

  var store = (0, _storeHelpers2.default)(req);

  (0, _storeHelpers.loadStore)(_Routes2.default, { req: req, res: res }, store).then(function () {

    res.send((0, _renderer2.default)(req, store));
  }).catch(function (err) {

    res.status(500).send("Sorry our site is temporarily down...");
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = exports.ProductPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(2);

var _reactRedux = __webpack_require__(4);

var _index = __webpack_require__(5);

var _NavigationBanner = __webpack_require__(12);

var _NavigationBanner2 = _interopRequireDefault(_NavigationBanner);

var _ProductContent = __webpack_require__(14);

var _ProductContent2 = _interopRequireDefault(_ProductContent);

var _ProductContentShuffler = __webpack_require__(16);

var _ProductContentShuffler2 = _interopRequireDefault(_ProductContentShuffler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductPage = exports.ProductPage = function (_Component) {
    _inherits(ProductPage, _Component);

    function ProductPage(props) {
        _classCallCheck(this, ProductPage);

        var _this = _possibleConstructorReturn(this, (ProductPage.__proto__ || Object.getPrototypeOf(ProductPage)).call(this, props));

        _this.handleShuffleContent = function (type) {
            var _this$props = _this.props,
                setSelectedContentByIndex = _this$props.actions.setSelectedContentByIndex,
                content = _this$props.product.content,
                selectedContentIndex = _this$props.selectedContentIndex;


            var newSelectedContentIndex = 0;
            if (type === _ProductContentShuffler.shuffleTypes.next) {
                newSelectedContentIndex = selectedContentIndex >= content.length - 1 ? selectedContentIndex : selectedContentIndex + 1;
            } else {
                newSelectedContentIndex = selectedContentIndex <= 0 ? selectedContentIndex : selectedContentIndex - 1;
            }

            setSelectedContentByIndex(newSelectedContentIndex);
        };

        _this.handleToggleShowProductContent = function () {
            var isProductContentVisible = _this.state.isProductContentVisible;


            _this.setState({
                isProductContentVisible: !isProductContentVisible
            });
        };

        _this.state = {
            isProductContentVisible: true
        };
        return _this;
    }

    _createClass(ProductPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _props = this.props,
                fetchProduct = _props.actions.fetchProduct,
                params = _props.match.params;


            fetchProduct(params.productKey);
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                _props2$product = _props2.product,
                productTitle = _props2$product.title,
                content = _props2$product.content,
                selectedContentIndex = _props2.selectedContentIndex;
            var isProductContentVisible = this.state.isProductContentVisible;
            var _content$selectedCont = content[selectedContentIndex],
                thumbnail = _content$selectedCont.thumbnail,
                description = _content$selectedCont.description;

            var isNotFirstContentDisplayed = selectedContentIndex !== 0;
            var isNotLastContentDisplayed = selectedContentIndex !== content.length - 1;
            var nextContentTitle = isNotLastContentDisplayed ? content[selectedContentIndex + 1] : "";

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_NavigationBanner2.default, { productTitle: productTitle, isProductContentVisible: isProductContentVisible, handleToggleShowProductContent: this.handleToggleShowProductContent }),
                _react2.default.createElement(_ProductContent2.default, { thumbnail: thumbnail, description: description }),
                _react2.default.createElement(_ProductContentShuffler2.default, {
                    isNotFirstContentDisplayed: isNotFirstContentDisplayed,
                    isNotLastContentDisplayed: isNotLastContentDisplayed,
                    nextContentTitle: nextContentTitle,
                    handleShuffleContent: this.handleShuffleContent })
            );
        }
    }]);

    return ProductPage;
}(_react.Component);

ProductPage.needs = [_index.fetchProduct];
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
    var _state$productStore = state.productStore,
        product = _state$productStore.product,
        selectedContentIndex = _state$productStore.selectedContentIndex;


    return {
        product: product,
        selectedContentIndex: selectedContentIndex
    };
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {

    return {
        actions: (0, _redux.bindActionCreators)({
            setSelectedContentByIndex: _index.setSelectedContentByIndex,
            fetchProduct: _index.fetchProduct
        }, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductPage);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICON_COLLAPSE = exports.ICON_EXPAND = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _navigationBanner = __webpack_require__(13);

var _navigationBanner2 = _interopRequireDefault(_navigationBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICON_EXPAND = exports.ICON_EXPAND = "expand_more";
var ICON_COLLAPSE = exports.ICON_COLLAPSE = "expand_less";

var NavigationBanner = function (_Component) {
    _inherits(NavigationBanner, _Component);

    function NavigationBanner() {
        _classCallCheck(this, NavigationBanner);

        return _possibleConstructorReturn(this, (NavigationBanner.__proto__ || Object.getPrototypeOf(NavigationBanner)).apply(this, arguments));
    }

    _createClass(NavigationBanner, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                productTitle = _props.productTitle,
                handleToggleShowProductContent = _props.handleToggleShowProductContent,
                isProductContentVisible = _props.isProductContentVisible;


            var toggleShowButtonIconDirection = isProductContentVisible ? ICON_COLLAPSE : ICON_EXPAND;
            return _react2.default.createElement(
                "nav",
                { className: _navigationBanner2.default.root },
                _react2.default.createElement(
                    "h6",
                    null,
                    _react2.default.createElement(
                        "a",
                        { "data-id": "productTitle", href: "/", className: "brand-logo left" },
                        productTitle
                    )
                ),
                _react2.default.createElement(
                    "a",
                    { "data-id": "toggleShowProductContentButton", onClick: function onClick() {
                            return handleToggleShowProductContent();
                        }, role: "button", className: "right" },
                    _react2.default.createElement(
                        "i",
                        { className: "material-icons" },
                        toggleShowButtonIconDirection
                    )
                )
            );
        }
    }]);

    return NavigationBanner;
}(_react.Component);

exports.default = NavigationBanner;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductContent = function (_Component) {
    _inherits(ProductContent, _Component);

    function ProductContent() {
        _classCallCheck(this, ProductContent);

        return _possibleConstructorReturn(this, (ProductContent.__proto__ || Object.getPrototypeOf(ProductContent)).apply(this, arguments));
    }

    _createClass(ProductContent, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                thumbnail = _props.thumbnail,
                description = _props.description;


            var descriptionMarkup = { __html: description };

            return _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                    "div",
                    { className: "col s12 m4 l4" },
                    _react2.default.createElement("img", { "data-id": "productThumbnail", alt: "Product Thumbnail", className: "responsive-img", src: "/images/" + thumbnail })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col s12 m8 l8" },
                    _react2.default.createElement("p", { "data-id": "productDescription", className: "flow-text", dangerouslySetInnerHTML: descriptionMarkup })
                )
            );
        }
    }]);

    return ProductContent;
}(_react.Component);

exports.default = ProductContent;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shuffleTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shuffleTypes = exports.shuffleTypes = {
    previous: "previous",
    next: "next"
};

var ProductContentShuffler = function (_Component) {
    _inherits(ProductContentShuffler, _Component);

    function ProductContentShuffler() {
        _classCallCheck(this, ProductContentShuffler);

        return _possibleConstructorReturn(this, (ProductContentShuffler.__proto__ || Object.getPrototypeOf(ProductContentShuffler)).apply(this, arguments));
    }

    _createClass(ProductContentShuffler, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                isNotFirstContentDisplayed = _props.isNotFirstContentDisplayed,
                isNotLastContentDisplayed = _props.isNotLastContentDisplayed,
                nextContentTitle = _props.nextContentTitle,
                handleShuffleContent = _props.handleShuffleContent;


            return _react2.default.createElement(
                "div",
                { className: "row" },
                isNotFirstContentDisplayed && _react2.default.createElement(
                    "a",
                    { "data-id": "shuffleContentPreviousButton", onClick: function onClick() {
                            return handleShuffleContent(shuffleTypes.previous);
                        }, role: "button", className: "left" },
                    _react2.default.createElement(
                        "i",
                        { className: "material-icons" },
                        "navigate_before"
                    )
                ),
                isNotLastContentDisplayed && _react2.default.createElement(
                    "a",
                    { "data-id": "shuffleContentNextButton", onClick: function onClick() {
                            return handleShuffleContent(shuffleTypes.next);
                        }, role: "button", className: "right" },
                    nextContentTitle,
                    _react2.default.createElement(
                        "i",
                        { className: "material-icons" },
                        "navigate_before"
                    )
                )
            );
        }
    }]);

    return ProductContentShuffler;
}(_react.Component);

exports.default = ProductContentShuffler;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 404;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          '404 : Not Found'
        )
      );
    } });
};

exports.default = NotFoundPage;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(21);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));
    return '\n        <!DOCTYPE html>\n            <head>\n                <title>GTAU Product </title>\n                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" />    \n                <link rel="stylesheet" href="/app.css" />    \n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="/bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadStore = undefined;

var _axios = __webpack_require__(23);

var _axios2 = _interopRequireDefault(_axios);

var _redux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterConfig = __webpack_require__(1);

var _urlHelpers = __webpack_require__(25);

var _Reducers = __webpack_require__(26);

var _Reducers2 = _interopRequireDefault(_Reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (req) {

    var axiosInstance = _axios2.default.create({
        baseURL: 'http://localhost:8765',
        headers: { cookie: req.get('cookie') || '' }
    });

    var store = (0, _redux.createStore)(_Reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

var loadStore = exports.loadStore = function loadStore(routes, httpContext, store) {
    var req = httpContext.req,
        res = httpContext.res;


    var promises = (0, _reactRouterConfig.matchRoutes)(routes, req.path).reduce(function (dispatchPromises, _ref) {
        var route = _ref.route;


        var latestdispatchPromise = loadComponentData(route, req.url, store);

        return [].concat(_toConsumableArray(dispatchPromises), _toConsumableArray(latestdispatchPromise));
    }, []);

    return Promise.all(promises);
};

var loadComponentData = function loadComponentData(route, requestUrl, store) {
    var component = route.component;


    if (component && component.needs && component.needs.length > 0) {
        var params = route.numberOfParamsInUrl && route.numberOfParamsInUrl > 0 ? (0, _urlHelpers.extractUrlParamsBasedOnRoute)(requestUrl, route) : undefined;
        return component.needs.map(function (need) {
            return store.dispatch(need(params));
        });
    }
    return [];
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var extractUrlParamsBasedOnRoute = exports.extractUrlParamsBasedOnRoute = function extractUrlParamsBasedOnRoute(requestUrl, route) {

    //TODO: Refactor this to cater for multiple parameters allowed in the url
    var key = route.key,
        numberOfParamsInUrl = route.numberOfParamsInUrl;


    var indexOfFirstParameterInUrl = requestUrl.indexOf(key) + (key + "/").length;

    var firstParameterInUrlWithRestOfUrlString = requestUrl.substring(indexOfFirstParameterInUrl);

    var firstParameterInUrl = firstParameterInUrlWithRestOfUrlString.includes("/") ? firstParameterInUrlWithRestOfUrlString.substring(0, firstParameterInUrlWithRestOfUrlString.indexOf("/")) : firstParameterInUrlWithRestOfUrlString;

    return firstParameterInUrl;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _productReducer = __webpack_require__(27);

var _productReducer2 = _interopRequireDefault(_productReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  productStore: _productReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Actions = __webpack_require__(5);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _Actions.FETCH_PRODUCT:
            var product = action.payload.data;
            return {
                product: product,
                selectedContentIndex: 0
            };
        case _Actions.SET_SELECTED_PRODUCT_CONTENT:
            var selectedContentIndex = action.selectedContentIndex;


            return _extends({}, state, {
                selectedContentIndex: selectedContentIndex
            });
        default:
            return state;
    }
};

/***/ })
/******/ ]);