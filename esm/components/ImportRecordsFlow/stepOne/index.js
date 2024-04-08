import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import getSchemaFieldOptions from '../helpers/getSchemaFieldOptions';
import StyledContainer from './styled/container';
import { StyledRadioGroup } from './styled/optionPicker';
import OptionPicker from './optionPicker';
import StyledSelect from './styled/styledSelect';
export default function StepOne(props) {
  var schemaFields = props.schemaFields,
      actionOption = props.actionOption,
      onChangeAction = props.onChangeAction,
      matchField = props.matchField,
      onChangeMatchField = props.onChangeMatchField,
      borderRadius = props.borderRadius;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldOptions = _useState2[0],
      setFieldOptions = _useState2[1];

  var isMergeOption = actionOption === 'merge-records';
  useEffect(function () {
    setFieldOptions(getSchemaFieldOptions(schemaFields));
  }, [schemaFields]);

  var onChange = function onChange(event) {
    onChangeAction(event.target.value);
  };

  var options = [{
    value: 'add-records',
    label: React.createElement(OptionPicker, {
      name: "add-records",
      value: actionOption,
      label: "Add New records",
      description: "Allows adding all records without checking for duplicates in existing records.",
      borderRadius: borderRadius
    }),
    name: 'add-records',
    id: 'add-records'
  }, {
    value: 'merge-records',
    label: React.createElement(OptionPicker, {
      name: "merge-records",
      value: actionOption,
      label: "Merge exist records",
      description: "Allows you to create only unique records avoiding duplications with existing records.",
      borderRadius: borderRadius
    }),
    name: 'merge-records',
    id: 'merge-records'
  }];
  return React.createElement(React.Fragment, null, React.createElement(StyledContainer, null, React.createElement(StyledRadioGroup, {
    onChange: onChange,
    value: actionOption,
    options: options
  }), React.createElement(RenderIf, {
    isTrue: isMergeOption
  }, React.createElement(StyledSelect, {
    label: "Match Field",
    labelAlignment: "left",
    placeholder: "Select the Field do you want match",
    options: fieldOptions,
    onChange: function onChange(event) {
      return onChangeMatchField(event.target.value);
    },
    value: matchField,
    borderRadius: borderRadius
  }))));
}
StepOne.propTypes = {
  schemaFields: PropTypes.array,
  actionOption: PropTypes.string,
  onChangeAction: PropTypes.func,
  matchField: PropTypes.string,
  onChangeMatchField: PropTypes.func,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
StepOne.defaultProps = {
  schemaFields: [],
  actionOption: '',
  onChangeAction: function onChangeAction() {},
  matchField: '',
  onChangeMatchField: function onChangeMatchField() {},
  borderRadius: 'rounded'
};