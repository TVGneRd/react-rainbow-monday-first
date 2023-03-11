import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import {
    IconContainer,
    OptionContainer,
    OptionDescription,
    OptionLeftContent,
    OptionName,
    StyledFile,
    StyledMergeFiles,
} from './styled/optionPicker';
export default function OptionPicker(_ref) {
    var name = _ref.name,
        label = _ref.label,
        description = _ref.description,
        value = _ref.value,
        borderRadius = _ref.borderRadius;
    var isSelected = value === name;
    var isMerge = name === 'merge-records';
    return React.createElement(
        OptionContainer,
        {
            isSelected: isSelected,
            borderRadius: borderRadius,
        },
        React.createElement(
            OptionLeftContent,
            null,
            React.createElement(OptionName, null, label),
            React.createElement(OptionDescription, null, description),
        ),
        React.createElement(
            IconContainer,
            null,
            React.createElement(
                RenderIf,
                {
                    isTrue: !isMerge,
                },
                React.createElement(StyledFile, null),
            ),
            React.createElement(
                RenderIf,
                {
                    isTrue: isMerge,
                },
                React.createElement(StyledMergeFiles, null),
            ),
        ),
    );
}
OptionPicker.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
    borderRadius: PropTypes.oneOf(['rounded', 'square', 'semi-rounded', 'semi-square']),
};
OptionPicker.defaultProps = {
    name: undefined,
    label: undefined,
    description: undefined,
    value: undefined,
    borderRadius: 'rounded',
};
