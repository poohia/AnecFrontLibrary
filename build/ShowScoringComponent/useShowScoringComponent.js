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
    global.useShowScoringComponent = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var useShowScoringComponent = function useShowScoringComponent(users) {
    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        scoring = _useState2[0],
        setScoringState = _useState2[1];

    var setScoring = function setScoring(f, user) {
      setScoringState(function (score) {
        if (score.find(function (s) {
          return s.find(function (u) {
            return u.username === user.username;
          });
        })) {
          return score;
        }

        return f(score);
      });
    };

    (0, _react.useEffect)(function () {
      var i = 0;
      var lastScore = null;
      users.forEach(function (user, j) {
        var timeout = 500 * j;

        if (user.score !== lastScore) {
          setTimeout(function () {
            setScoring(function (score) {
              var s = score;

              if (i > 2 && typeof s[i] === "undefined") {
                s[i] = [user];
              } else if (i > 2 && s[i]) {
                s[i].push(user);
              } else if (typeof s[i] === "undefined" && !score.find(function (s) {
                return s.find(function (u) {
                  return u.username === user.username;
                });
              })) {
                s[i] = [user];
                i += 1;
              }

              return Array.from(s);
            }, user);
          }, timeout);
        } else {
          setTimeout(function () {
            setScoring(function (score) {
              var s = score;
              s[i - 1].push(user);
              return Array.from(s);
            }, user);
          }, timeout);
        }

        lastScore = user.score;
      });
    }, [users]);
    return {
      scoring: scoring
    };
  };

  var _default = useShowScoringComponent;
  _exports.default = _default;
});