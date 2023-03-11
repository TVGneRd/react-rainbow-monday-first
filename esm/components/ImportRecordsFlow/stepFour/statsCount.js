import React from 'react';
import PropTypes from 'prop-types';
import StyledStatsCardDescription from './styled/statsCardDescription';
import XCircle from '../icons/xCircle';
import CheckCircle from '../icons/checkCircle';
import RenderIf from '../../RenderIf';
import getPluralization from '../helpers/getPluralization';

var getCardDescription = function getCardDescription(type, amount) {
    var plural = type === 'success' ? '' : getPluralization(amount);
    return ''
        .concat(amount, ' ')
        .concat(type === 'success' ? 'Successful' : 'Error')
        .concat(plural);
};

export default function StatsCount(props) {
    var type = props.type,
        amount = props.amount;
    var description = getCardDescription(type, amount);
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            RenderIf,
            {
                isTrue: type === 'success',
            },
            React.createElement(CheckCircle, null),
        ),
        React.createElement(
            RenderIf,
            {
                isTrue: type === 'error',
            },
            React.createElement(XCircle, null),
        ),
        React.createElement(StyledStatsCardDescription, null, description),
    );
}
StatsCount.propTypes = {
    type: PropTypes.oneOf(['success', 'error']),
    amount: PropTypes.number,
};
StatsCount.defaultProps = {
    type: 'success',
    amount: 0,
};
