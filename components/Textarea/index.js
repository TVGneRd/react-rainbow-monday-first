"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _autosize = _interopRequireDefault(require("autosize"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _utils = require("../../libs/utils");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _label = _interopRequireDefault(require("../Input/label"));

var _container = _interopRequireDefault(require("./styled/container"));

var _textareaContainer = _interopRequireDefault(require("./styled/textareaContainer"));

var _textarea = _interopRequireDefault(require("./styled/textarea"));

var _helpText = _interopRequireDefault(require("../Input/styled/helpText"));

var _errorText = _interopRequireDefault(require("../Input/styled/errorText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Textarea = function (_Component) {
  (0, _inherits2["default"])(Textarea, _Component);

  var _super = _createSuper(Textarea);

  function Textarea(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Textarea);
    _this = _super.call(this, props);
    _this.textareaRef = _react["default"].createRef();
    _this.textareaId = (0, _utils.uniqueId)('textarea');
    _this.inlineTextLabelId = (0, _utils.uniqueId)('inline-text-label');
    _this.errorMessageId = (0, _utils.uniqueId)('error-message');
    _this.updateFocus = _this.updateFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      isFocused: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var grow = this.props.grow;

      if (grow) {
        return (0, _autosize["default"])(this.textareaRef.current);
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
      return _react["default"].createElement(_container["default"], {
        className: className,
        style: style,
        id: id
      }, _react["default"].createElement(_label["default"], {
        label: label,
        labelAlignment: labelAlignment,
        hideLabel: hideLabel,
        required: required,
        inputId: this.textareaId,
        readOnly: readOnly,
        size: size,
        id: this.getInlineTextLabelId()
      }), _react["default"].createElement(_textareaContainer["default"], {
        error: error,
        readOnly: readOnly,
        disabled: disabled,
        variant: variant,
        isFocused: isFocused,
        borderRadius: borderRadius
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: header
      }, header), _react["default"].createElement(_textarea["default"], {
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
      }), _react["default"].createElement(_RenderIf["default"], {
        isTrue: footer
      }, footer)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: bottomHelpText
      }, _react["default"].createElement(_helpText["default"], null, bottomHelpText)), _react["default"].createElement(_RenderIf["default"], {
        isTrue: error
      }, _react["default"].createElement(_errorText["default"], {
        id: this.getErrorMessageId()
      }, error)));
    }
  }]);
  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  labelAlignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  hideLabel: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  maxLength: _propTypes["default"].number,
  minLength: _propTypes["default"].number,
  grow: _propTypes["default"].bool,
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  required: _propTypes["default"].bool,
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  rows: _propTypes["default"].number,
  readOnly: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onPaste: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['default', 'shaded']),
  id: _propTypes["default"].string,
  header: _propTypes["default"].node,
  footer: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  borderRadius: _propTypes["default"].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded'])
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

var _default = (0, _withReduxForm["default"])(Textarea);

exports["default"] = _default;