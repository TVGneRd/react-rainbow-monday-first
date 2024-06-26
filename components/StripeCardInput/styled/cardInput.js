"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _borderRadius = require("../../../styles/borderRadius");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _templateObject;

var StyledCardInput = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 2.5rem;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: 0.58rem 1rem 0 1rem;\n    cursor: text;\n\n    ", ";\n\n    ", ";\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n"])), function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, _borderRadius.BORDER_RADIUS_2, function (props) {
  return props.size === 'large' && "\n            padding: 0.9rem 1.2rem 0 1.2rem;\n            height: 3.4rem;\n        ";
}, function (props) {
  return props.size === 'small' && "\n            padding: 0.38rem 0.8rem 0 0.8rem;\n            height: 1.9rem;\n        ";
}, function (props) {
  return props.disabled && "\n        background-color: ".concat(props.palette.background.disabled, " !important;\n        border: 1px solid ").concat(props.palette.border.disabled, " !important;\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n            &:active {\n                box-shadow: none;\n                background-color: ").concat(props.palette.background.disabled, " !important;\n                border: 1px solid ").concat(props.palette.border.disabled, " !important;\n            }\n    ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
var _default = StyledCardInput;
exports["default"] = _default;