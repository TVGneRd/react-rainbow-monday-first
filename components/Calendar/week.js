"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Week;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _day = _interopRequireDefault(require("./day"));

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Week(props) {
  var value = props.value,
      startDate = props.startDate,
      endDate = props.endDate,
      minDate = props.minDate,
      maxDate = props.maxDate,
      firstDayMonth = props.firstDayMonth,
      lastDayMonth = props.lastDayMonth,
      onChange = props.onChange;

  var _useContext = (0, _react.useContext)(_context.CalendarContext),
      currentRange = _useContext.currentRange,
      selectionType = _useContext.selectionType,
      selectedRange = _useContext.selectedRange;

  var toEuropeDaysWeek = function toEuropeDaysWeek(day) {
    return day === 0 ? 6 : day - 1;
  };

  var daysDiff = toEuropeDaysWeek(endDate.getDay()) - toEuropeDaysWeek(startDate.getDay()) + 1;
  var days = Array.from(Array(daysDiff), function (item, index) {
    var date = (0, _helpers.addDays)(startDate, index);
    return _react["default"].createElement(_day["default"], {
      date: date,
      firstDayMonth: firstDayMonth,
      key: date.getTime(),
      minDate: minDate,
      maxDate: maxDate,
      onChange: onChange,
      isSelected: (0, _helpers.shouldDateBeSelected)(date, value, selectionType, selectedRange),
      isWithinRange: (0, _helpers.isDateWithinRange)(date, currentRange),
      isFirstDayOfWeek: index === 0 || (0, _helpers.isSameDay)(date, firstDayMonth),
      isLastDayOfWeek: index === 6 || (0, _helpers.isSameDay)(date, lastDayMonth)
    });
  });
  return _react["default"].createElement("tr", null, days);
}

Week.propTypes = {
  firstDayMonth: _propTypes["default"].instanceOf(Date),
  lastDayMonth: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  startDate: _propTypes["default"].instanceOf(Date),
  endDate: _propTypes["default"].instanceOf(Date),
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  onChange: _propTypes["default"].func
};
Week.defaultProps = {
  firstDayMonth: undefined,
  lastDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  startDate: undefined,
  endDate: undefined,
  value: undefined,
  onChange: function onChange() {}
};