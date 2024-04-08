import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export default function getValidatedData(_ref) {
  var validateRecordCallback = _ref.validateRecordCallback,
      dataToValidate = _ref.dataToValidate;
  return dataToValidate.reduce(function (acc, record) {
    var errors = validateRecordCallback(record);

    if (Object.keys(errors).length > 0) {
      var recordWithErrors = _objectSpread(_objectSpread({}, record), {}, {
        errors: errors
      });

      acc.invalidRecords.push(recordWithErrors);
    } else {
      acc.validRecords.push(record);
    }

    return acc;
  }, {
    validRecords: [],
    invalidRecords: []
  });
}