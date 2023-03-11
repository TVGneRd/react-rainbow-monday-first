'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = PreviewTable;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _Column = _interopRequireDefault(require('../../Column'));

var _Spinner = _interopRequireDefault(require('../../Spinner'));

var _spinnerContainer = _interopRequireDefault(require('./styled/spinnerContainer'));

var _container = require('./styled/container');

function PreviewTable(props) {
    var columns = props.columns,
        data = props.data,
        isLoading = props.isLoading;

    if (isLoading) {
        return _react['default'].createElement(
            _spinnerContainer['default'],
            null,
            _react['default'].createElement(_Spinner['default'], null),
        );
    }

    return _react['default'].createElement(
        _container.TableContainer,
        null,
        _react['default'].createElement(
            _container.StyledTable,
            {
                keyField: 'id',
                data: data,
                minColumnWidth: 180,
                variant: 'listview',
            },
            columns.map(function(col) {
                return _react['default'].createElement(_Column['default'], {
                    key: col,
                    header: col,
                    field: col,
                    headerAlignment: 'left',
                    cellAlignment: 'left',
                });
            }),
        ),
    );
}

PreviewTable.propTypes = {
    columns: _propTypes['default'].array.isRequired,
    data: _propTypes['default'].array.isRequired,
    isLoading: _propTypes['default'].bool.isRequired,
};
