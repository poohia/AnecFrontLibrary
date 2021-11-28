(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../Avatar", "./users.png"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../Avatar"), require("./users.png"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Avatar, global.users);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _Avatar, _users) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _Avatar = _interopRequireDefault(_Avatar);
  _users = _interopRequireDefault(_users);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var AvatarList = function AvatarList(_ref) {
    var users = _ref.users;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "anec--user-list"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "anec--user-list-title"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _users.default,
      alt: "users logo"
    }), /*#__PURE__*/_react.default.createElement("p", null, "Liste des utilisateurs :")), users.map(function (user) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "row anec--user-list-item",
        key: user.userID
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "anec--user-list-item-user-info-connection-info ".concat(user.connected ? "connected" : "unconnected"),
        title: user.connected ? "Connecté" : "Déconnecté"
      }, "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
        className: "anec--user-list-item-user-avatar"
      }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
        type: user.avatar
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "anec--user-list-item-user-info"
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, user.username)), /*#__PURE__*/_react.default.createElement("div", {
        className: "anec--user-list-item-user-info-".concat(user.vote)
      }, user.vote ? user.vote === "true" ? /*#__PURE__*/_react.default.createElement("div", {
        className: "animate__animated animate__lightSpeedInLeft"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, "thumb_up"), "A vot\xE9 vrai") : /*#__PURE__*/_react.default.createElement("div", {
        className: "animate__animated animate__lightSpeedInLeft"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, "thumb_down"), "A vot\xE9 faux") : /*#__PURE__*/_react.default.createElement("div", null, "\xA0")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Score: ", /*#__PURE__*/_react.default.createElement("b", null, user.score)))));
    }));
  };

  var _default = AvatarList;
  _exports.default = _default;
});