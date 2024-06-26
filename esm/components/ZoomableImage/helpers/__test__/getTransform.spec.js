import getTransform from '../getTransform';
jest.useFakeTimers();
describe('getTransform', function () {
  it('should return the correct transform', function () {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 1024
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 768
    });
    var rect = {
      top: 100,
      left: 100,
      width: 150,
      height: 150
    };
    var expected = {
      translateX: 337,
      translateY: 209,
      scale: 4.352
    };
    expect(getTransform(rect)).toEqual(expected);
  });
});