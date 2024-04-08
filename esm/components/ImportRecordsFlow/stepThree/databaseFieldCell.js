import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../../RequiredAsterisk';
import DatabaseFieldContent from './styled/databaseFieldCell';
export default function DatabaseFieldCell(props) {
  var value = props.value,
      required = props.row.required,
      borderRadius = props.borderRadius;
  return React.createElement(DatabaseFieldContent, {
    borderRadius: borderRadius
  }, React.createElement(RequiredAsterisk, {
    required: !!required
  }), value);
}
DatabaseFieldCell.propTypes = {
  value: PropTypes.string.isRequired,
  row: PropTypes.object.isRequired,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DatabaseFieldCell.defaultProps = {
  borderRadius: 'rounded'
};