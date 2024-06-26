"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _paddings = require("../../../../styles/paddings");

var _templateObject;

var StyledHeaderContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border: 1px transparent solid;\n    display: flex;\n    align-items: center;\n    height: 44px;\n    padding: 0 ", ";\n    ", ";\n    ", "\n    ", "\n    ", "\n"])), _paddings.PADDING_X_SMALL, function (props) {
  return props.theme.variant === 'listview' && "\n            justify-content: center;\n            text-transform: none;\n        ";
}, function (props) {
  return props.headerAlignment === 'left' && 'justify-content: left;';
}, function (props) {
  return props.headerAlignment === 'center' && 'justify-content: center;';
}, function (props) {
  return props.headerAlignment === 'right' && "\n        flex-direction: row-reverse;\n        justify-content: flex-start;\n    ";
});

var _default = StyledHeaderContainer;
exports["default"] = _default;