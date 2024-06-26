import React from 'react';
import { mount, shallow } from 'enzyme';
import PreviewTable from '../previewTable';
import { StyledTable } from '../styled/container';
var data = [{
  First_Name: 'John',
  Last_Name: 'Doe'
}, {
  First_Name: 'Marie',
  Last_Name: 'Sun'
}, {
  First_Name: 'Jane',
  Last_Name: 'Doe'
}];
var columns = ['First_Name', 'Last_Name'];
describe('<PreviewTable />', function () {
  it('should render a spinner when isLoading is passed', function () {
    var component = mount(React.createElement(PreviewTable, {
      data: data,
      columns: columns,
      isLoading: true
    }));
    expect(component.find('Spinner').exists()).toBe(true);
  });
  it('should render a table when preview isLoading is not passed', function () {
    var component = shallow(React.createElement(PreviewTable, {
      data: data,
      columns: columns,
      isLoading: false
    }));
    expect(component.find(StyledTable).exists()).toBe(true);
  });
  it('should match columns length', function () {
    var component = shallow(React.createElement(PreviewTable, {
      data: data,
      columns: columns,
      isLoading: false
    }));
    var loopedColumns = component.find('Column');
    expect(loopedColumns.length).toBe(2);
  });
});