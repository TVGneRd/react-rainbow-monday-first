'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = OptionPicker;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _RenderIf = _interopRequireDefault(require('../../RenderIf'));

var _optionPicker = require('./styled/optionPicker');

function OptionPicker(_ref) {
    var name = _ref.name,
        label = _ref.label,
        description = _ref.description,
        value = _ref.value,
        borderRadius = _ref.borderRadius;
    var isSelected = value === name;
    var isMerge = name === 'merge-records';
    return _react['default'].createElement(
        _optionPicker.OptionContainer,
        {
            isSelected: isSelected,
            borderRadius: borderRadius,
        },
        _react['default'].createElement(
            _optionPicker.OptionLeftContent,
            null,
            _react['default'].createElement(_optionPicker.OptionName, null, label),
            _react['default'].createElement(_optionPicker.OptionDescription, null, description),
        ),
        _react['default'].createElement(
            _optionPicker.IconContainer,
            null,
            _react['default'].createElement(
                _RenderIf['default'],
                {
                    isTrue: !isMerge,
                },
                _react['default'].createElement(_optionPicker.StyledFile, null),
            ),
            _react['default'].createElement(
                _RenderIf['default'],
                {
                    isTrue: isMerge,
                },
                _react['default'].createElement(_optionPicker.StyledMergeFiles, null),
            ),
        ),
    );
}

OptionPicker.propTypes = {
    name: _propTypes['default'].string,
    label: _propTypes['default'].string,
    description: _propTypes['default'].string,
    value: _propTypes['default'].string,
    borderRadius: _propTypes['default'].oneOf(['rounded', 'square', 'semi-rounded', 'semi-square']),
};
OptionPicker.defaultProps = {
    name: undefined,
    label: undefined,
    description: undefined,
    value: undefined,
    borderRadius: 'rounded',
};
