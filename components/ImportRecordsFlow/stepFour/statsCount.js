'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = StatsCount;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _statsCardDescription = _interopRequireDefault(require('./styled/statsCardDescription'));

var _xCircle = _interopRequireDefault(require('../icons/xCircle'));

var _checkCircle = _interopRequireDefault(require('../icons/checkCircle'));

var _RenderIf = _interopRequireDefault(require('../../RenderIf'));

var _getPluralization = _interopRequireDefault(require('../helpers/getPluralization'));

var getCardDescription = function getCardDescription(type, amount) {
    var plural = type === 'success' ? '' : (0, _getPluralization['default'])(amount);
    return ''
        .concat(amount, ' ')
        .concat(type === 'success' ? 'Successful' : 'Error')
        .concat(plural);
};

function StatsCount(props) {
    var type = props.type,
        amount = props.amount;
    var description = getCardDescription(type, amount);
    return _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: type === 'success',
            },
            _react['default'].createElement(_checkCircle['default'], null),
        ),
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: type === 'error',
            },
            _react['default'].createElement(_xCircle['default'], null),
        ),
        _react['default'].createElement(_statsCardDescription['default'], null, description),
    );
}

StatsCount.propTypes = {
    type: _propTypes['default'].oneOf(['success', 'error']),
    amount: _propTypes['default'].number,
};
StatsCount.defaultProps = {
    type: 'success',
    amount: 0,
};
