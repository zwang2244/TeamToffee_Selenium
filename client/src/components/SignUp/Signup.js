"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignUp;

var React = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _ResponsiveAppBar = _interopRequireDefault(require("./../NavigationBar/ResponsiveAppBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SignUp() {
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.currentTarget); // eslint-disable-next-line no-console

    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_ResponsiveAppBar.default, null), /*#__PURE__*/React.createElement(_Container.default, {
    component: "main",
    maxWidth: "xs",
    style: {
      "margin-top": "150px"
    }
  }, /*#__PURE__*/React.createElement(_CssBaseline.default, null), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(_core.Avatar, {
    sx: {
      m: 1,
      bgcolor: "secondary.main"
    }
  }), /*#__PURE__*/React.createElement(_Typography.default, {
    component: "h1",
    variant: "h5"
  }, "Sign Up"), /*#__PURE__*/React.createElement(_Box.default, {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/React.createElement(_Checkbox.default, {
      value: "remember",
      color: "primary"
    }),
    label: "Remember me"
  }), /*#__PURE__*/React.createElement(_core.Button, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 3,
      mb: 2
    }
  }, "Create the account")))));
}