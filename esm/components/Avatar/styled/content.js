import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContent = attachThemeAttrs(styled.span)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    height: 100%;\n    text-shadow: ", ";\n    box-sizing: border-box;\n    width: 100%\n\n    &:hover {\n        color: currentColor;\n        cursor: default;\n    }\n\n    &[title] {\n        text-decoration: none;\n        cursor: default;\n    }\n\n    ", ";\n\n    ", ";\n"])), function (props) {
  return props.shadows.shadow_1;
}, function (props) {
  var inverseText = props.palette.getContrastText(props.palette.background.secondary);
  return props.initialsVariant === 'inverse' && "\n                background-color: ".concat(props.palette.background.secondary, ";\n                color: ").concat(inverseText, ";\n                text-shadow: none;\n            \n                &:hover {\n                    color: ").concat(inverseText, ";\n                    cursor: default;\n                }\n            ");
}, function (props) {
  return props.as === 'abbr' && "\n            border: 0;\n            text-decoration: none;\n            background: transparent;\n        ";
});
export default StyledContent;