"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgBosniaAndHerzegovina(_ref) {
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
    d: "M16 0C10.327 0 5.344 2.953 2.503 7.405L24.2 29.74C28.872 26.947 32 21.839 32 16c0-8.837-7.163-16-16-16z",
    fill: "#FFDA44"
  }), _react["default"].createElement("g", {
    fill: "#0052B4"
  }, _react["default"].createElement("path", {
    d: "M32 16c0-4.151-1.581-7.933-4.174-10.777v21.554A15.942 15.942 0 0032 16zM19.987 30.117l1.676-.001.517-1.594.519 1.593h.84c.516-.276 1.014-.58 1.494-.908L2.793 6.967c-.366.535-.7 1.093-1.001 1.672l.197.607 1.676-.001-1.355.986.519 1.593-1.357-.984-.809.589A15.995 15.995 0 000 16c0 8.837 7.163 16 16 16 1.868 0 3.661-.32 5.328-.91l-1.341-.973zM3.569 15.304l.517-1.594-1.357-.984 1.676-.001.517-1.595.519 1.594 1.676-.001-1.355.986.518 1.594-1.356-.985-1.355.986zm3.451 3.479l.517-1.595-1.356-.984 1.676-.001.517-1.594.518 1.593h1.676l-1.355.985.52 1.594-1.357-.984-1.356.986zm3.452 3.478l.517-1.594-1.357-.985h1.676l.517-1.595.519 1.594 1.676-.002-1.355.986.519 1.594-1.357-.984-1.355.986zm4.807 2.492l-1.356.986.517-1.594-1.356-.985h1.676l.517-1.595.519 1.594 1.675-.001-1.355.986.52 1.593-1.357-.984zm2.096 4.464l.517-1.594-1.357-.984 1.676-.001.517-1.595.52 1.594 1.675-.001-1.355.986.519 1.594-1.357-.985-1.355.986z"
  }))));
}

SvgBosniaAndHerzegovina.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgBosniaAndHerzegovina.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgBosniaAndHerzegovina;
exports["default"] = _default;