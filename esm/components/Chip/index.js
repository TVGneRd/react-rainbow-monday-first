import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './closeIcon';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import TruncatedText from '../Structural/truncatedText';
import StyledButtonIcon from './styled/buttonIcon';
var sizesMap = {
    small: 'x-small',
    medium: 'small',
    large: 'medium',
};
export default function Chip(props) {
    var label = props.label,
        onDelete = props.onDelete,
        variant = props.variant,
        title = props.title,
        className = props.className,
        style = props.style,
        size = props.size,
        borderRadius = props.borderRadius;
    var sizeButton = sizesMap[size] || sizesMap.medium;
    return React.createElement(
        StyledContainer,
        {
            className: className,
            style: style,
            variant: variant,
            title: title,
            size: size,
            borderRadius: borderRadius,
        },
        React.createElement(TruncatedText, null, label),
        React.createElement(
            RenderIf,
            {
                isTrue: onDelete,
            },
            React.createElement(StyledButtonIcon, {
                variant: variant,
                icon: React.createElement(CloseIcon, null),
                size: sizeButton,
                title: 'Close',
                onClick: onDelete,
                assistiveText: 'Remove',
            }),
        ),
    );
}
Chip.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'outline-brand',
        'brand',
        'success',
        'warning',
        'error',
    ]),
    onDelete: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
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
