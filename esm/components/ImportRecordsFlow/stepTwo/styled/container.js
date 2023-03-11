import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject, _templateObject2, _templateObject3;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import Table from '../../../Table';
export var StyledContainer = attachThemeAttrs(styled.div)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    border-radius: 4px;\n    border: dashed 1px ',
            ';\n    background-color: ',
            ';\n    height: 260px;\n    margin: 0 16px 24px 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    ',
            ';\n',
        ])),
    function(props) {
        return props.palette.background.highlight;
    },
    function(props) {
        return props.palette.background.secondary;
    },
    function(props) {
        return (
            props.isDragOver &&
            '\n            background-color: '
                .concat(props.palette.action.active, ';\n            border: dashed 1px ')
                .concat(props.palette.brand.main, ';\n        ')
        );
    },
);
export var TableContainer = styled.div(
    _templateObject2 ||
        (_templateObject2 = _taggedTemplateLiteral([
            '\n    margin-left: -32px;\n    margin-right: -32px;\n    display: flex;\n    overflow: auto;\n    box-sizing: border-box;\n',
        ])),
);
export var StyledTable = styled(Table)(
    _templateObject3 || (_templateObject3 = _taggedTemplateLiteral(['\n    margin: 0 48px;\n'])),
);
