import PropTypes from 'prop-types';
import React from 'react';
import { addDays, getLastDayMonth } from './helpers';
import Week from './week';
export default function Month(props) {
  var firstDayMonth = props.firstDayMonth,
      value = props.value,
      minDate = props.minDate,
      maxDate = props.maxDate,
      onChange = props.onChange;
  var date = new Date(firstDayMonth);
  var lastDayMonth = getLastDayMonth(firstDayMonth);

  var toEuropeDaysWeek = function toEuropeDaysWeek(day) {
    return day === 0 ? 6 : day - 1;
  };

  var dayOfWeek = toEuropeDaysWeek(date.getDay());
  var totalWeeks = (lastDayMonth.getDate() + dayOfWeek + 7 - lastDayMonth.getDay()) / 7;
  var week = addDays(date, -dayOfWeek);
  var weeks = Array.from(Array(totalWeeks), function (item, index) {
    var startDate = addDays(week, 7 * index);
    var endDate = addDays(startDate, 6);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(11, 59, 59, 999);
    return React.createElement(Week, {
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
  return React.createElement("tbody", null, weeks);
}
Month.propTypes = {
  firstDayMonth: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  onChange: PropTypes.func
};
Month.defaultProps = {
  firstDayMonth: undefined,
  minDate: undefined,
  maxDate: undefined,
  value: undefined,
  onChange: function onChange() {}
};