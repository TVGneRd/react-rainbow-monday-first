"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UploadFileButton;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../libs/utils");

var _uploadFileLabel = _interopRequireDefault(require("./styled/uploadFileLabel"));

var _uploadIcon = _interopRequireDefault(require("./styled/uploadIcon"));

var _hiddenElement = _interopRequireDefault(require("../../Structural/hiddenElement"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function UploadFileButton(_ref) {
  var onChange = _ref.onChange,
      isDragOver = _ref.isDragOver,
      borderRadius = _ref.borderRadius;

  var _useState = (0, _react.useState)((0, _utils.uniqueId)('upload-file-input')),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
      uploadFileInputId = _useState2[0];

  return _react["default"].createElement(_uploadFileLabel["default"], {
    htmlFor: uploadFileInputId,
    isDragOver: isDragOver,
    borderRadius: borderRadius
  }, _react["default"].createElement(_hiddenElement["default"], {
    as: "input",
    id: uploadFileInputId,
    type: "file",
    accept: "text/csv",
    multiple: false,
    onChange: onChange
  }), _react["default"].createElement(_uploadIcon["default"], null), "Upload CSV File");
}

UploadFileButton.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  isDragOver: _propTypes["default"].bool,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
UploadFileButton.defaultProps = {
  isDragOver: false,
  borderRadius: 'rounded'
};