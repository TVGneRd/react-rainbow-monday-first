import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';
import { darken } from '../../../styles/helpers/color';
import getIconSize from '../helpers/getIconSize';

function QuestionIcon(_ref) {
  var className = _ref.className,
      style = _ref.style,
      isFocused = _ref.isFocused,
      iconSize = _ref.iconSize;
  var gray = useTheme().rainbow.palette.text.header;
  var background = isFocused ? darken(gray) : gray;
  var size = getIconSize(iconSize);
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    className: className,
    style: style
  }, React.createElement("path", {
    fill: background,
    d: "M11 0c6.066 0 11 4.934 11 11s-4.934 11-11 11S0 17.066 0 11 4.934 0 11 0zm0 15.583c-.506 0-.917.41-.917.917 0 .506.41.917.917.917.506 0 .917-.41.917-.917 0-.506-.41-.917-.917-.917zm0-11.916c-2.274 0-4.125 1.85-4.125 4.125 0 .506.41.916.917.916.507 0 .916-.41.916-.916C8.708 6.529 9.736 5.5 11 5.5c1.264 0 2.292 1.029 2.292 2.292 0 .56-.675 1.701-1.609 2.13-.97.45-1.6 1.43-1.6 2.5v.411c0 .506.41.917.917.917.507 0 .917-.41.917-.917v-.411c0-.357.21-.684.534-.834 1.6-.737 2.674-2.558 2.674-3.796 0-2.275-1.85-4.125-4.125-4.125z"
  }));
}

QuestionIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isFocused: PropTypes.bool,
  iconSize: PropTypes.oneOf(['small', 'medium'])
};
QuestionIcon.defaultProps = {
  className: undefined,
  style: undefined,
  isFocused: false,
  iconSize: 'medium'
};
export default QuestionIcon;