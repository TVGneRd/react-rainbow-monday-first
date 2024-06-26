"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _xlsx = _interopRequireDefault(require("xlsx"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _getDataFromWorkbook = _interopRequireDefault(require("./helpers/getDataFromWorkbook"));

var _getHeaderRowFromWorkbook = _interopRequireDefault(require("./helpers/getHeaderRowFromWorkbook"));

var _getDataToImport = _interopRequireDefault(require("./helpers/getDataToImport"));

var _isStepThreeNextButtonDisabled = _interopRequireDefault(require("./helpers/isStepThreeNextButtonDisabled"));

var _footer = _interopRequireDefault(require("./footer"));

var _getStepComponent = _interopRequireDefault(require("./helpers/getStepComponent"));

var _getValidatedData2 = _interopRequireDefault(require("./helpers/getValidatedData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

  var _useState = (0, _react.useState)(actionType === ADD_RECORDS_TYPE ? 1 : 0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentStepIndex = _useState2[0],
      setCurrentStepIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(actionType === ADD_RECORDS_TYPE ? ADD_RECORDS_TYPE : ''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      actionOption = _useState4[0],
      setActionOption = _useState4[1];

  var _useState5 = (0, _react.useState)('default'),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      matchField = _useState6[0],
      setMatchField = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      fileName = _useState8[0],
      setFileName = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      fileType = _useState10[0],
      setFileType = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      isLoading = _useState12[0],
      setIsLoading = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      hasFileSelected = _useState14[0],
      setHasFileSelected = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      columns = _useState16[0],
      setColumns = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      data = _useState18[0],
      setData = _useState18[1];

  var _useState19 = (0, _react.useState)({}),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      fieldsMap = _useState20[0],
      setFieldsMap = _useState20[1];

  var _useState21 = (0, _react.useState)([]),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      schemaFields = _useState22[0],
      setSchemaFields = _useState22[1];

  var mappedRecords = (0, _react.useRef)([]);

  var _useState23 = (0, _react.useState)([]),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      validRecords = _useState24[0],
      setValidRecords = _useState24[1];

  var _useState25 = (0, _react.useState)([]),
      _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
      invalidRecords = _useState26[0],
      setInvalidRecords = _useState26[1];

  var currentStep = stepNames[currentStepIndex];
  var StepComponent = (0, _getStepComponent["default"])({
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

  (0, _react.useEffect)(function () {
    setSchemaFields(Object.keys(schema.attributes));
  }, [schema.attributes]);
  var prevIsOpen = (0, _react.useRef)(isOpen);
  (0, _react.useEffect)(function () {
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
      mappedRecords.current = (0, _getDataToImport["default"])({
        data: data,
        fieldsMap: fieldsMap,
        schema: schema,
        actionOption: actionOption,
        matchField: matchField
      });

      if (typeof validateRecordCallback === 'function') {
        var _getValidatedData = (0, _getValidatedData2["default"])({
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
      return (0, _isStepThreeNextButtonDisabled["default"])({
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

      var workbook = _xlsx["default"].read(uInt8ArrayData, {
        type: 'array',
        raw: true
      });

      setColumns((0, _getHeaderRowFromWorkbook["default"])(workbook));
      setData((0, _getDataFromWorkbook["default"])(workbook));
      setIsLoading(false);
    };

    reader.readAsArrayBuffer(file);
  };

  var assignField = function assignField(databaseFieldToAssign, fileFieldsToAssign) {
    setFieldsMap(_objectSpread(_objectSpread({}, fieldsMap), {}, (0, _defineProperty2["default"])({}, databaseFieldToAssign, fileFieldsToAssign.join(','))));
  };

  return _react["default"].createElement(_Modal["default"], {
    className: className,
    style: style,
    title: getModalTitle(),
    size: "medium",
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    borderRadius: borderRadius,
    footer: _react["default"].createElement(_footer["default"], {
      onBack: goBackStep,
      onNext: goNextStep,
      currentStep: currentStep,
      isBackButtonDisabled: isBackButtonDisabled(),
      isNextButtonDisabled: isNextButtonDisabled(),
      actionType: actionType,
      borderRadius: borderRadius
    })
  }, _react["default"].createElement(StepComponent, {
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
  schema: _propTypes["default"].shape({
    collection: _propTypes["default"].string,
    attributes: _propTypes["default"].object
  }),
  isOpen: _propTypes["default"].bool,
  onRequestClose: _propTypes["default"].func,
  onComplete: _propTypes["default"].func,
  actionType: _propTypes["default"].oneOf(['add-records']),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
  validateRecordCallback: _propTypes["default"].func
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
var _default = ImportRecordsFlow;
exports["default"] = _default;