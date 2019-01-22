/**
 * Bundle of @devexpress/dx-react-core
 * Generated: 2018-12-25
 * Version: 1.10.0
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('@devexpress/dx-core'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', '@devexpress/dx-core', 'react-dom'], factory) :
  (global = global || self, factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXReactCore = {}), global.React, global.PropTypes, global.DevExpress.DXCore, global.ReactDOM));
}(this, function (exports, React, PropTypes, dxCore, reactDom) { 'use strict';

  if (typeof process === "undefined") { var process = { env: {} }; }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var PluginHostContext = React.createContext();
  var PositionContext = React.createContext();
  var TemplateHostContext = React.createContext();

  var PluginIndexer = function PluginIndexer(_ref) {
    var children = _ref.children;
    return React.createElement(PositionContext.Consumer, null, function (positionContext) {
      return React.Children.map(children, function (child, index) {
        if (!child || !child.type) return child;

        var childPosition = function childPosition() {
          var calculatedPosition = positionContext && positionContext() || [];
          return [].concat(_toConsumableArray(calculatedPosition), [index]);
        };

        return React.createElement(PositionContext.Provider, {
          value: childPosition
        }, child);
      });
    });
  };
  process.env.NODE_ENV !== "production" ? PluginIndexer.propTypes = {
    children: PropTypes.node
  } : void 0;
  PluginIndexer.defaultProps = {
    children: undefined
  };

  var PLUGIN_HOST_CONTEXT = 'dxcore_pluginHost_context';
  var POSITION_CONTEXT = 'dxcore_position_context';
  var TEMPLATE_HOST_CONTEXT = 'dxcore_templateHost_context';
  var RERENDER_TEMPLATE_EVENT = Symbol('rerenderTemplate');
  var RERENDER_TEMPLATE_SCOPE_EVENT = Symbol('rerenderTemplateScope');
  var UPDATE_CONNECTION_EVENT = Symbol('updateConnection');

  var withContext = function withContext(Context, name) {
    return function (Component) {
      return function (props) {
        return React.createElement(Context.Consumer, null, function (context) {
          return React.createElement(Component, _extends({}, props, _defineProperty({}, name, context)));
        });
      };
    };
  };
  var withHostAndPosition = function withHostAndPosition(Component) {
    return withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(PositionContext, POSITION_CONTEXT)(Component));
  };

  var _PluginBase$propTypes;
  var PluginBase =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(PluginBase, _React$PureComponent);

    function PluginBase() {
      _classCallCheck(this, PluginBase);

      return _possibleConstructorReturn(this, _getPrototypeOf(PluginBase).apply(this, arguments));
    }

    _createClass(PluginBase, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            pluginHost = _this$props[PLUGIN_HOST_CONTEXT],
            position = _this$props[POSITION_CONTEXT];
        var _this$props2 = this.props,
            name = _this$props2.name,
            dependencies = _this$props2.dependencies;
        this.plugin = {
          position: position,
          name: name,
          dependencies: dependencies,
          container: true
        };
        pluginHost.registerPlugin(this.plugin);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.ensureDependencies();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.unregisterPlugin(this.plugin);
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        return React.createElement(PluginIndexer, null, children);
      }
    }]);

    return PluginBase;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? PluginBase.propTypes = (_PluginBase$propTypes = {}, _defineProperty(_PluginBase$propTypes, PLUGIN_HOST_CONTEXT, PropTypes.object.isRequired), _defineProperty(_PluginBase$propTypes, POSITION_CONTEXT, PropTypes.func.isRequired), _defineProperty(_PluginBase$propTypes, "children", PropTypes.node.isRequired), _defineProperty(_PluginBase$propTypes, "name", PropTypes.string), _defineProperty(_PluginBase$propTypes, "dependencies", PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    optional: PropTypes.bool
  }))), _PluginBase$propTypes) : void 0;
  PluginBase.defaultProps = {
    name: '',
    dependencies: []
  };
  var Plugin = withHostAndPosition(PluginBase);

  var _TemplatePlaceholderB, _TemplatePlaceholderB2;
  var TemplatePlaceholderBase =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TemplatePlaceholderBase, _React$Component);

    function TemplatePlaceholderBase(props) {
      var _this$subscription;

      var _this;

      _classCallCheck(this, TemplatePlaceholderBase);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplatePlaceholderBase).call(this, props));
      var propsName = _this.props.name;
      _this.subscription = (_this$subscription = {}, _defineProperty(_this$subscription, RERENDER_TEMPLATE_EVENT, function (id) {
        if (_this.template && _this.template.id === id) {
          _this.forceUpdate();
        }
      }), _defineProperty(_this$subscription, RERENDER_TEMPLATE_SCOPE_EVENT, function (name) {
        if (propsName === name) {
          _this.forceUpdate();
        }
      }), _this$subscription);
      return _this;
    }

    _createClass(TemplatePlaceholderBase, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.registerSubscription(this.subscription);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var _this$getRenderingDat = this.getRenderingData(nextProps),
            params = _this$getRenderingDat.params;

        var children = this.props.children;
        return !dxCore.shallowEqual(params, this.params) || children !== nextProps.children;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.unregisterSubscription(this.subscription);
      }
    }, {
      key: "getRenderingData",
      value: function getRenderingData(props) {
        var name = props.name,
            params = props.params;

        if (name) {
          var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
          return {
            params: params,
            templates: pluginHost.collect("".concat(name, "Template")).filter(function (template) {
              return template.predicate(params);
            }).reverse()
          };
        }

        var templateHost = this.props[TEMPLATE_HOST_CONTEXT];
        return {
          params: params || templateHost.params(),
          templates: templateHost.templates()
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$getRenderingDat2 = this.getRenderingData(this.props),
            params = _this$getRenderingDat2.params,
            templates = _this$getRenderingDat2.templates;

        this.params = params;

        var _templates = _slicedToArray(templates, 1);

        this.template = _templates[0];
        this.restTemplates = templates.slice(1);
        var content = null;

        if (this.template) {
          var templateContent = this.template.children;
          content = templateContent() || null;

          if (content && typeof content === 'function') {
            content = content(params);
          }
        }

        var templatePlaceholder = this.props.children;
        return React.createElement(TemplateHostContext.Provider, {
          value: {
            templates: function templates() {
              return _this2.restTemplates;
            },
            params: function params() {
              return _this2.params;
            }
          }
        }, templatePlaceholder ? templatePlaceholder(content) : content);
      }
    }]);

    return TemplatePlaceholderBase;
  }(React.Component);
  process.env.NODE_ENV !== "production" ? TemplatePlaceholderBase.propTypes = (_TemplatePlaceholderB = {
    name: PropTypes.string,
    // eslint-disable-line react/no-unused-prop-types
    params: PropTypes.object
  }, _defineProperty(_TemplatePlaceholderB, TEMPLATE_HOST_CONTEXT, PropTypes.object), _defineProperty(_TemplatePlaceholderB, PLUGIN_HOST_CONTEXT, PropTypes.object.isRequired), _defineProperty(_TemplatePlaceholderB, "children", PropTypes.func), _TemplatePlaceholderB) : void 0;
  TemplatePlaceholderBase.defaultProps = (_TemplatePlaceholderB2 = {}, _defineProperty(_TemplatePlaceholderB2, TEMPLATE_HOST_CONTEXT, undefined), _defineProperty(_TemplatePlaceholderB2, "name", undefined), _defineProperty(_TemplatePlaceholderB2, "params", undefined), _defineProperty(_TemplatePlaceholderB2, "children", undefined), _TemplatePlaceholderB2);
  var TemplatePlaceholder = withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(TemplateHostContext, TEMPLATE_HOST_CONTEXT)(TemplatePlaceholderBase));

  var PluginHost =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(PluginHost, _React$PureComponent);

    function PluginHost(props) {
      var _this;

      _classCallCheck(this, PluginHost);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PluginHost).call(this, props));
      _this.host = new dxCore.PluginHost();
      return _this;
    }

    _createClass(PluginHost, [{
      key: "render",
      value: function render() {
        var children = this.props.children;
        return React.createElement(PluginHostContext.Provider, {
          value: this.host
        }, React.createElement(PluginIndexer, null, children), React.createElement(TemplatePlaceholder, {
          name: "root"
        }));
      }
    }]);

    return PluginHost;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? PluginHost.propTypes = {
    children: PropTypes.node
  } : void 0;
  PluginHost.defaultProps = {
    children: undefined
  };

  var getAvailableGetters = function getAvailableGetters(pluginHost) {
    var getGetterValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (getterName) {
      return pluginHost.get("".concat(getterName, "Getter"));
    };
    var trackedDependencies = {};
    var getters;

    if (typeof Proxy !== 'undefined') {
      getters = new Proxy({}, {
        get: function get(target, prop) {
          if (typeof prop !== 'string') return undefined;
          var result = getGetterValue(prop);
          trackedDependencies[prop] = result;
          return result;
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
          return {
            configurable: true,
            enumerable: true,
            value: this.get(target, prop)
          };
        },
        ownKeys: function ownKeys() {
          return pluginHost.knownKeys('Getter');
        }
      });
    } else {
      getters = pluginHost.knownKeys('Getter').reduce(function (acc, getterName) {
        Object.defineProperty(acc, getterName, {
          get: function get() {
            var result = getGetterValue(getterName);
            trackedDependencies[getterName] = result;
            return result;
          }
        });
        return acc;
      }, {});
    }

    return {
      getters: getters,
      trackedDependencies: trackedDependencies
    };
  };
  var isTrackedDependenciesChanged = function isTrackedDependenciesChanged(pluginHost, prevTrackedDependencies) {
    var getGetterValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (getterName) {
      return pluginHost.get("".concat(getterName, "Getter"));
    };
    var trackedDependencies = Object.keys(prevTrackedDependencies).reduce(function (acc, getterName) {
      return Object.assign(acc, _defineProperty({}, getterName, getGetterValue(getterName)));
    }, {});
    return !dxCore.shallowEqual(prevTrackedDependencies, trackedDependencies);
  };
  var getAvailableActions = function getAvailableActions(pluginHost) {
    var getAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (actionName) {
      return pluginHost.collect("".concat(actionName, "Action")).slice().reverse()[0];
    };
    var actions;

    if (typeof Proxy !== 'undefined') {
      actions = new Proxy({}, {
        get: function get(target, prop) {
          if (typeof prop !== 'string') return undefined;
          return getAction(prop);
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
          return {
            configurable: true,
            enumerable: true,
            value: this.get(target, prop)
          };
        },
        ownKeys: function ownKeys() {
          return pluginHost.knownKeys('Action');
        }
      });
    } else {
      actions = pluginHost.knownKeys('Action').reduce(function (acc, actionName) {
        Object.defineProperty(acc, actionName, {
          get: function get() {
            return getAction(actionName);
          }
        });
        return acc;
      }, {});
    }

    return actions;
  };

  var _ActionBase$propTypes;

  var ActionBase =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(ActionBase, _React$PureComponent);

    function ActionBase(props) {
      var _this;

      _classCallCheck(this, ActionBase);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionBase).call(this, props));
      var pluginHost = props[PLUGIN_HOST_CONTEXT],
          positionContext = props[POSITION_CONTEXT];
      var name = props.name;
      _this.plugin = _defineProperty({
        position: function position() {
          return positionContext();
        }
      }, "".concat(name, "Action"), function Action(params) {
        var action = _this.props.action;

        var _getAvailableGetters = getAvailableGetters(pluginHost, function (getterName) {
          return pluginHost.get("".concat(getterName, "Getter"), _this.plugin);
        }),
            getters = _getAvailableGetters.getters;

        var nextParams = params;
        var actions = getAvailableActions(pluginHost, function (actionName) {
          return actionName === name ? function (newParams) {
            nextParams = newParams;
          } : pluginHost.collect("".concat(actionName, "Action"), _this.plugin).slice().reverse()[0];
        });
        action(params, getters, actions);
        var nextAction = pluginHost.collect("".concat(name, "Action"), _this.plugin).slice().reverse()[0];

        if (nextAction) {
          nextAction(nextParams);
        }
      });
      pluginHost.registerPlugin(_this.plugin);
      return _this;
    }

    _createClass(ActionBase, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.unregisterPlugin(this.plugin);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return ActionBase;
  }(React.PureComponent);

  process.env.NODE_ENV !== "production" ? ActionBase.propTypes = (_ActionBase$propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }, _defineProperty(_ActionBase$propTypes, PLUGIN_HOST_CONTEXT, PropTypes.object.isRequired), _defineProperty(_ActionBase$propTypes, POSITION_CONTEXT, PropTypes.func.isRequired), _ActionBase$propTypes) : void 0;
  var Action = withHostAndPosition(ActionBase);

  var _GetterBase$propTypes;

  var GetterBase =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(GetterBase, _React$PureComponent);

    function GetterBase(props) {
      var _this;

      _classCallCheck(this, GetterBase);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GetterBase).call(this, props));
      var pluginHost = props[PLUGIN_HOST_CONTEXT],
          positionContext = props[POSITION_CONTEXT];
      var name = props.name;
      var lastComputed;
      var lastTrackedDependencies = {};
      var lastResult;
      _this.plugin = _defineProperty({
        position: function position() {
          return positionContext();
        }
      }, "".concat(name, "Getter"), function Getter(original) {
        var _this$props = _this.props,
            value = _this$props.value,
            computed = _this$props.computed;
        if (computed === undefined) return value;

        var getGetterValue = function getGetterValue(getterName) {
          return getterName === name ? original : pluginHost.get("".concat(getterName, "Getter"), _this.plugin);
        };

        if (computed === lastComputed && !isTrackedDependenciesChanged(pluginHost, lastTrackedDependencies, getGetterValue)) {
          return lastResult;
        }

        var _getAvailableGetters = getAvailableGetters(pluginHost, getGetterValue),
            getters = _getAvailableGetters.getters,
            trackedDependencies = _getAvailableGetters.trackedDependencies;

        var actions = getAvailableActions(pluginHost);
        lastComputed = computed;
        lastTrackedDependencies = trackedDependencies;
        lastResult = computed(getters, actions);
        return lastResult;
      });
      pluginHost.registerPlugin(_this.plugin);
      return _this;
    }

    _createClass(GetterBase, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.broadcast(UPDATE_CONNECTION_EVENT);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.unregisterPlugin(this.plugin);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return GetterBase;
  }(React.PureComponent);

  process.env.NODE_ENV !== "production" ? GetterBase.propTypes = (_GetterBase$propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    computed: PropTypes.func
  }, _defineProperty(_GetterBase$propTypes, PLUGIN_HOST_CONTEXT, PropTypes.object.isRequired), _defineProperty(_GetterBase$propTypes, POSITION_CONTEXT, PropTypes.func.isRequired), _GetterBase$propTypes) : void 0;
  GetterBase.defaultProps = {
    value: undefined,
    computed: undefined
  };
  var Getter = withHostAndPosition(GetterBase);

  var _TemplateBase$propTyp;
  var globalTemplateId = 0;

  var TemplateBase =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TemplateBase, _React$PureComponent);

    function TemplateBase(props) {
      var _this;

      _classCallCheck(this, TemplateBase);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateBase).call(this, props));
      globalTemplateId += 1;
      _this.id = globalTemplateId;
      var pluginHost = props[PLUGIN_HOST_CONTEXT],
          positionContext = props[POSITION_CONTEXT];
      var name = props.name,
          _predicate = props.predicate;
      _this.plugin = _defineProperty({
        position: function position() {
          return positionContext();
        }
      }, "".concat(name, "Template"), {
        id: _this.id,
        predicate: function predicate(params) {
          return _predicate ? _predicate(params) : true;
        },
        children: function children() {
          var children = _this.props.children;
          return children;
        }
      });
      pluginHost.registerPlugin(_this.plugin);
      pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
      return _this;
    }

    _createClass(TemplateBase, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        pluginHost.broadcast(RERENDER_TEMPLATE_EVENT, this.id);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        var name = this.props.name;
        pluginHost.unregisterPlugin(this.plugin);
        pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return TemplateBase;
  }(React.PureComponent);

  process.env.NODE_ENV !== "production" ? TemplateBase.propTypes = (_TemplateBase$propTyp = {}, _defineProperty(_TemplateBase$propTyp, PLUGIN_HOST_CONTEXT, PropTypes.object.isRequired), _defineProperty(_TemplateBase$propTyp, POSITION_CONTEXT, PropTypes.func.isRequired), _defineProperty(_TemplateBase$propTyp, "name", PropTypes.string.isRequired), _defineProperty(_TemplateBase$propTyp, "predicate", PropTypes.func), _defineProperty(_TemplateBase$propTyp, "children", PropTypes.oneOfType([PropTypes.func, PropTypes.node])), _TemplateBase$propTyp) : void 0;
  TemplateBase.defaultProps = {
    predicate: undefined,
    children: undefined
  };
  var Template = withHostAndPosition(TemplateBase);

  var TemplateConnector =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TemplateConnector, _React$Component);

    function TemplateConnector(props, context) {
      var _this;

      _classCallCheck(this, TemplateConnector);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateConnector).call(this, props, context));
      _this.trackedDependencies = {};
      _this.subscription = _defineProperty({}, UPDATE_CONNECTION_EVENT, function () {
        return _this.updateConnection();
      });
      return _this;
    }

    _createClass(TemplateConnector, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var pluginHost = this.context;
        pluginHost.registerSubscription(this.subscription);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var pluginHost = this.context;
        pluginHost.unregisterSubscription(this.subscription);
      }
    }, {
      key: "updateConnection",
      value: function updateConnection() {
        var pluginHost = this.context;

        if (isTrackedDependenciesChanged(pluginHost, this.trackedDependencies)) {
          this.forceUpdate();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var pluginHost = this.context;
        var children = this.props.children;

        var _getAvailableGetters = getAvailableGetters(pluginHost),
            getters = _getAvailableGetters.getters,
            trackedDependencies = _getAvailableGetters.trackedDependencies;

        this.trackedDependencies = trackedDependencies;
        var actions = getAvailableActions(pluginHost);
        return children(getters, actions);
      }
    }]);

    return TemplateConnector;
  }(React.Component);
  process.env.NODE_ENV !== "production" ? TemplateConnector.propTypes = {
    children: PropTypes.func.isRequired
  } : void 0;
  TemplateConnector.contextType = PluginHostContext;

  var TIMEOUT = 180;
  var TouchStrategy =
  /*#__PURE__*/
  function () {
    function TouchStrategy(delegate) {
      _classCallCheck(this, TouchStrategy);

      this.delegate = delegate;
      this.touchStartTimeout = null;
      this.dragging = false;
    }

    _createClass(TouchStrategy, [{
      key: "isDragging",
      value: function isDragging() {
        return this.dragging;
      }
    }, {
      key: "isWaiting",
      value: function isWaiting() {
        return !!this.touchStartTimeout;
      }
    }, {
      key: "cancelWaiting",
      value: function cancelWaiting() {
        clearTimeout(this.touchStartTimeout);
        this.touchStartTimeout = null;
      }
    }, {
      key: "start",
      value: function start(e) {
        var _this = this;

        var _e$touches$ = e.touches[0],
            x = _e$touches$.clientX,
            y = _e$touches$.clientY;
        this.touchStartTimeout = setTimeout(function () {
          _this.delegate.onStart({
            x: x,
            y: y
          });

          _this.dragging = true;
        }, TIMEOUT);
      }
    }, {
      key: "move",
      value: function move(e) {
        this.cancelWaiting();

        if (this.dragging) {
          var _e$touches$2 = e.touches[0],
              clientX = _e$touches$2.clientX,
              clientY = _e$touches$2.clientY;
          e.preventDefault();
          this.delegate.onMove({
            x: clientX,
            y: clientY
          });
        }
      }
    }, {
      key: "end",
      value: function end(e) {
        this.cancelWaiting();

        if (this.dragging) {
          var _e$changedTouches$ = e.changedTouches[0],
              clientX = _e$changedTouches$.clientX,
              clientY = _e$changedTouches$.clientY;
          this.delegate.onEnd({
            x: clientX,
            y: clientY
          });
        }

        this.mouseInitialOffset = null;
        this.dragging = false;
      }
    }]);

    return TouchStrategy;
  }();

  /* globals document:true */
  var gestureCover = null;
  var toggleGestureCover = function toggleGestureCover(toggle, cursor) {
    var style = {
      pointerEvents: toggle ? 'all' : 'none'
    };

    if (toggle && cursor) {
      style = _objectSpread({}, style, {
        cursor: cursor
      });
    }

    if (!gestureCover) {
      style = _objectSpread({}, style, {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0,
        zIndex: 2147483647
      });
      gestureCover = document.createElement('div');
      document.body.appendChild(gestureCover);
    }

    Object.keys(style).forEach(function (key) {
      gestureCover.style[key] = style[key];
    });
  };

  var BOUNDARY = 10;

  var clamp = function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  };

  var isBoundExceeded = function isBoundExceeded(_ref, _ref2) {
    var initialX = _ref.x,
        initialY = _ref.y;
    var x = _ref2.x,
        y = _ref2.y;
    return clamp(x, initialX - BOUNDARY, initialX + BOUNDARY) !== x || clamp(y, initialY - BOUNDARY, initialY + BOUNDARY) !== y;
  };

  var MouseStrategy =
  /*#__PURE__*/
  function () {
    function MouseStrategy(delegate) {
      _classCallCheck(this, MouseStrategy);

      this.delegate = delegate;
      this.mouseInitialOffset = null;
      this.dragging = false;
    }

    _createClass(MouseStrategy, [{
      key: "isDragging",
      value: function isDragging() {
        return this.dragging;
      }
    }, {
      key: "start",
      value: function start(e) {
        var x = e.clientX,
            y = e.clientY;
        this.e = e;
        this.mouseInitialOffset = {
          x: x,
          y: y
        };
      }
    }, {
      key: "move",
      value: function move(e) {
        var x = e.clientX,
            y = e.clientY;
        var dragStarted = false;

        if (!this.dragging && this.mouseInitialOffset) {
          if (isBoundExceeded(this.mouseInitialOffset, {
            x: x,
            y: y
          })) {
            this.delegate.onStart(this.mouseInitialOffset);

            if (window.getSelection) {
              window.getSelection().removeAllRanges();
            }

            dragStarted = true;
            this.dragging = true;
          }
        }

        if (this.dragging) {
          e.preventDefault();
          this.delegate.onMove({
            x: x,
            y: y
          });
        }

        if (dragStarted) {
          var _window$getComputedSt = window.getComputedStyle(document.elementFromPoint(x, y)),
              cursor = _window$getComputedSt.cursor;

          toggleGestureCover(true, cursor);
        }
      }
    }, {
      key: "end",
      value: function end(e) {
        if (this.dragging) {
          var x = e.clientX,
              y = e.clientY;
          toggleGestureCover(false);
          this.delegate.onEnd({
            x: x,
            y: y
          });
        }

        this.mouseInitialOffset = null;
        this.dragging = false;
      }
    }]);

    return MouseStrategy;
  }();

  /* globals window:true */
  var eventEmitter = null;
  var getSharedEventEmitter = function getSharedEventEmitter() {
    if (!eventEmitter) {
      eventEmitter = new dxCore.EventEmitter();
      ['mousemove', 'mouseup', 'touchmove', 'touchend', 'touchcancel'].forEach(function (name) {
        return window.addEventListener(name, function (e) {
          return eventEmitter.emit([name, e]);
        }, {
          passive: false
        });
      });
    }

    return eventEmitter;
  };

  /* globals document:true window:true */
  var clear = function clear() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      document.selection.empty();
    }
  };

  var draggingHandled = Symbol('draggingHandled');
  var Draggable =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Draggable, _React$Component);

    function Draggable(props, context) {
      var _this;

      _classCallCheck(this, Draggable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Draggable).call(this, props, context));
      var delegate = {
        onStart: function onStart(_ref) {
          var x = _ref.x,
              y = _ref.y;
          var onStart = _this.props.onStart;
          if (!onStart) return;
          reactDom.unstable_batchedUpdates(function () {
            onStart({
              x: x,
              y: y
            });
          });
        },
        onMove: function onMove(_ref2) {
          var x = _ref2.x,
              y = _ref2.y;
          var onUpdate = _this.props.onUpdate;
          if (!onUpdate) return;
          reactDom.unstable_batchedUpdates(function () {
            onUpdate({
              x: x,
              y: y
            });
          });
        },
        onEnd: function onEnd(_ref3) {
          var x = _ref3.x,
              y = _ref3.y;
          var onEnd = _this.props.onEnd;
          if (!onEnd) return;
          reactDom.unstable_batchedUpdates(function () {
            onEnd({
              x: x,
              y: y
            });
          });
        }
      };
      _this.mouseStrategy = new MouseStrategy(delegate);
      _this.touchStrategy = new TouchStrategy(delegate);
      _this.mouseDownListener = _this.mouseDownListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.touchStartListener = _this.touchStartListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.globalListener = _this.globalListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Draggable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        getSharedEventEmitter().subscribe(this.globalListener);
        this.setupNodeSubscription();
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.setupNodeSubscription();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        getSharedEventEmitter().unsubscribe(this.globalListener);
      }
    }, {
      key: "setupNodeSubscription",
      value: function setupNodeSubscription() {
        // eslint-disable-next-line react/no-find-dom-node
        var node = reactDom.findDOMNode(this);
        if (!node) return;
        node.removeEventListener('mousedown', this.mouseDownListener);
        node.removeEventListener('touchstart', this.touchStartListener);
        node.addEventListener('mousedown', this.mouseDownListener, {
          passive: true
        });
        node.addEventListener('touchstart', this.touchStartListener, {
          passive: true
        });
      }
    }, {
      key: "mouseDownListener",
      value: function mouseDownListener(e) {
        if (this.touchStrategy.isWaiting() || e[draggingHandled]) return;
        this.mouseStrategy.start(e);
        e[draggingHandled] = true;
      }
    }, {
      key: "touchStartListener",
      value: function touchStartListener(e) {
        if (e[draggingHandled]) return;
        this.touchStrategy.start(e);
        e[draggingHandled] = true;
      }
    }, {
      key: "globalListener",
      value: function globalListener(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            name = _ref5[0],
            e = _ref5[1];

        switch (name) {
          case 'mousemove':
            this.mouseStrategy.move(e);
            break;

          case 'mouseup':
            this.mouseStrategy.end(e);
            break;

          case 'touchmove':
            {
              this.touchStrategy.move(e);
              break;
            }

          case 'touchend':
          case 'touchcancel':
            {
              this.touchStrategy.end(e);
              break;
            }

          default:
            break;
        }

        if (this.mouseStrategy.isDragging() || this.touchStrategy.isDragging()) {
          clear();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        return children;
      }
    }]);

    return Draggable;
  }(React.Component);
  process.env.NODE_ENV !== "production" ? Draggable.propTypes = {
    children: PropTypes.node.isRequired,
    onStart: PropTypes.func,
    onUpdate: PropTypes.func,
    onEnd: PropTypes.func
  } : void 0;
  Draggable.defaultProps = {
    onStart: undefined,
    onUpdate: undefined,
    onEnd: undefined
  };

  var DragDropContext = React.createContext();

  var DragDropProviderCore =
  /*#__PURE__*/
  function () {
    function DragDropProviderCore() {
      _classCallCheck(this, DragDropProviderCore);

      this.payload = null;
      this.dragEmitter = new dxCore.EventEmitter();
    }

    _createClass(DragDropProviderCore, [{
      key: "start",
      value: function start(payload, clientOffset) {
        this.payload = payload;
        this.dragEmitter.emit({
          payload: this.payload,
          clientOffset: clientOffset
        });
      }
    }, {
      key: "update",
      value: function update(clientOffset) {
        this.dragEmitter.emit({
          payload: this.payload,
          clientOffset: clientOffset
        });
      }
    }, {
      key: "end",
      value: function end(clientOffset) {
        this.dragEmitter.emit({
          payload: this.payload,
          clientOffset: clientOffset,
          end: true
        });
        this.payload = null;
      }
    }]);

    return DragDropProviderCore;
  }();

  var DragDropProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DragDropProvider, _React$Component);

    function DragDropProvider(props) {
      var _this;

      _classCallCheck(this, DragDropProvider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropProvider).call(this, props));
      var onChange = _this.props.onChange;
      _this.dragDropProvider = new DragDropProviderCore();

      _this.dragDropProvider.dragEmitter.subscribe(function (_ref) {
        var payload = _ref.payload,
            clientOffset = _ref.clientOffset,
            end = _ref.end;
        onChange({
          payload: end ? null : payload,
          clientOffset: end ? null : clientOffset
        });
      });

      return _this;
    }

    _createClass(DragDropProvider, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        return React.createElement(DragDropContext.Provider, {
          value: this.dragDropProvider
        }, children);
      }
    }]);

    return DragDropProvider;
  }(React.Component);
  process.env.NODE_ENV !== "production" ? DragDropProvider.propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func
  } : void 0;
  DragDropProvider.defaultProps = {
    onChange: function onChange() {}
  };

  var DragSource =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DragSource, _React$Component);

    function DragSource() {
      _classCallCheck(this, DragSource);

      return _possibleConstructorReturn(this, _getPrototypeOf(DragSource).apply(this, arguments));
    }

    _createClass(DragSource, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
      }
    }, {
      key: "render",
      value: function render() {
        var dragDropProvider = this.context;
        var _this$props = this.props,
            _onStart = _this$props.onStart,
            _onUpdate = _this$props.onUpdate,
            _onEnd = _this$props.onEnd,
            payload = _this$props.payload,
            children = _this$props.children;
        return React.createElement(Draggable, {
          onStart: function onStart(_ref) {
            var x = _ref.x,
                y = _ref.y;
            dragDropProvider.start(payload, {
              x: x,
              y: y
            });

            _onStart({
              clientOffset: {
                x: x,
                y: y
              }
            });
          },
          onUpdate: function onUpdate(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;
            dragDropProvider.update({
              x: x,
              y: y
            });

            _onUpdate({
              clientOffset: {
                x: x,
                y: y
              }
            });
          },
          onEnd: function onEnd(_ref3) {
            var x = _ref3.x,
                y = _ref3.y;
            dragDropProvider.end({
              x: x,
              y: y
            });

            _onEnd({
              clientOffset: {
                x: x,
                y: y
              }
            });
          }
        }, children);
      }
    }]);

    return DragSource;
  }(React.Component);
  DragSource.contextType = DragDropContext;
  process.env.NODE_ENV !== "production" ? DragSource.propTypes = {
    children: PropTypes.node.isRequired,
    payload: PropTypes.any.isRequired,
    onStart: PropTypes.func,
    onUpdate: PropTypes.func,
    onEnd: PropTypes.func
  } : void 0;
  DragSource.defaultProps = {
    onStart: function onStart() {},
    onUpdate: function onUpdate() {},
    onEnd: function onEnd() {}
  };

  var clamp$1 = function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  };

  var DropTarget =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DropTarget, _React$Component);

    function DropTarget(props) {
      var _this;

      _classCallCheck(this, DropTarget);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DropTarget).call(this, props));
      _this.node = null;
      _this.isOver = false;
      _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(DropTarget, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var dragEmitter = this.context.dragEmitter;
        dragEmitter.subscribe(this.handleDrag);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var dragEmitter = this.context.dragEmitter;
        dragEmitter.unsubscribe(this.handleDrag);
      }
    }, {
      key: "handleDrag",
      value: function handleDrag(_ref) {
        var payload = _ref.payload,
            clientOffset = _ref.clientOffset,
            end = _ref.end;

        var _findDOMNode$getBound = reactDom.findDOMNode(this).getBoundingClientRect(),
            left = _findDOMNode$getBound.left,
            top = _findDOMNode$getBound.top,
            right = _findDOMNode$getBound.right,
            bottom = _findDOMNode$getBound.bottom; // eslint-disable-line react/no-find-dom-node


        var _this$props = this.props,
            onDrop = _this$props.onDrop,
            onEnter = _this$props.onEnter,
            onLeave = _this$props.onLeave,
            onOver = _this$props.onOver;
        var isOver = clientOffset && clamp$1(clientOffset.x, left, right) === clientOffset.x && clamp$1(clientOffset.y, top, bottom) === clientOffset.y;
        if (!this.isOver && isOver) onEnter({
          payload: payload,
          clientOffset: clientOffset
        });
        if (this.isOver && isOver) onOver({
          payload: payload,
          clientOffset: clientOffset
        });
        if (this.isOver && !isOver) onLeave({
          payload: payload,
          clientOffset: clientOffset
        });
        if (isOver && end) onDrop({
          payload: payload,
          clientOffset: clientOffset
        });
        this.isOver = isOver && !end;
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        return React.Children.only(children);
      }
    }]);

    return DropTarget;
  }(React.Component);
  DropTarget.contextType = DragDropContext;
  process.env.NODE_ENV !== "production" ? DropTarget.propTypes = {
    children: PropTypes.node.isRequired,
    onEnter: PropTypes.func,
    onOver: PropTypes.func,
    onLeave: PropTypes.func,
    onDrop: PropTypes.func
  } : void 0;
  DropTarget.defaultProps = {
    onEnter: function onEnter() {},
    onOver: function onOver() {},
    onLeave: function onLeave() {},
    onDrop: function onDrop() {}
  };

  var RefHolder =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(RefHolder, _React$PureComponent);

    function RefHolder() {
      _classCallCheck(this, RefHolder);

      return _possibleConstructorReturn(this, _getPrototypeOf(RefHolder).apply(this, arguments));
    }

    _createClass(RefHolder, [{
      key: "render",
      value: function render() {
        var children = this.props.children;
        return children;
      }
    }]);

    return RefHolder;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? RefHolder.propTypes = {
    children: PropTypes.node.isRequired
  } : void 0;

  var styles = {
    triggersRoot: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      zIndex: -1,
      visibility: 'hidden',
      opacity: 0
    },
    expandTrigger: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      overflow: 'auto'
    },
    contractTrigger: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      overflow: 'auto',
      minHeight: '1px',
      minWidth: '1px'
    },
    contractNotifier: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '200%',
      height: '200%'
    }
  };
  var Sizer =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Sizer, _React$PureComponent);

    function Sizer(props) {
      var _this;

      _classCallCheck(this, Sizer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Sizer).call(this, props));
      _this.setupListeners = _this.setupListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.rootRef = React.createRef();
      return _this;
    }

    _createClass(Sizer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.createListeners();
        this.setupListeners();
      }
    }, {
      key: "setupListeners",
      value: function setupListeners() {
        // eslint-disable-next-line react/no-find-dom-node
        var rootNode = reactDom.findDOMNode(this.rootRef.current);
        var size = {
          height: rootNode.clientHeight,
          width: rootNode.clientWidth
        };
        this.contractTrigger.scrollTop = size.height;
        this.contractTrigger.scrollLeft = size.width;
        this.expandNotifier.style.width = "".concat(size.width + 1, "px");
        this.expandNotifier.style.height = "".concat(size.height + 1, "px");
        this.expandTrigger.scrollTop = 1;
        this.expandTrigger.scrollLeft = 1;
        var onSizeChange = this.props.onSizeChange;
        onSizeChange(size);
      }
    }, {
      key: "createListeners",
      value: function createListeners() {
        // eslint-disable-next-line react/no-find-dom-node
        var rootNode = reactDom.findDOMNode(this.rootRef.current);
        this.triggersRoot = document.createElement('div');
        Object.assign(this.triggersRoot.style, styles.triggersRoot);
        rootNode.appendChild(this.triggersRoot);
        this.expandTrigger = document.createElement('div');
        Object.assign(this.expandTrigger.style, styles.expandTrigger);
        this.expandTrigger.addEventListener('scroll', this.setupListeners);
        this.triggersRoot.appendChild(this.expandTrigger);
        this.expandNotifier = document.createElement('div');
        this.expandTrigger.appendChild(this.expandNotifier);
        this.contractTrigger = document.createElement('div');
        Object.assign(this.contractTrigger.style, styles.contractTrigger);
        this.contractTrigger.addEventListener('scroll', this.setupListeners);
        this.triggersRoot.appendChild(this.contractTrigger);
        this.contractNotifier = document.createElement('div');
        Object.assign(this.contractNotifier.style, styles.contractNotifier);
        this.contractTrigger.appendChild(this.contractNotifier);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            onSizeChange = _this$props.onSizeChange,
            Container = _this$props.containerComponent,
            restProps = _objectWithoutProperties(_this$props, ["onSizeChange", "containerComponent"]);

        return React.createElement(RefHolder, {
          ref: this.rootRef
        }, React.createElement(Container // NOTE: should have `position: relative`
        , restProps));
      }
    }]);

    return Sizer;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? Sizer.propTypes = {
    onSizeChange: PropTypes.func.isRequired,
    containerComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  } : void 0;
  Sizer.defaultProps = {
    containerComponent: 'div'
  };

  var connectProps = function connectProps(WrappedComponent, getAdditionalProps) {
    var storedAdditionalProps = getAdditionalProps();
    var components = new Set();

    var RenderComponent =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(RenderComponent, _React$PureComponent);

      function RenderComponent() {
        _classCallCheck(this, RenderComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(RenderComponent).apply(this, arguments));
      }

      _createClass(RenderComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          components.add(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          components.delete(this);
        }
      }, {
        key: "render",
        value: function render() {
          return React.createElement(WrappedComponent, _extends({}, this.props, storedAdditionalProps));
        }
      }]);

      return RenderComponent;
    }(React.PureComponent);

    RenderComponent.update = function () {
      storedAdditionalProps = getAdditionalProps();
      Array.from(components.values()).forEach(function (component) {
        return component.forceUpdate();
      });
    };

    return RenderComponent;
  };

  var createStateHelper = function createStateHelper(component) {
    var controlledStateProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var notifyStateChange = function notifyStateChange(nextState, state) {
      Object.keys(controlledStateProperties).forEach(function (propertyName) {
        var changeEvent = controlledStateProperties[propertyName]();

        if (changeEvent && nextState[propertyName] !== state[propertyName]) {
          changeEvent(nextState[propertyName]);
        }
      });
    };

    var lastStateUpdater = null;
    var initialState = null;
    var lastInitialState = null;

    var applyReducer = function applyReducer(reduce, payload, callback) {
      var stateUpdater = function stateUpdater(prevState) {
        if (initialState === null) {
          initialState = prevState;
        }

        var stateChange = reduce(_objectSpread({}, prevState), payload);

        var state = _objectSpread({}, prevState, stateChange);

        if (typeof callback === 'function') {
          callback(state, prevState);
        }

        if (stateUpdater === lastStateUpdater) {
          if (lastInitialState !== initialState) {
            notifyStateChange(state, initialState);
            lastInitialState = initialState;
          }

          initialState = null;
        }

        return stateChange;
      };

      lastStateUpdater = stateUpdater;
      component.setState(stateUpdater);
    };

    var applyFieldReducer = function applyFieldReducer(field, reduce, payload) {
      applyReducer(function (state) {
        return _defineProperty({}, field, reduce(state[field], payload));
      });
    };

    return {
      applyReducer: applyReducer,
      applyFieldReducer: applyFieldReducer
    };
  };

  var makeBoundComponent = function makeBoundComponent(Target, components, exposed) {
    var Component =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Component, _React$PureComponent);

      function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
      }

      _createClass(Component, [{
        key: "render",
        value: function render() {
          return React.createElement(Target, _extends({}, components, this.props));
        }
      }]);

      return Component;
    }(React.PureComponent);

    Component.components = Target.components;
    Object.assign(Component, exposed);
    return Component;
  };

  var withComponents = function withComponents(components) {
    return function (Target) {
      var props = {};
      var exposed = {};
      Object.entries(Target.components).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            fieldName = _ref2[0],
            componentName = _ref2[1];

        var component = components[componentName];

        if (component && component !== Target[componentName]) {
          props[fieldName] = component;
        }

        exposed[componentName] = component || Target[componentName];
      });
      return Object.keys(props).length > 0 ? makeBoundComponent(Target, props, exposed) : Target;
    };
  };

  /* globals Element */
  var RefType = PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object)
  });

  exports.Plugin = Plugin;
  exports.PluginHost = PluginHost;
  exports.Action = Action;
  exports.Getter = Getter;
  exports.Template = Template;
  exports.TemplatePlaceholder = TemplatePlaceholder;
  exports.TemplateConnector = TemplateConnector;
  exports.Draggable = Draggable;
  exports.DragDropProvider = DragDropProvider;
  exports.DragSource = DragSource;
  exports.DropTarget = DropTarget;
  exports.Sizer = Sizer;
  exports.RefHolder = RefHolder;
  exports.connectProps = connectProps;
  exports.createStateHelper = createStateHelper;
  exports.withComponents = withComponents;
  exports.RefType = RefType;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dx-react-core.umd.js.map
