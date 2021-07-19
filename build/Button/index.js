(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../styles/modules/button.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../styles/modules/button.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.button);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  var _excluded = ["children"];

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  var Button = function Button(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
      className: "waves-effect waves-light btn primary"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "material-icons right"
    }, "cloud"), children));
  };

  var _default = Button;
  _exports.default = _default;
});