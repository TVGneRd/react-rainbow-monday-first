"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _previewTable = _interopRequireDefault(require("../previewTable"));

var _container = require("../styled/container");

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
    var component = (0, _enzyme.mount)(_react["default"].createElement(_previewTable["default"], {
      data: data,
      columns: columns,
      isLoading: true
    }));
    expect(component.find('Spinner').exists()).toBe(true);
  });
  it('should render a table when preview isLoading is not passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_previewTable["default"], {
      data: data,
      columns: columns,
      isLoading: false
    }));
    expect(component.find(_container.StyledTable).exists()).toBe(true);
  });
  it('should match columns length', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_previewTable["default"], {
      data: data,
      columns: columns,
      isLoading: false
    }));
    var loopedColumns = component.find('Column');
    expect(loopedColumns.length).toBe(2);
  });
});