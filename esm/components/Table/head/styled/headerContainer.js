import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import { PADDING_X_SMALL } from '../../../../styles/paddings';
var StyledHeaderContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 1px transparent solid;\n    display: flex;\n    align-items: center;\n    height: 44px;\n    padding: 0 ", ";\n    ", ";\n    ", "\n    ", "\n    ", "\n"])), PADDING_X_SMALL, function (props) {
  return props.theme.variant === 'listview' && "\n            justify-content: center;\n            text-transform: none;\n        ";
}, function (props) {
  return props.headerAlignment === 'left' && 'justify-content: left;';
}, function (props) {
  return props.headerAlignment === 'center' && 'justify-content: center;';
}, function (props) {
  return props.headerAlignment === 'right' && "\n        flex-direction: row-reverse;\n        justify-content: flex-start;\n    ";
});
export default StyledHeaderContainer;