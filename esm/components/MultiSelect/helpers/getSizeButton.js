var sizesMap = {
    small: 'x-small',
    medium: 'small',
    large: 'medium',
};

var getSizeButton = function getSizeButton(size) {
    return sizesMap[size] || sizesMap.medium;
};

export default getSizeButton;
