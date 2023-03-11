'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _react = _interopRequireDefault(require('react'));

var _react2 = require('@testing-library/react');

var _enzyme = require('enzyme');

var _ = _interopRequireDefault(require('..'));

var _getAssignFieldsData = _interopRequireDefault(require('../../helpers/getAssignFieldsData'));

jest.mock('../../helpers/getAssignFieldsData', function() {
    return jest.fn(function() {
        return [
            {
                required: true,
                fileField: undefined,
                databaseField: 'name',
            },
            {
                required: false,
                fileField: undefined,
                databaseField: 'age',
            },
        ];
    });
});
var baseParams = {
    data: [
        {
            Name: 'John',
            Age: 25,
        },
        {
            Name: 'Marie',
            Age: 30,
        },
    ],
    attributes: {
        name: {
            required: true,
        },
        age: {},
    },
    columns: ['Name', 'Age'],
    fieldsMap: {
        name: 'Name',
        age: 'Age',
    },
};
describe('<StepThree />', function() {
    it('should have the assign field modal closed by default', function() {
        var _render = (0, _react2.render)(
                _react['default'].createElement(_['default'], baseParams),
            ),
            queryByRole = _render.queryByRole;

        expect(queryByRole('dialog')).toBeNull();
    });
    it('should pass params to modal', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], baseParams),
        );
        expect(component.find('AssignFieldModal').props()).toEqual(
            expect.objectContaining({
                data: [
                    {
                        Name: 'John',
                        Age: 25,
                    },
                    {
                        Name: 'Marie',
                        Age: 30,
                    },
                ],
                attributes: {
                    name: {
                        required: true,
                    },
                    age: {},
                },
                columns: ['Name', 'Age'],
                fieldsMap: {
                    name: 'Name',
                    age: 'Age',
                },
            }),
        );
    });
    it('should call getAssignFieldsData with the right data', function() {
        (0, _enzyme.mount)(
            _react['default'].createElement(
                _['default'],
                (0, _extends2['default'])({}, baseParams, {
                    matchField: '',
                }),
            ),
        );
        expect(_getAssignFieldsData['default']).toHaveBeenCalledWith({
            fieldsMap: {
                name: 'Name',
                age: 'Age',
            },
            attributes: {
                name: {
                    required: true,
                },
                age: {},
            },
            matchField: '',
        });
    });
    it('should pass only the first three elements of data prop to AssignFieldModal', function() {
        baseParams.data = [
            {
                First_Name: 'John',
                Last_Name: 'Doe',
                Age: 27,
            },
            {
                First_Name: 'Marie',
                Last_Name: 'Doe',
                Age: 28,
            },
            {
                First_Name: 'Sophia',
                Last_Name: 'Doe',
                Age: 29,
            },
            {
                First_Name: 'Joseph',
                Last_Name: 'Doe',
                Age: 30,
            },
        ];
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], baseParams),
        );
        expect(component.find('AssignFieldModal').prop('data')).toEqual([
            {
                First_Name: 'John',
                Last_Name: 'Doe',
                Age: 27,
            },
            {
                First_Name: 'Marie',
                Last_Name: 'Doe',
                Age: 28,
            },
            {
                First_Name: 'Sophia',
                Last_Name: 'Doe',
                Age: 29,
            },
        ]);
    });
    it('should pass the right data to the Table component', function() {
        var _render2 = (0, _react2.render)(
                _react['default'].createElement(_['default'], baseParams),
            ),
            getByRole = _render2.getByRole;

        expect(
            getByRole('row', {
                name: 'required name Not assigned yet',
            }),
        ).toBeVisible();
        expect(
            getByRole('row', {
                name: 'age Not assigned yet',
            }),
        ).toBeVisible();
    });
    it('should open the modal when a column cell is clicked', function() {
        var _render3 = (0, _react2.render)(
                _react['default'].createElement(_['default'], baseParams),
            ),
            getByRole = _render3.getByRole,
            getAllByRole = _render3.getAllByRole;

        _react2.fireEvent.click(getAllByRole('button')[0]);

        expect(getByRole('dialog')).toBeVisible();
    });
    it('should close AssignFieldModal when onRequestClose prop is called', function() {
        var _render4 = (0, _react2.render)(
                _react['default'].createElement(_['default'], baseParams),
            ),
            getByRole = _render4.getByRole,
            getAllByRole = _render4.getAllByRole,
            queryByRole = _render4.queryByRole;

        _react2.fireEvent.click(getAllByRole('button')[0]);

        expect(getByRole('dialog')).toBeVisible();

        _react2.fireEvent.click(
            getByRole('button', {
                name: 'Cancel',
            }),
        );

        expect(queryByRole('dialog')).toBeNull();
    });
    it('should pass the right databaseFieldToAssign prop to the modal when a column cell is clicked', function() {
        var _render5 = (0, _react2.render)(
                _react['default'].createElement(_['default'], baseParams),
            ),
            getByRole = _render5.getByRole,
            getAllByRole = _render5.getAllByRole;

        _react2.fireEvent.click(getAllByRole('button')[1]);

        expect(getByRole('dialog')).toBeVisible();
        expect(
            getByRole('heading', {
                name: 'Assign to the field: age',
            }),
        ).toBeVisible();
    });
});
