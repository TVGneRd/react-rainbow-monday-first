"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AssignFieldModalFooter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../../Button"));

var _footer = _interopRequireDefault(require("./styled/footer"));

var _cancelButton = _interopRequireDefault(require("./styled/cancelButton"));

function AssignFieldModalFooter(props) {
  var onCancel = props.onCancel,
      onAssign = props.onAssign,
      isAssignButtonDisabled = props.isAssignButtonDisabled,
      borderRadius = props.borderRadius;
  return _react["default"].createElement(_footer["default"], null, _react["default"].createElement(_cancelButton["default"], {
    label: "Cancel",
    onClick: onCancel,
    borderRadius: borderRadius
  }), _react["default"].createElement(_Button["default"], {
    label: "Assign",
    variant: "brand",
    onClick: onAssign,
    disabled: isAssignButtonDisabled,
    borderRadius: borderRadius
  }));
}

AssignFieldModalFooter.propTypes = {
  onCancel: _propTypes["default"].func,
  onAssign: _propTypes["default"].func,
  isAssignButtonDisabled: _propTypes["default"].bool,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
AssignFieldModalFooter.defaultProps = {
  onCancel: function onCancel() {},
  onAssign: function onAssign() {},
  isAssignButtonDisabled: false,
  borderRadius: 'rounded'
};