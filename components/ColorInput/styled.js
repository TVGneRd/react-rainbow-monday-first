"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = exports.StyledContent = exports.StyledColorSample = exports.StyledCard = exports.StyledAlphaInput = exports.StyledAlpha = exports.ColorInputContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../styles/helpers/attachThemeAttrs"));

var _Card = _interopRequireDefault(require("../Card"));

var _styled = require("../PhoneInput/styled");

var _borderRadius = require("../../styles/borderRadius");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

var StyledCard = (0, _styledComponents["default"])(_Card["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 10px;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
exports.StyledCard = StyledCard;

var StyledContent = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 19rem;\n"])));

exports.StyledContent = StyledContent;

var ColorInputContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex: 1;\n"])));

exports.ColorInputContainer = ColorInputContainer;
var StyledInput = (0, _styledComponents["default"])(_styled.StyledInput)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    padding-left: 1.2rem;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding-left: 1.2rem;\n    }\n\n    :focus,\n    :active {\n        outline: 0;\n        padding-left: 1.2rem;\n    }\n"])));
exports.StyledInput = StyledInput;
var StyledAlphaInput = (0, _styledComponents["default"])(_styled.StyledInput)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 2.5em;\n    text-align: center;\n    font-weight: normal;\n    padding-left: 8px;\n\n    :focus,\n    :active {\n        outline: 0;\n        padding-left: 8px;\n    }\n\n    &::-moz-focus-inner {\n        border: 0;\n        padding-left: 8px;\n    }\n\n    /* Chrome, Safari, Edge, Opera */\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n\n    /* Firefox */\n    &[type='number'] {\n        -moz-appearance: textfield;\n    }\n"])));
exports.StyledAlphaInput = StyledAlphaInput;
var StyledAlpha = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    color: ", ";\n    font-weight: bold;\n\n    :before {\n        content: '';\n        position: absolute\n        height: 1.5rem;\n        margin: 0 auto;\n\n        border-left: 1px solid ", ";\n        ", ";\n\n        ", ";\n    }\n"])), function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.readOnly && "\n            border-left: 1px solid transparent;\n            padding-left: 8px;\n        ";
}, function (props) {
  return props.disabled && "\n            border-left: 1px solid ".concat(props.palette.border.disabled, ";\n            }\n        ");
});
exports.StyledAlpha = StyledAlpha;
var StyledColorSample = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: ", ";\n    border: solid 1px;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.size === 'small' && "\n            width: 20px;\n            height: 20px;\n        ";
}, function (props) {
  return props.size === 'large' && "\n            width: 40px;\n            height: 40px;\n        ";
});
exports.StyledColorSample = StyledColorSample;