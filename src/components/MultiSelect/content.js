import React from 'react';
import PropTypes from 'prop-types';
import { getContent } from './helpers';
import { StyledText } from './styled';
import Chips from './chips';

const Content = props => {
    const { variant, value, chipVariant, readOnly, disabled, onDelete, size, borderRadius } = props;
    if (variant === 'chip') {
        return (
            <Chips
                value={value}
                variant={chipVariant}
                readOnly={readOnly}
                disabled={disabled}
                onDelete={onDelete}
                borderRadius={borderRadius}
                size={size}
            />
        );
    }

    const content = getContent(value);
    return <StyledText size={size}>{content}</StyledText>;
};

Content.propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    variant: PropTypes.oneOf(['default', 'chip']),
    chipVariant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    value: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
            value: PropTypes.any,
        }),
    ),
    onDelete: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

Content.defaultProps = {
    disabled: false,
    readOnly: false,
    variant: 'default',
    chipVariant: 'base',
    value: undefined,
    onDelete: () => {},
    size: 'medium',
    borderRadius: 'rounded',
};

export default Content;
