"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledTable = (0, _attachThemeAttrs["default"])(_styledComponents["default"].table)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    table-layout: fixed;\n    border-collapse: separate;\n    background-color: ", ";\n    border-spacing: 0;\n    width: 100%;\n    box-sizing: border-box;\n\n    ", ";\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.theme.variant === 'listview' && "\n            background-color: transparent;\n        ";
});
var _default = StyledTable;
exports["default"] = _default;