import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { mount } from 'enzyme';
import MonthlyCalendar from '..';
import ButtonIcon from '../../ButtonIcon';
describe('MonthlyCalendar', function () {
  it('should render the component when pass falsy values', function () {
    var values = ['', undefined, null, 0];
    values.forEach(function (value) {
      var component = mount(React.createElement(MonthlyCalendar, {
        currentMonth: value
      }));
      expect(component.exists()).toBe(true);
    });
  });
  it('should render the right month', function () {
    var value = new Date('04/24/2019');
    var component = mount(React.createElement(MonthlyCalendar, {
      currentMonth: value
    }));
    expect(component.find('h3[data-id="month"]').text()).toBe('April');
  });
  it('should set to disable the prev month button when minDate is greater than prev month date', function () {
    var value = new Date('04/24/2019');
    var minDate = new Date('04/01/2019');
    var component = mount(React.createElement(MonthlyCalendar, {
      currentMonth: value,
      minDate: minDate
    }));
    var prevMonthButton = component.find(ButtonIcon).at(0);
    expect(prevMonthButton.prop('disabled')).toBe(true);
  });
  it('should set to disable the next month button when maxDate is less than next month date', function () {
    var value = new Date('04/24/2019');
    var maxDate = new Date('04/30/2019');
    var component = mount(React.createElement(MonthlyCalendar, {
      currentMonth: value,
      maxDate: maxDate
    }));
    var prevMonthButton = component.find(ButtonIcon).at(1);
    expect(prevMonthButton.prop('disabled')).toBe(true);
  });
  it('should render the right month when value is updated', function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(done) {
      var value, component;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expect.assertions(1);
              value = new Date('04/24/2019');
              component = mount(React.createElement(MonthlyCalendar, {
                currentMonth: value
              }));
              component.setProps({
                currentMonth: new Date('10/24/2019')
              });
              setTimeout(function () {
                expect(component.find('h3[data-id="month"]').text()).toBe('October');
                done();
              }, 300);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  it('should fire onMonthChange when the prev month button is clicked', function () {
    var month = new Date('04/24/2019');
    var prevMonth = new Date('03/01/2019 00:00:00:000');
    var onMonthChangeMockFn = jest.fn();
    var component = mount(React.createElement(MonthlyCalendar, {
      currentMonth: month,
      onMonthChange: onMonthChangeMockFn
    }));
    var prevMonthButton = component.find(ButtonIcon).at(0);
    prevMonthButton.simulate('click');
    expect(onMonthChangeMockFn).toHaveBeenCalledWith({
      month: prevMonth
    });
  });
  it('should fire onMonthChange with right params when the next month button is clicked', function () {
    var month = new Date('04/24/2019');
    var nextMonth = new Date('05/01/2019 00:00:00:000');
    var onMonthChangeMockFn = jest.fn();
    var component = mount(React.createElement(MonthlyCalendar, {
      currentMonth: month,
      onMonthChange: onMonthChangeMockFn
    }));
    var nextMonthButton = component.find(ButtonIcon).at(1);
    nextMonthButton.simulate('click');
    expect(onMonthChangeMockFn).toHaveBeenCalledWith({
      month: nextMonth
    });
  });
  it('should fire onMonthChange when the year is changed', function () {
    var currentMonth = new Date('04/24/2019');
    var newMonth = new Date('04/01/2022 00:00:00:000');
    var onMonthChangeMockFn = jest.fn();
    var component = mount(React.createElement(MonthlyCalendar, {
      currentMonth: currentMonth,
      onMonthChange: onMonthChangeMockFn
    }));
    var select = component.find('Select');
    expect(select.prop('value')).toBe(2019);
    component.find('select').simulate('change', {
      target: {
        value: 2022
      }
    });
    expect(onMonthChangeMockFn).toHaveBeenCalledWith({
      month: newMonth
    });
  });
  it('should call dateComponent on every day of the month', function () {
    var currentMonth = new Date('04/24/2019');
    var dateComponentMock = jest.fn(function () {});
    mount(React.createElement(MonthlyCalendar, {
      currentMonth: currentMonth,
      dateComponent: dateComponentMock
    }));
    expect(dateComponentMock).toHaveBeenCalledTimes(30);
  });
});