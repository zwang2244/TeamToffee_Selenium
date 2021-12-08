"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Landing;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Introduction = _interopRequireDefault(require("./Introduction"));

var _ResponsiveAppBar = _interopRequireDefault(require("./../NavigationBar/ResponsiveAppBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
      fontFamily: "Nunito"
    },
    appbar: {
      background: "none"
    },
    appbarWrapper: {
      width: "80%",
      margin: "0 auto"
    },
    appbarTitle: {
      flexGrow: "1"
    },
    icon: {
      color: "#fff",
      fontSize: "2rem"
    },
    colorText: {
      color: "#5AFF3D",
      fontSize: "1rem"
    },
    container: {
      textAlign: "center"
    },
    title: {
      color: "#fff",
      fontSize: "4.5rem"
    }
  };
});

function Landing() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ResponsiveAppBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root,
    id: "header"
  }, /*#__PURE__*/_react.default.createElement(_core.AppBar, {
    className: classes.appbar,
    elevation: 0
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.title
  }, "Welcome to ", /*#__PURE__*/_react.default.createElement("br", null), "Petition App", /*#__PURE__*/_react.default.createElement("span", {
    className: classes.colorText
  }, "\xA0\xA0Made by Toffee")))), /*#__PURE__*/_react.default.createElement(_Introduction.default, null));
}