"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Preview;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _previewTable = _interopRequireDefault(require("./previewTable"));

var _csv = _interopRequireDefault(require("../icons/csv"));

var _fileCard = _interopRequireDefault(require("./styled/fileCard"));

var _fileCardContent = _interopRequireDefault(require("./styled/fileCardContent"));

var _fileCardTitle = _interopRequireDefault(require("./styled/fileCardTitle"));

var _fileCardDescription = _interopRequireDefault(require("./styled/fileCardDescription"));

var _buttonIcon = _interopRequireDefault(require("./styled/buttonIcon"));

var _icon = _interopRequireDefault(require("./styled/icon"));

function Preview(props) {
  var fileName = props.fileName,
      fileType = props.fileType,
      columns = props.columns,
      data = props.data,
      isLoading = props.isLoading,
      onRemoveFile = props.onRemoveFile,
      borderRadius = props.borderRadius;
  var previewData = data.slice(0, 5);
  var name = fileName || 'Unknow File Name';
  var type = fileType || 'Unknow File Type';
  return _react["default"].createElement("div", null, _react["default"].createElement(_fileCard["default"], {
    borderRadius: borderRadius
  }, _react["default"].createElement(_csv["default"], null), _react["default"].createElement(_fileCardContent["default"], null, _react["default"].createElement(_fileCardTitle["default"], {
    title: name
  }, name), _react["default"].createElement(_fileCardDescription["default"], null, type)), _react["default"].createElement(_buttonIcon["default"], {
    icon: _react["default"].createElement(_icon["default"], null),
    title: "Remove file",
    assistiveText: "Remove file",
    onClick: onRemoveFile
  })), _react["default"].createElement(_previewTable["default"], {
    columns: columns,
    data: previewData,
    isLoading: isLoading
  }));
}

Preview.propTypes = {
  fileName: _propTypes["default"].string,
  fileType: _propTypes["default"].string,
  columns: _propTypes["default"].array,
  data: _propTypes["default"].array,
  isLoading: _propTypes["default"].bool,
  onRemoveFile: _propTypes["default"].func,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Preview.defaultProps = {
  fileName: '',
  fileType: '',
  columns: [],
  data: [],
  isLoading: false,
  onRemoveFile: function onRemoveFile() {},
  borderRadius: 'rounded'
};