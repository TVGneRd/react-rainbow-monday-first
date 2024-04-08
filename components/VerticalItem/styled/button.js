"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var StyledAnchor = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border: none;\n    outline: 0;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 1rem 1rem 1rem 3rem;\n    border-radius: 0;\n    color: ", ";\n    cursor: pointer;\n    font-size: ", ";\n    background-color: transparent;\n    text-decoration: none;\n    transition: color 0.1s linear;\n    box-sizing: border-box;\n\n    :hover,\n    :focus,\n    :active {\n        color: ", ";\n        text-decoration: none;\n        outline: 0;\n    }\n\n    :focus,\n    :active {\n        font-weight: bold;\n        background-color: ", ";\n    }\n\n    :hover {\n        background-color: ", ";\n    }\n\n    ", ";\n"])), function (props) {
  return props.palette.text.label;
}, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.text.main;
}, function (props) {
  return props.palette.action.active;
}, function (props) {
  return props.palette.action.hover;
}, function (props) {
  return props.isSelected && "\n            color: ".concat(props.palette.text.main, ";\n            background-color: ").concat(props.palette.action.active, ";\n            font-weight: bold;\n        ");
});
var _default = StyledAnchor;
exports["default"] = _default;