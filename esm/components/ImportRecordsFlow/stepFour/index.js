import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import StyledTable from '../styled/table';
import StatsCard from './statsCard';
export default function StepFour(props) {
    var schemaFields = props.schemaFields,
        validRecords = props.validRecords,
        invalidRecords = props.invalidRecords,
        borderRadius = props.borderRadius;
    var previewData = validRecords.slice(0, 5);
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(StatsCard, {
            validRecords: validRecords,
            invalidRecords: invalidRecords,
            borderRadius: borderRadius,
        }),
        React.createElement(
            StyledTable,
            {
                keyField: 'id',
                data: previewData,
                variant: 'listview',
            },
            schemaFields.map(function(field, index) {
                var key = 'column-'.concat(index);
                return React.createElement(Column, {
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
    schemaFields: PropTypes.array,
    validRecords: PropTypes.array,
    invalidRecords: PropTypes.array,
    borderRadius: PropTypes.oneOf(['rounded', 'square', 'semi-rounded', 'semi-square']),
};
StepFour.defaultProps = {
    schemaFields: [],
    validRecords: [],
    invalidRecords: [],
    borderRadius: 'rounded',
};
