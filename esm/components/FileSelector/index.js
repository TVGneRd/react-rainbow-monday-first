import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import { StyledContainer, StyledDropzone, TruncatedText, StyledBackdrop, StyledIconContainer, StyledButtonIcon, StyledInput } from './styled';
import { CancelIcon } from './icons';
import { useUniqueIdentifier, useErrorMessageId, useLabelId, useReduxForm } from '../../libs/hooks';
import Icon from './icon';
import getText from './helpers/getText';
var FileSelector = React.forwardRef(function (props, ref) {
  var _useReduxForm = useReduxForm(props),
      className = _useReduxForm.className,
      style = _useReduxForm.style,
      id = _useReduxForm.id,
      name = _useReduxForm.name,
      label = _useReduxForm.label,
      error = _useReduxForm.error,
      uploadIcon = _useReduxForm.uploadIcon,
      bottomHelpText = _useReduxForm.bottomHelpText,
      placeholder = _useReduxForm.placeholder,
      tabIndex = _useReduxForm.tabIndex,
      required = _useReduxForm.required,
      multiple = _useReduxForm.multiple,
      disabled = _useReduxForm.disabled,
      variant = _useReduxForm.variant,
      labelAlignment = _useReduxForm.labelAlignment,
      hideLabel = _useReduxForm.hideLabel,
      accept = _useReduxForm.accept,
      onChange = _useReduxForm.onChange,
      onFocus = _useReduxForm.onFocus,
      onBlur = _useReduxForm.onBlur,
      value = _useReduxForm.value,
      size = _useReduxForm.size,
      borderRadius = _useReduxForm.borderRadius;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDragOver = _useState2[0],
      setIsDragOver = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      files = _useState4[0],
      setFiles = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      hasFocus = _useState6[0],
      setHasFocus = _useState6[1];

  var inputId = useUniqueIdentifier('input');
  var buttonId = useUniqueIdentifier('cancel-button');
  var dropzoneId = useUniqueIdentifier('dropzone');
  var labelId = useLabelId(label);
  var errorMessageId = useErrorMessageId(error);
  var inputRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      click: function click() {
        inputRef.current.click();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });

  var clearInput = function clearInput() {
    inputRef.current.value = '';

    if (!/safari/i.test(navigator.userAgent)) {
      inputRef.current.type = '';
      inputRef.current.type = 'file';
    }
  };

  var handleDragEnter = function handleDragEnter() {
    if (disabled) {
      return;
    }

    setIsDragOver(true);
  };

  var handleDragLeave = function handleDragLeave(event) {
    if (!event.relatedTarget || event.relatedTarget.id !== buttonId) {
      setIsDragOver(false);
    }
  };

  var handleDrop = function handleDrop(event) {
    setIsDragOver(false);
    setFiles(event.nativeEvent.dataTransfer.files);
  };

  var handleChange = function handleChange(event) {
    var eventFiles = event.target.files;
    setFiles(eventFiles);

    if (onChange) {
      onChange(eventFiles);
    }
  };

  var handleCancel = function handleCancel(event) {
    event.preventDefault();
    event.stopPropagation();
    var list = new DataTransfer();
    setFiles(list.files);
    clearInput();

    if (onChange) {
      onChange(list.files);
    }
  };

  var handleFocus = function handleFocus(event) {
    setHasFocus(true);
    onFocus(event);
  };

  var handleBlur = function handleBlur(event) {
    setHasFocus(false);
    onBlur(event);
  };

  var text = getText(files, placeholder, value);
  var isFileSelected = files && files.length > 0;
  var isSingleFile = files && files.length === 1;
  var shouldRenderCancel = isFileSelected && !isDragOver && value !== null;
  return React.createElement(StyledContainer, {
    id: id,
    className: className,
    style: style
  }, React.createElement(Label, {
    label: label,
    labelAlignment: labelAlignment,
    hideLabel: hideLabel,
    required: required,
    inputId: inputId,
    id: labelId,
    size: size
  }), React.createElement(StyledDropzone, {
    id: dropzoneId,
    variant: variant,
    isDragOver: isDragOver,
    hasFocus: hasFocus,
    disabled: disabled,
    error: error,
    size: size,
    borderRadius: borderRadius
  }, React.createElement(StyledInput, {
    type: "file",
    id: inputId,
    name: name,
    multiple: multiple,
    disabled: disabled,
    required: required,
    onChange: handleChange,
    tabIndex: tabIndex,
    accept: accept,
    onFocus: handleFocus,
    onBlur: handleBlur,
    "aria-labelledby": labelId,
    "aria-describedby": errorMessageId,
    ref: inputRef,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop
  }), React.createElement(StyledBackdrop, {
    isFileSelected: isFileSelected,
    variant: variant,
    size: size,
    borderRadius: borderRadius
  }, React.createElement(StyledIconContainer, {
    iconPosition: "left",
    isSingleFile: isSingleFile,
    variant: variant,
    error: error,
    disabled: disabled,
    size: size,
    isDragOver: isDragOver
  }, React.createElement(Icon, {
    files: files,
    error: error,
    isDragOver: isDragOver,
    value: value,
    uploadIcon: uploadIcon
  })), React.createElement(TruncatedText, null, text), React.createElement(RenderIf, {
    isTrue: shouldRenderCancel
  }, React.createElement(StyledIconContainer, {
    iconPosition: "right",
    size: size
  }, React.createElement(StyledButtonIcon, {
    id: buttonId,
    icon: React.createElement(CancelIcon, null),
    onClick: handleCancel,
    pickerVariant: variant,
    sizeIcon: size
  }))))), React.createElement(RenderIf, {
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
FileSelector.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  uploadIcon: PropTypes.node,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['inline', 'multiline']),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  accept: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
FileSelector.defaultProps = {
  className: undefined,
  style: undefined,
  id: undefined,
  name: undefined,
  label: undefined,
  error: undefined,
  uploadIcon: undefined,
  bottomHelpText: undefined,
  placeholder: 'Drag & Drop or Click to Browse',
  tabIndex: undefined,
  required: false,
  multiple: false,
  disabled: false,
  variant: 'inline',
  labelAlignment: 'center',
  hideLabel: false,
  accept: undefined,
  value: undefined,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  size: 'medium',
  borderRadius: 'rounded'
};
export default FileSelector;