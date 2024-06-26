"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgUruguay(_ref) {
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
    d: "M16 11.826h15.449a15.91 15.91 0 00-1.797-4.174H16v4.174z",
    fill: "#338AF3"
  }), _react["default"].createElement("g", {
    fill: "#338AF3"
  }, _react["default"].createElement("path", {
    d: "M6.04 28.522h19.92a16.08 16.08 0 003.692-4.174H2.348a16.084 16.084 0 003.692 4.174zM16 0v3.478h9.96A15.932 15.932 0 0016 0z"
  })), _react["default"].createElement("path", {
    d: "M16 11.826h15.449a15.91 15.91 0 00-1.797-4.174H16v4.174zM0 16c0 1.444.193 2.843.551 4.174H31.45c.358-1.33.551-2.73.551-4.174H0z",
    fill: "#338AF3"
  }), _react["default"].createElement("path", {
    fill: "#FFDA44",
    d: "M13.913 9.364l-1.954.919 1.04 1.893-2.121-.406-.27 2.143-1.477-1.576-1.478 1.576-.269-2.143-2.122.405 1.04-1.892-1.953-.92 1.954-.918-1.04-1.893 2.121.406.269-2.143L9.13 6.39l1.478-1.576.269 2.143L13 6.552l-1.041 1.893z"
  })));
}

SvgUruguay.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgUruguay.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgUruguay;
exports["default"] = _default;