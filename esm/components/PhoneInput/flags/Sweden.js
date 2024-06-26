import React from 'react';
import PropTypes from 'prop-types';

function SvgSweden(_ref) {
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
    fill: "#FFDA44",
    cx: 16,
    cy: 16,
    r: 16
  }), React.createElement("g", {
    fill: "#0052B4"
  }, React.createElement("path", {
    d: "M12.522 13.913h19.343C30.842 6.063 24.129 0 16 0c-1.195 0-2.358.132-3.478.38v13.533zM8.348 13.913V1.945C3.954 4.343.809 8.74.135 13.913h8.213zM8.348 18.087H.135c.674 5.174 3.82 9.57 8.213 11.968V18.087zM12.522 18.087V31.62c1.12.248 2.283.38 3.478.38 8.13 0 14.842-6.063 15.865-13.913H12.522z"
  }))));
}

SvgSweden.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgSweden.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgSweden;