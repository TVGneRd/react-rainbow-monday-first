"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Month;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _helpers = require("./helpers");

var _week = _interopRequireDefault(require("./week"));

function Month(props) {
  var firstDayMonth = props.firstDayMonth,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      onChange = props.onChange;
  var date = new Date(firstDayMonth);
  var lastDayMonth = (0, _helpers.getLastDayMonth)(firstDayMonth);

  var toEuropeDaysWeek = function toEuropeDaysWeek(day) {
    return day === 0 ? 6 : day - 1;
  };

  var dayOfWeek = toEuropeDaysWeek(date.getDay());
  var totalWeeks = (lastDayMonth.getDate() + dayOfWeek + 7 - lastDayMonth.getDay()) / 7;
  var week = (0, _helpers.addDays)(date, -dayOfWeek);
  var weeks = Array.from(Array(totalWeeks), function (item, index) {
    var startDate = (0, _helpers.addDays)(week, 7 * index);
    var endDate = (0, _helpers.addDays)(startDate, 6);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(11, 59, 59, 999);
    return _react["default"].createElement(_week["default"], {
      value: value,
      startDate: startDate,
      endDate: endDate,
      minDate: minDate,
      maxDate: maxDate,
      firstDayMonth: firstDayMonth,
      lastDayMonth: lastDayMonth,
      key: startDate.getTime(),
      onChange: onChange
    });
  });
  return _react["default"].createElement("tbody", null, weeks);
}

Month.propTypes = {
  firstDayMonth: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  onChange: _propTypes["default"].func
};
Month.defaultProps = {
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  value: undefined,
  onChange: function onChange() {}
};