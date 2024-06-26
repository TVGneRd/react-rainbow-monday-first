"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledTextareaContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: column;\n    border-radius: ", ";\n    transition: all 0.1s linear, padding 0s, border 0s;\n    background-color: ", ";\n    border: solid 1px ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n\n    ", ";\n\n    ", ";\n\n    ", ";\n    \n        ", ";\n\n        ", ";\n    \n        ", ";\n"])), _borderRadius.BORDER_RADIUS_1, function (props) {
  return props.palette.background.main;
}, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.isFocused && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: solid 2px ").concat(props.palette.brand.main, ";\n        box-shadow: ").concat(props.shadows.brand, ";\n        ");
}, function (props) {
  return props.variant === 'shaded' && "\n            box-shadow:".concat(props.disabled || props.readOnly ? '' : props.shadows.shadow_10, ";\n            border: 1px solid transparent;\n        ");
}, function (props) {
  return props.variant === 'shaded' && props.isFocused && "\n            border: 2px solid transparent;\n        ";
}, function (props) {
  return props.error && "\n            border: solid 2px ".concat(props.palette.error.main, ";\n            background-clip: padding-box;\n\n            :focus-within {\n                box-shadow: ").concat(props.shadows.error, ";\n                border: solid 2px ").concat(props.palette.error.main, ";\n            }\n        ");
}, function (props) {
  return props.disabled && "\n            background-color: ".concat(props.palette.background.disabled, ";\n            border: solid 1px ").concat(props.palette.border.disabled, ";\n            color: ").concat(props.palette.text.disabled, ";\n\n            :focus-within {\n                box-shadow: none;\n            }\n        ");
}, function (props) {
  return props.readOnly && "\n            border: none;\n            border-radius: 0;\n            background-color: transparent;\n\n            :focus-within {\n                box-shadow: none;\n                border: none;\n            }\n        ";
}, function (props) {
  return props.borderRadius === 'square' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n            ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n            ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n                border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n            ");
});
var _default = StyledTextareaContainer;
exports["default"] = _default;