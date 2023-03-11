import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject, _templateObject2;

import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
export var StyledCVSFieldContainer = attachThemeAttrs(styled.span)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    align-items: center;\n    display: flex;\n    color: ',
            ';\n    font-size: 14px;\n    font-style: italic;\n',
        ])),
    function(props) {
        return props.palette.text.header;
    },
);
export var CellContainer = styled.div(
    _templateObject2 ||
        (_templateObject2 = _taggedTemplateLiteral([
            '\n    align-items: center;\n    display: flex;\n    padding: 3px 24px 0 8px;\n    justify-content: space-between;\n',
        ])),
);
