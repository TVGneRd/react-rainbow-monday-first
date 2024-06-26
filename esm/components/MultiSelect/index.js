import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick } from '@rainbow-modules/hooks';
import Label from '../Input/label';
import { useUniqueIdentifier, useErrorMessageId, useReduxForm, useLabelId, useWindowResize } from '../../libs/hooks';
import { StyledInput, StyledContainer, StyledChipContainer, StyledButtonIcon, StyledPlaceholder, StyledCombobox, StyledCountText, StyledDropdown } from './styled';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import PlusIcon from './icons/plus';
import { ENTER_KEY, SPACE_KEY, ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import { getSizeButton, hasContent, positionResolver } from './helpers';
import normalizeValue from './helpers/normalizeValue';
import Content from './content';
var MultiSelect = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      id = _useReduxForm.id,
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      label = _useReduxForm.label,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      placeholder = _useReduxForm.placeholder,
      error = _useReduxForm.error,
      bottomHelpText = _useReduxForm.bottomHelpText,
      required = _useReduxForm.required,
      disabled = _useReduxForm.disabled,
      readOnly = _useReduxForm.readOnly,
      tabIndex = _useReduxForm.tabIndex,
      variant = _useReduxForm.variant,
      chipVariant = _useReduxForm.chipVariant,
      isBare = _useReduxForm.isBare,
      isLoading = _useReduxForm.isLoading,
      value = _useReduxForm.value,
      onChange = _useReduxForm.onChange,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      children = _useReduxForm.children,
      showCheckbox = _useReduxForm.showCheckbox,
      enableSearch = _useReduxForm.enableSearch,
      size = _useReduxForm.size,
      borderRadius = _useReduxForm.borderRadius;

  var triggerRef = useRef();
  var dropdownContainerRef = useRef();
  var dropdownRef = useRef();
  var comboboxRef = useRef();
  var inputRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        triggerRef.current.focus();
      },
      click: function click() {
        triggerRef.current.click();
      },
      blur: function blur() {
        triggerRef.current.blur();
      }
    };
  });

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var labelId = useLabelId('label');
  var comboboxId = useUniqueIdentifier('combobox');
  var dropdownId = useUniqueIdentifier('dropdown');
  var inputId = useUniqueIdentifier('input');
  var errorMessageId = useErrorMessageId();

  var closeAndFocusInput = function closeAndFocusInput() {
    setIsOpen(false);
    setTimeout(function () {
      return triggerRef.current.focus();
    }, 0);
  };

  var handleChange = function handleChange(val) {
    if (!showCheckbox) {
      closeAndFocusInput();
    }

    return onChange(normalizeValue(val));
  };

  var handleDelete = function handleDelete(option) {
    if (Array.isArray(value)) {
      return handleChange(value.filter(function (val) {
        return val !== option;
      }));
    }

    return handleChange([]);
  };

  var toggleDropdown = function toggleDropdown() {
    if (disabled || readOnly) return;
    setIsOpen(!isOpen);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (isOpen) {
      if (event.keyCode === ESCAPE_KEY || event.keyCode === TAB_KEY && !(showCheckbox && event.target.tagName !== 'BUTTON')) {
        event.preventDefault();
        closeAndFocusInput();
      }
    }

    if (event.target !== comboboxRef.current) return;

    if (event.keyCode === ENTER_KEY || event.keyCode === SPACE_KEY) {
      event.preventDefault();
      toggleDropdown();
    }
  };

  var handleClick = function handleClick() {
    if (disabled) {
      return;
    }

    if (isOpen) {
      dropdownRef.current.focus();
      return;
    }

    if (readOnly) {
      inputRef.current.focus();
      return;
    }

    triggerRef.current.focus();
  };

  var handleTriggerClick = function handleTriggerClick(event) {
    event.preventDefault();
    toggleDropdown();
  };

  var handleFocus = function handleFocus() {
    if (!readOnly) {
      triggerRef.current.focus();
    }
  };

  var handleBlur = function handleBlur() {
    if (!readOnly) {
      triggerRef.current.blur();
    }
  };

  useOutsideClick(dropdownContainerRef, function (event) {
    if (event.target !== triggerRef.current.buttonRef.current && !triggerRef.current.buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, isOpen);
  useWindowResize(function () {
    return setIsOpen(false);
  }, isOpen);

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      chipsBoundingRect = _useState4[0],
      setChipsBoundingRect = _useState4[1];

  var refCallback = function refCallback(element) {
    if (element) {
      var elementRect = JSON.stringify(element.getBoundingClientRect());

      if (!chipsBoundingRect || chipsBoundingRect !== elementRect) {
        setChipsBoundingRect(elementRect);
      }
    }
  };

  var selectedCount = Array.isArray(value) ? value.length : 1;
  var shouldRenderContent = hasContent(value);
  var shouldRenderCount = !!value && selectedCount > 0 && variant === 'default';
  var shouldRenderButton = !readOnly && !disabled;
  var inputTabIndex = readOnly ? tabIndex : '-1';
  var dropdownWidth = comboboxRef.current ? comboboxRef.current.offsetWidth : 0;
  var sizeButton = getSizeButton(size);
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style
  }, React.createElement(Label, {
    id: labelId,
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    inputId: inputId,
    size: size
  }), React.createElement(StyledCombobox, {
    id: comboboxId,
    isBare: isBare,
    error: error,
    disabled: disabled,
    role: "combobox",
    "aria-controls": dropdownId,
    "aria-expanded": isOpen,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: comboboxRef,
    "aria-labelledby": labelId,
    variant: variant,
    size: size,
    borderRadius: borderRadius
  }, React.createElement(StyledInput, {
    id: inputId,
    role: "textbox",
    "aria-autocomplete": "none",
    tabIndex: inputTabIndex,
    disabled: disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: inputRef,
    readOnly: true
  }), React.createElement(StyledChipContainer, {
    ref: refCallback
  }, React.createElement(RenderIf, {
    isTrue: !shouldRenderContent
  }, React.createElement(StyledPlaceholder, {
    size: size
  }, placeholder)), React.createElement(RenderIf, {
    isTrue: shouldRenderContent
  }, React.createElement(Content, {
    variant: variant,
    chipVariant: chipVariant,
    readOnly: readOnly,
    disabled: disabled,
    value: value,
    onDelete: handleDelete,
    size: size,
    borderRadius: borderRadius
  }))), React.createElement(RenderIf, {
    isTrue: shouldRenderCount
  }, React.createElement(StyledCountText, {
    readOnly: readOnly,
    size: size
  }, "(", selectedCount, ")")), React.createElement(RenderIf, {
    isTrue: shouldRenderButton
  }, React.createElement(StyledButtonIcon, {
    title: "Add",
    variant: "neutral",
    size: sizeButton,
    icon: React.createElement(PlusIcon, null),
    onClick: handleTriggerClick,
    disabled: disabled,
    ref: triggerRef,
    tabIndex: tabIndex,
    onFocus: onFocus,
    onBlur: onBlur,
    sizeIcon: size,
    borderRadius: borderRadius
  })), React.createElement(InternalOverlay, {
    isVisible: isOpen,
    positionResolver: positionResolver,
    onOpened: function onOpened() {
      return dropdownRef.current.focus();
    },
    triggerElementRef: function triggerElementRef() {
      return comboboxRef;
    }
  }, React.createElement("div", {
    ref: dropdownContainerRef
  }, React.createElement(StyledDropdown, {
    id: dropdownId,
    value: value,
    isLoading: isLoading,
    onChange: handleChange,
    ref: dropdownRef,
    width: dropdownWidth,
    placeholder: placeholder,
    showCheckbox: showCheckbox,
    enableSearch: enableSearch,
    borderRadius: borderRadius,
    multiple: true
  }, children)))), React.createElement(RenderIf, {
    isTrue: bottomHelpText
  }, React.createElement(HelpText, {
    alignSelf: "center"
  }, bottomHelpText)), React.createElement(RenderIf, {
    isTrue: error
  }, React.createElement(ErrorText, {
    alignSelf: "center",
    id: errorMessageId
  }, error)));
});
MultiSelect.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(['default', 'chip', 'bare']),
  enableSearch: PropTypes.bool,
  chipVariant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
  value: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    value: PropTypes.any
  })),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
MultiSelect.defaultProps = {
  className: undefined,
  style: undefined,
  label: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  placeholder: null,
  error: null,
  bottomHelpText: null,
  required: false,
  disabled: false,
  readOnly: false,
  isLoading: false,
  tabIndex: 0,
  variant: 'default',
  enableSearch: false,
  chipVariant: 'base',
  value: undefined,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  children: null,
  size: 'medium',
  borderRadius: 'rounded'
};
export default MultiSelect;