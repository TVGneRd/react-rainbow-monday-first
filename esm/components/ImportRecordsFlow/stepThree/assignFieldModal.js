import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Modal';
import getFileFieldsOptions from '../helpers/getFileFieldsOptions';
import AssignFieldModalTitle from './assignFieldModalTitle';
import AssignFieldModalFooter from './assignFieldModalFooter';
import SelectedFieldsToAssign from './selectedFieldsToAssign';
import Preview from './preview';
import StyledModalContainer from './styled/modalContainer';
import StyledSelect from './styled/select';
export default function AssignFieldModal(props) {
  var isAssignFieldModalOpen = props.isAssignFieldModalOpen,
      onRequestClose = props.onRequestClose,
      columns = props.columns,
      databaseFieldToAssign = props.databaseFieldToAssign,
      onAssignField = props.onAssignField,
      fieldsMap = props.fieldsMap,
      data = props.data,
      attributes = props.attributes,
      borderRadius = props.borderRadius;
  var modalTitle = React.createElement(AssignFieldModalTitle, {
    field: databaseFieldToAssign
  });
  var hasAssignRef = useRef(false);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fileFieldsOptions = _useState2[0],
      setFileFieldsOptions = _useState2[1];

  useEffect(function () {
    if (fieldsMap[databaseFieldToAssign]) {
      var options = columns.filter(function (item) {
        return !fieldsMap[databaseFieldToAssign].split(',').includes(item);
      });
      return setFileFieldsOptions(getFileFieldsOptions(options));
    }

    return setFileFieldsOptions(getFileFieldsOptions(columns));
  }, [columns, databaseFieldToAssign, fieldsMap, isAssignFieldModalOpen]);

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fileFieldsToAssign = _useState4[0],
      setFileFieldsToAssign = _useState4[1];

  var isAssignButtonDisabled = !hasAssignRef.current && fileFieldsToAssign.length === 0;
  useEffect(function () {
    if (fieldsMap[databaseFieldToAssign]) {
      if (fieldsMap[databaseFieldToAssign].split(',').length > 0) {
        hasAssignRef.current = true;
      }

      return setFileFieldsToAssign(fieldsMap[databaseFieldToAssign].split(','));
    }

    return setFileFieldsToAssign(function () {
      hasAssignRef.current = false;
      return [];
    });
  }, [fieldsMap, databaseFieldToAssign, isAssignFieldModalOpen]);

  var handleAssign = function handleAssign() {
    onRequestClose();
    onAssignField(databaseFieldToAssign, fileFieldsToAssign);
  };

  var selectFileField = function selectFileField(event) {
    var value = event.target.value;
    setFileFieldsOptions(fileFieldsOptions.filter(function (field) {
      return field.value !== value;
    }));
    setFileFieldsToAssign([].concat(_toConsumableArray(fileFieldsToAssign), [value]));
  };

  var deleteFileField = function deleteFileField(value) {
    setFileFieldsOptions([].concat(_toConsumableArray(fileFieldsOptions), [{
      label: value,
      value: value
    }]));
    setFileFieldsToAssign(fileFieldsToAssign.filter(function (field) {
      return field !== value;
    }));
  };

  var hasNotFileFieldsToAssign = !fileFieldsToAssign.length;
  return React.createElement(Modal, {
    title: modalTitle,
    isOpen: isAssignFieldModalOpen,
    size: "small",
    onRequestClose: onRequestClose,
    footer: React.createElement(AssignFieldModalFooter, {
      onCancel: onRequestClose,
      onAssign: handleAssign,
      isAssignButtonDisabled: isAssignButtonDisabled,
      borderRadius: borderRadius
    }),
    borderRadius: borderRadius
  }, React.createElement(StyledModalContainer, {
    hasNotFileFieldsToAssign: hasNotFileFieldsToAssign
  }, React.createElement(StyledSelect, {
    label: "Select Field To Assign",
    options: fileFieldsOptions,
    onChange: selectFileField,
    value: "default",
    borderRadius: borderRadius
  }), React.createElement(SelectedFieldsToAssign, {
    values: fileFieldsToAssign,
    onDelete: deleteFileField,
    borderRadius: borderRadius
  }), React.createElement(Preview, {
    field: databaseFieldToAssign,
    fileFields: fileFieldsToAssign,
    data: data,
    attributes: attributes
  })));
}
AssignFieldModal.propTypes = {
  isAssignFieldModalOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  columns: PropTypes.array,
  databaseFieldToAssign: PropTypes.string,
  onAssignField: PropTypes.func,
  fieldsMap: PropTypes.object,
  data: PropTypes.array,
  attributes: PropTypes.object.isRequired,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
AssignFieldModal.defaultProps = {
  isAssignFieldModalOpen: false,
  onRequestClose: function onRequestClose() {},
  columns: [],
  databaseFieldToAssign: '',
  onAssignField: function onAssignField() {},
  fieldsMap: {},
  data: [],
  borderRadius: 'square'
};