"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgSyria(_ref) {
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
    d: "M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z",
    fill: "#000"
  }), _react["default"].createElement("g", {
    fill: "#6DA544"
  }, _react["default"].createElement("path", {
    d: "M9.56 12.174l.863 2.657h2.794l-2.26 1.642.863 2.657-2.26-1.642L7.3 19.13l.863-2.657-2.26-1.642h2.794zM22.44 12.174l.863 2.657h2.794l-2.26 1.642.863 2.657-2.26-1.642-2.26 1.642.863-2.657-2.26-1.642h2.794z"
  }))));
}

SvgSyria.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgSyria.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgSyria;
exports["default"] = _default;