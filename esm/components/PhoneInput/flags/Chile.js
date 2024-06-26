import React from 'react';
import PropTypes from 'prop-types';

function SvgChile(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("circle", {
    fill: "#F0F0F0",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("path", {
    d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16s16 0 16 0h16z",
    fill: "#D80027"
  }), React.createElement("path", {
    d: "M0 16C0 7.163 7.163 0 16 0v16H0z",
    fill: "#0052B4"
  }), React.createElement("path", {
    fill: "#F0F0F0",
    d: "M9.524 5.565l1.036 3.189h3.353l-2.712 1.97 1.036 3.19-2.713-1.972-2.712 1.971 1.036-3.189-2.712-1.97h3.352z"
  })));
}

SvgChile.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgChile.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgChile;