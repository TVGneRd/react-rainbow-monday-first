"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgNewCaledonia(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("defs", null, _react["default"].createElement("circle", {
    id: "new-caledonia_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "new-caledonia_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#new-caledonia_svg__a"
  })), _react["default"].createElement("g", {
    fillRule: "nonzero",
    mask: "url(#new-caledonia_svg__b)"
  }, _react["default"].createElement("path", {
    d: "M44.904 28.451c0 3.045-2.433 5.514-5.433 5.514H1.434C-1.567 33.965-4 31.496-4 28.451V3.641c0-3.045 2.433-5.514 5.434-5.514H39.47c3 0 5.433 2.469 5.433 5.514v24.81z",
    fill: "#009543"
  }), _react["default"].createElement("path", {
    fill: "#ED4135",
    d: "M44.904 22.938H-4V9.154h48.904z"
  }), _react["default"].createElement("path", {
    d: "M39.47-1.873H1.435C-1.567-1.873-4 .596-4 3.641v5.513h48.904V3.641c0-3.045-2.433-5.514-5.433-5.514",
    fill: "#0035AD"
  }), _react["default"].createElement("path", {
    d: "M26.432 16.046c0 7.157-5.718 12.96-12.772 12.96-7.055 0-12.774-5.803-12.774-12.96 0-7.158 5.72-12.96 12.774-12.96 7.054 0 12.772 5.802 12.772 12.96",
    fill: "#141414"
  }), _react["default"].createElement("path", {
    d: "M25.886 16.046c0 6.852-5.473 12.405-12.226 12.405-6.753 0-12.226-5.553-12.226-12.405 0-6.852 5.473-12.405 12.226-12.405 6.753 0 12.226 5.553 12.226 12.405",
    fill: "#FAE600"
  }), _react["default"].createElement("g", {
    fill: "#141414"
  }, _react["default"].createElement("path", {
    d: "M14.053 28.44h-.57V3.652h.57z"
  }), _react["default"].createElement("path", {
    d: "M15.358 11.524c0 .927-.742 1.68-1.656 1.68a1.669 1.669 0 01-1.656-1.68c0-.928.742-1.68 1.656-1.68.914 0 1.656.752 1.656 1.68M15.06 21.926c0 1.084-.61 1.96-1.36 1.96-.75 0-1.358-.876-1.358-1.96 0-1.083.609-1.96 1.359-1.96s1.358.877 1.358 1.96M15.358 16.433c0 .56-.742 1.012-1.656 1.012-.914 0-1.656-.452-1.656-1.012s.742-1.011 1.656-1.011c.914 0 1.656.452 1.656 1.011M11.878 9.154s-.17-1.206.17-1.723c.339-.517 1.23-.991 1.952-1.163.722-.173 1.699-1.249 1.699-1.249s-.128 1.593-1.316 2.584c-1.189.991-2.505 1.551-2.505 1.551M10.837 11.608s.658.43.827 1.076c.17.647.637 1.336 1.996 1.336v.776s-1.147.085-1.782-.172c-.637-.26-.807-1.466-.807-1.897 0-.43-.234-1.12-.234-1.12M16.526 11.608s-.657.43-.827 1.076c-.17.647-.637 1.336-1.996 1.336v.776s1.147.085 1.783-.172c.637-.26.807-1.466.807-1.897 0-.43.233-1.12.233-1.12"
  }), _react["default"].createElement("path", {
    d: "M16.293 20.439c0-.43-.192-1.636-.828-1.895-.637-.258-1.804-.359-1.804-.359s-1.146.101-1.783.359c-.637.259-.807 1.465-.807 1.895 0 .43-.234 2.498-.234 2.498s.893-1.512 1.062-2.159c.17-.647.87-1.451 1.762-1.451.912 0 1.634.776 1.804 1.422.17.645 1.05 2.188 1.05 2.188s-.222-2.068-.222-2.498M13.66 24.316v4.135s-1.189.13-2.887-.322-2.016-.624-2.016-.624 1.728-1.756 2.484-2.414c.89-.775 2.419-.775 2.419-.775"
  }), _react["default"].createElement("path", {
    d: "M13.66 24.316v4.135s1.189.13 2.887-.322 2.016-.624 2.016-.624-1.728-1.756-2.484-2.414c-.89-.775-2.42-.775-2.42-.775"
  })))));
}

SvgNewCaledonia.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgNewCaledonia.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgNewCaledonia;
exports["default"] = _default;