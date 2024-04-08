"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgGuernsey(_ref) {
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
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M31.865 13.913H18.087V.135a16.16 16.16 0 00-4.174 0v13.778H.135a16.158 16.158 0 000 4.174h13.778v13.778a16.16 16.16 0 004.174 0V18.087h13.778a16.16 16.16 0 000-4.174z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M20.522 16.696l1.043.695V14.61l-1.043.695h-3.826v-3.826l.695-1.043H14.61l.695 1.043v3.826h-3.826l-1.043-.695v2.782l1.043-.695h3.826v3.826l-.695 1.043h2.782l-.695-1.043v-3.826z"
  })));
}

SvgGuernsey.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgGuernsey.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgGuernsey;
exports["default"] = _default;