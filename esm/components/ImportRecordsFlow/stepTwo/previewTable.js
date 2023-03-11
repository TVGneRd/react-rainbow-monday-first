import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import Spinner from '../../Spinner';
import StyledSpinnerContainer from './styled/spinnerContainer';
import { TableContainer, StyledTable } from './styled/container';
export default function PreviewTable(props) {
    var columns = props.columns,
        data = props.data,
        isLoading = props.isLoading;

    if (isLoading) {
        return React.createElement(
            StyledSpinnerContainer,
            null,
            React.createElement(Spinner, null),
        );
    }

    return React.createElement(
        TableContainer,
        null,
        React.createElement(
            StyledTable,
            {
                keyField: 'id',
                data: data,
                minColumnWidth: 180,
                variant: 'listview',
            },
            columns.map(function(col) {
                return React.createElement(Column, {
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
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
