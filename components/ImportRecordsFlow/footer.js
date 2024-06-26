"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DirectionalFooter;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _ProgressIndicator = _interopRequireDefault(require("../ProgressIndicator"));

var _ProgressStep = _interopRequireDefault(require("../ProgressStep"));

var _footer = _interopRequireDefault(require("./styled/footer"));

var _backButton = _interopRequireDefault(require("./styled/backButton"));

var _nextButton = _interopRequireDefault(require("./styled/nextButton"));

function DirectionalFooter(props) {
  var onBack = props.onBack,
      onNext = props.onNext,
      currentStep = props.currentStep,
      isBackButtonDisabled = props.isBackButtonDisabled,
      isNextButtonDisabled = props.isNextButtonDisabled,
      actionType = props.actionType,
      borderRadius = props.borderRadius;

  var getLabel = function getLabel() {
    if (currentStep === 'step-4') {
      return 'Start Import';
    }

    return 'Next';
  };

  return _react["default"].createElement(_footer["default"], null, _react["default"].createElement(_backButton["default"], {
    label: "Back",
    onClick: onBack,
    disabled: isBackButtonDisabled,
    borderRadius: borderRadius
  }), _react["default"].createElement(_ProgressIndicator["default"], {
    currentStepName: currentStep
  }, _react["default"].createElement(_RenderIf["default"], {
    isTrue: !actionType
  }, _react["default"].createElement(_ProgressStep["default"], {
    name: "step-1"
  })), _react["default"].createElement(_ProgressStep["default"], {
    name: "step-2"
  }), _react["default"].createElement(_ProgressStep["default"], {
    name: "step-3"
  }), _react["default"].createElement(_ProgressStep["default"], {
    name: "step-4"
  })), _react["default"].createElement(_nextButton["default"], {
    label: getLabel(),
    variant: "brand",
    onClick: onNext,
    disabled: isNextButtonDisabled,
    borderRadius: borderRadius
  }));
}

DirectionalFooter.propTypes = {
  onBack: _propTypes["default"].func,
  onNext: _propTypes["default"].func,
  currentStep: _propTypes["default"].string,
  isBackButtonDisabled: _propTypes["default"].bool,
  isNextButtonDisabled: _propTypes["default"].bool,
  actionType: _propTypes["default"].string,
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
DirectionalFooter.defaultProps = {
  onBack: function onBack() {},
  onNext: function onNext() {},
  currentStep: undefined,
  isBackButtonDisabled: false,
  isNextButtonDisabled: false,
  actionType: undefined,
  borderRadius: 'rounded'
};