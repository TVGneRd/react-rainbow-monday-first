"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function SvgGuadeloupe(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, _react["default"].createElement("defs", null, _react["default"].createElement("circle", {
    id: "guadeloupe_svg__a",
    cx: 16,
    cy: 16,
    r: 16
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "guadeloupe_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#guadeloupe_svg__a"
  })), _react["default"].createElement("use", {
    fill: "#D8D8D8",
    xlinkHref: "#guadeloupe_svg__a"
  }), _react["default"].createElement("g", {
    fillRule: "nonzero",
    mask: "url(#guadeloupe_svg__b)"
  }, _react["default"].createElement("path", {
    fill: "#050000",
    d: "M-6.822 10.924h45.908v21.97H-6.822z"
  }), _react["default"].createElement("path", {
    fill: "#050E8C",
    d: "M-6.836-.864H39.1v11.9H-6.836z"
  }), _react["default"].createElement("g", {
    strokeLinecap: "round",
    stroke: "#0B0",
    strokeWidth: 0.5,
    fill: "#00F500"
  }, _react["default"].createElement("path", {
    d: "M4.461 20.501c-.483-1.116-3.32-3.54-1.408-3.63 8.185 2.72 16.189 6.046 24.093 9.413l-.014.02C21.092 23.73 9.397 18.2 3.498 17.448c-.61.375 1.045 2.037 2.297 2.45l-1.333.602h0z"
  }), _react["default"].createElement("path", {
    d: "M6.862 14.884c-1.14.422-4.852.047-3.597 1.492 7.623 4.035 15.557 7.523 23.452 10.91l.005-.024c-6.034-2.588-18.111-7.22-22.732-10.965-.15-.7 2.195-.653 3.358-.033l-.486-1.38h0z"
  })), _react["default"].createElement("g", {
    strokeLinecap: "round",
    stroke: "#0B0",
    strokeWidth: 0.5,
    fill: "#00F500"
  }, _react["default"].createElement("path", {
    d: "M3.692 22.154c.327-2.22 3.148-.809 5.25-.521 1.289.556 10.765 3.385 14.804 4.543l5.19 1.735c-1.312-.234-18.223-5.595-19.542-5.787-2.302-.315-5.536-2.087-3.456.611l-2.246-.58h0z"
  }), _react["default"].createElement("path", {
    d: "M4.19 23.252c-.63-3.931-4.705-5.435 3.504-3.59 2.147.568 1.081.27 3.198.895l18.125 8.92c-2.115-.624-19.19-9.209-21.333-9.776-5.2-1.169-5.408.345-1.597 2.58l-1.896.97h0z"
  }), _react["default"].createElement("path", {
    d: "M3.258 16.367c4.971 3.387 11.067 5.122 16.423 7.709l9.032 4.394C23.89 26.14 7.82 17.2 2.56 17.968l.698-1.601h0z"
  }), _react["default"].createElement("path", {
    d: "M9.085 15.365c-1.14.422-4.852.047-3.597 1.492 7.623 4.035 15.557 7.523 23.452 10.91l.005-.024c-6.034-2.588-18.111-7.22-22.732-10.965-.15-.7 2.195-.653 3.358-.033l-.486-1.38h0z"
  })), _react["default"].createElement("path", {
    d: "M22.467 29.32c-.562.43-.656-2.266-1.313-1.963-.825.381.242 2.445-.578 2.836-.651.31-.1-2.34-.814-2.172-.897.212-.347 2.434-1.24 2.658-.71.177.459-2.305-.278-2.279-.926.033-.919 2.31-1.845 2.355-.736.036.998-2.162.272-2.279-.913-.147-1.448 2.078-2.363 1.942-.727-.108 1.49-1.918.809-2.173-.856-.32-1.91 1.748-2.77 1.439-.686-.247 1.911-1.585 1.307-1.966-.76-.479-2.282 1.338-3.049.868-.61-.373 2.245-1.176 1.746-1.666-.628-.615-2.547.864-3.185.257-.506-.483 2.474-.714 2.103-1.288-.467-.723-2.694.35-3.172-.367-.38-.57 2.586-.218 2.36-.851-.282-.796-2.713-.18-3.009-.973-.235-.63 2.577.288 2.508-.373-.087-.833-2.607-.703-2.707-1.534-.08-.66 2.448.781 2.538.122.114-.83-2.38-1.192-2.278-2.023.08-.66 2.204 1.237 2.45.61.308-.788-2.04-1.624-1.743-2.416.235-.63 1.858 1.636 2.247 1.071.49-.71-1.605-1.982-1.126-2.698.38-.57 1.424 1.958 1.939 1.482.647-.599-1.094-2.247-.456-2.854.507-.482.924 2.188 1.54 1.823.775-.459-.533-2.406.235-2.875.61-.373.38 2.316 1.07 2.08.866-.299.053-2.454.914-2.763.685-.246-.18 2.336.55 2.238.916-.124.636-2.386 1.551-2.52.728-.108-.733 2.245.003 2.291.925.057 1.19-2.207 2.116-2.16.736.035-1.25 2.051-.543 2.238.89.235 1.689-1.924 2.582-1.7.71.178-1.711 1.761-1.065 2.081.813.402 2.108-1.552 2.927-1.16.651.312-2.09 1.389-1.536 1.826.698.55 2.429-1.107 3.135-.565.562.43-2.373.95-1.935 1.486.55.673 2.636-.61 3.196.055.446.53-2.544.469-2.244 1.076.377.764 2.72-.085 3.109.674.309.604-2.597-.036-2.449.616.186.819 2.677.444 2.876 1.26.158.65-2.528-.538-2.538.127-.014.836 2.508.953 2.507 1.789 0 .664-2.34-1.016-2.509-.369-.212.814 2.223 1.417 2.023 2.233-.16.65-2.043-1.445-2.363-.846-.401.754 1.833 1.814 1.443 2.573-.31.603-1.65-1.808-2.105-1.284-.572.658 1.357 2.127.796 2.792-.447.529-1.182-2.085-1.75-1.662-.716.532.818 2.34.111 2.881z",
    fill: "#FBF90B"
  }), _react["default"].createElement("g", {
    fill: "#FBF90B"
  }, _react["default"].createElement("path", {
    d: "M2.12 3.5c0 1.311-.83 1.987-1.262 2.376C.378 5.474-.36 4.81-.36 3.5-.359 2.188.334.602.858.602c.524 0 1.261 1.586 1.261 2.898z"
  }), _react["default"].createElement("path", {
    d: "M.858 3.795c.253 0 .458.853.458 1.904 0 1.05-.205 1.903-.458 1.903-.121 0-.238-.2-.324-.558A6.075 6.075 0 01.4 5.7c0-1.051.205-1.904.458-1.904"
  }), _react["default"].createElement("path", {
    d: "M3.273 4.213c-.412-.018-.883.219-1.228.66-.49.63-1.136 2.091-.777 2.562-.064-.365.155-.902.576-1.337.53-.548 1.179-.728 1.45-.403.21.254.13.74-.168 1.201.239-.184.448-.382.588-.562.51-.654.55-1.512.09-1.915a.847.847 0 00-.531-.206zM-1.556 4.26c.411-.017.883.22 1.227.661.49.629 1.136 2.09.777 2.562.064-.366-.155-.903-.576-1.338-.53-.547-1.179-.728-1.45-.403-.21.254-.129.74.168 1.202a3.412 3.412 0 01-.588-.562c-.51-.654-.55-1.512-.089-1.915a.847.847 0 01.53-.207z"
  })), _react["default"].createElement("path", {
    d: "M1.983 8.324a.72.72 0 01-.858-.228c-.013.43-.038.91-.265 1.254-.247-.34-.184-.915-.215-1.22-.17.232-.436.34-.91.203C.5 7.916.476 7.5.577 7.236c.224.014.364-.006.584-.004.125.201.2.753.82 1.092h0z",
    stroke: "#030904",
    strokeWidth: 0.5,
    fill: "#FBF90B",
    strokeLinecap: "round"
  }), _react["default"].createElement("path", {
    fill: "#C8C808",
    d: "M-.211 7.107h2.138v.5H-.21z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("g", {
    fill: "#FBF90B"
  }, _react["default"].createElement("path", {
    d: "M17.204 3.5c0 1.311-.828 1.987-1.261 2.376-.48-.402-1.217-1.065-1.217-2.376 0-1.312.693-2.898 1.217-2.898.524 0 1.261 1.586 1.261 2.898z"
  }), _react["default"].createElement("path", {
    d: "M15.943 3.795c.253 0 .458.853.458 1.904 0 1.05-.205 1.903-.458 1.903-.121 0-.238-.2-.324-.558a6.075 6.075 0 01-.134-1.345c0-1.051.205-1.904.458-1.904"
  }), _react["default"].createElement("path", {
    d: "M18.358 4.213c-.412-.018-.883.219-1.228.66-.49.63-1.136 2.091-.777 2.562-.064-.365.156-.902.576-1.337.53-.548 1.179-.728 1.45-.403.21.254.13.74-.168 1.201.239-.184.448-.382.588-.562.51-.654.55-1.512.09-1.915a.847.847 0 00-.531-.206zM13.529 4.26c.411-.017.883.22 1.227.661.49.629 1.136 2.09.777 2.562.064-.366-.155-.903-.576-1.338-.53-.547-1.179-.728-1.45-.403-.21.254-.129.74.168 1.202a3.412 3.412 0 01-.588-.562c-.51-.654-.55-1.512-.089-1.915a.847.847 0 01.53-.207z"
  })), _react["default"].createElement("path", {
    d: "M17.068 8.324a.72.72 0 01-.858-.228c-.013.43-.038.91-.265 1.254-.247-.34-.184-.915-.215-1.22-.17.232-.436.34-.91.203.766-.417.742-.834.843-1.097.224.014.364-.006.584-.004.125.201.2.753.82 1.092h0z",
    stroke: "#030904",
    strokeWidth: 0.5,
    fill: "#FBF90B",
    strokeLinecap: "round"
  }), _react["default"].createElement("path", {
    fill: "#C8C808",
    d: "M14.874 7.107h2.138v.5h-2.138z"
  })), _react["default"].createElement("g", null, _react["default"].createElement("g", {
    fill: "#FBF90B"
  }, _react["default"].createElement("path", {
    d: "M32.288 3.5c0 1.311-.828 1.987-1.261 2.376-.48-.402-1.217-1.065-1.217-2.376 0-1.312.693-2.898 1.217-2.898.524 0 1.261 1.586 1.261 2.898z"
  }), _react["default"].createElement("path", {
    d: "M31.027 3.795c.253 0 .458.853.458 1.904 0 1.05-.205 1.903-.458 1.903-.122 0-.238-.2-.324-.558A6.075 6.075 0 0130.57 5.7c0-1.051.205-1.904.458-1.904"
  }), _react["default"].createElement("path", {
    d: "M33.442 4.213c-.412-.018-.883.219-1.228.66-.49.63-1.136 2.091-.777 2.562-.064-.365.155-.902.576-1.337.53-.548 1.179-.728 1.45-.403.21.254.129.74-.168 1.201.239-.184.448-.382.588-.562.51-.654.55-1.512.09-1.915a.847.847 0 00-.531-.206zM28.612 4.26c.412-.017.884.22 1.228.661.49.629 1.136 2.09.777 2.562.064-.366-.155-.903-.576-1.338-.53-.547-1.179-.728-1.45-.403-.21.254-.129.74.168 1.202a3.412 3.412 0 01-.588-.562c-.51-.654-.55-1.512-.09-1.915a.847.847 0 01.532-.207z"
  })), _react["default"].createElement("path", {
    d: "M32.152 8.324a.72.72 0 01-.858-.228c-.013.43-.038.91-.265 1.254-.247-.34-.184-.915-.215-1.22-.17.232-.436.34-.91.203.766-.417.742-.834.843-1.097.224.014.364-.006.584-.004.125.201.2.753.82 1.092h0z",
    stroke: "#030904",
    strokeWidth: 0.5,
    fill: "#FBF90B",
    strokeLinecap: "round"
  }), _react["default"].createElement("path", {
    fill: "#C8C808",
    d: "M29.958 7.107h2.138v.5h-2.138z"
  })))));
}

SvgGuadeloupe.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
SvgGuadeloupe.defaultProps = {
  className: undefined,
  style: undefined
};
var _default = SvgGuadeloupe;
exports["default"] = _default;