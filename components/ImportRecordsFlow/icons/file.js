"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = File;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function File(props) {
  var className = props.className,
      style = props.style;
  return _react["default"].createElement("svg", {
    className: className,
    style: style,
    width: "32",
    height: "33",
    viewBox: "0 0 32 33",
    fill: "none"
  }, _react["default"].createElement("path", {
    d: "M17 6.5H10C9.46957 6.5 8.96086 6.71071 8.58579 7.08579C8.21071 7.46086 8 7.96957 8 8.5V24.5C8 25.0304 8.21071 25.5391 8.58579 25.9142C8.96086 26.2893 9.46957 26.5 10 26.5H22C22.5304 26.5 23.0391 26.2893 23.4142 25.9142C23.7893 25.5391 24 25.0304 24 24.5V13.5L17 6.5Z",
    stroke: "currentColor",
    strokeOpacity: "0.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), _react["default"].createElement("path", {
    d: "M17 6.5V13.5H24",
    stroke: "currentColor",
    strokeOpacity: "0.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), _react["default"].createElement("path", {
    d: "M15.6799 17.8594V21.8594",
    stroke: "currentColor",
    strokeOpacity: "0.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), _react["default"].createElement("path", {
    d: "M13.6799 19.8594H17.6799",
    stroke: "currentColor",
    strokeOpacity: "0.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

File.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
File.defaultProps = {
  className: undefined,
  style: undefined
};