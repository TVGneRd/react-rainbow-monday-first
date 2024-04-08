import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import ProgressIndicator from '../ProgressIndicator';
import ProgressStep from '../ProgressStep';
import StyledFooter from './styled/footer';
import StyledBackButton from './styled/backButton';
import StyledNextButton from './styled/nextButton';
export default function DirectionalFooter(props) {
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

  return React.createElement(StyledFooter, null, React.createElement(StyledBackButton, {
    label: "Back",
    onClick: onBack,
    disabled: isBackButtonDisabled,
    borderRadius: borderRadius
  }), React.createElement(ProgressIndicator, {
    currentStepName: currentStep
  }, React.createElement(RenderIf, {
    isTrue: !actionType
  }, React.createElement(ProgressStep, {
    name: "step-1"
  })), React.createElement(ProgressStep, {
    name: "step-2"
  }), React.createElement(ProgressStep, {
    name: "step-3"
  }), React.createElement(ProgressStep, {
    name: "step-4"
  })), React.createElement(StyledNextButton, {
    label: getLabel(),
    variant: "brand",
    onClick: onNext,
    disabled: isNextButtonDisabled,
    borderRadius: borderRadius
  }));
}
DirectionalFooter.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  currentStep: PropTypes.string,
  isBackButtonDisabled: PropTypes.bool,
  isNextButtonDisabled: PropTypes.bool,
  actionType: PropTypes.string,
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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