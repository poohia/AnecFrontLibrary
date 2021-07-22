(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Button", "./Checkbox", "./Form", "./Input", "./Loader", "./Title", "./LabelInfo", "./InputGame"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Button"), require("./Checkbox"), require("./Form"), require("./Input"), require("./Loader"), require("./Title"), require("./LabelInfo"), require("./InputGame"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Button, global.Checkbox, global.Form, global.Input, global.Loader, global.Title, global.LabelInfo, global.InputGame);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Button, _Checkbox, _Form, _Input, _Loader, _Title, _LabelInfo, _InputGame) {
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
  Object.defineProperty(_exports, "Checkbox", {
    enumerable: true,
    get: function get() {
      return _Checkbox.default;
    }
  });
  Object.defineProperty(_exports, "Form", {
    enumerable: true,
    get: function get() {
      return _Form.default;
    }
  });
  Object.defineProperty(_exports, "Input", {
    enumerable: true,
    get: function get() {
      return _Input.default;
    }
  });
  Object.defineProperty(_exports, "Loader", {
    enumerable: true,
    get: function get() {
      return _Loader.default;
    }
  });
  Object.defineProperty(_exports, "Title", {
    enumerable: true,
    get: function get() {
      return _Title.default;
    }
  });
  Object.defineProperty(_exports, "LabelInfo", {
    enumerable: true,
    get: function get() {
      return _LabelInfo.default;
    }
  });
  Object.defineProperty(_exports, "InputGame", {
    enumerable: true,
    get: function get() {
      return _InputGame.default;
    }
  });
  _Button = _interopRequireDefault(_Button);
  _Checkbox = _interopRequireDefault(_Checkbox);
  _Form = _interopRequireDefault(_Form);
  _Input = _interopRequireDefault(_Input);
  _Loader = _interopRequireDefault(_Loader);
  _Title = _interopRequireDefault(_Title);
  _LabelInfo = _interopRequireDefault(_LabelInfo);
  _InputGame = _interopRequireDefault(_InputGame);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});