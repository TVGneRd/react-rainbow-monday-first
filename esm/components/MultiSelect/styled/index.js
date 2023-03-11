import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7,
    _templateObject8,
    _templateObject9,
    _templateObject10;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';
import Chip from '../../Chip';
import ButtonIcon from '../../ButtonIcon';
import { TruncatedText } from '../../Structural';
import InternalDropdown from '../../InternalDropdown';
import {
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
export var StyledContainer = styled.div(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n',
        ])),
);
export var StyledInput = styled.input(
    _templateObject2 ||
        (_templateObject2 = _taggedTemplateLiteral([
            '\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n    clip: rect(1px, 1px, 1px, 1px);\n    white-space: nowrap; /* added line */\n',
        ])),
);
export var StyledCombobox = attachThemeAttrs(styled.div)(
    _templateObject3 ||
        (_templateObject3 = _taggedTemplateLiteral([
            '\n    font: inherit;\n    background-color: ',
            ';\n    border: 1px solid ',
            ';\n    border-radius: 20px;\n    width: 100%;\n    transition: all 0.1s linear, padding 0s, border 0s;\n    display: flex;\n    color: ',
            ';\n    font-size: ',
            ';\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0.1rem 1px;\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            '\n\n    ',
            '\n\n    :focus,\n    :active,\n    :focus-within {\n        outline: 0;\n        padding: 0.0325rem 0;\n        border: 2px solid ',
            ';\n        background-color: ',
            ';\n        box-shadow: ',
            ';\n    }\n\n    ',
            '    \n\n    ',
            '\n    \n        ',
            ';\n\n        ',
            ';\n    \n        ',
            ';\n    \n',
        ])),
    function(props) {
        return props.palette.background.main;
    },
    function(props) {
        return props.palette.border.main;
    },
    function(props) {
        return props.palette.text.main;
    },
    FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                FONT_SIZE_HEADING_MEDIUM,
                ';\n        border-radius: 30px;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                FONT_SIZE_TEXT_MEDIUM,
                ';\n        border-radius: 18px;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.isBare &&
            '\n        background: transparent;\n        border-color: transparent;\n        '
        );
    },
    function(props) {
        return (
            props.variant === 'bare' &&
            '\n        background: transparent;\n        border-color: transparent;\n        '
        );
    },
    function(props) {
        return props.palette.brand.main;
    },
    function(props) {
        return props.palette.background.main;
    },
    function(props) {
        return props.shadows.brand;
    },
    function(props) {
        return (
            props.error &&
            '\n        border: 2px solid '
                .concat(
                    props.palette.error.main,
                    ';\n        padding: 0.0375rem 0;\n\n        :focus,\n        :active {\n            outline: 0;\n            background-color: ',
                )
                .concat(props.palette.background.main, ';\n            border: 2px solid ')
                .concat(props.palette.error.main, ';\n            box-shadow: ')
                .concat(props.shadows.error, ';\n        }\n        ')
        );
    },
    function(props) {
        return (
            props.disabled &&
            '\n        background-color: '
                .concat(props.palette.background.disabled, ';\n        border: 1px solid ')
                .concat(props.palette.border.disabled, ';\n        color: ')
                .concat(
                    props.palette.text.disabled,
                    ';\n        cursor: not-allowed;\n        user-select: none;\n\n        :focus,\n        :active {\n            box-shadow: none;\n            background-color: ',
                )
                .concat(props.palette.background.disabled, ';\n            border: 1px solid ')
                .concat(props.palette.border.disabled, ';\n        }\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n                border-radius: '.concat(BORDER_RADIUS_SQUARE, ';\n            ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n                border-radius: '.concat(BORDER_RADIUS_SEMI_SQUARE, ';\n            ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n                border-radius: '.concat(
                BORDER_RADIUS_SEMI_ROUNDED,
                ';\n            ',
            )
        );
    },
);
export var StyledChipContainer = styled.div(
    _templateObject4 ||
        (_templateObject4 = _taggedTemplateLiteral([
            '\n    display: flex;\n    flex-wrap: wrap;\n    flex-grow: 1;\n    align-items: center;\n    overflow: hidden;\n',
        ])),
);
export var StyledChip = styled(Chip)(
    _templateObject5 ||
        (_templateObject5 = _taggedTemplateLiteral(['\n    margin: 0.1rem 0 0.1rem 0.2rem;\n'])),
);
export var StyledButtonIcon = styled(ButtonIcon)(
    _templateObject6 ||
        (_templateObject6 = _taggedTemplateLiteral([
            '\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin: 0.3rem 0.4rem;\n\n    svg {\n        width: 0.85rem !important;\n        height: 0.85rem !important;\n        font-size: 0.85rem !important;\n        ',
            ';\n        ',
            ';\n    }\n',
        ])),
    function(props) {
        return (
            props.sizeIcon === 'large' &&
            '\n            width: 1.25rem !important;\n            height: 1.25rem !important;\n            font-size: 1.25rem !important;\n        '
        );
    },
    function(props) {
        return (
            props.sizeIcon === 'small' &&
            '\n            width: 0.8rem !important;\n            height: 0.8rem !important;\n            font-size: 0.8rem !important;\n        '
        );
    },
);
export var StyledPlaceholder = attachThemeAttrs(styled.span)(
    _templateObject7 ||
        (_templateObject7 = _taggedTemplateLiteral([
            '\n    color: ',
            ';\n    font-weight: 500;\n    font-size: ',
            ';\n    align-self: center;\n    max-width: 100%;\n    padding: 0 0.8rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    function(props) {
        return props.palette.text.header;
    },
    FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                FONT_SIZE_HEADING_MEDIUM,
                ';\n        height: 3.1rem;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                FONT_SIZE_TEXT_MEDIUM,
                ';\n        height: 1.7rem;\n    ',
            )
        );
    },
);
export var StyledText = attachThemeAttrs(styled(TruncatedText))(
    _templateObject8 ||
        (_templateObject8 = _taggedTemplateLiteral([
            '\n    color: ',
            ';\n    font-weight: 500;\n    font-size: ',
            ';\n    align-self: center;\n    max-width: 100%;\n    padding: 0 0.8rem;\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    function(props) {
        return props.palette.text.main;
    },
    FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                FONT_SIZE_HEADING_MEDIUM,
                ';\n        height: 3.1rem;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                FONT_SIZE_TEXT_MEDIUM,
                ';\n        height: 1.7rem;\n    ',
            )
        );
    },
);
export var StyledCountText = attachThemeAttrs(styled.span)(
    _templateObject9 ||
        (_templateObject9 = _taggedTemplateLiteral([
            '\n    color: ',
            ';\n    font-weight: bold;\n    font-size: ',
            ';\n    align-self: center;\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            '\n',
        ])),
    function(props) {
        return props.palette.text.title;
    },
    FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                FONT_SIZE_HEADING_MEDIUM,
                ';\n        height: 3.1rem;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                FONT_SIZE_TEXT_MEDIUM,
                ';\n        height: 1.7rem;\n    ',
            )
        );
    },
    function(props) {
        return props.readOnly && '\n            margin-right: 0.8rem;\n        ';
    },
);
export var StyledDropdown = styled(InternalDropdown)(
    _templateObject10 || (_templateObject10 = _taggedTemplateLiteral(['\n    ', '\n'])),
    function(props) {
        return props.showCheckbox && '\n        width: '.concat(props.width, 'px;\n        ');
    },
);
