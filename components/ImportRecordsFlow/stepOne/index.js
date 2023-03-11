'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = StepOne;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _RenderIf = _interopRequireDefault(require('../../RenderIf'));

var _getSchemaFieldOptions = _interopRequireDefault(require('../helpers/getSchemaFieldOptions'));

var _container = _interopRequireDefault(require('./styled/container'));

var _optionPicker = require('./styled/optionPicker');

var _optionPicker2 = _interopRequireDefault(require('./optionPicker'));

var _styledSelect = _interopRequireDefault(require('./styled/styledSelect'));

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj['default'] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function StepOne(props) {
    var schemaFields = props.schemaFields,
        actionOption = props.actionOption,
        onChangeAction = props.onChangeAction,
        matchField = props.matchField,
        onChangeMatchField = props.onChangeMatchField,
        borderRadius = props.borderRadius;

    var _useState = (0, _react.useState)([]),
        _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
        fieldOptions = _useState2[0],
        setFieldOptions = _useState2[1];

    var isMergeOption = actionOption === 'merge-records';
    (0, _react.useEffect)(
        function() {
            setFieldOptions((0, _getSchemaFieldOptions['default'])(schemaFields));
        },
        [schemaFields],
    );

    var onChange = function onChange(event) {
        onChangeAction(event.target.value);
    };

    var options = [
        {
            value: 'add-records',
            label: _react['default'].createElement(_optionPicker2['default'], {
                name: 'add-records',
                value: actionOption,
                label: 'Add New records',
                description:
                    'Allows adding all records without checking for duplicates in existing records.',
                borderRadius: borderRadius,
            }),
            name: 'add-records',
            id: 'add-records',
        },
        {
            value: 'merge-records',
            label: _react['default'].createElement(_optionPicker2['default'], {
                name: 'merge-records',
                value: actionOption,
                label: 'Merge exist records',
                description:
                    'Allows you to create only unique records avoiding duplications with existing records.',
                borderRadius: borderRadius,
            }),
            name: 'merge-records',
            id: 'merge-records',
        },
    ];
    return _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].createElement(
            _container['default'],
            null,
            _react['default'].createElement(_optionPicker.StyledRadioGroup, {
                onChange: onChange,
                value: actionOption,
                options: options,
            }),
            _react['default'].createElement(
                _RenderIf['default'],
                {
                    isTrue: isMergeOption,
                },
                _react['default'].createElement(_styledSelect['default'], {
                    label: 'Match Field',
                    labelAlignment: 'left',
                    placeholder: 'Select the Field do you want match',
                    options: fieldOptions,
                    onChange: function onChange(event) {
                        return onChangeMatchField(event.target.value);
                    },
                    value: matchField,
                    borderRadius: borderRadius,
                }),
            ),
        ),
    );
}

StepOne.propTypes = {
    schemaFields: _propTypes['default'].array,
    actionOption: _propTypes['default'].string,
    onChangeAction: _propTypes['default'].func,
    matchField: _propTypes['default'].string,
    onChangeMatchField: _propTypes['default'].func,
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
StepOne.defaultProps = {
    schemaFields: [],
    actionOption: '',
    onChangeAction: function onChangeAction() {},
    matchField: '',
    onChangeMatchField: function onChangeMatchField() {},
    borderRadius: 'rounded',
};
