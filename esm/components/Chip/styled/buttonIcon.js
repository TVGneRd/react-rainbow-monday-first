import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../ButtonIcon';
import { MARGIN_XX_SMALL } from '../../../styles/margins';
var variants = ['brand', 'success', 'warning', 'error'];
var StyledButtonIcon = attachThemeAttrs(styled(ButtonIcon))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-right: -0.6rem;\n    margin-left: ", ";\n    fill: ", ";\n    flex-shrink: 0;\n    ", ";\n    ", ";\n    ", ";\n\n    ", ";\n"])), MARGIN_XX_SMALL, function (props) {
  return props.palette.border.main;
}, function (props) {
  return props.variant === 'outline-brand' && "fill: ".concat(props.palette.brand.main, ";");
}, function (props) {
  return variants.includes(props.variant) && "fill: ".concat(props.palette.getContrastText(props.palette[props.variant].main), ";");
}, function (props) {
  return props.size === 'medium' && "\n            margin-right: -0.8rem;\n        ";
}, function (props) {
  return props.size === 'x-small' && "\n            margin-right: -0.4rem;\n        ";
});
export default StyledButtonIcon;