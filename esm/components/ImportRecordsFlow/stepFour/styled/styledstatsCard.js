import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_SEMI_ROUNDED, BORDER_RADIUS_SEMI_SQUARE, BORDER_RADIUS_SQUARE } from '../../../../styles/borderRadius';
var StyledStatsCard = attachThemeAttrs(styled.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: solid 1px ", ";\n    background-color: ", ";\n    padding: 10px 8px 10px 16px;\n    display: flex;\n    align-items: center;\n    margin: 0 16px 16px 16px;\n    border-radius: 12px;\n\n    ", ";\n        \n    ", ";\n        \n    ", ";\n"])), function (props) {
  return props.palette.background.highlight;
}, function (props) {
  return props.palette.background.secondary;
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(BORDER_RADIUS_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_SQUARE, ";\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(BORDER_RADIUS_SEMI_ROUNDED, ";\n        ");
});
export default StyledStatsCard;