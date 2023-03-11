'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _react = _interopRequireDefault(require('react'));

var _server = _interopRequireDefault(require('react-dom/server'));

var _axe = _interopRequireDefault(require('../../../../axe'));

var _index = _interopRequireDefault(require('../index'));

var _index2 = _interopRequireDefault(require('../../ButtonOption/index'));

describe('<ButtonGroupPicker />', function() {
    it(
        'should be accessible when label is passed',
        (0, _asyncToGenerator2['default'])(
            _regenerator['default'].mark(function _callee() {
                var html, results;
                return _regenerator['default'].wrap(function _callee$(_context) {
                    while (1) {
                        switch ((_context.prev = _context.next)) {
                            case 0:
                                expect.assertions(1);
                                html = _server['default'].renderToString(
                                    _react['default'].createElement(
                                        _index['default'],
                                        {
                                            label: 'button text',
                                        },
                                        _react['default'].createElement(_index2['default'], {
                                            label: 'Left',
                                            name: 'left',
                                            disabled: true,
                                        }),
                                        _react['default'].createElement(_index2['default'], {
                                            label: 'Center',
                                            name: 'center',
                                        }),
                                        _react['default'].createElement(_index2['default'], {
                                            label: 'Right',
                                            name: 'right',
                                        }),
                                    ),
                                );
                                _context.next = 4;
                                return (0, _axe['default'])(html);

                            case 4:
                                results = _context.sent;
                                expect(results).toHaveNoViolations();

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee);
            }),
        ),
    );
});
