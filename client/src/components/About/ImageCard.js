"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImageCard;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px"
  },
  media: {
    height: 140
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff"
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd"
  }
});

function ImageCard(_ref) {
  var place = _ref.place;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    className: classes.media,
    image: place.imageUrl,
    title: "Contemplative Reptile"
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    variant: "h5",
    component: "h1",
    className: classes.title
  }, place.title), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: classes.desc
  }, place.description)));
}