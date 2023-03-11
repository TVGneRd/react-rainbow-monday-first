'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _color = require('../../styles/helpers/color');

var _styled = require('./styled');

var ColorSample = function ColorSample(_ref) {
    var value = _ref.value,
        size = _ref.size;
    var backgroundColor = value ? (0, _color.hexToRgba)(value.hex, value.alpha) : undefined;
    return _react['default'].createElement(_styled.StyledColorSample, {
        backgroundColor: backgroundColor,
        size: size,
    });
};

ColorSample.propTypes = {
    value: _propTypes['default'].shape({
        hex: _propTypes['default'].string,
        alpha: _propTypes['default'].number,
    }),
    size: _propTypes['default'].oneOf(['small', 'medium', 'large']),
};
ColorSample.defaultProps = {
    value: undefined,
    size: 'medium',
};
var _default = ColorSample;
exports['default'] = _default;
