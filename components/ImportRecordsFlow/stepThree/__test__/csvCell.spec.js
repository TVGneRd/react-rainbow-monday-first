'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _csvCell = _interopRequireDefault(require('../csvCell'));

var _ButtonIcon = _interopRequireDefault(require('../../../ButtonIcon'));

describe('<CSVCell />', function() {
    it('should return the same value if value is sent as param', function() {
        var returnValue = (0, _enzyme.mount)(
            _react['default'].createElement(_csvCell['default'], {
                value: 'test-value',
            }),
        );
        expect(returnValue.text()).toBe('test-value');
    });
    it('should have assign field content when no value is sent as param', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_csvCell['default'], null),
        );
        expect(component.text()).toBe('Not assigned yet');
    });
    it('should trigger click event using database param', function() {
        var onClickFn = jest.fn();
        var row = {
            databaseField: 'name',
        };
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_csvCell['default'], {
                onClick: onClickFn,
                row: row,
            }),
        );
        component.find(_ButtonIcon['default']).simulate('click');
        expect(onClickFn).toHaveBeenCalledWith(row.databaseField);
    });
});
