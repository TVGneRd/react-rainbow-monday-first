'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.TableContainer = exports.StyledTable = exports.StyledContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
    require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _attachThemeAttrs = _interopRequireDefault(
    require('../../../../styles/helpers/attachThemeAttrs'),
);

var _Table = _interopRequireDefault(require('../../../Table'));

var _templateObject, _templateObject2, _templateObject3;

var StyledContainer = (0, _attachThemeAttrs['default'])(_styledComponents['default'].div)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
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
exports.StyledContainer = StyledContainer;

var TableContainer = _styledComponents['default'].div(
    _templateObject2 ||
        (_templateObject2 = (0, _taggedTemplateLiteral2['default'])([
            '\n    margin-left: -32px;\n    margin-right: -32px;\n    display: flex;\n    overflow: auto;\n    box-sizing: border-box;\n',
        ])),
);

exports.TableContainer = TableContainer;
var StyledTable = (0, _styledComponents['default'])(_Table['default'])(
    _templateObject3 ||
        (_templateObject3 = (0, _taggedTemplateLiteral2['default'])(['\n    margin: 0 48px;\n'])),
);
exports.StyledTable = StyledTable;
