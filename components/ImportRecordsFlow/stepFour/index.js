'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = StepFour;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _Column = _interopRequireDefault(require('../../Column'));

var _table = _interopRequireDefault(require('../styled/table'));

var _statsCard = _interopRequireDefault(require('./statsCard'));

function StepFour(props) {
    var schemaFields = props.schemaFields,
        validRecords = props.validRecords,
        invalidRecords = props.invalidRecords,
        borderRadius = props.borderRadius;
    var previewData = validRecords.slice(0, 5);
    return _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].createElement(_statsCard['default'], {
            validRecords: validRecords,
            invalidRecords: invalidRecords,
            borderRadius: borderRadius,
        }),
        _react['default'].createElement(
            _table['default'],
            {
                keyField: 'id',
                data: previewData,
                variant: 'listview',
            },
            schemaFields.map(function(field, index) {
                var key = 'column-'.concat(index);
                return _react['default'].createElement(_Column['default'], {
                    key: key,
                    header: field,
                    field: field,
                    headerAlignment: 'left',
                    cellAlignment: 'left',
                });
            }),
        ),
    );
}

StepFour.propTypes = {
    schemaFields: _propTypes['default'].array,
    validRecords: _propTypes['default'].array,
    invalidRecords: _propTypes['default'].array,
    borderRadius: _propTypes['default'].oneOf(['rounded', 'square', 'semi-rounded', 'semi-square']),
};
StepFour.defaultProps = {
    schemaFields: [],
    validRecords: [],
    invalidRecords: [],
    borderRadius: 'rounded',
};
