import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import StyledContainer from './styled/container';
import StyledTextareaContainer from './styled/textareaContainer';
import StyledTextarea from './styled/textarea';
import StyledBottomHelp from '../Input/styled/helpText';
import StyledError from '../Input/styled/errorText';

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  var _super = _createSuper(Textarea);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _super.call(this, props);
    _this.textareaRef = React.createRef();
    _this.textareaId = uniqueId('textarea');
    _this.inlineTextLabelId = uniqueId('inline-text-label');
    _this.errorMessageId = uniqueId('error-message');
    _this.updateFocus = _this.updateFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isFocused: false
    };
    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var grow = this.props.grow;

      if (grow) {
        return autosize(this.textareaRef.current);
      }

      return null;
    }
  }, {
    key: "getInlineTextLabelId",
    value: function getInlineTextLabelId() {
      var bottomHelpText = this.props.bottomHelpText;

      if (bottomHelpText) {
        return this.inlineTextLabelId;
      }

      return undefined;
    }
  }, {
    key: "getErrorMessageId",
    value: function getErrorMessageId() {
      var error = this.props.error;

      if (error) {
        return this.errorMessageId;
      }

      return undefined;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.textareaRef.current.focus();
    }
  }, {
    key: "click",
    value: function click() {
      this.textareaRef.current.click();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.textareaRef.current.blur();
    }
  }, {
    key: "updateFocus",
    value: function updateFocus(isFocused, handler) {
      var _this2 = this;

      return function () {
        _this2.setState({
          isFocused: isFocused
        });

        handler.apply(void 0, arguments);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyDown = _this$props.onKeyDown,
          onPaste = _this$props.onPaste,
          value = _this$props.value,
          readOnly = _this$props.readOnly,
          label = _this$props.label,
          error = _this$props.error,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          maxLength = _this$props.maxLength,
          minLength = _this$props.minLength,
          bottomHelpText = _this$props.bottomHelpText,
          required = _this$props.required,
          rows = _this$props.rows,
          id = _this$props.id,
          labelAlignment = _this$props.labelAlignment,
          hideLabel = _this$props.hideLabel,
          name = _this$props.name,
          header = _this$props.header,
          footer = _this$props.footer,
          variant = _this$props.variant,
          size = _this$props.size,
          borderRadius = _this$props.borderRadius;
      var isFocused = this.state.isFocused;
      return React.createElement(StyledContainer, {
        className: className,
        style: style,
        id: id
      }, React.createElement(Label, {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.textareaId,
        readOnly: readOnly,
        size: size,
        id: this.getInlineTextLabelId()
      }), React.createElement(StyledTextareaContainer, {
        error: error,
        readOnly: readOnly,
        disabled: disabled,
        variant: variant,
        isFocused: isFocused,
        borderRadius: borderRadius
      }, React.createElement(RenderIf, {
        isTrue: header
      }, header), React.createElement(StyledTextarea, {
        error: error,
        id: this.textareaId,
        name: name,
        placeholder: placeholder,
        disabled: disabled,
        required: required,
        maxLength: maxLength,
        minLength: minLength,
        onChange: onChange,
        onClick: onClick,
        onFocus: this.updateFocus(true, onFocus),
        onBlur: this.updateFocus(false, onBlur),
        onKeyDown: onKeyDown,
        onPaste: onPaste,
        readOnly: readOnly,
        rows: rows,
        value: value,
        "aria-labelledby": this.getInlineTextLabelId(),
        "aria-describedby": this.getErrorMessageId(),
        ref: this.textareaRef,
        size: size
      }), React.createElement(RenderIf, {
        isTrue: footer
      }, footer)), React.createElement(RenderIf, {
        isTrue: bottomHelpText
      }, React.createElement(StyledBottomHelp, null, bottomHelpText)), React.createElement(RenderIf, {
        isTrue: error
      }, React.createElement(StyledError, {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);

  return Textarea;
}(Component);

Textarea.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
  hideLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  grow: PropTypes.bool,
  bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPaste: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'shaded']),
  id: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
};
Textarea.defaultProps = {
  label: undefined,
  value: undefined,
  name: undefined,
  placeholder: null,
  maxLength: undefined,
  minLength: undefined,
  grow: false,
  bottomHelpText: null,
  required: false,
  error: null,
  disabled: false,
  rows: 3,
  readOnly: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onPaste: function onPaste() {},
  className: undefined,
  style: undefined,
  variant: 'default',
  id: undefined,
  labelAlignment: 'center',
  hideLabel: false,
  header: undefined,
  footer: undefined,
  size: 'medium',
  borderRadius: 'rounded'
};
export default withReduxForm(Textarea);