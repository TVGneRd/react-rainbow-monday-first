import React from 'react';
import PropTypes from 'prop-types';

function SvgNetherlands(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    className: className,
    style: style
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    d: "M.493 12.17C2.61 3.612 11.257-1.6 19.814.517c8.558 2.117 13.77 10.764 11.653 19.321-2.118 8.55-10.764 13.77-19.322 11.653C3.588 29.374-1.625 20.719.493 12.17",
    fill: "#0072BC"
  }), React.createElement("path", {
    d: "M.945 10.642h30.053C29.261 5.778 25.196 1.851 19.806.517 11.774-1.47 3.661 3.007.946 10.642",
    fill: "#EF3827"
  }), React.createElement("path", {
    d: "M31.588 19.28c.008-.032.016-.064.024-.104.008-.057.024-.121.032-.178a.473.473 0 00.017-.105c.008-.065.024-.121.032-.186.008-.032.008-.065.016-.089.016-.073.024-.153.04-.226 0-.016.009-.032.009-.049.016-.088.024-.185.04-.274 0-.025.008-.049.008-.073l.024-.202c0-.032.008-.065.008-.097.008-.057.017-.121.017-.178 0-.032.008-.064.008-.097.008-.064.008-.121.016-.186 0-.032.008-.064.008-.097.008-.072.008-.137.016-.21v-.064c.008-.09.008-.186.016-.275v-.049c0-.072.008-.153.008-.226v-.089-.186-.097-.185-.09c0-.064 0-.137-.008-.201v-.073a12.521 12.521 0 00-.032-.55c0-.024 0-.048-.008-.072-.008-.065-.008-.13-.016-.202 0-.033-.008-.057-.008-.09-.009-.064-.009-.12-.017-.185 0-.032-.008-.057-.008-.089l-.024-.202c0-.024-.008-.048-.008-.073-.024-.177-.049-.363-.08-.541 0-.016-.009-.032-.009-.049-.008-.072-.024-.145-.04-.218-.008-.024-.008-.048-.016-.072a1.655 1.655 0 00-.04-.194c-.009-.025-.009-.049-.017-.081-.016-.065-.024-.13-.04-.202-.009-.025-.009-.04-.017-.065-.016-.08-.04-.162-.056-.242l-.008-.016c-.024-.081-.04-.17-.065-.251-.121-.469-.258-.93-.42-1.382H.937a15.896 15.896 0 00-.735 7.863c0 .008 0 .016.008.024.008.073.024.154.04.226 0 .016.009.033.009.049.016.073.024.137.04.21.008.024.008.04.016.065.016.064.024.129.04.193.009.025.009.049.017.073.016.065.024.121.04.186l.024.089c.017.057.025.113.04.178.009.04.025.089.033.129l.049.194c.016.065.032.13.056.194.008.032.016.056.024.08.017.065.033.122.057.187l.024.088c.016.057.04.122.057.178l.024.081c.016.057.04.121.057.178l.024.08c.024.065.04.122.064.186.009.017.009.033.017.04.016.041.024.074.04.114h29.931c.016-.04.025-.073.04-.113l.098-.283c0-.008.008-.016.008-.024.04-.121.08-.25.121-.372.008-.016.008-.032.016-.048.032-.114.073-.235.105-.356l.024-.073c.04-.137.073-.282.114-.42.024-.089.04-.186.064-.275.008-.032.016-.056.016-.088.025-.04.033-.106.049-.17",
    fill: "#F1F2F2"
  })));
}

SvgNetherlands.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
SvgNetherlands.defaultProps = {
  className: undefined,
  style: undefined
};
export default SvgNetherlands;