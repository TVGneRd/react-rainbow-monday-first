'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = StatsCard;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _styledstatsCard = _interopRequireDefault(require('./styled/styledstatsCard'));

var _statsCardContent = _interopRequireDefault(require('./styled/statsCardContent'));

var _statsCardTitle = _interopRequireDefault(require('./styled/statsCardTitle'));

var _icon = _interopRequireDefault(require('./styled/icon'));

var _statsLeftContainer = _interopRequireDefault(require('./styled/statsLeftContainer'));

var _statsCardDescriptionContainer = _interopRequireDefault(
    require('./styled/statsCardDescriptionContainer'),
);

var _statsCount = _interopRequireDefault(require('./statsCount'));

var _downloadErrorsCsv = _interopRequireDefault(require('../helpers/downloadErrorsCsv'));

var _RenderIf = _interopRequireDefault(require('../../RenderIf'));

var _InternalTooltip = _interopRequireDefault(require('../../InternalTooltip'));

var _ButtonIcon = _interopRequireDefault(require('../../ButtonIcon'));

var _useDefaultTooltipConnector = _interopRequireDefault(
    require('../../InternalTooltip/hooks/useDefaultTooltipConnector'),
);

var _downloadCsv = _interopRequireDefault(require('../icons/downloadCsv'));

var _styledTooltipText = _interopRequireDefault(require('./styled/styledTooltipText'));

var _getPluralization = _interopRequireDefault(require('../helpers/getPluralization'));

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

function StatsCard(props) {
    var validRecords = props.validRecords,
        invalidRecords = props.invalidRecords,
        borderRadius = props.borderRadius;
    var invalidCount = invalidRecords.length;
    var validCount = validRecords.length;
    var totalRecords = invalidCount + validCount;
    var titleText = 'Total: '
        .concat(totalRecords, ' record')
        .concat((0, _getPluralization['default'])(totalRecords), ' on your file');

    var onClick = function onClick() {
        (0, _downloadErrorsCsv['default'])({
            invalidRecords: invalidRecords,
        });
    };

    var _triggerRef = (0, _react.useRef)();

    var tooltipRef = (0, _react.useRef)();

    var _useDefaultTooltipCon = (0, _useDefaultTooltipConnector['default'])({
            tooltipRef: tooltipRef,
            triggerRef: function triggerRef() {
                return _triggerRef.current.htmlElementRef;
            },
        }),
        onFocus = _useDefaultTooltipCon.onFocus,
        onBlur = _useDefaultTooltipCon.onBlur,
        onMouseEnter = _useDefaultTooltipCon.onMouseEnter,
        onMouseLeave = _useDefaultTooltipCon.onMouseLeave,
        isVisible = _useDefaultTooltipCon.isVisible;

    return _react['default'].createElement(
        _styledstatsCard['default'],
        {
            borderRadius: borderRadius,
        },
        _react['default'].createElement(_icon['default'], null),
        _react['default'].createElement(
            _statsCardContent['default'],
            null,
            _react['default'].createElement(
                _statsLeftContainer['default'],
                null,
                _react['default'].createElement(_statsCardTitle['default'], null, titleText),
                _react['default'].createElement(
                    _statsCardDescriptionContainer['default'],
                    null,
                    _react['default'].createElement(_statsCount['default'], {
                        type: 'success',
                        amount: validCount,
                    }),
                    _react['default'].createElement(_statsCount['default'], {
                        type: 'error',
                        amount: invalidCount,
                    }),
                ),
            ),
        ),
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: invalidCount > 0,
            },
            _react['default'].createElement(_ButtonIcon['default'], {
                onFocus: onFocus,
                onBlur: onBlur,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onClick: onClick,
                ref: _triggerRef,
                variant: 'base',
                icon: _react['default'].createElement(_downloadCsv['default'], null),
                borderRadius: borderRadius,
            }),
            _react['default'].createElement(
                _InternalTooltip['default'],
                {
                    triggerElementRef: function triggerElementRef() {
                        return _triggerRef.current.htmlElementRef;
                    },
                    isVisible: isVisible,
                    preferredPosition: 'top',
                    ref: tooltipRef,
                },
                _react['default'].createElement(
                    _styledTooltipText['default'],
                    null,
                    'Download a CSV with the errors',
                ),
            ),
        ),
    );
}

StatsCard.propTypes = {
    validRecords: _propTypes['default'].array,
    invalidRecords: _propTypes['default'].array,
    borderRadius: _propTypes['default'].oneOf(['rounded', 'square', 'semi-rounded', 'semi-square']),
};
StatsCard.defaultProps = {
    validRecords: [],
    invalidRecords: [],
    borderRadius: 'rounded',
};
