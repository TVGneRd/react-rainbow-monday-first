"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pencil;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Pencil(props) {
  var className = props.className,
      style = props.style;
  return _react["default"].createElement("svg", {
    className: className,
    style: style,
    width: "23px",
    height: "23px",
    viewBox: "0 0 23 23",
    fill: "currentColor"
  }, _react["default"].createElement("path", {
    d: "M18.9442 2.46436C18.7041 2.46436 18.4664 2.51165 18.2445 2.60354C18.0227 2.69542 17.8211 2.8301 17.6513 2.99989L4.33913 16.3121L3.36946 19.8676L6.92491 18.8979L20.2371 5.58568C20.4069 5.41589 20.5416 5.21433 20.6335 4.99249C20.7254 4.77066 20.7727 4.5329 20.7727 4.29278C20.7727 4.05267 20.7254 3.81491 20.6335 3.59307C20.5416 3.37124 20.4069 3.16968 20.2371 2.99989C20.0673 2.8301 19.8658 2.69542 19.6439 2.60354C19.4221 2.51165 19.1843 2.46436 18.9442 2.46436ZM17.4792 0.755777C17.9436 0.56338 18.4415 0.464355 18.9442 0.464355C19.447 0.464355 19.9448 0.56338 20.4093 0.755777C20.8738 0.948173 21.2958 1.23017 21.6513 1.58568C22.0068 1.94118 22.2888 2.36322 22.4812 2.82771C22.6736 3.2922 22.7727 3.79003 22.7727 4.29278C22.7727 4.79554 22.6736 5.29337 22.4812 5.75786C22.2888 6.22235 22.0068 6.64439 21.6513 6.99989L8.15134 20.4999C8.02829 20.6229 7.87525 20.7118 7.70735 20.7575L2.20735 22.2575C1.86114 22.352 1.49088 22.2536 1.23713 21.9999C0.98338 21.7461 0.885052 21.3759 0.979473 21.0297L2.47947 15.5297C2.52526 15.3618 2.61407 15.2087 2.73713 15.0857L16.2371 1.58568C16.5926 1.23017 17.0147 0.948173 17.4792 0.755777Z",
    className: "Vector (Stroke)"
  }));
}

Pencil.propTypes = {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string
};
Pencil.defaultProps = {
  style: undefined,
  className: undefined
};