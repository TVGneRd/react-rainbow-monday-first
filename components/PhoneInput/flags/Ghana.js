"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgGhana(_ref) {
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
    d: "M0 16c0 1.957.352 3.832.995 5.565L16 22.261l15.005-.696C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565L16 9.739l-15.005.696A15.966 15.966 0 000 16z",
    fill: "#FFDA44"
  }), _react["default"].createElement("path", {
    d: "M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z",
    fill: "#D80027"
  }), _react["default"].createElement("path", {
    d: "M31.005 21.565H.995C3.255 27.658 9.121 32 16 32c6.88 0 12.744-4.342 15.005-10.435z",
    fill: "#496E2D"
  }), _react["default"].createElement("path", {
    fill: "#000",
    d: "M16 10.435l1.381 4.251h4.47l-3.616 2.628 1.381 4.251L16 18.938l-3.617 2.627 1.382-4.251-3.617-2.628h4.47z"
  })));
}

SvgGhana.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgGhana.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgGhana;
exports["default"] = _default;