import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

import styled from 'styled-components';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
import Card from '../Card';
import { StyledInput as StyledPhoneInput } from '../PhoneInput/styled';
import { BORDER_RADIUS_SQUARE, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SEMI_ROUNDED } from '../../styles/borderRadius';
export var StyledCard = styled(Card)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 10px;\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export var StyledContent = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 19rem;\n"])));
export var ColorInputContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 1;\n"])));
export var StyledInput = styled(StyledPhoneInput)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    padding-left: 1.2rem;\n\n    ::-moz-focus-inner {\n        border: 0;\n        padding-left: 1.2rem;\n    }\n\n    :focus,\n    :active {\n        outline: 0;\n        padding-left: 1.2rem;\n    }\n"])));
export var StyledAlphaInput = styled(StyledPhoneInput)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 2.5em;\n    text-align: center;\n    font-weight: normal;\n    padding-left: 8px;\n\n    :focus,\n    :active {\n        outline: 0;\n        padding-left: 8px;\n    }\n\n    &::-moz-focus-inner {\n        border: 0;\n        padding-left: 8px;\n    }\n\n    /* Chrome, Safari, Edge, Opera */\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n\n    /* Firefox */\n    &[type='number'] {\n        -moz-appearance: textfield;\n    }\n"])));
export var StyledAlpha = attachThemeAttrs(styled.div)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    color: ", ";\n    font-weight: bold;\n\n    :before {\n        content: '';\n        position: absolute\n        height: 1.5rem;\n        margin: 0 auto;\n\n        border-left: 1px solid ", ";\n        ", ";\n\n        ", ";\n    }\n"])), function (props) {
  return props.palette.text.header;
}, function (props) {
  return props.palette.border.divider;
}, function (props) {
  return props.readOnly && "\n            border-left: 1px solid transparent;\n            padding-left: 8px;\n        ";
}, function (props) {
  return props.disabled && "\n            border-left: 1px solid ".concat(props.palette.border.disabled, ";\n            }\n        ");
});
export var StyledColorSample = attachThemeAttrs(styled.div)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: ", ";\n    border: solid 1px;\n    ", ";\n    ", ";\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.size === 'small' && "\n            width: 20px;\n            height: 20px;\n        ";
}, function (props) {
  return props.size === 'large' && "\n            width: 40px;\n            height: 40px;\n        ";
});