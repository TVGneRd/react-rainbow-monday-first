"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SortArrowIcon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sortArrowIcon = _interopRequireDefault(require("./styled/sortArrowIcon"));

function SortArrowIcon(_ref) {
  var direction = _ref.direction,
      headerAlignment = _ref.headerAlignment;
  var arrowAscendent = direction === 'asc';
  return _react["default"].createElement(_sortArrowIcon["default"], {
    arrowAscendent: arrowAscendent,
    headerAlignment: headerAlignment,
    className: "rainbow-table_header-arrow",
    width: "12px",
    height: "12px",
    viewBox: "0 0 12 12",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("g", {
    id: "components",
    stroke: "none",
    strokeWidth: "1",
    fill: "currentColor",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    id: "Components-Data-Table-V2",
    transform: "translate(-355.000000, -1997.000000)",
    fillRule: "nonzero"
  }, _react["default"].createElement("g", {
    id: "Group-34",
    transform: "translate(282.000000, 1336.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-16-Copy",
    transform: "translate(0.000000, 525.000000)"
  }, _react["default"].createElement("g", {
    id: "Group-59-Copy",
    transform: "translate(1.000000, 120.000000)"
  }, _react["default"].createElement("g", {
    id: "arrow-down",
    transform: "translate(72.000000, 16.000000)"
  }, _react["default"].createElement("path", {
    d: "M10.8895323,5.09131403 L11.4828508,5.68463252 C11.7340757,5.93585746 11.7340757,6.34209354 11.4828508,6.59064588 L6.28997773,11.7861915 C6.03875278,12.0374165 5.6325167,12.0374165 5.38396437,11.7861915 L0.188418708,6.59064588 C-0.0628062361,6.33942094 -0.0628062361,5.93318486 0.188418708,5.68463252 L0.781737194,5.09131403 C1.03563474,4.83741648 1.44988864,4.84276169 1.69844098,5.10200445 L4.76659243,8.32249443 L4.76659243,0.64142539 C4.76659243,0.28596882 5.05256125,0 5.40801782,0 L6.26325167,0 C6.61870824,0 6.90467706,0.28596882 6.90467706,0.64142539 L6.90467706,8.32249443 L9.97282851,5.10200445 C10.2213808,4.84008909 10.6356347,4.83474388 10.8895323,5.09131403 Z",
    id: "Shape"
  }))))))));
}

SortArrowIcon.propTypes = {
  direction: _propTypes["default"].oneOf(['asc', 'desc']),
  headerAlignment: _propTypes["default"].oneOf(['left', 'center', 'right'])
};
SortArrowIcon.defaultProps = {
  direction: 'asc',
  headerAlignment: undefined
};