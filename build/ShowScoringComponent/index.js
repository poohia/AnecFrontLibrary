(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../Avatar", "./icons", "./useShowScoringComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../Avatar"), require("./icons"), require("./useShowScoringComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Avatar, global.icons, global.useShowScoringComponent);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _Avatar, _icons, _useShowScoringComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.AvatarCard = void 0;
  _react = _interopRequireDefault(_react);
  _Avatar = _interopRequireDefault(_Avatar);
  _useShowScoringComponent = _interopRequireDefault(_useShowScoringComponent);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var AvatarCard = function AvatarCard(_ref) {
    var user = _ref.user;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "row anec--user-list-item animate__animated animate__backInUp"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "anec--user-list-item-user-avatar"
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      type: user.avatar,
      preset: "default"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "anec--user-list-item-user-info"
    }, user.username));
  };

  _exports.AvatarCard = AvatarCard;

  var ShowScoringComponent = function ShowScoringComponent(_ref2) {
    var users = _ref2.users;

    var _useShowScoringCompon = (0, _useShowScoringComponent.default)(users),
        scoring = _useShowScoringCompon.scoring;

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "anec--show-scoring-one-winner-content"
    }, scoring.map(function (score, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "anec--show-scoring-one-winner-content-row-placement"
      }, i === 0 && /*#__PURE__*/_react.default.createElement(_icons.Trophy, null), i === 1 && /*#__PURE__*/_react.default.createElement(_icons.SecondPrize, null), i === 2 && /*#__PURE__*/_react.default.createElement(_icons.ThirdPrice, null), i > 2 && /*#__PURE__*/_react.default.createElement(_icons.GameOver, null), "Score: ", score[0].score), /*#__PURE__*/_react.default.createElement("div", {
        className: "anec--user-list"
      }, score.map(function (s) {
        return /*#__PURE__*/_react.default.createElement(AvatarCard, {
          key: s.username,
          user: s
        });
      })));
    }));
  };

  var _default = ShowScoringComponent;
  _exports.default = _default;
});