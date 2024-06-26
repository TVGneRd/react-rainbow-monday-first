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

var _paddings = require("../../../styles/paddings");

var _fontSizes = require("../../../styles/fontSizes");

var _templateObject;

var variants = ['brand', 'success', 'warning', 'error'];
var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none;\n    border-radius: ", ";\n    padding: 0 ", ";\n    transition-duration: 0.4s;\n    transition-timing-function: ease-in-out;\n    transition-property: margin, max-height, opacity, top;\n    height: 2rem;\n    line-height: 2rem;\n    font-size: ", ";\n    letter-spacing: 0.5;\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    ", ";\n    ", ";\n    ", ";\n\n        ", ";\n    \n        ", ";\n\n    ", ";\n\n    ", ";\n    \n    ", ";\n    \n"])), _borderRadius.BORDER_RADIUS_2, _paddings.PADDING_SMALL, _fontSizes.FONT_SIZE_TEXT_MEDIUM, function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.palette.text.label;
}, function (props) {
  return props.variant === 'neutral' && "\n            background-color: ".concat(props.palette.background.main, ";\n            border: 1px solid ").concat(props.palette.border.divider, ";\n            color: ").concat(props.palette.text.label, ";\n        ");
}, function (props) {
  return props.variant === 'outline-brand' && "\n            background-color: transparent;\n            border: 1px solid ".concat(props.palette.brand.main, ";\n            color: ").concat(props.palette.brand.main, ";\n        ");
}, function (props) {
  return variants.includes(props.variant) && "\n            background-color: ".concat(props.palette[props.variant].main, ";\n            border: 1px solid ").concat(props.palette[props.variant].main, ";\n            color: ").concat(props.palette.getContrastText(props.palette[props.variant].main), ";\n        ");
}, function (props) {
  return props.size === 'large' && "\n                font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_LARGE, ";\n                height: 2.9rem;\n                padding: 0 ").concat(_paddings.PADDING_MEDIUM, ";\n            ");
}, function (props) {
  return props.size === 'small' && "\n                font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_SMALL, ";\n                height: 1.6rem;\n                padding: 0 ").concat(_paddings.PADDING_X_SMALL, ";\n            ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
var _default = StyledContainer;
exports["default"] = _default;