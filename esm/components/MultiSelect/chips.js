import React from 'react';
import PropTypes from 'prop-types';
import { StyledChip } from './styled';

var Chips = function Chips(props) {
  var value = props.value,
      variant = props.variant,
      onDelete = props.onDelete,
      disabled = props.disabled,
      readOnly = props.readOnly,
      size = props.size,
      borderRadius = props.borderRadius;

  var getDeleteCallback = function getDeleteCallback(val) {
    return disabled || readOnly ? null : function () {
      return onDelete(val);
    };
  };

  if (!value) {
    return null;
  }

  if (Array.isArray(value)) {
    return value.map(function (val) {
      return React.createElement(StyledChip, {
        key: val.name,
        label: val.label,
        variant: variant,
        onDelete: getDeleteCallback(val),
        size: size,
        borderRadius: borderRadius
      });
    });
  }

  return React.createElement(StyledChip, {
    label: value.label,
    variant: variant,
    onDelete: getDeleteCallback(value)
  });
};

Chips.propTypes = {
  value: PropTypes.oneOfType([PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string
  }), PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string
  }))]),
  variant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onDelete: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Chips.defaultProps = {
  value: undefined,
  variant: 'base',
  disabled: undefined,
  readOnly: undefined,
  onDelete: function onDelete() {},
  size: 'medium',
  borderRadius: 'rounded'
};
export default Chips;