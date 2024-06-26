"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StepThree;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Column = _interopRequireDefault(require("../../Column"));

var _getAssignFieldsData = _interopRequireDefault(require("../helpers/getAssignFieldsData"));

var _csvCell = _interopRequireDefault(require("./csvCell"));

var _databaseFieldCell = _interopRequireDefault(require("./databaseFieldCell"));

var _assignFieldModal = _interopRequireDefault(require("./assignFieldModal"));

var _table = _interopRequireDefault(require("./styled/table"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function StepThree(props) {
  var attributes = props.attributes,
      columns = props.columns,
      onAssignField = props.onAssignField,
      fieldsMap = props.fieldsMap,
      data = props.data,
      matchField = props.matchField,
      borderRadius = props.borderRadius;
  var previewData = data.slice(0, 3);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      assignData = _useState2[0],
      setAssignData = _useState2[1];

  (0, _react.useEffect)(function () {
    setAssignData((0, _getAssignFieldsData["default"])({
      fieldsMap: fieldsMap,
      attributes: attributes,
      matchField: matchField
    }));
  }, [fieldsMap, attributes, matchField]);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isAssignFieldModalOpen = _useState4[0],
      setAssignFieldModalState = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      databaseFieldToAssign = _useState6[0],
      setDatabaseFieldToAssign = _useState6[1];

  var openAssignFieldModal = function openAssignFieldModal(field) {
    setAssignFieldModalState(true);
    setDatabaseFieldToAssign(field);
  };

  var closeAssignFieldModal = function closeAssignFieldModal() {
    setAssignFieldModalState(false);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(_table["default"], {
    keyField: "id",
    data: assignData,
    variant: "listview"
  }, _react["default"].createElement(_Column["default"], {
    defaultWidth: 200,
    header: "Database fields",
    field: "databaseField",
    component: function component(rowProps) {
      return _react["default"].createElement(_databaseFieldCell["default"], (0, _extends2["default"])({}, rowProps, {
        borderRadius: borderRadius
      }));
    },
    headerAlignment: "left",
    cellAlignment: "left"
  }), _react["default"].createElement(_Column["default"], {
    field: "fileField",
    header: "Fields on your CSV",
    component: function component(rowProps) {
      return _react["default"].createElement(_csvCell["default"], (0, _extends2["default"])({}, rowProps, {
        onClick: openAssignFieldModal,
        borderRadius: borderRadius
      }));
    },
    headerAlignment: "left",
    cellAlignment: "left"
  })), _react["default"].createElement(_assignFieldModal["default"], {
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
  onAssignField: _propTypes["default"].func,
  fieldsMap: _propTypes["default"].object,
  data: _propTypes["default"].array,
  attributes: _propTypes["default"].object,
  matchField: _propTypes["default"].string,
  columns: _propTypes["default"].array,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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