import React from 'react';
import { mount } from 'enzyme';
import CSVCell from '../csvCell';
import ButtonIcon from '../../../ButtonIcon';
describe('<CSVCell />', function () {
  it('should return the same value if value is sent as param', function () {
    var returnValue = mount(React.createElement(CSVCell, {
      value: "test-value"
    }));
    expect(returnValue.text()).toBe('test-value');
  });
  it('should have assign field content when no value is sent as param', function () {
    var component = mount(React.createElement(CSVCell, null));
    expect(component.text()).toBe('Not assigned yet');
  });
  it('should trigger click event using database param', function () {
    var onClickFn = jest.fn();
    var row = {
      databaseField: 'name'
    };
    var component = mount(React.createElement(CSVCell, {
      onClick: onClickFn,
      row: row
    }));
    component.find(ButtonIcon).simulate('click');
    expect(onClickFn).toHaveBeenCalledWith(row.databaseField);
  });
});