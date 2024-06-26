import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import UploadFileButton from './uploadFileButton';
import Preview from './preview';
import { StyledContainer } from './styled/container';
import StyledDropImg from './styled/dropImg';
import StyledDropTitle from './styled/dropTitle';
import StyledDropText from './styled/dropText';
import StyledText from './styled/text';

function preventDefault(event) {
  event.stopPropagation();
  event.preventDefault();
}

export default function StepTwo(props) {
  var onProcessFile = props.onProcessFile,
      isLoading = props.isLoading,
      hasFileSelected = props.hasFileSelected,
      columns = props.columns,
      data = props.data,
      onRemoveFile = props.onRemoveFile,
      fileName = props.fileName,
      fileType = props.fileType,
      borderRadius = props.borderRadius;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
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
    return React.createElement(Preview, {
      fileName: fileName,
      fileType: fileType,
      columns: columns,
      data: data,
      isLoading: isLoading,
      onRemoveFile: onRemoveFile,
      borderRadius: borderRadius
    });
  }

  return React.createElement(StyledContainer, {
    isDragOver: isDragOver,
    onDragEnter: preventDefault,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    draggable: true
  }, React.createElement(UploadFileButton, {
    onChange: handleChange,
    isDragOver: isDragOver,
    borderRadius: borderRadius
  }), React.createElement(RenderIf, {
    isTrue: isDragOver
  }, React.createElement(StyledDropImg, null), React.createElement(StyledDropTitle, null, "Drop your file here"), React.createElement(StyledDropText, null, "Drop your files for upload them instantly to the system")), React.createElement(RenderIf, {
    isTrue: !isDragOver
  }, React.createElement(StyledText, null, "Find the file in your desktop.")));
}
StepTwo.propTypes = {
  onProcessFile: PropTypes.func,
  isLoading: PropTypes.bool,
  hasFileSelected: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  onRemoveFile: PropTypes.func,
  fileName: PropTypes.string,
  fileType: PropTypes.string,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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