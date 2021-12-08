"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _reactRedux = require("react-redux");

var _Post = _interopRequireDefault(require("./Post/Post"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = function Posts(_ref) {
  var setCurrentId = _ref.setCurrentId;
  var posts = (0, _reactRedux.useSelector)(function (state) {
    return state.posts;
  });
  var classes = (0, _styles.default)();
  return !posts.length ? /*#__PURE__*/_react.default.createElement(_core.CircularProgress, null) : /*#__PURE__*/_react.default.createElement(_core.Grid, {
    className: classes.container,
    container: true,
    alignItems: "stretch",
    spacing: 3
  }, posts.map(function (post) {
    return /*#__PURE__*/_react.default.createElement(_core.Grid, {
      key: post._id,
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(_Post.default, {
      post: post,
      setCurrentId: setCurrentId
    }));
  }));
};

var _default = Posts;
exports.default = _default;