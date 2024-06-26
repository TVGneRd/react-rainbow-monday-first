export default function isChecked(_ref) {
  var inputValue = _ref.inputValue,
      value = _ref.value,
      defaultValue = _ref.defaultValue;

  if (value) {
    return inputValue === value;
  }

  if (defaultValue) {
    return inputValue === defaultValue;
  }

  return inputValue === 'AM';
}