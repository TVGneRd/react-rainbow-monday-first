"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _container = require("../styled/container");

var _ = _interopRequireDefault(require(".."));

describe('<StepTwo />', function () {
  it('should show preview if file has been selected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      hasFileSelected: true
    }));
    expect(component.find('Preview').exists()).toBe(true);
  });
  it('should show upload manager if file has not been selected', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      hasFieldSelected: false
    }));
    expect(component.find('UploadFileButton').exists()).toBe(true);
  });
  it('should show default upload presentation on load', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    var firstRenderIf = component.find('RenderIf').at(0);
    var secondRenderIf = component.find('RenderIf').at(1);
    expect(firstRenderIf.prop('isTrue')).toBe(false);
    expect(secondRenderIf.prop('isTrue')).toBe(true);
  });
  it('should hide the draggable upload presentation on load', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    var renderIfBlock = component.find('RenderIf').at(0);
    expect(renderIfBlock.prop('isTrue')).toBe(false);
  });
  it('should render the right content when drag over', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.find(_container.StyledContainer).simulate('dragOver');
    var firstRenderIf = component.find('RenderIf').at(0);
    var secondRenderIf = component.find('RenderIf').at(1);
    expect(firstRenderIf.prop('isTrue')).toBe(true);
    expect(secondRenderIf.prop('isTrue')).toBe(false);
  });
  it('should call stopPropagation and preventDefault when drag over', function () {
    var event = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn()
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.find(_container.StyledContainer).simulate('dragOver', event);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
  it('should call stopPropagation and preventDefault when drag enter', function () {
    var event = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn()
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.find(_container.StyledContainer).simulate('dragEnter', event);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
  it('should render the right content when drag over and then drag leave', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.find(_container.StyledContainer).simulate('dragOver');
    component.find(_container.StyledContainer).simulate('dragLeave');
    var firstRenderIf = component.find('RenderIf').at(0);
    var secondRenderIf = component.find('RenderIf').at(1);
    expect(firstRenderIf.prop('isTrue')).toBe(false);
    expect(secondRenderIf.prop('isTrue')).toBe(true);
  });
  it('should have draggable prop for the upload container', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    expect(component.find(_container.StyledContainer).prop('draggable')).toBe(true);
  });
  it('should call preventDefault when file is dropped', function () {
    var event = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn(),
      dataTransfer: {
        files: [{
          type: 'text/csv'
        }]
      }
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.find(_container.StyledContainer).simulate('drop', event);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
  it('should set isDragOver to false on drop file', function () {
    var event = {
      dataTransfer: {
        files: [{
          type: 'text/csv'
        }]
      }
    };
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    component.find(_container.StyledContainer).simulate('drop', event);
    var firstRenderIf = component.find('RenderIf').at(0);
    var secondRenderIf = component.find('RenderIf').at(1);
    expect(firstRenderIf.prop('isTrue')).toBe(false);
    expect(secondRenderIf.prop('isTrue')).toBe(true);
  });
  it('should call onProcessFile if one file was added and has the right type', function () {
    var event = {
      dataTransfer: {
        files: [{
          type: 'text/csv'
        }]
      }
    };
    var onProcessFileFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onProcessFile: onProcessFileFn
    }));
    component.find(_container.StyledContainer).simulate('drop', event);
    expect(onProcessFileFn).toHaveBeenCalledTimes(1);
  });
  it('should not call onProcessFile if more than one file was added', function () {
    var event = {
      dataTransfer: {
        files: [{
          type: 'text/csv'
        }, {
          type: 'text/csv'
        }, {
          type: 'text/csv'
        }]
      }
    };
    var onProcessFileFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onProcessFile: onProcessFileFn
    }));
    component.find(_container.StyledContainer).simulate('drop', event);
    expect(onProcessFileFn).not.toHaveBeenCalled();
  });
  it('should not call onProcessFile if file type is not text/csv', function () {
    var event = {
      dataTransfer: {
        files: [{
          type: 'text/html'
        }]
      }
    };
    var onProcessFileFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onProcessFile: onProcessFileFn
    }));
    component.find(_container.StyledContainer).simulate('drop', event);
    expect(onProcessFileFn).not.toHaveBeenCalled();
  });
  it('should call onProcessFile with the right data', function () {
    var event = {
      dataTransfer: {
        files: [{
          type: 'text/csv'
        }]
      }
    };
    var onProcessFileFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onProcessFile: onProcessFileFn
    }));
    component.find(_container.StyledContainer).simulate('drop', event);
    expect(onProcessFileFn).toHaveBeenCalledWith({
      type: 'text/csv'
    });
  });
});