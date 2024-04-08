import React from 'react';
import PropTypes from 'prop-types';

function SvgMalawi(_ref) {
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
  }, React.createElement("path", {
    d: "M0 16c0 1.957.352 3.832.995 5.565L16 22.261l15.005-.696C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565L16 9.739l-15.005.696A15.966 15.966 0 000 16z",
    fill: "#D80027"
  }), React.createElement("path", {
    d: "M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z",
    fill: "#000"
  }), React.createElement("path", {
    d: "M31.005 21.565H.995C3.255 27.658 9.121 32 16 32c6.88 0 12.744-4.342 15.005-10.435z",
    fill: "#496E2D"
  }), React.createElement("path", {
    fill: "#D80027",
    d: "M20.782 7.652l-1.954-.919 1.04-1.892-2.121.406-.269-2.144L16 4.679l-1.478-1.576-.269 2.144-2.122-.406 1.04 1.892-1.953.92z"
  })));
}

SvgMalawi.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgMalawi.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgMalawi;