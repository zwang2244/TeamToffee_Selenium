"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ResponsiveAppBar = _interopRequireDefault(require("./components/NavigationBar/ResponsiveAppBar"));

var _core = require("@material-ui/core");

require("./Description.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Description = function Description() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ResponsiveAppBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "petition_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "petition_title"
  }, "Petiton Title 1"), /*#__PURE__*/_react.default.createElement("div", {
    className: "UserContainer"
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    src: "/broken-image.jpg",
    className: "profile_pic"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "username"
  }, "UserName")), /*#__PURE__*/_react.default.createElement("div", {
    className: "petition_description"
  }, "Lorem ipsum dolor sit amet, eam tale doctus iracundia id. In est altera lobortis explicari. Sale tamquam invidunt sed ad. Aliquid ullamcorper delicatissimi ne cum, eu cum justo scripta interesset, sea elit nonumy aperiam et. Ut rebum doctus deleniti usu, ei vis omnium integre maiorum. At sumo intellegam mea. Assum sanctus fierent ad eos, ei minimum consequat eum. Eum agam honestatis et. Ne option prodesset quo, duo ex vidit complectitur. Pro epicuri appetere ne. Et modo sonet feugait vel. Et timeam utroque sed, voluptatum conclusionemque sit ad. Has tota iudico deterruisset at."), /*#__PURE__*/_react.default.createElement("div", {
    className: "petition_create_date"
  }, "Create Date:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "petition_Deadline"
  }, "Deadline:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "petition_Votecount"
  }, "Vote Count:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "petition_Status"
  }, "Status:")));
};

var _default = Description;
exports.default = _default;