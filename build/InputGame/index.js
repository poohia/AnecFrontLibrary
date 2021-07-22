function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  var _excluded = ["children", "className", "animate", "loading", "helperText"];

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  var InputGame = function InputGame(_ref) {
    var children = _ref.children,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? "" : _ref$className,
        _ref$animate = _ref.animate,
        animate = _ref$animate === void 0 ? false : _ref$animate,
        loading = _ref.loading,
        helperText = _ref.helperText,
        rest = _objectWithoutProperties(_ref, _excluded);

    var classNameValue = (0, _react.useMemo)(function () {
      var value = "anec--game-input";

      if (animate) {
        value += " animate__animated animate__backInUp";
      }

      return "".concat(value, " ").concat(className);
    }, [className, animate]);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "anec--game-input-container"
    }, /*#__PURE__*/_react.default.createElement("input", _extends({
      id: "pseudo",
      type: "text",
      className: classNameValue
    }, rest)), loading && /*#__PURE__*/_react.default.createElement("div", {
      className: "anec--game-input-loader preloader-wrapper small active"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "spinner-layer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "circle-clipper left"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "circle"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "gap-patch"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "circle"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "circle-clipper right"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "circle"
    })))), helperText && /*#__PURE__*/_react.default.createElement("span", {
      className: "helper-text"
    }, helperText));
  };

  var _default = InputGame;
  _exports.default = _default;
});