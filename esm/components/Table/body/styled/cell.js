import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
var StyledCell = attachThemeAttrs(styled.th)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 0;\n    text-align: ", ";\n    box-sizing: border-box;\n    height: 1px; // This is needed for expanding the cell height in all browsers but doesn't work in Firefox\n    \n    @-moz-document url-prefix() {\n        height: 100%; // This is needed for expanding the cell height in Firefox\n    }\n    \n\n    :first-child > div {\n        padding-left: 18px;\n\n        ", "\n    }\n\n    ", "\n\n    :focus {\n        outline: none;\n\n        > div {\n            border-color: ", ";\n        }\n    }\n\n    ", "\n\n    \n"])), function (props) {
  return props.cellAlignment || 'left';
}, function (props) {
  return props.component && "\n                padding-left: 0;\n        ";
}, function (props) {
  return props.theme.variant === 'listview' && "\n        background-color: ".concat(props.palette.background.main, ";\n        border: none;\n        text-align: ").concat(props.cellAlignment || 'center', ";\n        border-top: 1px solid ").concat(props.palette.border.divider, ";\n        border-right: 1px solid ").concat(props.palette.border.divider, ";\n\n        :first-child {\n            border-left: 1px solid ").concat(props.palette.border.divider, ";\n            border-left-style: solid;\n            border-top-left-radius: 13px; \n            border-bottom-left-radius: 13px;\n        }\n        \n        :last-child {\n            border-right-style: solid;\n            border-bottom-right-radius: 13px; \n            border-top-right-radius: 13px; \n        }\n\n        :last-child > div {\n            border-bottom-right-radius: 12px; \n            border-top-right-radius: 12px;\n            overflow: hidden;\n        }\n\n        :first-child > div {\n            border-top-left-radius: 12px; \n            border-bottom-left-radius: 12px;\n            overflow: hidden;\n        }\n    ");
}, function (props) {
  return props.palette.brand.main;
}, function (props) {
  return props.isEditable && "\n        :focus {\n            outline: none;\n            > div {\n                border-color: transparent;\n            }\n        }\n    ";
});
export default StyledCell;