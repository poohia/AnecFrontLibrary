(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Button);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Button", {
    enumerable: true,
    get: function get() {
      return _Button.default;
    }
  });
  _Button = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});