"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CheckmarkIcon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function CheckmarkIcon(props) {
  var className = props.className,
      style = props.style;
  return _react["default"].createElement("svg", {
    className: className,
    style: style,
    width: "9px",
    height: "6px",
    viewBox: "0 0 9 6",
    version: "1.1"
  }, _react["default"].createElement("title", null, "checkmark"), _react["default"].createElement("g", {
    id: "components",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    id: "Components-PicklistOption",
    transform: "translate(-808.000000, -1258.000000)",
    fill: "currentColor",
    fillRule: "nonzero"
  }, _react["default"].createElement("g", {
    id: "Group-35",
    transform: "translate(577.000000, 1170.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-30-Copy-2",
    transform: "translate(119.000000, 65.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-14",
    transform: "translate(26.000000, 0.000000)"
  }, _react["default"].createElement("path", {
    d: "M94.0871982,24.2050923 L89.4990845,28.7930767 C89.3614372,28.930724 89.1807509,29 89.0000646,29 C88.8193783,29 88.638692,28.930724 88.5010447,28.7930767 L86.2070525,26.4990845 C85.9309825,26.2231437 85.9309825,25.7769855 86.2070525,25.5010447 C86.4829933,25.2249747 86.9290222,25.2249747 87.2050923,25.5010447 L89.0000646,27.2960171 L93.0891584,23.2070525 C93.3650992,22.9309825 93.8111281,22.9309825 94.0871982,23.2070525 C94.363139,23.4829933 94.363139,23.9290222 94.0871982,24.2050923 Z",
    id: "checkmark"
  })))))));
}

CheckmarkIcon.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
CheckmarkIcon.defaultProps = {
  className: undefined,
  style: undefined
};