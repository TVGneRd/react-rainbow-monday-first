"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectedFieldsToAssign;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chip = _interopRequireDefault(require("./styled/chip"));

function SelectedFieldsToAssign(_ref) {
  var values = _ref.values,
      _onDelete = _ref.onDelete,
      borderRadius = _ref.borderRadius;
  return values.map(function (value, index) {
    var key = "field-".concat(index);
    return _react["default"].createElement(_chip["default"], {
      key: key,
      label: value,
      title: value,
      variant: "neutral",
      onDelete: function onDelete() {
        return _onDelete(value);
      },
      borderRadius: borderRadius
    });
  });
}

SelectedFieldsToAssign.propTypes = {
  values: _propTypes["default"].array,
  onDelete: _propTypes["default"].func,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
SelectedFieldsToAssign.defaultProps = {
  values: [],
  onDelete: function onDelete() {},
  borderRadius: 'rounded'
};