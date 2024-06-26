"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var _styled = require("./styled");

var _chips = _interopRequireDefault(require("./chips"));

var Content = function Content(props) {
  var variant = props.variant,
      value = props.value,
      chipVariant = props.chipVariant,
      readOnly = props.readOnly,
      disabled = props.disabled,
      onDelete = props.onDelete,
      size = props.size,
      borderRadius = props.borderRadius;

  if (variant === 'chip') {
    return _react["default"].createElement(_chips["default"], {
      value: value,
      variant: chipVariant,
      readOnly: readOnly,
      disabled: disabled,
      onDelete: onDelete,
      borderRadius: borderRadius,
      size: size
    });
  }

  var content = (0, _helpers.getContent)(value);
  return _react["default"].createElement(_styled.StyledText, {
    size: size
  }, content);
};

Content.propTypes = {
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(['default', 'chip']),
  chipVariant: _propTypes["default"].oneOf(['base', 'neutral', 'outline-brand', 'brand']),
  value: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].any
  })),
  onDelete: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Content.defaultProps = {
  disabled: false,
  readOnly: false,
  variant: 'default',
  chipVariant: 'base',
  value: undefined,
  onDelete: function onDelete() {},
  size: 'medium',
  borderRadius: 'rounded'
};
var _default = Content;
exports["default"] = _default;