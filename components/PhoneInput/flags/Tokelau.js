"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgTokelau(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("circle", {
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M25.74 7.652c-.144.69-.21 1.424-.21 2.157 0 4.22 2.517 7.874 6.123 9.518C31.88 18.254 32 17.141 32 16c0-8.837-7.163-16-16-16S0 7.163 0 16s7.163 16 16 16c5.48 0 10.316-2.756 13.2-6.956H9.044v-2.087h21.368c.22-.453.417-.917.593-1.392H9.044L25.739 7.652z",
    fill: "#0052B4"
  }), _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("path", {
    d: "M11.755 8.348L12.1 9.41h1.117l-.904.657.346 1.062-.905-.656-.904.656.346-1.062-.904-.657h1.117zM7.215 16l.432 1.329h1.396l-1.13.82.432 1.33-1.13-.822-1.13.821.431-1.328-1.13-.821h1.397zM7.215 4.87l.432 1.328h1.396l-1.13.821.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.82h1.397zM3.737 11.13l.431 1.33h1.397l-1.13.82.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.82h1.397z"
  }))));
}

SvgTokelau.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgTokelau.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgTokelau;
exports["default"] = _default;