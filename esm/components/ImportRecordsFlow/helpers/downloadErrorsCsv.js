import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                  _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
    }
    return target;
}

var getErrors = function getErrors(errors) {
    return Object.entries(errors).reduce(function(acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return ''
            .concat(acc, ' ')
            .concat(key, ': ')
            .concat(value, '.');
    }, '');
};

export default function downloadErrorsCSV(_ref3) {
    var invalidRecords = _ref3.invalidRecords;
    var headers = Object.keys(invalidRecords[0]).concat('\n');
    var csvRows = invalidRecords.map(function(record) {
        var errors = record.errors;
        var errorsString = getErrors(errors);

        var recordWithErrors = _objectSpread(
            _objectSpread({}, record),
            {},
            {
                errors: errorsString,
            },
        );

        return Object.values(recordWithErrors)
            .join(',')
            .concat('\n');
    });
    var csvContent = 'data:text/csv;charset=utf-8,'.concat(headers).concat(csvRows.join(''));
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'invalid-records.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
