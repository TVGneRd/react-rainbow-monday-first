import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import getTheme from '../../../../styles/helpers/getTheme';
import CsvIcon from '../../icons/csvIcon';
var StyledIcon = styled(CsvIcon).attrs(function(props) {
    var brandMainColor = getTheme(props).palette.brand.main;
    var backgroundColor = getTheme(props).palette.background.main;
    return {
        brandMainColor: brandMainColor,
        backgroundColor: backgroundColor,
    };
})(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    fill: ',
            ';\n    color: ',
            ';\n    width: 90px;\n',
        ])),
    function(props) {
        return props.backgroundColor;
    },
    function(props) {
        return props.brandMainColor;
    },
);
export default StyledIcon;
