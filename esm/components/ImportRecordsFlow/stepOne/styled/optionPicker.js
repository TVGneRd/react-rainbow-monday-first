import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

import styled from 'styled-components';
import File from '../../icons/file';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import RadioGroup from '../../../RadioGroup';
import MergeFiles from '../../icons/mergeFiles';
import { BORDER_RADIUS_SEMI_ROUNDED, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SQUARE } from '../../../../styles/borderRadius';
export var OptionContainer = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 40rem;\n    padding: 12px 16px 12px 20px;\n    background-color: ", ";\n    border-radius: 10px;\n    margin-top: -16px;\n\n    ", "\n\n    &:hover {\n        background-color: ", ";\n        cursor: pointer;\n\n        svg {\n            color: ", ";\n        }\n\n        div:nth-child(2) {\n            background-color: ", ";\n        }\n    }\n\n    ", ";\n    \n    ", ";\n    \n    ", ";\n"])), function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.isSelected && "\n            background-color: ".concat(props.palette.brand.light, ";\n\n            svg {\n                color: ").concat(props.palette.background.highlight, ";\n            }\n\n            div:nth-child(2) {\n                background-color: ").concat(props.palette.brand.main, ";\n            }\n        ");
}, function (props) {
  return props.palette.brand.light;
}, function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export var OptionLeftContent = attachThemeAttrs(styled.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 1;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n"])));
export var OptionName = attachThemeAttrs(styled.h3)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 16px;\n    width: 500;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n"])), function (props) {
  return props.palette.text.main;
});
export var OptionDescription = attachThemeAttrs(styled.p)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    font-size: 14px;\n    color: ", ";\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n"])), function (props) {
  return props.palette.text.label;
});
export var StyledFile = attachThemeAttrs(styled(File))(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: ", ";\n    flex-shrink: 0;\n"])), function (props) {
  return props.palette.text.label;
});
export var StyledMergeFiles = attachThemeAttrs(styled(MergeFiles))(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: ", ";\n    flex-shrink: 0;\n"])), function (props) {
  return props.palette.text.label;
});
export var IconContainer = attachThemeAttrs(styled.div)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    background-color: ", ";\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n"])), function (props) {
  return props.palette.background.main;
});
export var StyledRadioGroup = styled(RadioGroup)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    .rainbow-input_faux {\n        visibility: hidden;\n    }\n"])));