"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fontSizes = require("../../../styles/fontSizes");

var _borderRadius = require("../../../styles/borderRadius");

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _colors = require("../../../styles/colors");

var _color = require("../../../styles/helpers/color");

var _templateObject;

var StyledButton = (0, _attachThemeAttrs["default"])(_styledComponents["default"].button).attrs(function (props) {
  if (props.palette.isDark) {
    return {
      inverse: {
        text: _colors.COLOR_DARK_1,
        active: (0, _color.lighten)(_colors.COLOR_DARK_1, 0.6),
        border: _colors.COLOR_DARK_1,
        disabled: (0, _color.lighten)(_colors.COLOR_DARK_1, 0.6)
      }
    };
  }

  return {
    inverse: {
      text: _colors.COLOR_WHITE,
      active: _colors.COLOR_GRAY_3,
      border: _colors.COLOR_WHITE,
      disabled: _colors.COLOR_GRAY_3
    }
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    font: inherit;\n    align-items: center;\n    display: inline-flex;\n    font-size: ", ";\n    justify-content: center;\n    position: relative;\n    background: transparent;\n    background-clip: border-box;\n    border: 1px solid transparent;\n    border-radius: 100px;\n    line-height: 2.375rem;\n    text-decoration: none;\n    color: ", ";\n    padding: 0 1rem;\n    cursor: pointer;\n    white-space: normal;\n    user-select: none;\n    text-align: center;\n    vertical-align: middle;\n    transition: border 0.15s linear;\n    overflow: visible;\n    text-transform: none;\n    appearance: button;\n    box-sizing: border-box;\n\n    ::-moz-focus-inner,\n    ::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n\n    &:hover,\n    &:focus,\n    &:active,\n    &:visited {\n        text-decoration: none;\n        background-color: ", ";\n        color: ", ";\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    &:hover,\n    &:focus {\n        color: ", ";\n    }\n\n    &:focus {\n        outline: 0;\n        box-shadow: ", ";\n    }\n\n    &:active {\n        color: ", ";\n        ", "\n        transition: all 0.2s ease;\n    }\n\n    &[disabled] {\n        color: ", ";\n        background-color: transparent;\n        cursor: default;\n        border-color: transparent;\n    }\n\n    &[disabled] * {\n        cursor: default;\n        pointer-events: none;\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n\n    ", "};   \n    \n    ", ";\n"])), _fontSizes.FONT_SIZE_HEADING_SMALL, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.palette.brand.light;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.size === 'large' && "\n            padding: 0 1.2rem;\n            line-height: 3.275rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_HEADING_MEDIUM, ";;\n        ");
}, function (props) {
  return props.size === 'small' && "\n            padding: 0 0.8rem;\n            line-height: 1.775rem;\n            font-size: ".concat(_fontSizes.FONT_SIZE_TEXT_MEDIUM, ";\n        ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return props.shadows.brand;
}, function (props) {
  return props.palette.brand.dark;
}, function (props) {
  return !props.disabled && "transform: scale(0.95);\n        ";
}, function (props) {
  return props.palette.text.disabled;
}, function (props) {
  return (props.variant === 'neutral' || props.variant === 'border-filled' && props.isLoading) && "\n            background-color: ".concat(props.palette.background.main, ";\n            border: 1px solid ").concat(props.palette.border.divider, ";\n            color: ").concat(props.palette.brand.main, ";\n\n            &:hover,\n            &:focus,\n            &:active {\n                background-color: ").concat(props.palette.brand.light, ";\n                border: 1px solid ").concat(props.palette.brand.dark, ";\n                color: ").concat(props.palette.brand.dark, ";\n            }\n\n            &[disabled] {\n                background-color: transparent;\n                border-color: ").concat(props.isLoading ? props.palette.brand.main : props.palette.border.disabled, ";\n                color: ").concat(props.palette.text.disabled, ";\n            }\n        ");
}, function (props) {
  var brandMainContrastText = props.palette.getContrastText(props.palette.brand.main);
  var brandDarkContrastText = props.palette.getContrastText(props.palette.brand.dark);
  return props.variant === 'brand' && "\n            background-color: ".concat(props.palette.brand.main, ";\n            border: 1px solid ").concat(props.palette.brand.main, ";\n            color: ").concat(brandMainContrastText, ";\n\n            &:link,\n            &:visited {\n                color: ").concat(brandMainContrastText, "\n            }\n\n            &:hover,\n            &:focus,\n            &:active {\n                background-color: ").concat(props.palette.brand.dark, ";\n                border-color: ").concat(props.palette.brand.dark, ";\n                color: ").concat(brandDarkContrastText, ";\n            }\n\n            &[disabled] {\n                background-color: ").concat(props.isLoading ? props.palette.brand.main : props.palette.background.disabled, ";\n                border-color: ").concat(props.isLoading ? props.palette.brand.main : props.palette.background.disabled, ";\n                color: ").concat(props.palette.text.disabled, ";\n            }\n        ");
}, function (props) {
  return props.variant === 'outline-brand' && "\n            background-color: transparent;\n            border: 1px solid ".concat(props.palette.brand.main, ";\n            color: ").concat(props.palette.brand.main, ";\n\n            &:hover,\n            &:focus,\n            &:active {\n                border-color: ").concat(props.palette.brand.dark, ";\n                color: ").concat(props.palette.brand.dark, ";\n            }\n        \n            &[disabled] {\n                background-color: transparent;\n                border-color: ").concat(props.isLoading ? props.palette.brand.main : props.palette.border.disabled, ";\n                color: ").concat(props.palette.text.disabled, ";\n            }\n        ");
}, function (props) {
  var errorMainContrastText = props.palette.getContrastText(props.palette.error.main);
  var errorDarkContrastText = props.palette.getContrastText(props.palette.error.dark);
  return props.variant === 'destructive' && "\n            background-color: ".concat(props.palette.error.main, ";\n            border: 1px solid ").concat(props.palette.error.main, ";\n            color: ").concat(errorMainContrastText, ";\n\n            &:link,\n            &:visited {\n                color: ").concat(errorMainContrastText, ";\n            }\n        \n            &:hover,\n            &:focus {\n                background-color: ").concat(props.palette.error.dark, ";\n                border-color: ").concat(props.palette.error.dark, ";\n                color: ").concat(errorDarkContrastText, ";\n            }\n\n            &:focus {\n                box-shadow: ").concat(props.shadows.error, ";\n            }\n        \n            &:active {\n                background-color: ").concat(props.palette.error.dark, ";\n                border-color: ").concat(props.palette.error.dark, ";\n                color: ").concat(errorDarkContrastText, ";\n            }\n        \n            &[disabled] {\n                background-color: ").concat(props.isLoading ? props.palette.error.main : props.palette.background.disabled, ";\n                border-color: ").concat(props.isLoading ? props.palette.error.main : props.palette.background.disabled, ";\n                color: ").concat(props.palette.text.disabled, ";\n            }\n        ");
}, function (props) {
  var successMainContrastText = props.palette.getContrastText(props.palette.success.main);
  var successDarkContrastText = props.palette.getContrastText(props.palette.success.dark);
  return props.variant === 'success' && "\n            background-color: ".concat(props.palette.success.main, ";\n            border: 1px solid ").concat(props.palette.success.main, ";\n            color: ").concat(successMainContrastText, ";\n\n            &:link,\n            &:visited {\n                color: ").concat(successMainContrastText, ";\n            }\n        \n            &:hover,\n            &:focus,\n            &:active {\n                background-color: ").concat(props.palette.success.dark, ";\n                border-color: ").concat(props.palette.success.dark, ";\n                color: ").concat(successDarkContrastText, ";\n            }\n\n            &:focus {\n                box-shadow: ").concat(props.shadows.success, ";\n            }\n        \n            &[disabled] {\n                background-color: ").concat(props.isLoading ? props.palette.success.main : props.palette.background.disabled, ";\n                border-color: ").concat(props.isLoading ? props.palette.success.main : props.palette.background.disabled, ";\n                color: ").concat(props.palette.text.disabled, ";\n            }\n        ");
}, function (props) {
  return props.variant === 'border' && "\n            background-color: transparent;\n            border: 1px solid ".concat(props.palette.border.divider, ";\n            color: ").concat(props.palette.text.label, ";\n            transition: border 0.15s linear;\n        \n            &:hover,\n            &:focus,\n            &:active {\n                background-color: ").concat(props.palette.background.highlight, ";\n                border: 1px solid ").concat(props.palette.border.divider, ";\n                color: ").concat(props.palette.text.main, ";\n            }\n        \n            &[disabled] {\n                background-color: transparent;\n                border-color: ").concat(props.isLoading ? props.palette.brand.main : props.palette.border.disabled, ";\n                color: ").concat(props.palette.text.disabled, ";\n            }\n        ");
}, function (props) {
  return props.variant === 'border-filled' && !props.isLoading && "\n            background-color: ".concat(props.palette.background.main, ";\n            border: 1px solid ").concat(props.palette.border.divider, ";\n            color: ").concat(props.palette.text.label, ";\n            transition: border 0.15s linear;\n        \n            &:hover,\n            &:focus,\n            &:active {\n                background-color: ").concat(props.palette.background.highlight, ";\n                border: 1px solid ").concat(props.palette.border.divider, ";\n                color: ").concat(props.palette.text.main, ";\n            }\n        \n            &[disabled] {\n                background-color: transparent;\n                border-color: ").concat(props.palette.border.disabled, ";\n                color: ").concat(props.palette.text.disabled, ";\n            }\n        ");
}, function (props) {
  var inverseBackgroundColor = (0, _color.replaceAlpha)((0, _color.colorToRgba)(props.inverse.active), 0.1);
  return props.variant === 'inverse' && "\n            background-color: transparent;\n            border: 1px solid transparent;\n            color: ".concat(props.inverse.text, ";\n\n            &:hover,\n            &:focus,\n            &:active {\n                color: ").concat(props.inverse.active, ";\n                background-color: ").concat(inverseBackgroundColor, ";\n            }\n        \n            &:focus {\n                outline: none;\n                box-shadow: ").concat(props.shadows.shadow_5, ";\n            }\n        \n            &[disabled] {\n                background-color: transparent;\n                color: ").concat(props.inverse.disabled, ";\n            }\n        ");
}, function (props) {
  var inverseBackgroundColor = (0, _color.replaceAlpha)((0, _color.colorToRgba)(props.inverse.active), 0.1);
  return props.variant === 'border-inverse' && "   \n            background-color: transparent;\n            border: 1px solid ".concat(props.inverse.text, ";\n            color: ").concat(props.inverse.border, ";\n\n            &:hover,\n            &:focus,\n            &:active {\n                border-color: ").concat(props.inverse.active, ";\n                color: ").concat(props.inverse.active, ";\n                background-color: ").concat(inverseBackgroundColor, "\n            }\n            \n            &:focus {\n                outline: none;\n                box-shadow: ").concat(props.shadows.shadow_5, ";\n            }\n            \n            &[disabled] {\n                background-color: transparent;\n                border-color: ").concat(props.isLoading ? props.inverse.text : props.inverse.disabled, ";\n                color: ").concat(props.inverse.disabled, ";\n            }\n        ");
}, function (props) {
  return props.shaded && "\n            box-shadow: ".concat(props.shadows.shadow_10, ";\n            border: 1px solid transparent;\n\n        &:hover,\n        &:focus,\n        &:active {\n            border: 1px solid transparent;\n            box-shadow: ").concat(props.shadows.shadow_11, ";\n        }\n    ");
});
var _default = StyledButton;
exports["default"] = _default;