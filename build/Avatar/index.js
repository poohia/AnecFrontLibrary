function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.icons);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _icons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  var _excluded = ["type", "preset", "className", "animate", "onClick"];

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  var Avatar = function Avatar(_ref) {
    var type = _ref.type,
        _ref$preset = _ref.preset,
        preset = _ref$preset === void 0 ? "default" : _ref$preset,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? "" : _ref$className,
        animate = _ref.animate,
        _onClick = _ref.onClick,
        rest = _objectWithoutProperties(_ref, _excluded);

    var classNameValue = (0, _react.useMemo)(function () {
      var value = "anec--avatar";
      value += " anec--avatar-".concat(preset);

      if (animate) {
        value += " animate__animated animate__backInUp";
      }

      return "".concat(value, " ").concat(className);
    }, [className, preset, animate]);
    var CurrAvatar = (0, _react.useMemo)(function () {
      switch (type) {
        case "administrator":
          return _icons.Administrator;

        case "dinosaur":
          return _icons.Dinosaur;

        case "lgbtIcon":
          return _icons.LgbtIcon;

        case "rainbowFlag":
          return _icons.RainbowFlag;

        case "cat":
          return _icons.Cat;

        case "kitty":
          return _icons.Kitty;

        case "man":
          return _icons.Man;

        case "woman":
          return _icons.Woman;

        case "hacker":
        default:
          return _icons.Hacker;
      }
    }, [type]);
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      className: classNameValue,
      onClick: function onClick() {
        return _onClick && _onClick(type);
      }
    }, rest), /*#__PURE__*/_react.default.createElement(CurrAvatar, null), preset === "card" && /*#__PURE__*/_react.default.createElement("p", null, type));
  };

  var _default = Avatar;
  _exports.default = _default;
});