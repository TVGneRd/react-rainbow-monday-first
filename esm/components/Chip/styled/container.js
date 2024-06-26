import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2, BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../../styles/borderRadius';
import { PADDING_X_SMALL, PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM, FONT_SIZE_TEXT_LARGE, FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';
var variants = ['brand', 'success', 'warning', 'error'];
var StyledContainer = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none;\n    border-radius: ", ";\n    padding: 0 ", ";\n    transition-duration: 0.4s;\n    transition-timing-function: ease-in-out;\n    transition-property: margin, max-height, opacity, top;\n    height: 2rem;\n    line-height: 2rem;\n    font-size: ", ";\n    letter-spacing: 0.5;\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    ", ";\n    ", ";\n    ", ";\n\n        ", ";\n    \n        ", ";\n\n    ", ";\n\n    ", ";\n    \n    ", ";\n    \n"])), BORDER_RADIUS_2, PADDING_SMALL, FONT_SIZE_TEXT_MEDIUM, function (props) {
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
  return props.size === 'large' && "\n                font-size: ".concat(FONT_SIZE_TEXT_LARGE, ";\n                height: 2.9rem;\n                padding: 0 ").concat(PADDING_MEDIUM, ";\n            ");
}, function (props) {
  return props.size === 'small' && "\n                font-size: ".concat(FONT_SIZE_TEXT_SMALL, ";\n                height: 1.6rem;\n                padding: 0 ").concat(PADDING_X_SMALL, ";\n            ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export default StyledContainer;