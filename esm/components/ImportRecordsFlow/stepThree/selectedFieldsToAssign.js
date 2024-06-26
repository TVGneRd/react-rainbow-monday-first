import React from 'react';
import PropTypes from 'prop-types';
import StyledChip from './styled/chip';
export default function SelectedFieldsToAssign(_ref) {
  var values = _ref.values,
      _onDelete = _ref.onDelete,
      borderRadius = _ref.borderRadius;
  return values.map(function (value, index) {
    var key = "field-".concat(index);
    return React.createElement(StyledChip, {
      key: key,
      label: value,
      title: value,
      variant: "neutral",
      onDelete: function onDelete() {
        return _onDelete(value);
      },
      borderRadius: borderRadius
    });
  });
}
SelectedFieldsToAssign.propTypes = {
  values: PropTypes.array,
  onDelete: PropTypes.func,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
SelectedFieldsToAssign.defaultProps = {
  values: [],
  onDelete: function onDelete() {},
  borderRadius: 'rounded'
};