import React from 'react';
import { shallow } from 'enzyme';
import StepFour from '..';
import Column from '../../../Column';
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
        var component = shallow(React.createElement(StepFour, props));
        expect(component.find(Column).length).toBe(2);
    });
});
