import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useMemo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { useTheme, useUniqueIdentifier, useLocale } from '../../libs/hooks';
import { getError, getCardElementOptions, getElementsOptions } from './helpers';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import StyledContainer from './styled/container';
import StyledCardInput from './styled/cardInput';
var StripeCardInput = React.forwardRef(function (props, ref) {
  var id = props.id,
      apiKey = props.apiKey,
      label = props.label,
      labelAlignment = props.labelAlignment,
      hideLabel = props.hideLabel,
      bottomHelpText = props.bottomHelpText,
      error = props.error,
      disabled = props.disabled,
      required = props.required,
      locale = props.locale,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      className = props.className,
      style = props.style,
      isScriptLoaded = props.isScriptLoaded,
      isScriptLoadSucceed = props.isScriptLoadSucceed,
      size = props.size,
      borderRadius = props.borderRadius;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      stripe = _useState2[0],
      setStripe = _useState2[1];

  var cardRef = useRef();
  var stripeCardInputId = useUniqueIdentifier('stripe-card-input');
  var errorMessageId = useUniqueIdentifier('error-message');
  var theme = useTheme().rainbow;
  var cardElementOptions = useMemo(function () {
    return getCardElementOptions(theme, disabled, size);
  }, [disabled, size, theme]);
  var localeStripe = useLocale(locale);
  var elementsOptions = useMemo(function () {
    return getElementsOptions(localeStripe);
  }, [localeStripe]);
  useEffect(function () {
    if (isScriptLoaded && isScriptLoadSucceed && window.Stripe && apiKey) {
      setStripe(window.Stripe(apiKey));
    }
  }, [apiKey, isScriptLoadSucceed, isScriptLoaded]);
  useEffect(function () {
    if (stripe) {
      var cardNode = cardRef.current;
      var elements = stripe.elements(elementsOptions);
      var card = elements.create('card', cardElementOptions);
      card.mount(cardNode);
      card.on('change', function (event) {
        var stripeCardEvent = {
          stripe: stripe,
          card: card,
          isEmpty: event.empty,
          isComplete: event.complete,
          cardBrand: event.brand,
          error: getError(event.error)
        };
        onChange(stripeCardEvent);
      });
      card.on('focus', onFocus);
      card.on('blur', onBlur);
      return function () {
        card.unmount();
        card.destroy();
      };
    }
  }, [cardElementOptions, elementsOptions, stripe]);
  return React.createElement(StyledContainer, {
    id: id,
    ref: ref,
    className: className,
    style: style,
    disabled: disabled,
    error: error,
    size: size
  }, React.createElement(Label, {
    label: label,
    hideLabel: hideLabel,
    labelAlignment: labelAlignment,
    inputId: stripeCardInputId,
    required: required,
    size: size
  }), React.createElement(StyledCardInput, {
    ref: cardRef,
    id: stripeCardInputId,
    disabled: disabled,
    size: size,
    borderRadius: borderRadius
  }), React.createElement(RenderIf, {
    isTrue: bottomHelpText
  }, React.createElement(HelpText, {
    alignSelf: "center"
  }, bottomHelpText)), React.createElement(RenderIf, {
    isTrue: error
  }, React.createElement(ErrorText, {
    id: errorMessageId,
    alignSelf: "center"
  }, error)));
});
StripeCardInput.propTypes = {
  id: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  locale: PropTypes.oneOf(['ar', 'da', 'de', 'en', 'es', 'fi', 'fr', 'he', 'it', 'ja', 'lt', 'lv', 'ms', 'nb', 'nl', 'pl', 'pt', 'pt-BR', 'ru', 'sv', 'zh']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  isScriptLoaded: PropTypes.bool.isRequired,
  isScriptLoadSucceed: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
StripeCardInput.defaultProps = {
  id: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  bottomHelpText: null,
  error: null,
  disabled: false,
  required: false,
  locale: undefined,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  className: undefined,
  style: undefined,
  size: 'medium',
  borderRadius: 'rounded'
};
export default scriptLoader('https://js.stripe.com/v3')(withReduxForm(StripeCardInput));
export { StripeCardInput as Component };