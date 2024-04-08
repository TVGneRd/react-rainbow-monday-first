"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgIran(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("defs", null, _react["default"].createElement("circle", {
    id: "iran_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "iran_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#iran_svg__a"
  })), _react["default"].createElement("g", {
    fillRule: "nonzero",
    mask: "url(#iran_svg__b)"
  }, _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M-2 9.996h36v12.008H-2z"
  }), _react["default"].createElement("path", {
    d: "M26.125-2H5.875A7.875 7.875 0 00-2 5.875v4.133h36V5.875A7.875 7.875 0 0026.125-2z",
    fill: "#73AF00"
  }), _react["default"].createElement("path", {
    d: "M-2 26.125A7.875 7.875 0 005.875 34h20.25A7.875 7.875 0 0034 26.125v-4.133H-2v4.133z",
    fill: "#FF4B55"
  }), _react["default"].createElement("g", {
    fill: "#F5F5F5"
  }, _react["default"].createElement("path", {
    d: "M-1.355 9.211v-.008a.15.15 0 00-.15-.15h-.314a.15.15 0 01-.15-.149v-.016a.15.15 0 01.15-.149h.618a.15.15 0 01.149.15v.322c0 .083.067.15.149.15H.34a.15.15 0 00.15-.15V7.944a.15.15 0 00-.15-.149H.332a.15.15 0 00-.15.15v.96a.15.15 0 01-.149.149H.021a.15.15 0 01-.15-.15v-.96a.15.15 0 00-.148-.149h-.005a.15.15 0 00-.149.15v.96a.15.15 0 01-.149.149h-.012a.15.15 0 01-.15-.15v-.96a.15.15 0 00-.149-.149h-.012a.15.15 0 00-.15.15v.33a.15.15 0 01-.148.15H-2v.935h.496a.15.15 0 00.149-.149zM6.482 7.795h-.008a.15.15 0 00-.15.15v.96a.15.15 0 01-.148.149H6.17a.15.15 0 01-.149-.15v-.96a.15.15 0 00-.15-.149H5.86a.15.15 0 00-.149.15v.96a.15.15 0 01-.149.149H5.55a.15.15 0 01-.15-.15v-.96a.15.15 0 00-.148-.149h-.009a.15.15 0 00-.15.15v.33a.15.15 0 01-.148.15h-.929a.15.15 0 00-.149.149v.637c0 .083.067.15.15.15h.625a.15.15 0 00.15-.15v-.008a.15.15 0 00-.15-.15h-.32a.15.15 0 01-.148-.149v-.016a.15.15 0 01.149-.149h.622a.15.15 0 01.149.15v.322c0 .083.067.15.149.15h1.24a.15.15 0 00.148-.15V7.944a.149.149 0 00-.149-.149zM1.666 9.554a.243.243 0 00.243-.243v-.014a.243.243 0 00-.243-.243h-.013a.243.243 0 00-.244.243v.014c0 .134.11.243.244.243h.013z"
  }), _react["default"].createElement("path", {
    d: "M.945 8.295h3.697c.082 0 .15-.106.15-.237v-.026c0-.13-.068-.237-.15-.237H.945c-.082 0-.149.107-.149.237v.026c0 .131.067.237.15.237zM3.411 8.424H2.79a.15.15 0 00-.149.15v.016c0 .082.067.15.15.15h.315a.15.15 0 01.149.148v.016a.15.15 0 01-.15.15H2.48a.15.15 0 01-.15-.15v-.33a.15.15 0 00-.148-.15H.945a.15.15 0 00-.149.15v.637c0 .083.067.15.15.15h.008a.15.15 0 00.149-.15v-.323a.15.15 0 01.149-.149h.622a.15.15 0 01.149.15v.322c0 .083.067.15.15.15H3.41a.15.15 0 00.15-.15v-.637a.15.15 0 00-.15-.15zM7.808 9.554a.243.243 0 00.244-.243v-.014a.243.243 0 00-.244-.243h-.013a.243.243 0 00-.243.243v.014c0 .134.109.243.243.243h.013zM7.087 8.295h3.693c.083 0 .15-.106.15-.237v-.026c0-.13-.067-.237-.15-.237H7.087c-.082 0-.149.107-.149.237v.026c0 .131.067.237.15.237z"
  }), _react["default"].createElement("path", {
    d: "M12.624 7.795h-.008a.15.15 0 00-.15.15v.96a.15.15 0 01-.148.149h-.009a.15.15 0 01-.149-.15v-.96a.15.15 0 00-.149-.149h-.012a.15.15 0 00-.15.15v.96a.15.15 0 01-.149.149h-.004a.15.15 0 01-.15-.15v-.96a.15.15 0 00-.148-.149h-.009a.15.15 0 00-.149.15v.33a.15.15 0 01-.15.15h-.936a.15.15 0 00-.149.149v.637c0 .083.067.15.15.15h.625a.15.15 0 00.15-.15v-.008a.15.15 0 00-.15-.15h-.315a.15.15 0 01-.149-.149v-.016a.15.15 0 01.15-.149h.625a.15.15 0 01.15.15v.322c0 .083.066.15.148.15h1.236a.15.15 0 00.149-.15V7.944a.15.15 0 00-.15-.149zM9.553 8.424h-.626a.15.15 0 00-.149.15v.016c0 .082.067.15.15.15h.315a.15.15 0 01.149.148v.016a.15.15 0 01-.15.15h-.621a.15.15 0 01-.15-.15v-.33a.15.15 0 00-.148-.15H7.087a.15.15 0 00-.149.15v.637c0 .083.067.15.15.15h.008a.15.15 0 00.149-.15v-.323a.15.15 0 01.149-.149h.622a.15.15 0 01.149.15v.322c0 .083.067.15.15.15h1.238a.15.15 0 00.15-.15v-.637a.15.15 0 00-.15-.15zM18.767 7.795h-.009a.15.15 0 00-.15.15v.96a.15.15 0 01-.148.149h-.009a.15.15 0 01-.149-.15v-.96a.15.15 0 00-.149-.149h-.008a.15.15 0 00-.15.15v.96a.15.15 0 01-.148.149h-.009a.15.15 0 01-.15-.15v-.96a.15.15 0 00-.148-.149h-.009a.15.15 0 00-.149.15v.33a.15.15 0 01-.149.15H16.3a.15.15 0 00-.149.149v.637c0 .083.067.15.15.15h.625a.15.15 0 00.15-.15v-.008a.15.15 0 00-.15-.15h-.319a.15.15 0 01-.149-.149v-.016a.15.15 0 01.15-.149h.625a.15.15 0 01.15.15v.322c0 .083.066.15.148.15h1.236a.15.15 0 00.149-.15V7.944a.15.15 0 00-.15-.149zM15.696 8.424h-.626a.15.15 0 00-.15.15v.016c0 .082.067.15.15.15h.319a.15.15 0 01.149.148v.016a.15.15 0 01-.15.15h-.621a.15.15 0 01-.15-.15v-.33a.15.15 0 00-.148-.15h-1.24a.15.15 0 00-.149.15v.637c0 .083.067.15.15.15h.008a.15.15 0 00.149-.15v-.323a.15.15 0 01.15-.149h.621a.15.15 0 01.15.15v.322c0 .083.066.15.148.15h1.24a.15.15 0 00.149-.15v-.637a.15.15 0 00-.15-.15z"
  }), _react["default"].createElement("path", {
    d: "M13.23 8.295h3.696c.083 0 .15-.106.15-.237v-.026c0-.13-.067-.237-.15-.237H13.23c-.082 0-.149.107-.149.237v.026c0 .131.067.237.15.237zM13.951 9.554a.245.245 0 00.247-.243v-.014a.245.245 0 00-.247-.243h-.007a.245.245 0 00-.246.243v.014c0 .134.11.243.246.243h.007zM21.838 8.424h-.622a.15.15 0 00-.15.15v.016c0 .082.067.15.15.15h.311a.15.15 0 01.15.148v.016a.15.15 0 01-.15.15h-.618a.15.15 0 01-.15-.15v-.33a.15.15 0 00-.148-.15h-1.24a.15.15 0 00-.149.15v.637c0 .083.067.15.15.15h.008a.15.15 0 00.15-.15v-.323a.15.15 0 01.148-.149h.622a.15.15 0 01.15.15v.322c0 .083.066.15.149.15h1.239a.15.15 0 00.149-.15v-.637a.15.15 0 00-.15-.15zM24.909 7.795H24.9a.15.15 0 00-.149.15v.96a.15.15 0 01-.149.149h-.008a.15.15 0 01-.15-.15v-.96a.15.15 0 00-.149-.149h-.008a.15.15 0 00-.15.15v.96a.15.15 0 01-.149.149h-.008a.15.15 0 01-.149-.15v-.96a.15.15 0 00-.15-.149h-.008a.15.15 0 00-.149.15v.33a.15.15 0 01-.149.15h-.928a.15.15 0 00-.15.149v.637c0 .083.067.15.15.15h.621a.15.15 0 00.15-.15v-.008a.15.15 0 00-.15-.15h-.319a.15.15 0 01-.149-.149v-.016a.15.15 0 01.15-.149h.625a.15.15 0 01.15.15v.322c0 .083.066.15.148.15h1.236a.15.15 0 00.149-.15V7.944a.149.149 0 00-.15-.149z"
  }), _react["default"].createElement("path", {
    d: "M20.094 9.554a.245.245 0 00.246-.243v-.014a.245.245 0 00-.246-.243h-.008a.245.245 0 00-.246.243v.014c0 .134.11.243.246.243h.008zM19.372 8.295h3.697c.082 0 .149-.106.149-.237v-.026c0-.13-.067-.237-.15-.237h-3.696c-.083 0-.15.107-.15.237v.026c0 .131.067.237.15.237zM26.238 9.554c.133 0 .24-.11.24-.243v-.014a.242.242 0 00-.24-.243h-.02a.242.242 0 00-.24.243v.014c0 .134.108.243.24.243h.02zM25.514 8.295h3.697c.082 0 .149-.106.149-.237v-.026c0-.13-.067-.237-.15-.237h-3.696c-.083 0-.15.107-.15.237v.026c0 .131.067.237.15.237z"
  }), _react["default"].createElement("path", {
    d: "M31.05 7.795h-.003a.15.15 0 00-.15.15v.96a.15.15 0 01-.149.149h-.012a.15.15 0 01-.15-.15v-.96a.15.15 0 00-.148-.149h-.009a.15.15 0 00-.15.15v.96a.15.15 0 01-.148.149h-.009a.15.15 0 01-.149-.15v-.96a.15.15 0 00-.149-.149h-.008a.15.15 0 00-.15.15v.33a.15.15 0 01-.149.15h-.928a.15.15 0 00-.15.149v.637c0 .083.068.15.15.15h.622a.15.15 0 00.149-.15v-.008a.15.15 0 00-.15-.15h-.31a.15.15 0 01-.15-.149v-.016a.15.15 0 01.15-.149h.617a.15.15 0 01.15.15v.322c0 .083.066.15.149.15h1.235a.15.15 0 00.149-.15V7.944a.15.15 0 00-.15-.149zM27.98 8.424h-.622a.15.15 0 00-.15.15v.016c0 .082.068.15.15.15h.32a.15.15 0 01.148.148v.016a.15.15 0 01-.149.15h-.63a.15.15 0 01-.149-.15v-.33a.15.15 0 00-.149-.15h-1.235a.15.15 0 00-.15.15v.637c0 .083.067.15.15.15h.008a.15.15 0 00.15-.15v-.323a.15.15 0 01.149-.149h.625a.15.15 0 01.15.15v.322c0 .083.066.15.149.15h1.235a.15.15 0 00.15-.15v-.637a.15.15 0 00-.15-.15zM33.355 8.574v.016c0 .082.067.15.15.15h.314a.15.15 0 01.15.148v.016a.15.15 0 01-.15.15h-.625a.15.15 0 01-.15-.15v-.33a.15.15 0 00-.149-.15H31.66a.15.15 0 00-.15.15v.637c0 .083.067.15.15.15h.004a.15.15 0 00.15-.15v-.323a.15.15 0 01.149-.149h.622a.15.15 0 01.149.15v.322c0 .083.066.15.149.15H34v-.937h-.496a.15.15 0 00-.149.15zM31.51 8.032v.026c0 .131.067.237.15.237H34v-.5h-2.34c-.083 0-.15.106-.15.237zM.49 10.163v-.331a.15.15 0 00-.15-.15H-2v.63H.34a.15.15 0 00.15-.15zM3.411 9.683H.945a.15.15 0 00-.149.149v.33c0 .083.067.15.15.15H3.41a.15.15 0 00.15-.15v-.33a.15.15 0 00-.15-.15zM6.482 9.683H4.016a.15.15 0 00-.149.149v.33c0 .083.067.15.15.15h2.465a.15.15 0 00.15-.15v-.33a.15.15 0 00-.15-.15zM9.553 9.683H7.087a.15.15 0 00-.149.149v.33c0 .083.067.15.15.15h2.465a.15.15 0 00.15-.15v-.33a.15.15 0 00-.15-.15zM12.624 9.683h-2.47a.15.15 0 00-.149.149v.33c0 .083.067.15.15.15h2.47a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM15.696 9.683h-2.467a.15.15 0 00-.149.149v.33c0 .083.067.15.15.15h2.466a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM18.767 9.683H16.3a.15.15 0 00-.149.149v.33c0 .083.067.15.15.15h2.466a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM24.909 9.683h-2.462a.15.15 0 00-.15.149v.33c0 .083.067.15.15.15h2.462a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM21.838 9.683H19.37a.15.15 0 00-.149.149v.33c0 .083.067.15.15.15h2.466a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM27.98 9.683h-2.466a.15.15 0 00-.15.149v.33c0 .083.067.15.15.15h2.466a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM31.05 9.683H28.59a.15.15 0 00-.15.149v.33c0 .083.067.15.15.15h2.462a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM31.51 9.832v.33c0 .083.067.15.15.15H34v-.63h-2.34a.15.15 0 00-.15.15zM33.355 22.789v.008c0 .083.067.15.15.15h.314a.15.15 0 01.15.149v.016a.15.15 0 01-.15.149h-.618a.15.15 0 01-.149-.15v-.322a.15.15 0 00-.149-.15H31.66a.15.15 0 00-.15.15v1.267c0 .082.068.149.15.149h.008a.15.15 0 00.15-.15v-.96a.15.15 0 01.149-.149h.012a.15.15 0 01.15.15v.96c0 .082.066.149.148.149h.005a.15.15 0 00.149-.15v-.96a.15.15 0 01.149-.149h.012a.15.15 0 01.15.15v.96c0 .082.066.149.149.149h.012a.15.15 0 00.15-.15v-.33a.15.15 0 01.148-.15H34v-.935h-.496a.15.15 0 00-.149.149zM30.54 23.14a.243.243 0 00.244-.243v-.014a.243.243 0 00-.243-.243h-.014a.243.243 0 00-.243.243v.014c0 .134.109.243.243.243h.014zM28.133 23.426v-.637a.15.15 0 00-.15-.15h-.625a.15.15 0 00-.15.15v.008c0 .083.068.15.15.15h.32a.15.15 0 01.148.149v.016a.15.15 0 01-.149.149h-.622a.15.15 0 01-.149-.15v-.322a.15.15 0 00-.149-.15h-1.24a.15.15 0 00-.148.15v1.267c0 .082.066.149.149.149h.008a.15.15 0 00.15-.15v-.96a.15.15 0 01.148-.149h.005a.15.15 0 01.149.15v.96c0 .082.067.149.15.149h.012a.15.15 0 00.149-.15v-.96a.15.15 0 01.149-.149h.012a.15.15 0 01.15.15v.96c0 .082.066.149.148.149h.009a.15.15 0 00.15-.15v-.33a.15.15 0 01.148-.15h.929a.15.15 0 00.149-.149z"
  }), _react["default"].createElement("path", {
    d: "M31.055 23.89h-3.697c-.082 0-.15.106-.15.237v.026c0 .13.068.237.15.237h3.697c.082 0 .149-.106.149-.237v-.026c0-.13-.067-.237-.15-.237zM31.055 22.64h-.009a.15.15 0 00-.149.149v.323a.15.15 0 01-.149.149h-.622a.15.15 0 01-.149-.15v-.322a.15.15 0 00-.15-.15H28.59a.15.15 0 00-.15.15v.637c0 .083.068.15.15.15h.622a.15.15 0 00.149-.15v-.016a.15.15 0 00-.15-.15h-.315a.15.15 0 01-.149-.148v-.016a.15.15 0 01.15-.15h.625a.15.15 0 01.15.15v.33c0 .083.066.15.149.15h1.235a.15.15 0 00.149-.15v-.637a.15.15 0 00-.15-.15zM21.995 23.426v-.637a.15.15 0 00-.15-.15h-.625a.15.15 0 00-.15.15v.008c0 .083.067.15.15.15h.315a.15.15 0 01.15.149v.016a.15.15 0 01-.15.149h-.626a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.148-.15h-1.235a.15.15 0 00-.15.15v1.267c0 .082.067.149.15.149h.008a.15.15 0 00.15-.15v-.96a.15.15 0 01.148-.149h.009a.15.15 0 01.149.15v.96c0 .082.067.149.149.149h.012a.15.15 0 00.15-.15v-.96a.15.15 0 01.149-.149h.004a.15.15 0 01.15.15v.96c0 .082.066.149.148.149h.009a.15.15 0 00.149-.15v-.33a.15.15 0 01.15-.15h.936a.15.15 0 00.149-.149z"
  }), _react["default"].createElement("path", {
    d: "M24.913 23.89H21.22c-.083 0-.15.106-.15.237v.026c0 .13.067.237.15.237h3.693c.082 0 .149-.106.149-.237v-.026c0-.13-.067-.237-.15-.237zM24.399 23.14a.243.243 0 00.243-.243v-.014a.243.243 0 00-.243-.243h-.014a.243.243 0 00-.243.243v.014c0 .134.109.243.243.243h.014z"
  }), _react["default"].createElement("path", {
    d: "M24.913 22.64h-.009a.15.15 0 00-.149.149v.323a.15.15 0 01-.149.149h-.622a.15.15 0 01-.149-.15v-.322a.15.15 0 00-.15-.15h-1.238a.15.15 0 00-.15.15v.637c0 .083.067.15.15.15h.626a.15.15 0 00.149-.15v-.016a.15.15 0 00-.15-.15h-.315a.15.15 0 01-.149-.148v-.016a.15.15 0 01.15-.15h.621a.15.15 0 01.15.15v.33c0 .083.066.15.148.15h1.236a.15.15 0 00.149-.15v-.637a.15.15 0 00-.15-.15zM15.849 23.426v-.637a.15.15 0 00-.15-.15h-.625a.15.15 0 00-.15.15v.008c0 .083.067.15.15.15h.319a.15.15 0 01.149.149v.016a.15.15 0 01-.15.149h-.625a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.148-.15h-1.236a.15.15 0 00-.149.15v1.267c0 .082.067.149.15.149h.008a.15.15 0 00.15-.15v-.96a.15.15 0 01.148-.149h.009a.15.15 0 01.149.15v.96c0 .082.066.149.149.149h.008a.15.15 0 00.15-.15v-.96a.15.15 0 01.148-.149h.009a.15.15 0 01.15.15v.96c0 .082.066.149.148.149h.009a.15.15 0 00.149-.15v-.33a.15.15 0 01.149-.15h.933a.15.15 0 00.149-.149zM18.253 23.14a.245.245 0 00.247-.243v-.014a.245.245 0 00-.247-.243h-.007a.245.245 0 00-.246.243v.014c0 .134.11.243.246.243h.007z"
  }), _react["default"].createElement("path", {
    d: "M18.77 22.64h-.008a.15.15 0 00-.149.149v.323a.15.15 0 01-.15.149h-.621a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.148-.15h-1.24a.15.15 0 00-.149.15v.637c0 .083.067.15.15.15h.625a.15.15 0 00.15-.15v-.016a.15.15 0 00-.15-.15h-.319a.15.15 0 01-.149-.148v-.016a.15.15 0 01.15-.15h.621a.15.15 0 01.15.15v.33c0 .083.066.15.148.15h1.24a.15.15 0 00.149-.15v-.637a.15.15 0 00-.15-.15zM18.77 23.89h-3.696c-.083 0-.15.106-.15.237v.026c0 .13.067.237.15.237h3.697c.082 0 .149-.106.149-.237v-.026c0-.13-.067-.237-.15-.237zM12.628 22.64h-.008a.15.15 0 00-.15.149v.323a.15.15 0 01-.148.149H11.7a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.149-.15h-1.239a.15.15 0 00-.149.15v.637c0 .083.067.15.15.15h.621a.15.15 0 00.15-.15v-.016a.15.15 0 00-.15-.15h-.311a.15.15 0 01-.15-.148v-.016a.15.15 0 01.15-.15h.618a.15.15 0 01.149.15v.33c0 .083.067.15.149.15h1.24a.15.15 0 00.148-.15v-.637a.149.149 0 00-.149-.15z"
  }), _react["default"].createElement("path", {
    d: "M12.111 23.14a.245.245 0 00.246-.243v-.014a.245.245 0 00-.246-.243h-.007a.245.245 0 00-.247.243v.014c0 .134.11.243.247.243h.007zM12.628 23.89H8.931c-.082 0-.149.106-.149.237v.026c0 .13.067.237.15.237h3.696c.083 0 .15-.106.15-.237v-.026c0-.13-.067-.237-.15-.237z"
  }), _react["default"].createElement("path", {
    d: "M9.702 23.426v-.637a.15.15 0 00-.149-.15h-.621a.15.15 0 00-.15.15v.008c0 .083.067.15.15.15h.319a.15.15 0 01.149.149v.016a.15.15 0 01-.15.149h-.625a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.148-.15H7.09a.15.15 0 00-.149.15v1.267c0 .082.067.149.15.149H7.1a.15.15 0 00.149-.15v-.96a.15.15 0 01.149-.149h.008a.15.15 0 01.15.15v.96c0 .082.066.149.149.149h.008a.15.15 0 00.15-.15v-.96a.15.15 0 01.149-.149h.008a.15.15 0 01.149.15v.96c0 .082.067.149.15.149h.008a.15.15 0 00.149-.15v-.33a.15.15 0 01.149-.15h.928a.15.15 0 00.15-.149zM5.971 23.14c.133 0 .24-.11.24-.243v-.014a.242.242 0 00-.24-.243h-.02a.242.242 0 00-.24.243v.014c0 .134.108.243.24.243h.02z"
  }), _react["default"].createElement("path", {
    d: "M6.486 22.64h-.008a.15.15 0 00-.15.149v.323a.15.15 0 01-.149.149h-.625a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.148-.15H4.02a.15.15 0 00-.149.15v.637c0 .083.067.15.15.15h.621a.15.15 0 00.15-.15v-.016a.15.15 0 00-.15-.15h-.32a.15.15 0 01-.148-.148v-.016a.15.15 0 01.149-.15h.63a.15.15 0 01.149.15v.33c0 .083.067.15.149.15h1.235a.15.15 0 00.15-.15v-.637a.15.15 0 00-.15-.15zM3.56 23.426v-.637a.15.15 0 00-.149-.15H2.79a.15.15 0 00-.149.15v.008c0 .083.067.15.15.15h.31a.15.15 0 01.15.149v.016a.15.15 0 01-.15.149h-.617a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.148-.15H.949a.15.15 0 00-.149.15v1.267c0 .082.067.149.15.149h.004a.15.15 0 00.149-.15v-.96a.15.15 0 01.149-.149h.012a.15.15 0 01.15.15v.96c0 .082.066.149.148.149h.009a.15.15 0 00.15-.15v-.96a.15.15 0 01.148-.149h.009a.15.15 0 01.149.15v.96c0 .082.067.149.149.149h.009a.15.15 0 00.149-.15v-.33a.15.15 0 01.149-.15h.928a.15.15 0 00.15-.149z"
  }), _react["default"].createElement("path", {
    d: "M6.486 23.89H2.79c-.082 0-.149.106-.149.237v.026c0 .13.067.237.15.237h3.696c.083 0 .15-.106.15-.237v-.026c0-.13-.067-.237-.15-.237zM-1.355 23.426v-.016a.15.15 0 00-.15-.15h-.314a.15.15 0 01-.15-.148v-.016a.15.15 0 01.15-.15h.626a.15.15 0 01.149.15v.33c0 .083.066.15.149.15H.34a.15.15 0 00.15-.15v-.637a.15.15 0 00-.15-.15H.336a.15.15 0 00-.15.15v.323a.15.15 0 01-.148.149h-.622a.15.15 0 01-.15-.15v-.322a.15.15 0 00-.149-.15H-2v.937h.496a.15.15 0 00.149-.15zM.49 24.153v-.026c0-.13-.067-.237-.15-.237H-2v.5H.34c.083 0 .15-.106.15-.237zM31.51 21.837v.331c0 .082.068.15.15.15H34v-.63h-2.34a.15.15 0 00-.15.15zM25.518 22.317h2.466a.15.15 0 00.149-.149v-.33a.15.15 0 00-.15-.15h-2.465a.15.15 0 00-.15.15v.33c0 .082.067.15.15.15zM31.055 21.688h-2.466a.15.15 0 00-.15.15v.33c0 .082.067.15.15.15h2.466a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM24.913 21.688h-2.466a.15.15 0 00-.15.15v.33c0 .082.067.15.15.15h2.466a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM19.376 22.317h2.47a.15.15 0 00.149-.149v-.33a.15.15 0 00-.15-.15h-2.47a.15.15 0 00-.149.15v.33c0 .082.067.15.15.15zM13.233 22.317H15.7a.15.15 0 00.149-.149v-.33a.15.15 0 00-.15-.15h-2.466a.15.15 0 00-.149.15v.33c0 .082.067.15.15.15zM18.77 21.688h-2.466a.15.15 0 00-.149.15v.33c0 .082.067.15.15.15h2.466a.15.15 0 00.149-.15v-.33a.15.15 0 00-.15-.15zM12.628 21.688h-2.466a.15.15 0 00-.149.15v.33c0 .082.067.15.15.15h2.465a.15.15 0 00.15-.15v-.33a.15.15 0 00-.15-.15zM7.091 22.317h2.462a.15.15 0 00.15-.149v-.33a.15.15 0 00-.15-.15H7.091a.15.15 0 00-.149.15v.33c0 .082.067.15.15.15zM6.486 21.688H4.02a.15.15 0 00-.149.15v.33c0 .082.067.15.15.15h2.465a.15.15 0 00.15-.15v-.33a.15.15 0 00-.15-.15zM.95 22.317H3.41a.15.15 0 00.15-.149v-.33a.15.15 0 00-.15-.15H.95a.15.15 0 00-.149.15v.33c0 .082.067.15.15.15zM.49 22.168v-.33a.15.15 0 00-.15-.15H-2v.63H.34a.15.15 0 00.15-.15z"
  })), _react["default"].createElement("g", {
    fill: "#FF4B55"
  }, _react["default"].createElement("path", {
    d: "M15.386 12.49a.634.634 0 00.617-.17.636.636 0 001.069-.605.733.733 0 01-1.014.24c-.017-.011-.04-.023-.055-.035a.745.745 0 01-1.034-.146c-.009-.018-.026-.042-.038-.06a.634.634 0 00.455.776zM16.754 19.351a4 4 0 001.81-2.015 4.034 4.034 0 00-.95-4.41c-.04-.04-.101.012-.072.06a4.355 4.355 0 01-1.092 5.742l.085-5.497a.243.243 0 00-.09-.193l-.292-.236a.243.243 0 00-.306.001l-.288.235a.243.243 0 00-.089.192l.083 5.501a4.361 4.361 0 01-1.095-5.745c.03-.047-.032-.1-.073-.06a4.038 4.038 0 00-.949 4.41c.361.899 1.02 1.582 1.81 2.015a4.435 4.435 0 01-1.565.248c-.057-.001-.068.078-.014.094.679.206 1.376.22 2.033.073l.257.5a.048.048 0 00.085 0l.26-.5a3.99 3.99 0 002.033-.073c.054-.016.043-.095-.014-.094a4.455 4.455 0 01-1.567-.248z"
  }), _react["default"].createElement("path", {
    d: "M19.967 14.24a3.407 3.407 0 00-1.874-1.607c-.05-.017-.089.049-.048.082a4.345 4.345 0 01.533 6.189 3.436 3.436 0 001.39-4.664zM13.204 18.628a4.345 4.345 0 01.75-5.913c.041-.033.002-.1-.048-.082a3.413 3.413 0 00-1.87 1.607 3.43 3.43 0 001.391 4.664 2.547 2.547 0 01-.223-.276z"
  })))));
}

SvgIran.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgIran.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgIran;
exports["default"] = _default;