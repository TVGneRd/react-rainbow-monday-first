'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.StyledRadioGroup = exports.StyledMergeFiles = exports.StyledFile = exports.OptionName = exports.OptionLeftContent = exports.OptionDescription = exports.OptionContainer = exports.IconContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
    require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _file = _interopRequireDefault(require('../../icons/file'));

var _attachThemeAttrs = _interopRequireDefault(
    require('../../../../styles/helpers/attachThemeAttrs'),
);

var _RadioGroup = _interopRequireDefault(require('../../../RadioGroup'));

var _mergeFiles = _interopRequireDefault(require('../../icons/mergeFiles'));

var _borderRadius = require('../../../../styles/borderRadius');

var _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7,
    _templateObject8;

var OptionContainer = (0, _attachThemeAttrs['default'])(_styledComponents['default'].div)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 40rem;\n    padding: 12px 16px 12px 20px;\n    background-color: ',
            ';\n    border-radius: 10px;\n    margin-top: -16px;\n\n    ',
            '\n\n    &:hover {\n        background-color: ',
            ';\n        cursor: pointer;\n\n        svg {\n            color: ',
            ';\n        }\n\n        div:nth-child(2) {\n            background-color: ',
            ';\n        }\n    }\n\n    ',
            ';\n    \n    ',
            ';\n    \n    ',
            ';\n',
        ])),
    function(props) {
        return props.palette.background.secondary;
    },
    function(props) {
        return (
            props.isSelected &&
            '\n            background-color: '
                .concat(
                    props.palette.brand.light,
                    ';\n\n            svg {\n                color: ',
                )
                .concat(
                    props.palette.background.highlight,
                    ';\n            }\n\n            div:nth-child(2) {\n                background-color: ',
                )
                .concat(props.palette.brand.main, ';\n            }\n        ')
        );
    },
    function(props) {
        return props.palette.brand.light;
    },
    function(props) {
        return props.palette.background.highlight;
    },
    function(props) {
        return props.palette.brand.main;
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n            border-radius: '.concat(
                _borderRadius.BORDER_RADIUS_SQUARE,
                ';\n        ',
            )
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n            border-radius: '.concat(
                _borderRadius.BORDER_RADIUS_SEMI_SQUARE,
                ';\n        ',
            )
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n            border-radius: '.concat(
                _borderRadius.BORDER_RADIUS_SEMI_ROUNDED,
                ';\n        ',
            )
        );
    },
);
exports.OptionContainer = OptionContainer;
var OptionLeftContent = (0, _attachThemeAttrs['default'])(_styledComponents['default'].div)(
    _templateObject2 ||
        (_templateObject2 = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 1;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n',
        ])),
);
exports.OptionLeftContent = OptionLeftContent;
var OptionName = (0, _attachThemeAttrs['default'])(_styledComponents['default'].h3)(
    _templateObject3 ||
        (_templateObject3 = (0, _taggedTemplateLiteral2['default'])([
            '\n    color: ',
            ';\n    font-size: 16px;\n    width: 500;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n',
        ])),
    function(props) {
        return props.palette.text.main;
    },
);
exports.OptionName = OptionName;
var OptionDescription = (0, _attachThemeAttrs['default'])(_styledComponents['default'].p)(
    _templateObject4 ||
        (_templateObject4 = (0, _taggedTemplateLiteral2['default'])([
            '\n    font-size: 14px;\n    color: ',
            ';\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n',
        ])),
    function(props) {
        return props.palette.text.label;
    },
);
exports.OptionDescription = OptionDescription;
var StyledFile = (0, _attachThemeAttrs['default'])(
    (0, _styledComponents['default'])(_file['default']),
)(
    _templateObject5 ||
        (_templateObject5 = (0, _taggedTemplateLiteral2['default'])([
            '\n    color: ',
            ';\n    flex-shrink: 0;\n',
        ])),
    function(props) {
        return props.palette.text.label;
    },
);
exports.StyledFile = StyledFile;
var StyledMergeFiles = (0, _attachThemeAttrs['default'])(
    (0, _styledComponents['default'])(_mergeFiles['default']),
)(
    _templateObject6 ||
        (_templateObject6 = (0, _taggedTemplateLiteral2['default'])([
            '\n    color: ',
            ';\n    flex-shrink: 0;\n',
        ])),
    function(props) {
        return props.palette.text.label;
    },
);
exports.StyledMergeFiles = StyledMergeFiles;
var IconContainer = (0, _attachThemeAttrs['default'])(_styledComponents['default'].div)(
    _templateObject7 ||
        (_templateObject7 = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    background-color: ',
            ';\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n',
        ])),
    function(props) {
        return props.palette.background.main;
    },
);
exports.IconContainer = IconContainer;
var StyledRadioGroup = (0, _styledComponents['default'])(_RadioGroup['default'])(
    _templateObject8 ||
        (_templateObject8 = (0, _taggedTemplateLiteral2['default'])([
            '\n    .rainbow-input_faux {\n        visibility: hidden;\n    }\n',
        ])),
);
exports.StyledRadioGroup = StyledRadioGroup;
