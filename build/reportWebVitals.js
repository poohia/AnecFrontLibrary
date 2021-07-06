(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.reportWebVitals = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var reportWebVitals = function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(function (_ref) {
        var getCLS = _ref.getCLS,
            getFID = _ref.getFID,
            getFCP = _ref.getFCP,
            getLCP = _ref.getLCP,
            getTTFB = _ref.getTTFB;
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };

  var _default = reportWebVitals;
  _exports.default = _default;
});