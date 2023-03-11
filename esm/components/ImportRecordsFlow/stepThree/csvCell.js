import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../ButtonIcon';
import Plus from '../icons/plus';
import Pencil from '../icons/pencil';
import RenderIf from '../../RenderIf';
import { CellContainer, StyledCVSFieldContainer } from './styled/cvsFieldContainer';
import StyledCancelIcon from './styled/cancelIcon';
export default function CSVCell(props) {
    var _onClick = props.onClick,
        row = props.row,
        value = props.value,
        borderRadius = props.borderRadius;
    return React.createElement(
        CellContainer,
        null,
        React.createElement(
            RenderIf,
            {
                isTrue: value,
            },
            value,
            React.createElement(ButtonIcon, {
                variant: 'outline-brand',
                onClick: function onClick() {
                    return _onClick(row.databaseField);
                },
                icon: React.createElement(Pencil, null),
                size: 'small',
                borderRadius: borderRadius,
            }),
        ),
        React.createElement(
            RenderIf,
            {
                isTrue: !value,
            },
            React.createElement(
                StyledCVSFieldContainer,
                null,
                React.createElement(StyledCancelIcon, null),
                'Not assigned yet',
            ),
            React.createElement(ButtonIcon, {
                variant: 'outline-brand',
                onClick: function onClick() {
                    return _onClick(row.databaseField);
                },
                icon: React.createElement(Plus, null),
                size: 'small',
                borderRadius: borderRadius,
            }),
        ),
    );
}
CSVCell.propTypes = {
    onClick: PropTypes.func,
    row: PropTypes.object.isRequired,
    value: PropTypes.string,
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
CSVCell.defaultProps = {
    onClick: function onClick() {},
    value: undefined,
    borderRadius: 'rounded',
};
