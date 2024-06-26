"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getTheme = _interopRequireDefault(require("../../../../styles/helpers/getTheme"));

var _borderRadius = require("../../../../styles/borderRadius");

var _templateObject;

var StyledUploadFileLabel = _styledComponents["default"].label.attrs(function (props) {
  var theme = (0, _getTheme["default"])(props);
  var _theme$palette = theme.palette,
      getContrastText = _theme$palette.getContrastText,
      brand = _theme$palette.brand;
  var brandMainColor = brand.main,
      brandDarkColor = brand.dark;
  var brandMainContrastText = getContrastText(brandMainColor);
  var brandDarkContrastText = getContrastText(brandDarkColor);
  return {
    brandMainColor: brandMainColor,
    brandDarkColor: brandDarkColor,
    brandMainContrastText: brandMainContrastText,
    brandDarkContrastText: brandDarkContrastText,
    brandShadow: "0 0 2px ".concat(brandMainColor)
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    padding: 0 1rem;\n    text-align: center;\n    vertical-align: middle;\n    transition: border 0.15s linear;\n    align-items: center;\n    display: inline-flex;\n    font-size: 1rem;\n    justify-content: center;\n    position: relative;\n    background-clip: border-box;\n    border-radius: 100px;\n    line-height: 2.375rem;\n    text-decoration: none;\n    cursor: pointer;\n    white-space: normal;\n    user-select: none;\n    box-sizing: border-box;\n    ", "\n\n    &:focus {\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    &:active {\n        transform: scale(0.95);\n        transition: all 0.2s ease;\n        text-decoration: none;\n    }\n\n    &:hover,\n    &:focus,\n    &:active {\n        background-color: ", ";\n        border-color: ", ";\n        color: ", ";\n    }\n\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.brandMainColor;
}, function (props) {
  return props.brandMainColor;
}, function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.isDragOver && "\n            width: 0;\n            height: 0;\n            overflow: hidden;\n    ";
}, function (props) {
  return props.brandShadow;
}, function (props) {
  return props.brandDarkColor;
}, function (props) {
  return props.brandDarkColor;
}, function (props) {
  return props.brandMainContrastText;
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});

var _default = StyledUploadFileLabel;
exports["default"] = _default;