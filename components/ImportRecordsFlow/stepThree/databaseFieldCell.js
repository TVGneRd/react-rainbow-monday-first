"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatabaseFieldCell;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RequiredAsterisk = _interopRequireDefault(require("../../RequiredAsterisk"));

var _databaseFieldCell = _interopRequireDefault(require("./styled/databaseFieldCell"));

function DatabaseFieldCell(props) {
  var value = props.value,
      required = props.row.required,
      borderRadius = props.borderRadius;
  return _react["default"].createElement(_databaseFieldCell["default"], {
    borderRadius: borderRadius
  }, _react["default"].createElement(_RequiredAsterisk["default"], {
    required: !!required
  }), value);
}

DatabaseFieldCell.propTypes = {
  value: _propTypes["default"].string.isRequired,
  row: _propTypes["default"].object.isRequired,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DatabaseFieldCell.defaultProps = {
  borderRadius: 'rounded'
};