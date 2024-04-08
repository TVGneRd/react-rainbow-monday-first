import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledStatsCardDescription = attachThemeAttrs(styled.h2)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 14px;\n    line-height: 1.2;\n    color: ", ";\n    padding: 0;\n    font-weight: inherit;\n"])), function (props) {
  return props.palette.text.label;
});
export default StyledStatsCardDescription;