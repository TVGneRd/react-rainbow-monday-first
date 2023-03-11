import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_SEMI_ROUNDED,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SQUARE,
} from '../../../../styles/borderRadius';
var DatabaseFieldContent = attachThemeAttrs(styled.div)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    background: ',
            ';\n    color: ',
            ';\n    margin: 8px 20px 8px 12px;\n    border-radius: 8px;\n    padding-left: 12px;\n    line-height: 30px;\n    ',
            ';\n    \n    ',
            ';\n    \n    ',
            ';\n',
        ])),
    function(props) {
        return props.palette.brand.light;
    },
    function(props) {
        return props.palette.text.main;
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_ROUNDED, ';\n        ')
        );
    },
);
export default DatabaseFieldContent;
