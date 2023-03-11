import React from 'react';
import PropTypes from 'prop-types';
import { hexToRgba } from '../../styles/helpers/color';
import { StyledColorSample } from './styled';

var ColorSample = function ColorSample(_ref) {
    var value = _ref.value,
        size = _ref.size;
    var backgroundColor = value ? hexToRgba(value.hex, value.alpha) : undefined;
    return React.createElement(StyledColorSample, {
        backgroundColor: backgroundColor,
        size: size,
    });
};

ColorSample.propTypes = {
    value: PropTypes.shape({
        hex: PropTypes.string,
        alpha: PropTypes.number,
    }),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};
ColorSample.defaultProps = {
    value: undefined,
    size: 'medium',
};
export default ColorSample;
