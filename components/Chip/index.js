'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = Chip;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _closeIcon = _interopRequireDefault(require('./closeIcon'));

var _RenderIf = _interopRequireDefault(require('../RenderIf'));

var _container = _interopRequireDefault(require('./styled/container'));

var _truncatedText = _interopRequireDefault(require('../Structural/truncatedText'));

var _buttonIcon = _interopRequireDefault(require('./styled/buttonIcon'));

var sizesMap = {
    small: 'x-small',
    medium: 'small',
    large: 'medium',
};

function Chip(props) {
    var label = props.label,
        onDelete = props.onDelete,
        variant = props.variant,
        title = props.title,
        className = props.className,
        style = props.style,
        size = props.size,
        borderRadius = props.borderRadius;
    var sizeButton = sizesMap[size] || sizesMap.medium;
    return _react['default'].createElement(
        _container['default'],
        {
            className: className,
            style: style,
            variant: variant,
            title: title,
            size: size,
            borderRadius: borderRadius,
        },
        _react['default'].createElement(_truncatedText['default'], null, label),
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: onDelete,
            },
            _react['default'].createElement(_buttonIcon['default'], {
                variant: variant,
                icon: _react['default'].createElement(_closeIcon['default'], null),
                size: sizeButton,
                title: 'Close',
                onClick: onDelete,
                assistiveText: 'Remove',
            }),
        ),
    );
}

Chip.propTypes = {
    label: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    title: _propTypes['default'].string,
    variant: _propTypes['default'].oneOf([
        'base',
        'neutral',
        'outline-brand',
        'brand',
        'success',
        'warning',
        'error',
    ]),
    onDelete: _propTypes['default'].func,
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
    size: _propTypes['default'].oneOf(['small', 'medium', 'large']),
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
Chip.defaultProps = {
    label: null,
    title: undefined,
    variant: 'base',
    onDelete: undefined,
    className: undefined,
    style: undefined,
    size: 'medium',
    borderRadius: 'rounded',
};
