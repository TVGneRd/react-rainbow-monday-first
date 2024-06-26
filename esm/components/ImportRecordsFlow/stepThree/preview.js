import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import getFieldAssignedPreviewData from '../helpers/getFieldAssignedPreviewData';
import StyledPreviewText from './styled/previewText';
import StyledTable from '../styled/table';
export default function Preview(props) {
  var field = props.field,
      fileFields = props.fileFields,
      data = props.data,
      attributes = props.attributes;
  var mappedData = getFieldAssignedPreviewData(data, field, fileFields, attributes);

  if (fileFields.length) {
    var fieldsToAssing = fileFields.join(',');
    var fieldWord = fileFields.length > 1 ? 'fields' : 'field';
    return React.createElement("div", null, React.createElement(StyledPreviewText, null, "Assigning", React.createElement("b", null, " \u201C".concat(fieldsToAssing, "\u201D")), " ", "".concat(fieldWord, " to"), React.createElement("b", null, " \u201C".concat(field, "\u201D")), " database field"), React.createElement(StyledTable, {
      keyField: "id",
      data: mappedData,
      variant: "listview"
    }, React.createElement(Column, {
      header: field,
      field: field,
      headerAlignment: "left",
      cellAlignment: "left"
    })));
  }

  return null;
}
Preview.propTypes = {
  field: PropTypes.string,
  fileFields: PropTypes.array,
  data: PropTypes.array,
  attributes: PropTypes.object.isRequired
};
Preview.defaultProps = {
  field: '',
  fileFields: [],
  data: []
};