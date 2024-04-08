"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBenin(_ref) {
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
  }, _react["default"].createElement("path", {
    d: "M10.435 14.609l1.391 16.84c1.33.358 2.73.551 4.174.551 8.837 0 16-7.163 16-16l-21.565-1.391z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M10.435 16L11.826.551C13.156.192 14.556 0 16 0c8.837 0 16 7.163 16 16H10.435z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M0 16c0 7.392 5.014 13.613 11.826 15.449V.55C5.014 2.387 0 8.608 0 16z",
    fill: "#6DA544"
  })));
}

SvgBenin.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBenin.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBenin;
exports["default"] = _default;