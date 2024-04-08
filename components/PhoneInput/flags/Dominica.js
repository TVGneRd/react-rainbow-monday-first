"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgDominica(_ref) {
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
  }), _react["default"].createElement("g", {
    fill: "#496E2D"
  }, _react["default"].createElement("path", {
    d: "M19.13 31.693A16.017 16.017 0 0031.693 19.13H19.13v12.563zM.307 19.13A16.017 16.017 0 0012.87 31.693V19.13H.307zM31.693 12.87A16.017 16.017 0 0019.13.307V12.87h12.563zM12.87.307A16.017 16.017 0 00.307 12.87H12.87V.307z"
  })), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M14.957 19.13H12.87v12.563a16.02 16.02 0 002.087.272V19.13zM14.957 12.87V.035c-.71.045-1.406.137-2.087.272V12.87h2.087z"
  })), _react["default"].createElement("path", {
    d: "M17.044.035a16.164 16.164 0 00-2.088 0V12.87h2.087V.035zM14.957 31.965a16.164 16.164 0 002.087 0V19.13h-2.087v12.835z",
    fill: "#000"
  }), _react["default"].createElement("g", {
    fill: "#FFDA44"
  }, _react["default"].createElement("path", {
    d: "M12.87 14.957V12.87H.307a16 16 0 00-.272 2.087H12.87zM19.13 14.957h12.835a16.01 16.01 0 00-.272-2.087H19.13v2.087z"
  })), _react["default"].createElement("path", {
    d: "M19.13 17.044h12.835a16.208 16.208 0 000-2.088H19.13v2.088zM.035 14.957a16.208 16.208 0 000 2.087H12.87v-2.087H.035z",
    fill: "#000"
  }), _react["default"].createElement("circle", {
    fill: "#D80027",
    cx: 16,
    cy: 16,
    r: 7.652
  }), _react["default"].createElement("g", {
    fill: "#496E2D"
  }, _react["default"].createElement("path", {
    d: "M17.743 16.854c-.569-1.139-1.309-2.292-1.309-2.292s.019-.526.019-.839a.854.854 0 00-1.704-.073.673.673 0 00-.267 1.268.97.97 0 01.576-.535.864.864 0 00.136.092l.11.052s-.406 1.143-.406 1.758c0 1.726 1.138 2.259 1.138 2.259v.017l-.57.57h1.14v-1.139l.568.57c.005-.011 1.078-.69.57-1.708zM16 9.74l.259.796h.838l-.678.493.26.797-.679-.493-.678.493.259-.797-.678-.493h.838zM12.32 10.935l.678.493.678-.493-.259.797.678.493h-.838l-.259.797-.259-.797h-.838l.678-.493zM10.046 14.065h.838l.259-.797.259.797h.838l-.678.493.259.797-.678-.493-.678.493.259-.797zM10.046 17.935l.678-.493-.26-.797.679.493.678-.493-.26.797.679.493h-.838l-.26.797-.258-.797zM12.32 21.065l.259-.797-.678-.493h.838l.26-.797.258.797h.838l-.678.493.26.797-.679-.492zM16 22.26l-.259-.796h-.838l.678-.493-.26-.797.679.493.678-.493-.259.797.678.493h-.838zM19.68 21.065l-.678-.492-.678.492.259-.797-.678-.493h.838l.259-.797.259.797h.838l-.678.493zM21.954 17.935h-.838l-.259.797-.259-.797h-.838l.678-.493-.259-.797.678.493.678-.493-.259.797zM21.954 14.065l-.678.493.26.797-.679-.493-.678.493.26-.797-.679-.493h.838l.26-.797.258.797zM19.68 10.935l-.259.797.678.493h-.838l-.259.797-.26-.797h-.837l.678-.493-.26-.797.679.493z"
  }))));
}

SvgDominica.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgDominica.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgDominica;
exports["default"] = _default;