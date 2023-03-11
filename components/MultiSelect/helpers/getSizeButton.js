'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var sizesMap = {
    small: 'x-small',
    medium: 'small',
    large: 'medium',
};

var getSizeButton = function getSizeButton(size) {
    return sizesMap[size] || sizesMap.medium;
};

var _default = getSizeButton;
exports['default'] = _default;
