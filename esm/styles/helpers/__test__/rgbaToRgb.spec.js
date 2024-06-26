import { rgbaToRgb } from '../color';
describe('rgbaToRgb', function () {
  var color = {
    rgb: 'rgb(1, 182, 245)',
    rgba: 'rgba(1, 182, 245, 0.3)'
  };
  var EMPTY_STRING = '';
  it('should return the right value in rgb format', function () {
    expect(rgbaToRgb(color.rgba)).toBe(color.rgb);
  });
  it('should return an empty string when wrong color is passed', function () {
    ['#f00000000', '#f0', 'f00000'].forEach(function (value) {
      expect(rgbaToRgb(value)).toBe(EMPTY_STRING);
    });
  });
});