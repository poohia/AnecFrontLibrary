(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Field", "../Input", "../Button", "../Checkbox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Field"), require("../Input"), require("../Button"), require("../Checkbox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Field, global.Input, global.Button, global.Checkbox);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _Field, _Input, _Button, _Checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _Field = _interopRequireDefault(_Field);
  _Input = _interopRequireDefault(_Input);
  _Button = _interopRequireDefault(_Button);
  _Checkbox = _interopRequireDefault(_Checkbox);
  var _excluded = ["children"];

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  var Form = function Form(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/_react.default.createElement("form", _extends({
      className: "anec--form"
    }, rest), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, children));
  };

  Form.Input = _Input.default;
  Form.Submit = _Button.default;
  Form.Field = _Field.default;
  Form.Checkbox = _Checkbox.default;
  var _default = Form;
  _exports.default = _default;
});