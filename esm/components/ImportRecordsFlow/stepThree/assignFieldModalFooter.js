import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import StyledFooter from './styled/footer';
import StyledCancelButton from './styled/cancelButton';
export default function AssignFieldModalFooter(props) {
  var onCancel = props.onCancel,
      onAssign = props.onAssign,
      isAssignButtonDisabled = props.isAssignButtonDisabled,
      borderRadius = props.borderRadius;
  return React.createElement(StyledFooter, null, React.createElement(StyledCancelButton, {
    label: "Cancel",
    onClick: onCancel,
    borderRadius: borderRadius
  }), React.createElement(Button, {
    label: "Assign",
    variant: "brand",
    onClick: onAssign,
    disabled: isAssignButtonDisabled,
    borderRadius: borderRadius
  }));
}
AssignFieldModalFooter.propTypes = {
  onCancel: PropTypes.func,
  onAssign: PropTypes.func,
  isAssignButtonDisabled: PropTypes.bool,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
AssignFieldModalFooter.defaultProps = {
  onCancel: function onCancel() {},
  onAssign: function onAssign() {},
  isAssignButtonDisabled: false,
  borderRadius: 'rounded'
};