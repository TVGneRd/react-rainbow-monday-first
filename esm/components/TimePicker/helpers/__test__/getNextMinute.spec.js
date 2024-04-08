import getNextMinute from '../getNextMinute';
describe('getNextMinute', function () {
  it('should return the string "0" when any value is passed', function () {
    expect(getNextMinute()).toBe('0');
  });
  it('should return the string "0" when value passed converted to Number is equal to 59', function () {
    var values = ['59', 59];
    values.forEach(function (value) {
      return expect(getNextMinute(value)).toBe('0');
    });
  });
  it('should return the string of the value passed increased by 1 when value passed converted to Number is different to 59', function () {
    var values = ['0', '11', '22', '30', '44', 9, 21, 12, 38, 58];
    var expects = ['1', '12', '23', '31', '45', '10', '22', '13', '39', '59'];
    values.forEach(function (value, index) {
      return expect(getNextMinute(value)).toBe(expects[index]);
    });
  });
});