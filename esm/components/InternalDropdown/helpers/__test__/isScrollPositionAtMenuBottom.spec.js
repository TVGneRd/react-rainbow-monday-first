import isScrollPositionAtMenuBottom from '../isScrollPositionAtMenuBottom';
describe('isScrollPositionAtMenuBottom', function () {
  it('should return true when scroll position is at bottom', function () {
    var menuRef = {
      scrollHeight: 925,
      scrollTop: 700,
      clientHeight: 225
    };
    expect(isScrollPositionAtMenuBottom(menuRef)).toBe(true);
  });
  it('should return false when scroll position is not at bottom', function () {
    var menuRef = {
      scrollHeight: 925,
      scrollTop: 400,
      clientHeight: 225
    };
    expect(isScrollPositionAtMenuBottom(menuRef)).toBe(false);
  });
});