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
  var _excluded = ["children", "className", "headerTxt", "onClose"];

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  var instance = null;

  var Modal = function Modal(_ref) {
    var children = _ref.children,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? "" : _ref$className,
        headerTxt = _ref.headerTxt,
        onClose = _ref.onClose,
        rest = _objectWithoutProperties(_ref, _excluded);

    var modalRef = (0, _react.useRef)(null);

    var close = function close() {
      if (instance) {
        instance.close();
      }

      setTimeout(function () {
        if (onClose) {
          onClose();
        }
      }, 100);
    };

    (0, _react.useEffect)(function () {
      setTimeout(function () {
        if (modalRef.current) {
          var current = modalRef.current;
          instance = M.Modal.init(current, {
            dismissible: false
          });
          instance.open();
        }
      }, 200);
    }, [modalRef]);
    return /*#__PURE__*/_react.default.createElement("div", _extends({
      ref: modalRef,
      className: "modal"
    }, rest), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-content"
    }, headerTxt && /*#__PURE__*/_react.default.createElement("h4", null, headerTxt), children), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "waves-effect waves-green btn-flat",
      onClick: close
    }, "Ok")));
  };

  var _default = Modal;
  _exports.default = _default;
});