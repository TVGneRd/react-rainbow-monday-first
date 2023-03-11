'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _ = _interopRequireDefault(require('..'));

var _Column = _interopRequireDefault(require('../../../Column'));

var props = {
    schemaFields: ['name', 'email'],
    data: [
        {
            Name: 'John',
            Email: 'john@gmail.com',
        },
        {
            Name: 'Marie',
            Email: 'marie@gmail.com',
        },
    ],
    fieldsMap: {
        name: 'Name',
        email: 'Email',
    },
    attributes: {
        name: {
            required: true,
        },
        email: {},
    },
};
describe('<StepFour />', function() {
    it('should render the right amount of columns', function() {
        var component = (0, _enzyme.shallow)(_react['default'].createElement(_['default'], props));
        expect(component.find(_Column['default']).length).toBe(2);
    });
});
