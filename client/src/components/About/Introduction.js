"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageCard = _interopRequireDefault(require("./ImageCard"));

var _description = _interopRequireDefault(require("./description"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
});

function _default() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_ImageCard.default, {
    place: _description.default[1]
  }), /*#__PURE__*/_react.default.createElement(_ImageCard.default, {
    place: _description.default[0]
  }));
}