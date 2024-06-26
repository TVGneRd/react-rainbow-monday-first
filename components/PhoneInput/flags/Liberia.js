"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgLiberia(_ref) {
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
  }, _react["default"].createElement("g", {
    fill: "#F0F0F0"
  }, _react["default"].createElement("circle", {
    cx: 16,
    cy: 16,
    r: 16
  }), _react["default"].createElement("path", {
    d: "M3.657 5.818h24.686A16.088 16.088 0 0025.2 2.91H6.8a16.084 16.084 0 00-3.143 2.91zM0 16c0 .49.023.975.067 1.455h31.866a16.197 16.197 0 000-2.91H.067C.023 15.026 0 15.51 0 16zM1.745 23.273h28.51c.471-.922.856-1.895 1.143-2.91H.602a15.892 15.892 0 001.143 2.91zM6.8 29.09h18.4a16.088 16.088 0 003.143-2.908H3.657A16.094 16.094 0 006.8 29.09zM.602 11.636h30.796a15.891 15.891 0 00-1.143-2.909H1.745a15.895 15.895 0 00-1.143 2.91z"
  })), _react["default"].createElement("g", {
    fill: "#D80027"
  }, _react["default"].createElement("path", {
    d: "M7.652 2.91H25.2A15.926 15.926 0 0016 0c-2.087 0-5.745 1.077-8.348 2.91zM15.304 8.727h14.951a16.02 16.02 0 00-1.912-2.909H15.304v2.91zM15.304 14.546h16.63c-.09-1-.271-1.972-.536-2.91H15.304v2.91zM.603 20.364h30.795c.265-.938.445-1.91.535-2.91H.067c.09 1 .27 1.972.536 2.91zM3.657 26.182h24.686a16.026 16.026 0 001.912-2.91H1.745a16.02 16.02 0 001.912 2.91zM16 32c3.425 0 6.598-1.077 9.2-2.91H6.8A15.926 15.926 0 0016 32z"
  })), _react["default"].createElement("path", {
    d: "M.602 11.636c-.265.938-.446 1.91-.535 2.91H16V0C8.676 0 2.502 4.92.602 11.636z",
    fill: "#0052B4"
  }), _react["default"].createElement("path", {
    fill: "#F0F0F0",
    d: "M9.524 4.174l1.036 3.188h3.353l-2.712 1.971 1.036 3.189-2.713-1.97-2.712 1.97 1.036-3.189-2.712-1.97h3.352z"
  })));
}

SvgLiberia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgLiberia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgLiberia;
exports["default"] = _default;