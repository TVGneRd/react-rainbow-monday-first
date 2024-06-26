import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { CalendarContext } from './context';
import Day from './day';
import { addDays, isDateWithinRange, isSameDay, shouldDateBeSelected } from './helpers';
export default function Week(props) {
  var value = props.value,
      startDate = props.startDate,
      endDate = props.endDate,
      minDate = props.minDate,
      maxDate = props.maxDate,
      firstDayMonth = props.firstDayMonth,
      lastDayMonth = props.lastDayMonth,
      onChange = props.onChange;

  var _useContext = useContext(CalendarContext),
      currentRange = _useContext.currentRange,
      selectionType = _useContext.selectionType,
      selectedRange = _useContext.selectedRange;

  var toEuropeDaysWeek = function toEuropeDaysWeek(day) {
    return day === 0 ? 6 : day - 1;
  };

  var daysDiff = toEuropeDaysWeek(endDate.getDay()) - toEuropeDaysWeek(startDate.getDay()) + 1;
  var days = Array.from(Array(daysDiff), function (item, index) {
    var date = addDays(startDate, index);
    return React.createElement(Day, {
      date: date,
      firstDayMonth: firstDayMonth,
      key: date.getTime(),
      minDate: minDate,
      maxDate: maxDate,
      onChange: onChange,
      isSelected: shouldDateBeSelected(date, value, selectionType, selectedRange),
      isWithinRange: isDateWithinRange(date, currentRange),
      isFirstDayOfWeek: index === 0 || isSameDay(date, firstDayMonth),
      isLastDayOfWeek: index === 6 || isSameDay(date, lastDayMonth)
    });
  });
  return React.createElement("tr", null, days);
}
Week.propTypes = {
  firstDayMonth: PropTypes.instanceOf(Date),
  lastDayMonth: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  onChange: PropTypes.func
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