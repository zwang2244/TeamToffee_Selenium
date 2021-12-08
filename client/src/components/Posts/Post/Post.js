"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core/");

var _ThumbUpAlt = _interopRequireDefault(require("@material-ui/icons/ThumbUpAlt"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

var _moment = _interopRequireDefault(require("moment"));

var _reactRedux = require("react-redux");

var _posts = require("../../../actions/posts");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(_ref) {
  var post = _ref.post,
      setCurrentId = _ref.setCurrentId;
  var dispatch = (0, _reactRedux.useDispatch)();
  var classes = (0, _styles.default)();
  return /*#__PURE__*/_react.default.createElement(_core.Card, {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement(_core.CardMedia, {
    className: classes.media,
    image: post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
    title: post.title
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.overlay
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6"
  }, post.creator), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2"
  }, (0, _moment.default)(post.createdAt).fromNow())), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.overlay2
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    style: {
      color: 'white'
    },
    size: "small",
    onClick: function onClick() {
      return setCurrentId(post._id);
    }
  }, /*#__PURE__*/_react.default.createElement(_MoreHoriz.default, {
    fontSize: "default"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.details
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "h2"
  }, post.tags.map(function (tag) {
    return "#".concat(tag, " ");
  }))), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.title,
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, post.title), /*#__PURE__*/_react.default.createElement(_core.CardContent, null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, post.message)), /*#__PURE__*/_react.default.createElement(_core.CardActions, {
    className: classes.cardActions
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return dispatch((0, _posts.likePost)(post._id));
    }
  }, /*#__PURE__*/_react.default.createElement(_ThumbUpAlt.default, {
    fontSize: "small"
  }), " Like ", post.likeCount, " "), /*#__PURE__*/_react.default.createElement(_core.Button, {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return dispatch((0, _posts.deletePost)(post._id));
    }
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, {
    fontSize: "small"
  }), " Delete")));
};

var _default = Post;
exports.default = _default;