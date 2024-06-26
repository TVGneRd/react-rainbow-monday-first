import getHexString from '../getHexString';
describe('getHexString', function () {
  it('should prepend a # to the string', function () {
    var value = 'cccccc';
    expect(getHexString(value)).toBe('#cccccc');
  });
  it('should return the same string', function () {
    var value = '#ccc';
    expect(getHexString(value)).toBe('#ccc');
  });
  it('should return an empty string when value is invalid', function () {
    var values = [false, undefined, [], {}, -333];
    values.forEach(function (val) {
      expect(getHexString(val)).toBe('');
    });
  });
});