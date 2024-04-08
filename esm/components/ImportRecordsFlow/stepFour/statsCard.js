import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import StyledStatsCard from './styled/styledstatsCard';
import StyledStatsCardContent from './styled/statsCardContent';
import StyledStatsCardTitle from './styled/statsCardTitle';
import StyledIcon from './styled/icon';
import StatsCardLeftContainer from './styled/statsLeftContainer';
import StyledStatsCardDescriptionContainer from './styled/statsCardDescriptionContainer';
import StatsCount from './statsCount';
import downloadErrorsCSV from '../helpers/downloadErrorsCsv';
import RenderIf from '../../RenderIf';
import InternalTooltip from '../../InternalTooltip';
import ButtonIcon from '../../ButtonIcon';
import useDefaultTooltipConnector from '../../InternalTooltip/hooks/useDefaultTooltipConnector';
import DownloadCsv from '../icons/downloadCsv';
import StyledTooltipText from './styled/styledTooltipText';
import getPluralization from '../helpers/getPluralization';
export default function StatsCard(props) {
  var validRecords = props.validRecords,
      invalidRecords = props.invalidRecords,
      borderRadius = props.borderRadius;
  var invalidCount = invalidRecords.length;
  var validCount = validRecords.length;
  var totalRecords = invalidCount + validCount;
  var titleText = "Total: ".concat(totalRecords, " record").concat(getPluralization(totalRecords), " on your file");

  var onClick = function onClick() {
    downloadErrorsCSV({
      invalidRecords: invalidRecords
    });
  };

  var _triggerRef = useRef();

  var tooltipRef = useRef();

  var _useDefaultTooltipCon = useDefaultTooltipConnector({
    tooltipRef: tooltipRef,
    triggerRef: function triggerRef() {
      return _triggerRef.current.htmlElementRef;
    }
  }),
      onFocus = _useDefaultTooltipCon.onFocus,
      onBlur = _useDefaultTooltipCon.onBlur,
      onMouseEnter = _useDefaultTooltipCon.onMouseEnter,
      onMouseLeave = _useDefaultTooltipCon.onMouseLeave,
      isVisible = _useDefaultTooltipCon.isVisible;

  return React.createElement(StyledStatsCard, {
    borderRadius: borderRadius
  }, React.createElement(StyledIcon, null), React.createElement(StyledStatsCardContent, null, React.createElement(StatsCardLeftContainer, null, React.createElement(StyledStatsCardTitle, null, titleText), React.createElement(StyledStatsCardDescriptionContainer, null, React.createElement(StatsCount, {
    type: "success",
    amount: validCount
  }), React.createElement(StatsCount, {
    type: "error",
    amount: invalidCount
  })))), React.createElement(RenderIf, {
    isTrue: invalidCount > 0
  }, React.createElement(ButtonIcon, {
    onFocus: onFocus,
    onBlur: onBlur,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    ref: _triggerRef,
    variant: "base",
    icon: React.createElement(DownloadCsv, null),
    borderRadius: borderRadius
  }), React.createElement(InternalTooltip, {
    triggerElementRef: function triggerElementRef() {
      return _triggerRef.current.htmlElementRef;
    },
    isVisible: isVisible,
    preferredPosition: "top",
    ref: tooltipRef
  }, React.createElement(StyledTooltipText, null, "Download a CSV with the errors"))));
}
StatsCard.propTypes = {
  validRecords: PropTypes.array,
  invalidRecords: PropTypes.array,
  borderRadius: PropTypes.oneOf(['rounded', 'square', 'semi-rounded', 'semi-square'])
};
StatsCard.defaultProps = {
  validRecords: [],
  invalidRecords: [],
  borderRadius: 'rounded'
};