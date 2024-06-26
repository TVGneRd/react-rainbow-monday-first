"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Preview;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Column = _interopRequireDefault(require("../../Column"));

var _getFieldAssignedPreviewData = _interopRequireDefault(require("../helpers/getFieldAssignedPreviewData"));

var _previewText = _interopRequireDefault(require("./styled/previewText"));

var _table = _interopRequireDefault(require("../styled/table"));

function Preview(props) {
  var field = props.field,
      fileFields = props.fileFields,
      data = props.data,
      attributes = props.attributes;
  var mappedData = (0, _getFieldAssignedPreviewData["default"])(data, field, fileFields, attributes);

  if (fileFields.length) {
    var fieldsToAssing = fileFields.join(',');
    var fieldWord = fileFields.length > 1 ? 'fields' : 'field';
    return _react["default"].createElement("div", null, _react["default"].createElement(_previewText["default"], null, "Assigning", _react["default"].createElement("b", null, " \u201C".concat(fieldsToAssing, "\u201D")), " ", "".concat(fieldWord, " to"), _react["default"].createElement("b", null, " \u201C".concat(field, "\u201D")), " database field"), _react["default"].createElement(_table["default"], {
      keyField: "id",
      data: mappedData,
      variant: "listview"
    }, _react["default"].createElement(_Column["default"], {
      header: field,
      field: field,
      headerAlignment: "left",
      cellAlignment: "left"
    })));
  }

  return null;
}

Preview.propTypes = {
  field: _propTypes["default"].string,
  fileFields: _propTypes["default"].array,
  data: _propTypes["default"].array,
  attributes: _propTypes["default"].object.isRequired
};
Preview.defaultProps = {
  field: '',
  fileFields: [],
  data: []
};