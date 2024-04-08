import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import getAssignFieldsData from '../helpers/getAssignFieldsData';
import CSVCell from './csvCell';
import DatabaseFieldCell from './databaseFieldCell';
import AssignFieldModal from './assignFieldModal';
import StyledTable from './styled/table';
export default function StepThree(props) {
  var attributes = props.attributes,
      columns = props.columns,
      onAssignField = props.onAssignField,
      fieldsMap = props.fieldsMap,
      data = props.data,
      matchField = props.matchField,
      borderRadius = props.borderRadius;
  var previewData = data.slice(0, 3);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      assignData = _useState2[0],
      setAssignData = _useState2[1];

  useEffect(function () {
    setAssignData(getAssignFieldsData({
      fieldsMap: fieldsMap,
      attributes: attributes,
      matchField: matchField
    }));
  }, [fieldsMap, attributes, matchField]);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAssignFieldModalOpen = _useState4[0],
      setAssignFieldModalState = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      databaseFieldToAssign = _useState6[0],
      setDatabaseFieldToAssign = _useState6[1];

  var openAssignFieldModal = function openAssignFieldModal(field) {
    setAssignFieldModalState(true);
    setDatabaseFieldToAssign(field);
  };

  var closeAssignFieldModal = function closeAssignFieldModal() {
    setAssignFieldModalState(false);
  };

  return React.createElement("div", null, React.createElement(StyledTable, {
    keyField: "id",
    data: assignData,
    variant: "listview"
  }, React.createElement(Column, {
    defaultWidth: 200,
    header: "Database fields",
    field: "databaseField",
    component: function component(rowProps) {
      return React.createElement(DatabaseFieldCell, _extends({}, rowProps, {
        borderRadius: borderRadius
      }));
    },
    headerAlignment: "left",
    cellAlignment: "left"
  }), React.createElement(Column, {
    field: "fileField",
    header: "Fields on your CSV",
    component: function component(rowProps) {
      return React.createElement(CSVCell, _extends({}, rowProps, {
        onClick: openAssignFieldModal,
        borderRadius: borderRadius
      }));
    },
    headerAlignment: "left",
    cellAlignment: "left"
  })), React.createElement(AssignFieldModal, {
    attributes: attributes,
    isAssignFieldModalOpen: isAssignFieldModalOpen,
    onRequestClose: closeAssignFieldModal,
    columns: columns,
    databaseFieldToAssign: databaseFieldToAssign,
    onAssignField: onAssignField,
    fieldsMap: fieldsMap,
    data: previewData,
    borderRadius: borderRadius
  }));
}
StepThree.propTypes = {
  onAssignField: PropTypes.func,
  fieldsMap: PropTypes.object,
  data: PropTypes.array,
  attributes: PropTypes.object,
  matchField: PropTypes.string,
  columns: PropTypes.array,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
StepThree.defaultProps = {
  onAssignField: function onAssignField() {},
  fieldsMap: {},
  data: [],
  attributes: {},
  matchField: '',
  columns: [],
  borderRadius: 'rounded'
};