import { PropTypes } from 'prop-types';
import React from 'react';
import StyledAbbrHeader from './styled/abbrHeader';
import StyledHeaderDays from './styled/headerDays';
import { getFormattedDayName } from './helpers';
export default function DayOfWeek(_ref) {
  var locale = _ref.locale;
  return React.createElement("thead", null, React.createElement("tr", null, React.createElement(StyledHeaderDays, {
    scope: "col"
  }, React.createElement(StyledAbbrHeader, {
    title: getFormattedDayName(new Date(2019, 9, 28), 'long', locale)
  }, getFormattedDayName(new Date(2019, 9, 28), 'short', locale))), React.createElement(StyledHeaderDays, {
    scope: "col"
  }, React.createElement(StyledAbbrHeader, {
    title: getFormattedDayName(new Date(2019, 9, 29), 'long', locale)
  }, getFormattedDayName(new Date(2019, 9, 29), 'short', locale))), React.createElement(StyledHeaderDays, {
    scope: "col"
  }, React.createElement(StyledAbbrHeader, {
    title: getFormattedDayName(new Date(2019, 9, 30), 'long', locale)
  }, getFormattedDayName(new Date(2019, 9, 30), 'short', locale))), React.createElement(StyledHeaderDays, {
    scope: "col"
  }, React.createElement(StyledAbbrHeader, {
    title: getFormattedDayName(new Date(2019, 9, 31), 'long', locale)
  }, getFormattedDayName(new Date(2019, 9, 31), 'short', locale))), React.createElement(StyledHeaderDays, {
    scope: "col"
  }, React.createElement(StyledAbbrHeader, {
    title: getFormattedDayName(new Date(2019, 10, 1), 'long', locale)
  }, getFormattedDayName(new Date(2019, 10, 1), 'short', locale))), React.createElement(StyledHeaderDays, {
    scope: "col"
  }, React.createElement(StyledAbbrHeader, {
    title: getFormattedDayName(new Date(2019, 10, 2), 'long', locale)
  }, getFormattedDayName(new Date(2019, 10, 2), 'short', locale))), React.createElement(StyledHeaderDays, {
    scope: "col"
  }, React.createElement(StyledAbbrHeader, {
    title: getFormattedDayName(new Date(2019, 9, 27), 'long', locale)
  }, getFormattedDayName(new Date(2019, 9, 27), 'short', locale)))));
}
DayOfWeek.propTypes = {
  locale: PropTypes.string
};
DayOfWeek.defaultProps = {
  locale: undefined
};