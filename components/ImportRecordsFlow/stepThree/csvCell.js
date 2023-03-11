'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = CSVCell;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _ButtonIcon = _interopRequireDefault(require('../../ButtonIcon'));

var _plus = _interopRequireDefault(require('../icons/plus'));

var _pencil = _interopRequireDefault(require('../icons/pencil'));

var _RenderIf = _interopRequireDefault(require('../../RenderIf'));

var _cvsFieldContainer = require('./styled/cvsFieldContainer');

var _cancelIcon = _interopRequireDefault(require('./styled/cancelIcon'));

function CSVCell(props) {
    var _onClick = props.onClick,
        row = props.row,
        value = props.value,
        borderRadius = props.borderRadius;
    return _react['default'].createElement(
        _cvsFieldContainer.CellContainer,
        null,
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: value,
            },
            value,
            _react['default'].createElement(_ButtonIcon['default'], {
                variant: 'outline-brand',
                onClick: function onClick() {
                    return _onClick(row.databaseField);
                },
                icon: _react['default'].createElement(_pencil['default'], null),
                size: 'small',
                borderRadius: borderRadius,
            }),
        ),
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: !value,
            },
            _react['default'].createElement(
                _cvsFieldContainer.StyledCVSFieldContainer,
                null,
                _react['default'].createElement(_cancelIcon['default'], null),
                'Not assigned yet',
            ),
            _react['default'].createElement(_ButtonIcon['default'], {
                variant: 'outline-brand',
                onClick: function onClick() {
                    return _onClick(row.databaseField);
                },
                icon: _react['default'].createElement(_plus['default'], null),
                size: 'small',
                borderRadius: borderRadius,
            }),
        ),
    );
}

CSVCell.propTypes = {
    onClick: _propTypes['default'].func,
    row: _propTypes['default'].object.isRequired,
    value: _propTypes['default'].string,
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
CSVCell.defaultProps = {
    onClick: function onClick() {},
    value: undefined,
    borderRadius: 'rounded',
};
