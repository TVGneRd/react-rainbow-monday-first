"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cancel = _interopRequireDefault(require("../../icons/cancel"));

var _templateObject;

var StyledCancelIcon = (0, _styledComponents["default"])(_cancel["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-right: 8px;\n"])));
var _default = StyledCancelIcon;
exports["default"] = _default;