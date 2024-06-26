import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import XLSX from 'xlsx';
import Modal from '../Modal';
import getDataFromWorkbook from './helpers/getDataFromWorkbook';
import getHeaderRowFromWorkbook from './helpers/getHeaderRowFromWorkbook';
import getDataToImport from './helpers/getDataToImport';
import isStepThreeNextButtonDisabled from './helpers/isStepThreeNextButtonDisabled';
import Footer from './footer';
import getStepComponent from './helpers/getStepComponent';
import getValidatedData from './helpers/getValidatedData';
var stepNames = ['step-1', 'step-2', 'step-3', 'step-4'];
var modalTitleMap = {
  'step-1': 'Whats do you want to do?',
  'step-2': 'Select Data File',
  'step-3': 'Assign Fields',
  'step-4': 'Review and Start Import'
};
var ADD_RECORDS = Symbol('add-records');
var MERGE_RECORDS = Symbol('merge-records');
var ADD_RECORDS_TYPE = 'add-records';

function ImportRecordsFlow(props) {
  var className = props.className,
      style = props.style,
      isOpen = props.isOpen,
      onRequestClose = props.onRequestClose,
      schema = props.schema,
      onComplete = props.onComplete,
      actionType = props.actionType,
      borderRadius = props.borderRadius,
      validateRecordCallback = props.validateRecordCallback;

  var _useState = useState(actionType === ADD_RECORDS_TYPE ? 1 : 0),
      _useState2 = _slicedToArray(_useState, 2),
      currentStepIndex = _useState2[0],
      setCurrentStepIndex = _useState2[1];

  var _useState3 = useState(actionType === ADD_RECORDS_TYPE ? ADD_RECORDS_TYPE : ''),
      _useState4 = _slicedToArray(_useState3, 2),
      actionOption = _useState4[0],
      setActionOption = _useState4[1];

  var _useState5 = useState('default'),
      _useState6 = _slicedToArray(_useState5, 2),
      matchField = _useState6[0],
      setMatchField = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      fileName = _useState8[0],
      setFileName = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      fileType = _useState10[0],
      setFileType = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isLoading = _useState12[0],
      setIsLoading = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      hasFileSelected = _useState14[0],
      setHasFileSelected = _useState14[1];

  var _useState15 = useState([]),
      _useState16 = _slicedToArray(_useState15, 2),
      columns = _useState16[0],
      setColumns = _useState16[1];

  var _useState17 = useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      data = _useState18[0],
      setData = _useState18[1];

  var _useState19 = useState({}),
      _useState20 = _slicedToArray(_useState19, 2),
      fieldsMap = _useState20[0],
      setFieldsMap = _useState20[1];

  var _useState21 = useState([]),
      _useState22 = _slicedToArray(_useState21, 2),
      schemaFields = _useState22[0],
      setSchemaFields = _useState22[1];

  var mappedRecords = useRef([]);

  var _useState23 = useState([]),
      _useState24 = _slicedToArray(_useState23, 2),
      validRecords = _useState24[0],
      setValidRecords = _useState24[1];

  var _useState25 = useState([]),
      _useState26 = _slicedToArray(_useState25, 2),
      invalidRecords = _useState26[0],
      setInvalidRecords = _useState26[1];

  var currentStep = stepNames[currentStepIndex];
  var StepComponent = getStepComponent({
    currentStep: currentStep
  });

  var removeFile = function removeFile() {
    setHasFileSelected(false);
    setFileName('');
    setFileType('');
    setData([]);
    setColumns([]);
    setFieldsMap({});
  };

  useEffect(function () {
    setSchemaFields(Object.keys(schema.attributes));
  }, [schema.attributes]);
  var prevIsOpen = useRef(isOpen);
  useEffect(function () {
    if (prevIsOpen.current && !isOpen) {
      setCurrentStepIndex(actionType === ADD_RECORDS_TYPE ? 1 : 0);
      removeFile();
      setActionOption('');
      setMatchField('default');
    }

    prevIsOpen.current = isOpen;
  }, [isOpen, actionType]);

  var getModalTitle = function getModalTitle() {
    if (currentStepIndex === 1 && hasFileSelected) {
      return 'Your File Preview';
    }

    return modalTitleMap[currentStep];
  };

  var goBackStep = function goBackStep() {
    if (currentStepIndex > 0) {
      var prevStepIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevStepIndex);
    }
  };

  var goNextStep = function goNextStep() {
    if (currentStepIndex === 2) {
      mappedRecords.current = getDataToImport({
        data: data,
        fieldsMap: fieldsMap,
        schema: schema,
        actionOption: actionOption,
        matchField: matchField
      });

      if (typeof validateRecordCallback === 'function') {
        var _getValidatedData = getValidatedData({
          validateRecordCallback: validateRecordCallback,
          dataToValidate: mappedRecords.current.data
        }),
            validValidatedRecord = _getValidatedData.validRecords,
            invalidValidatedRecord = _getValidatedData.invalidRecords;

        setValidRecords(validValidatedRecord);
        setInvalidRecords(invalidValidatedRecord);
      } else {
        setValidRecords(mappedRecords.current.data);
      }
    }

    if (currentStepIndex === 3) {
      onComplete(_objectSpread(_objectSpread({}, mappedRecords.current), {}, {
        data: validRecords
      }));
    }

    if (currentStepIndex < stepNames.length - 1) {
      var nextStepIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextStepIndex);
    }
  };

  var isBackButtonDisabled = function isBackButtonDisabled() {
    if (actionType === ADD_RECORDS_TYPE) {
      return currentStepIndex === 1;
    }

    return currentStepIndex === 0;
  };

  var isNextButtonDisabled = function isNextButtonDisabled() {
    if (currentStepIndex === 0) {
      return !actionOption || actionOption === 'merge-records' && matchField === 'default';
    }

    if (currentStepIndex === 1) {
      return !hasFileSelected || isLoading;
    }

    if (currentStepIndex === 2) {
      return isStepThreeNextButtonDisabled({
        fieldsMap: fieldsMap,
        attributes: schema.attributes,
        matchField: matchField
      });
    }

    return false;
  };

  var processFile = function processFile(file) {
    var name = file.name,
        type = file.type;
    setFileName(name);
    setFileType(type);
    setIsLoading(true);
    setHasFileSelected(true);
    var reader = new FileReader();

    reader.onload = function (event) {
      var uInt8ArrayData = new Uint8Array(event.target.result);
      var workbook = XLSX.read(uInt8ArrayData, {
        type: 'array',
        raw: true
      });
      setColumns(getHeaderRowFromWorkbook(workbook));
      setData(getDataFromWorkbook(workbook));
      setIsLoading(false);
    };

    reader.readAsArrayBuffer(file);
  };

  var assignField = function assignField(databaseFieldToAssign, fileFieldsToAssign) {
    setFieldsMap(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, databaseFieldToAssign, fileFieldsToAssign.join(','))));
  };

  return React.createElement(Modal, {
    className: className,
    style: style,
    title: getModalTitle(),
    size: "medium",
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    borderRadius: borderRadius,
    footer: React.createElement(Footer, {
      onBack: goBackStep,
      onNext: goNextStep,
      currentStep: currentStep,
      isBackButtonDisabled: isBackButtonDisabled(),
      isNextButtonDisabled: isNextButtonDisabled(),
      actionType: actionType,
      borderRadius: borderRadius
    })
  }, React.createElement(StepComponent, {
    schemaFields: schemaFields,
    attributes: schema.attributes,
    actionOption: actionOption,
    onChangeAction: setActionOption,
    matchField: matchField,
    onChangeMatchField: setMatchField,
    onProcessFile: processFile,
    fileName: fileName,
    fileType: fileType,
    isLoading: isLoading,
    hasFileSelected: hasFileSelected,
    columns: columns,
    data: data,
    onRemoveFile: removeFile,
    onAssignField: assignField,
    fieldsMap: fieldsMap,
    invalidRecords: invalidRecords,
    validRecords: validRecords,
    borderRadius: borderRadius
  }));
}

ImportRecordsFlow.propTypes = {
  schema: PropTypes.shape({
    collection: PropTypes.string,
    attributes: PropTypes.object
  }),
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onComplete: PropTypes.func,
  actionType: PropTypes.oneOf(['add-records']),
  className: PropTypes.string,
  style: PropTypes.object,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
  validateRecordCallback: PropTypes.func
};
ImportRecordsFlow.defaultProps = {
  className: undefined,
  style: undefined,
  schema: {
    attributes: {}
  },
  isOpen: false,
  onRequestClose: function onRequestClose() {},
  onComplete: function onComplete() {},
  actionType: undefined,
  validateRecordCallback: undefined,
  borderRadius: 'rounded'
};
ImportRecordsFlow.MERGE_RECORDS = MERGE_RECORDS;
ImportRecordsFlow.ADD_RECORDS = ADD_RECORDS;
export default ImportRecordsFlow;