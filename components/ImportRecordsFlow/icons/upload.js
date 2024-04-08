"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Upload;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Upload(props) {
  var className = props.className,
      style = props.style;
  return _react["default"].createElement("svg", {
    className: className,
    style: style,
    fill: "#01b6f5",
    width: "20px",
    height: "18px",
    viewBox: "0 0 20 18",
    version: "1.1"
  }, _react["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    transform: "translate(-1328.000000, -278.000000)",
    fill: "currentColor",
    fillRule: "nonzero"
  }, _react["default"].createElement("g", {
    transform: "translate(41.000000, 245.000000)"
  }, _react["default"].createElement("g", {
    transform: "translate(40.000000, 21.000000)"
  }, _react["default"].createElement("g", {
    transform: "translate(1237.000000, 0.000000)"
  }, _react["default"].createElement("g", {
    transform: "translate(10.000000, 12.000000)"
  }, _react["default"].createElement("path", {
    d: "M19.4908594,12.0683594 C19.2097266,12.0683594 18.9817187,12.2962891 18.9817187,12.5775 L18.9817187,14.5229688 C18.9817187,15.6458984 18.068125,16.5594922 16.9451953,16.5594922 L3.05480469,16.5594922 C1.931875,16.5594922 1.01828125,15.6458984 1.01828125,14.5229688 L1.01828125,12.5775 C1.01828125,12.2962891 0.790351563,12.0683594 0.509140625,12.0683594 C0.227929688,12.0683594 0,12.2962891 0,12.5775 L0,14.5229688 C0,16.2073828 1.37039062,17.5777734 3.05480469,17.5777734 L16.9451953,17.5777734 C18.6296094,17.5777734 20,16.2073828 20,14.5229688 L20,12.5775 C20,12.2962891 19.7720703,12.0683594 19.4908594,12.0683594 Z"
  }), _react["default"].createElement("path", {
    d: "M16.3997266,14.0744141 L3.60027344,14.0744141 C3.31914063,14.0744141 3.09113281,14.3023438 3.09113281,14.5835547 C3.09113281,14.8647656 3.3190625,15.0926953 3.60027344,15.0926953 L16.3996875,15.0926953 C16.6808984,15.0926953 16.9088281,14.8647656 16.9088281,14.5835547 C16.9088281,14.3023438 16.6808984,14.0744141 16.3997266,14.0744141 Z"
  }), _react["default"].createElement("path", {
    d: "M15.1125781,4.1340625 L10.8479687,0.324257813 C10.3645313,-0.107578125 9.63546875,-0.10765625 9.15199219,0.324257813 L4.88738281,4.13402344 C4.67765625,4.32132813 4.65953125,4.64320313 4.846875,4.85292969 C5.03417969,5.06257813 5.35601562,5.08085938 5.56582031,4.8934375 L9.49089844,1.38703125 L9.49089844,11.2546094 C9.49089844,11.5358203 9.71890625,11.76375 10.0000391,11.76375 C10.28125,11.76375 10.5091797,11.5358203 10.5091797,11.2546094 L10.5091797,1.38703125 L14.4342578,4.8934375 C14.5313672,4.98019531 14.6525391,5.02292969 14.7732422,5.02292969 C14.9132031,5.02292969 15.0525391,4.96554688 15.1531641,4.85296875 C15.3403906,4.64324219 15.3222656,4.32144531 15.1125781,4.1340625 Z"
  }))))))));
}

Upload.propTypes = {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string
};
Upload.defaultProps = {
  style: undefined,
  className: undefined
};