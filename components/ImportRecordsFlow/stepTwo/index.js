"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StepTwo;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _uploadFileButton = _interopRequireDefault(require("./uploadFileButton"));

var _preview = _interopRequireDefault(require("./preview"));

var _container = require("./styled/container");

var _dropImg = _interopRequireDefault(require("./styled/dropImg"));

var _dropTitle = _interopRequireDefault(require("./styled/dropTitle"));

var _dropText = _interopRequireDefault(require("./styled/dropText"));

var _text = _interopRequireDefault(require("./styled/text"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function preventDefault(event) {
  event.stopPropagation();
  event.preventDefault();
}

function StepTwo(props) {
  var onProcessFile = props.onProcessFile,
      isLoading = props.isLoading,
      hasFileSelected = props.hasFileSelected,
      columns = props.columns,
      data = props.data,
      onRemoveFile = props.onRemoveFile,
      fileName = props.fileName,
      fileType = props.fileType,
      borderRadius = props.borderRadius;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isDragOver = _useState2[0],
      setIsDragOver = _useState2[1];

  var handleChange = function handleChange(event) {
    onProcessFile(event.target.files[0]);
  };

  var handleDragLeave = function handleDragLeave() {
    setIsDragOver(false);
  };

  var handleDragOver = function handleDragOver(event) {
    preventDefault(event);
    setIsDragOver(true);
  };

  var handleDrop = function handleDrop(event) {
    preventDefault(event);
    setIsDragOver(false);
    var files = event.dataTransfer.files;

    if (files.length === 1 && files[0].type === 'text/csv') {
      onProcessFile(files[0]);
    }
  };

  if (hasFileSelected) {
    return _react["default"].createElement(_preview["default"], {
      fileName: fileName,
      fileType: fileType,
      columns: columns,
      data: data,
      isLoading: isLoading,
      onRemoveFile: onRemoveFile,
      borderRadius: borderRadius
    });
  }

  return _react["default"].createElement(_container.StyledContainer, {
    isDragOver: isDragOver,
    onDragEnter: preventDefault,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    draggable: true
  }, _react["default"].createElement(_uploadFileButton["default"], {
    onChange: handleChange,
    isDragOver: isDragOver,
    borderRadius: borderRadius
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: isDragOver
  }, _react["default"].createElement(_dropImg["default"], null), _react["default"].createElement(_dropTitle["default"], null, "Drop your file here"), _react["default"].createElement(_dropText["default"], null, "Drop your files for upload them instantly to the system")), _react["default"].createElement(_RenderIf["default"], {
    isTrue: !isDragOver
  }, _react["default"].createElement(_text["default"], null, "Find the file in your desktop.")));
}

StepTwo.propTypes = {
  onProcessFile: _propTypes["default"].func,
  isLoading: _propTypes["default"].bool,
  hasFileSelected: _propTypes["default"].bool,
  columns: _propTypes["default"].array,
  data: _propTypes["default"].array,
  onRemoveFile: _propTypes["default"].func,
  fileName: _propTypes["default"].string,
  fileType: _propTypes["default"].string,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
StepTwo.defaultProps = {
  onProcessFile: function onProcessFile() {},
  isLoading: false,
  hasFileSelected: false,
  columns: [],
  data: [],
  onRemoveFile: function onRemoveFile() {},
  fileName: '',
  fileType: '',
  borderRadius: 'rounded'
};