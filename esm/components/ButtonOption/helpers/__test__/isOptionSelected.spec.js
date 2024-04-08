import isOptionSelected from '../isOptionSelected';
describe('isOptionSelected', function () {
  it('should return true when name is present in the array of values', function () {
    var values = ['option1', 'option2'];
    var name = 'option2';
    expect(isOptionSelected(values, name)).toBe(true);
  });
  it('should return false when name is not present in the array of values', function () {
    var values = ['option1', 'option2'];
    var name = 'option3';
    expect(isOptionSelected(values, name)).toBe(false);
  });
  it('should return true when values is a string and it is equal to name', function () {
    var values = 'option2';
    var name = 'option2';
    expect(isOptionSelected(values, name)).toBe(true);
  });
  it('should return false when values is a string and it is different to name', function () {
    var values = 'option1';
    var name = 'option2';
    expect(isOptionSelected(values, name)).toBe(false);
  });
  it('should return false when the value passed is other type than array and string', function () {
    [undefined, null, 12, {}, function () {}].forEach(function (value) {
      expect(isOptionSelected(value, 'option')).toBe(false);
    });
  });
});