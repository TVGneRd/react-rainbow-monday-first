import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import StyledUploadFileLabel from './styled/uploadFileLabel';
import StyledUploadIcon from './styled/uploadIcon';
import HiddenElement from '../../Structural/hiddenElement';
export default function UploadFileButton(_ref) {
  var onChange = _ref.onChange,
      isDragOver = _ref.isDragOver,
      borderRadius = _ref.borderRadius;

  var _useState = useState(uniqueId('upload-file-input')),
      _useState2 = _slicedToArray(_useState, 1),
      uploadFileInputId = _useState2[0];

  return React.createElement(StyledUploadFileLabel, {
    htmlFor: uploadFileInputId,
    isDragOver: isDragOver,
    borderRadius: borderRadius
  }, React.createElement(HiddenElement, {
    as: "input",
    id: uploadFileInputId,
    type: "file",
    accept: "text/csv",
    multiple: false,
    onChange: onChange
  }), React.createElement(StyledUploadIcon, null), "Upload CSV File");
}
UploadFileButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  isDragOver: PropTypes.bool,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
UploadFileButton.defaultProps = {
  isDragOver: false,
  borderRadius: 'rounded'
};