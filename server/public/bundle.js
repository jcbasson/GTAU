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
/******/ 	return __webpack_require__(__webpack_require__.s = 184);
/******/ })
/************************************************************************/
/******/ ({

/***/ 115:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\redux\\es\\index.js'");

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\react-redux\\es\\index.js'");

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\react-router-dom\\es\\index.js'");

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\react-router-config\\es\\index.js'");

/***/ }),

/***/ 183:
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
                            return api.get("/product?productKey=ipad-mini");

                        case 2:
                            res = _context.sent;

                            console.log('productKey = ', productKey);
                            dispatch({
                                type: FETCH_PRODUCT,
                                payload: res
                            });

                        case 5:
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

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(185);

var _axios = __webpack_require__(387);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(408);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reduxThunk = __webpack_require__(421);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterDom = __webpack_require__(164);

var _redux = __webpack_require__(115);

var _reactRedux = __webpack_require__(117);

var _reactRouterConfig = __webpack_require__(182);

var _Routes = __webpack_require__(474);

var _Routes2 = _interopRequireDefault(_Routes);

var _reducers = __webpack_require__(478);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axiosInstance = _axios2.default.create({
    baseURL: '/api'
}); //Startup point for the client side application


var store = (0, _redux.createStore)(_reducers2.default, window.INITIAL_STATE, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

_reactDom2.default.hydrate(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            "div",
            null,
            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
        )
    )
), document.querySelector('#root'));

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\babel-polyfill\\lib\\index.js'");

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\axios\\index.js'");

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\react-dom\\index.js'");

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\redux-thunk\\lib\\index.js'");

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(475);

var _App2 = _interopRequireDefault(_App);

var _ProductPage = __webpack_require__(477);

var _ProductPage2 = _interopRequireDefault(_ProductPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    component: _App2.default,
    routes: [{
        path: "/product",
        component: _ProductPage2.default
    }]
}];

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(182);

var _Header = __webpack_require__(476);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = App;

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(164);

var _reactRedux = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {

  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'div',
      { className: 'nav-wrapper' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'brand-logo' },
        'GTAU'
      )
    )
  );
};

exports.default = Header;

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(117);

var _actions = __webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductPage = function (_Component) {
    _inherits(ProductPage, _Component);

    function ProductPage() {
        _classCallCheck(this, ProductPage);

        return _possibleConstructorReturn(this, (ProductPage.__proto__ || Object.getPrototypeOf(ProductPage)).apply(this, arguments));
    }

    _createClass(ProductPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentDidMount() = ", params);
            var _props = this.props,
                fetchProduct = _props.fetchProduct,
                params = _props.match.params;

            console.log("params = ", params);
            fetchProduct(params.productKey);
        }
    }, {
        key: "render",
        value: function render() {
            var product = this.props.product;


            return _react2.default.createElement(
                "div",
                null,
                "Here's a product:  ",
                product.title
            );
        }
    }]);

    return ProductPage;
}(_react.Component);

ProductPage.needs = [_actions.fetchProduct];


var mapStateToProps = function mapStateToProps(state) {
    return { product: state.product };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchProduct: _actions.fetchProduct })(ProductPage);

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(115);

var _productReducer = __webpack_require__(479);

var _productReducer2 = _interopRequireDefault(_productReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  product: _productReducer2.default
});

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(183);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_PRODUCT:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\janba\\Projects\\GTAU-Frontend-Test\\server\\node_modules\\react\\index.js'");

/***/ })

/******/ });