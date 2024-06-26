import React from 'react';
import PropTypes from 'prop-types';
import PreviewTable from './previewTable';
import CSVDocIcon from '../icons/csv';
import StyledFileCard from './styled/fileCard';
import StyledFileCardContent from './styled/fileCardContent';
import StyledFileCardTitle from './styled/fileCardTitle';
import StyledFileCardDescription from './styled/fileCardDescription';
import StyledButtonIcon from './styled/buttonIcon';
import StyledIcon from './styled/icon';
export default function Preview(props) {
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
  return React.createElement("div", null, React.createElement(StyledFileCard, {
    borderRadius: borderRadius
  }, React.createElement(CSVDocIcon, null), React.createElement(StyledFileCardContent, null, React.createElement(StyledFileCardTitle, {
    title: name
  }, name), React.createElement(StyledFileCardDescription, null, type)), React.createElement(StyledButtonIcon, {
    icon: React.createElement(StyledIcon, null),
    title: "Remove file",
    assistiveText: "Remove file",
    onClick: onRemoveFile
  })), React.createElement(PreviewTable, {
    columns: columns,
    data: previewData,
    isLoading: isLoading
  }));
}
Preview.propTypes = {
  fileName: PropTypes.string,
  fileType: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  onRemoveFile: PropTypes.func,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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