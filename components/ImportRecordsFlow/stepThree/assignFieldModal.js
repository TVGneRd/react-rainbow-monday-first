"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AssignFieldModal;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("../../Modal"));

var _getFileFieldsOptions = _interopRequireDefault(require("../helpers/getFileFieldsOptions"));

var _assignFieldModalTitle = _interopRequireDefault(require("./assignFieldModalTitle"));

var _assignFieldModalFooter = _interopRequireDefault(require("./assignFieldModalFooter"));

var _selectedFieldsToAssign = _interopRequireDefault(require("./selectedFieldsToAssign"));

var _preview = _interopRequireDefault(require("./preview"));

var _modalContainer = _interopRequireDefault(require("./styled/modalContainer"));

var _select = _interopRequireDefault(require("./styled/select"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AssignFieldModal(props) {
  var isAssignFieldModalOpen = props.isAssignFieldModalOpen,
      onRequestClose = props.onRequestClose,
      columns = props.columns,
      databaseFieldToAssign = props.databaseFieldToAssign,
      onAssignField = props.onAssignField,
      fieldsMap = props.fieldsMap,
      data = props.data,
      attributes = props.attributes,
      borderRadius = props.borderRadius;

  var modalTitle = _react["default"].createElement(_assignFieldModalTitle["default"], {
    field: databaseFieldToAssign
  });

  var hasAssignRef = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      fileFieldsOptions = _useState2[0],
      setFileFieldsOptions = _useState2[1];

  (0, _react.useEffect)(function () {
    if (fieldsMap[databaseFieldToAssign]) {
      var options = columns.filter(function (item) {
        return !fieldsMap[databaseFieldToAssign].split(',').includes(item);
      });
      return setFileFieldsOptions((0, _getFileFieldsOptions["default"])(options));
    }

    return setFileFieldsOptions((0, _getFileFieldsOptions["default"])(columns));
  }, [columns, databaseFieldToAssign, fieldsMap, isAssignFieldModalOpen]);

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      fileFieldsToAssign = _useState4[0],
      setFileFieldsToAssign = _useState4[1];

  var isAssignButtonDisabled = !hasAssignRef.current && fileFieldsToAssign.length === 0;
  (0, _react.useEffect)(function () {
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
    setFileFieldsToAssign([].concat((0, _toConsumableArray2["default"])(fileFieldsToAssign), [value]));
  };

  var deleteFileField = function deleteFileField(value) {
    setFileFieldsOptions([].concat((0, _toConsumableArray2["default"])(fileFieldsOptions), [{
      label: value,
      value: value
    }]));
    setFileFieldsToAssign(fileFieldsToAssign.filter(function (field) {
      return field !== value;
    }));
  };

  var hasNotFileFieldsToAssign = !fileFieldsToAssign.length;
  return _react["default"].createElement(_Modal["default"], {
    title: modalTitle,
    isOpen: isAssignFieldModalOpen,
    size: "small",
    onRequestClose: onRequestClose,
    footer: _react["default"].createElement(_assignFieldModalFooter["default"], {
      onCancel: onRequestClose,
      onAssign: handleAssign,
      isAssignButtonDisabled: isAssignButtonDisabled,
      borderRadius: borderRadius
    }),
    borderRadius: borderRadius
  }, _react["default"].createElement(_modalContainer["default"], {
    hasNotFileFieldsToAssign: hasNotFileFieldsToAssign
  }, _react["default"].createElement(_select["default"], {
    label: "Select Field To Assign",
    options: fileFieldsOptions,
    onChange: selectFileField,
    value: "default",
    borderRadius: borderRadius
  }), _react["default"].createElement(_selectedFieldsToAssign["default"], {
    values: fileFieldsToAssign,
    onDelete: deleteFileField,
    borderRadius: borderRadius
  }), _react["default"].createElement(_preview["default"], {
    field: databaseFieldToAssign,
    fileFields: fileFieldsToAssign,
    data: data,
    attributes: attributes
  })));
}

AssignFieldModal.propTypes = {
  isAssignFieldModalOpen: _propTypes["default"].bool,
  onRequestClose: _propTypes["default"].func,
  columns: _propTypes["default"].array,
  databaseFieldToAssign: _propTypes["default"].string,
  onAssignField: _propTypes["default"].func,
  fieldsMap: _propTypes["default"].object,
  data: _propTypes["default"].array,
  attributes: _propTypes["default"].object.isRequired,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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