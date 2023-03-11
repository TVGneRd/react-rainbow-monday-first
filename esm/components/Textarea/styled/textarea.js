import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';
var StyledTextarea = attachThemeAttrs(styled.textarea)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    border-radius: ',
            ';\n    background-color: transparent;\n    border: none;\n    width: calc(100% - 2rem);\n    padding: 0.625rem 1rem;\n    resize: none;\n    font-size: ',
            ';\n    line-height: 1.57;\n    color: ',
            ';\n    box-sizing: content-box;\n    margin: 0;\n    overflow: auto;\n\n    ',
            ';\n\n    ',
            ';\n\n    :focus,\n    :active {\n        outline: 0;\n        padding: 0.563rem 0.9375rem;\n        width: calc(100% - 1.875rem);\n\n        ',
            ';\n    \n        ',
            ';\n    }\n\n    ::placeholder {\n        color: ',
            ';\n        font-size: ',
            ';\n\n        ',
            ';\n    \n        ',
            ';\n    }\n\n    &[disabled] {\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n        &:active {\n            padding: 0.625rem 1rem;\n            width: calc(100% - 2rem);\n\n            ',
            ';\n        \n            ',
            ';\n        }\n\n        &::placeholder {\n            color: ',
            ';\n        }\n    }\n\n    &[readonly] {\n        padding: 0;\n        width: 100%;\n        border-radius: 0;\n\n        :focus,\n        :active {\n            width: 100%;\n        }\n    }\n\n    ',
            '};\n',
        ])),
    BORDER_RADIUS_1,
    FONT_SIZE_TEXT_LARGE,
    function(props) {
        return props.palette.text.main;
    },
    function(props) {
        return (
            props.size === 'large' &&
            '\n            padding: 0.625rem 1.2rem;\n            font-size: '.concat(
                FONT_SIZE_HEADING_MEDIUM,
                ';\n            width: calc(100% - 2.4rem);\n        ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n            padding: 0.625rem 0.8rem;\n            font-size: '.concat(
                FONT_SIZE_TEXT_MEDIUM,
                ';\n            width: calc(100% - 1.6rem);\n        ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'large' &&
            '\n                padding: 0.563rem 1.125rem;\n                width: calc(100% - 2.25rem);\n            '
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n                padding: 0.563rem 0.75rem;\n                width: calc(100% - 1.5rem);\n            '
        );
    },
    function(props) {
        return props.palette.text.header;
    },
    FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n                font-size: '.concat(FONT_SIZE_HEADING_MEDIUM, ';\n            ')
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n                font-size: '.concat(FONT_SIZE_TEXT_MEDIUM, ';\n            ')
        );
    },
    function(props) {
        return (
            props.size === 'large' &&
            '\n                    padding: 0.625rem 1.2rem;\n                    width: calc(100% - 2.4rem);\n                '
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n                    padding: 0.625rem 0.8rem;\n                    width: calc(100% - 1.6rem);\n                '
        );
    },
    function(props) {
        return props.palette.text.disabled;
    },
    function(props) {
        return (
            props.error &&
            '\n        background-clip: padding-box;\n\n        :focus,\n        :active {\n            padding: 0.625rem 1rem;\n            width: calc(100% - 2rem);\n\n            '
                .concat(
                    props.size === 'large' &&
                        '\n                    padding: 0.625rem 1.2rem;\n                    width: calc(100% - 2.4rem);\n                ',
                    ';\n        \n            ',
                )
                .concat(
                    props.size === 'small' &&
                        '\n                    padding: 0.625rem 0.8rem;\n                    width: calc(100% - 1.6rem);\n                ',
                    ';\n        }\n    ',
                )
        );
    },
);
export default StyledTextarea;
