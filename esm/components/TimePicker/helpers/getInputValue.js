export default function getInputValue(value, placeholder) {
  var hour24 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!value && placeholder) {
    return '';
  }

  if (hour24) return value || '--:--';
  return value || '--:-- --';
}