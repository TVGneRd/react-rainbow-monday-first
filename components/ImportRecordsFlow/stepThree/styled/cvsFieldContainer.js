"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCVSFieldContainer = exports.CellContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../../styles/helpers/attachThemeAttrs"));

var _templateObject, _templateObject2;

var StyledCVSFieldContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].span)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    align-items: center;\n    display: flex;\n    color: ", ";\n    font-size: 14px;\n    font-style: italic;\n"])), function (props) {
  return props.palette.text.header;
});
exports.StyledCVSFieldContainer = StyledCVSFieldContainer;

var CellContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    align-items: center;\n    display: flex;\n    padding: 3px 24px 0 8px;\n    justify-content: space-between;\n"])));

exports.CellContainer = CellContainer;