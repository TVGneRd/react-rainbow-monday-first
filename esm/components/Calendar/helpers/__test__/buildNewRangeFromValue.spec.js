import buildNewRangeFromValue from '../buildNewRangeFromValue';
describe('buildNewRangeFromValue', function () {
  it('should return array with single date', function () {
    var value = new Date();
    var ranges = [undefined, null, []];
    ranges.forEach(function (range) {
      expect(buildNewRangeFromValue(value, range)).toEqual({
        range: [value]
      });
    });
  });
  it('should return array with two dates', function () {
    var date1 = new Date(2019, 2, 1);
    var date2 = new Date(2019, 21, 1, 23, 59, 59, 999);
    var range = [date1];
    expect(buildNewRangeFromValue(date2, range)).toEqual({
      range: [date1, date2]
    });
  });
  it('should return array with single date equal to value when value is outside range', function () {
    var date1 = new Date(2019, 0, 2);
    var date2 = new Date(2019, 0, 21, 23, 59, 59, 999);
    var date3 = new Date(2019, 0, 15);
    var range = [date1, date2];
    expect(buildNewRangeFromValue(date3, range)).toEqual({
      range: [date3]
    });
  });
  it('should return array with single date equal to value when only range start is specified and value is before', function () {
    var date1 = new Date(2019, 0, 2);
    var date3 = new Date(2019, 0, 15);
    var range = [date3];
    expect(buildNewRangeFromValue(date1, range)).toEqual({
      range: [date1]
    });
  });
});