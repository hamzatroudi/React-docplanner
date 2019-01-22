/**
 * Bundle of @devexpress/dx-react-grid
 * Generated: 2018-12-25
 * Version: 1.10.0
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('@devexpress/dx-react-core'), require('@devexpress/dx-grid-core'), require('@devexpress/dx-core'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', '@devexpress/dx-react-core', '@devexpress/dx-grid-core', '@devexpress/dx-core', 'react-dom'], factory) :
  (global = global || self, factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXReactGrid = {}), global.React, global.PropTypes, global.DevExpress.DXReactCore, global.DevExpress.DXGridCore, global.DevExpress.DXCore, global.ReactDOM));
}(this, function (exports, React, PropTypes, dxReactCore, dxGridCore, dxCore, reactDom) { 'use strict';

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

  var GridCore =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(GridCore, _React$PureComponent);

    function GridCore() {
      _classCallCheck(this, GridCore);

      return _possibleConstructorReturn(this, _getPrototypeOf(GridCore).apply(this, arguments));
    }

    _createClass(GridCore, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            rows = _this$props.rows,
            columns = _this$props.columns,
            getRowId = _this$props.getRowId,
            getCellValue = _this$props.getCellValue,
            Root = _this$props.rootComponent;
        return React.createElement(dxReactCore.Plugin, null, React.createElement(dxReactCore.Getter, {
          name: "rows",
          value: rows
        }), React.createElement(dxReactCore.Getter, {
          name: "getRowId",
          value: dxGridCore.rowIdGetter(getRowId, rows)
        }), React.createElement(dxReactCore.Getter, {
          name: "columns",
          value: columns
        }), React.createElement(dxReactCore.Getter, {
          name: "getCellValue",
          value: dxGridCore.cellValueGetter(getCellValue, columns)
        }), React.createElement(dxReactCore.Template, {
          name: "root"
        }, React.createElement(Root, null, React.createElement(dxReactCore.TemplatePlaceholder, {
          name: "header"
        }), React.createElement(dxReactCore.TemplatePlaceholder, {
          name: "body"
        }), React.createElement(dxReactCore.TemplatePlaceholder, {
          name: "footer"
        }))));
      }
    }]);

    return GridCore;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? GridCore.propTypes = {
    rows: PropTypes.array.isRequired,
    getRowId: PropTypes.func,
    getCellValue: PropTypes.func,
    columns: PropTypes.array.isRequired,
    rootComponent: PropTypes.func.isRequired
  } : void 0;
  GridCore.defaultProps = {
    getRowId: undefined,
    getCellValue: undefined
  };

  var Grid = function Grid(_ref) {
    var rows = _ref.rows,
        columns = _ref.columns,
        getRowId = _ref.getRowId,
        getCellValue = _ref.getCellValue,
        rootComponent = _ref.rootComponent,
        children = _ref.children;
    return React.createElement(dxReactCore.PluginHost, null, React.createElement(GridCore, {
      rows: rows,
      columns: columns,
      getRowId: getRowId,
      getCellValue: getCellValue,
      rootComponent: rootComponent
    }), children);
  };
  process.env.NODE_ENV !== "production" ? Grid.propTypes = {
    rows: PropTypes.array.isRequired,
    getRowId: PropTypes.func,
    getCellValue: PropTypes.func,
    columns: PropTypes.array.isRequired,
    rootComponent: PropTypes.func.isRequired,
    children: PropTypes.node
  } : void 0;
  Grid.defaultProps = {
    getRowId: undefined,
    getCellValue: undefined,
    children: undefined
  };

  var pluginDependencies = [{
    name: 'TableColumnVisibility'
  }, {
    name: 'Toolbar'
  }];
  var ColumnChooser =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(ColumnChooser, _React$PureComponent);

    function ColumnChooser(props) {
      var _this;

      _classCallCheck(this, ColumnChooser);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnChooser).call(this, props));
      _this.state = {
        visible: false
      };
      _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleHide = _this.handleHide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.setButtonRef = _this.setButtonRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(ColumnChooser, [{
      key: "setButtonRef",
      value: function setButtonRef(button) {
        this.button = button;
      }
    }, {
      key: "handleToggle",
      value: function handleToggle() {
        var visible = this.state.visible;
        this.setState({
          visible: !visible
        });
      }
    }, {
      key: "handleHide",
      value: function handleHide() {
        this.setState({
          visible: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            Overlay = _this$props.overlayComponent,
            Container = _this$props.containerComponent,
            Item = _this$props.itemComponent,
            ToggleButton = _this$props.toggleButtonComponent,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(messages);
        var visible = this.state.visible;
        return React.createElement(dxReactCore.Plugin, {
          name: "ColumnChooser",
          dependencies: pluginDependencies
        }, React.createElement(dxReactCore.Template, {
          name: "toolbarContent"
        }, React.createElement(dxReactCore.TemplatePlaceholder, null), React.createElement(dxReactCore.TemplateConnector, null, function (_ref, _ref2) {
          var columns = _ref.columns,
              hiddenColumnNames = _ref.hiddenColumnNames,
              isColumnTogglingEnabled = _ref.isColumnTogglingEnabled;
          var toggleColumnVisibility = _ref2.toggleColumnVisibility;
          return React.createElement(React.Fragment, null, React.createElement(ToggleButton, {
            buttonRef: _this2.setButtonRef,
            onToggle: _this2.handleToggle,
            getMessage: getMessage,
            active: visible
          }), React.createElement(Overlay, {
            visible: visible,
            target: _this2.button,
            onHide: _this2.handleHide
          }, React.createElement(Container, null, dxGridCore.columnChooserItems(columns, hiddenColumnNames).map(function (item) {
            var columnName = item.column.name;
            var togglingEnabled = isColumnTogglingEnabled(columnName);
            return React.createElement(Item, {
              key: columnName,
              item: item,
              disabled: !togglingEnabled,
              onToggle: function onToggle() {
                return toggleColumnVisibility(columnName);
              }
            });
          }))));
        })));
      }
    }]);

    return ColumnChooser;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? ColumnChooser.propTypes = {
    overlayComponent: PropTypes.func.isRequired,
    containerComponent: PropTypes.func.isRequired,
    itemComponent: PropTypes.func.isRequired,
    toggleButtonComponent: PropTypes.func.isRequired,
    messages: PropTypes.object
  } : void 0;
  ColumnChooser.defaultProps = {
    messages: {}
  };
  ColumnChooser.components = {
    overlayComponent: 'Overlay',
    containerComponent: 'Container',
    itemComponent: 'Item',
    toggleButtonComponent: 'ToggleButton'
  };

  var columnExtensionValueGetter = function columnExtensionValueGetter(columnExtensions, defaultValue) {
    return dxGridCore.getColumnExtensionValueGetter(columnExtensions, 'filteringEnabled', defaultValue);
  };

  var filterExpressionComputed = function filterExpressionComputed(_ref) {
    var filters = _ref.filters,
        filterExpressionValue = _ref.filterExpression;
    return dxGridCore.filterExpression(filters, filterExpressionValue);
  };

  var FilteringState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(FilteringState, _React$PureComponent);

    function FilteringState(props) {
      var _this;

      _classCallCheck(this, FilteringState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilteringState).call(this, props));
      _this.state = {
        filters: props.filters || props.defaultFilters
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        filters: function filters() {
          var onFiltersChange = _this.props.onFiltersChange;
          return onFiltersChange;
        }
      });
      _this.changeColumnFilter = stateHelper.applyFieldReducer.bind(stateHelper, 'filters', dxGridCore.changeColumnFilter);
      return _this;
    }

    _createClass(FilteringState, [{
      key: "render",
      value: function render() {
        var filters = this.state.filters;
        var _this$props = this.props,
            columnExtensions = _this$props.columnExtensions,
            columnFilteringEnabled = _this$props.columnFilteringEnabled;
        return React.createElement(dxReactCore.Plugin, {
          name: "FilteringState"
        }, React.createElement(dxReactCore.Getter, {
          name: "filters",
          value: filters
        }), React.createElement(dxReactCore.Getter, {
          name: "filterExpression",
          computed: filterExpressionComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "isColumnFilteringEnabled",
          value: columnExtensionValueGetter(columnExtensions, columnFilteringEnabled)
        }), React.createElement(dxReactCore.Action, {
          name: "changeColumnFilter",
          action: this.changeColumnFilter
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$filters = nextProps.filters,
            filters = _nextProps$filters === void 0 ? prevState.filters : _nextProps$filters;
        return {
          filters: filters
        };
      }
    }]);

    return FilteringState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? FilteringState.propTypes = {
    filters: PropTypes.array,
    defaultFilters: PropTypes.array,
    onFiltersChange: PropTypes.func,
    columnExtensions: PropTypes.array,
    columnFilteringEnabled: PropTypes.bool
  } : void 0;
  FilteringState.defaultProps = {
    filters: undefined,
    defaultFilters: [],
    onFiltersChange: undefined,
    columnExtensions: undefined,
    columnFilteringEnabled: true
  };

  var pluginDependencies$1 = [{
    name: 'FilteringState',
    optional: true
  }, {
    name: 'SearchState',
    optional: true
  }];

  var getCollapsedRowsComputed = function getCollapsedRowsComputed(_ref) {
    var rows = _ref.rows;
    return dxGridCore.filteredCollapsedRowsGetter(rows);
  };

  var unwrappedRowsComputed = function unwrappedRowsComputed(_ref2) {
    var rows = _ref2.rows;
    return dxGridCore.unwrappedFilteredRows(rows);
  };

  var IntegratedFiltering =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(IntegratedFiltering, _React$PureComponent);

    function IntegratedFiltering() {
      _classCallCheck(this, IntegratedFiltering);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegratedFiltering).apply(this, arguments));
    }

    _createClass(IntegratedFiltering, [{
      key: "render",
      value: function render() {
        var columnExtensions = this.props.columnExtensions;

        var getColumnPredicate = function getColumnPredicate(columnName) {
          return dxGridCore.getColumnExtension(columnExtensions, columnName).predicate;
        };

        var rowsComputed = function rowsComputed(_ref3) {
          var rows = _ref3.rows,
              filterExpression = _ref3.filterExpression,
              getCellValue = _ref3.getCellValue,
              getRowLevelKey = _ref3.getRowLevelKey,
              getCollapsedRows = _ref3.getCollapsedRows;
          return dxGridCore.filteredRows(rows, filterExpression, getCellValue, getColumnPredicate, getRowLevelKey, getCollapsedRows);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "IntegratedFiltering",
          dependencies: pluginDependencies$1
        }, React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: rowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "getCollapsedRows",
          computed: getCollapsedRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: unwrappedRowsComputed
        }));
      }
    }]);

    return IntegratedFiltering;
  }(React.PureComponent);
  IntegratedFiltering.defaultPredicate = dxGridCore.defaultFilterPredicate;
  process.env.NODE_ENV !== "production" ? IntegratedFiltering.propTypes = {
    columnExtensions: PropTypes.array
  } : void 0;
  IntegratedFiltering.defaultProps = {
    columnExtensions: undefined
  };

  var columnExtensionValueGetter$1 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
    return dxGridCore.getColumnExtensionValueGetter(columnExtensions, 'editingEnabled', defaultValue);
  };

  var EditingState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(EditingState, _React$PureComponent);

    function EditingState(props) {
      var _this;

      _classCallCheck(this, EditingState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(EditingState).call(this, props));
      var rowChanges = props.rowChanges || props.defaultRowChanges;
      var addedRows = props.addedRows || props.defaultAddedRows;

      var getRowChanges = function getRowChanges() {
        var stateRowChanges = _this.state.rowChanges;
        return stateRowChanges;
      };

      var getAddedRows = function getAddedRows() {
        var stateAddedRows = _this.state.addedRows;
        return stateAddedRows;
      };

      _this.state = {
        editingRowIds: props.editingRowIds || props.defaultEditingRowIds,
        addedRows: addedRows,
        rowChanges: rowChanges,
        deletedRowIds: props.deletedRowIds || props.defaultDeletedRowIds
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        editingRowIds: function editingRowIds() {
          var onEditingRowIdsChange = _this.props.onEditingRowIdsChange;
          return onEditingRowIdsChange;
        },
        addedRows: function addedRows() {
          var onAddedRowsChange = _this.props.onAddedRowsChange;
          return onAddedRowsChange;
        },
        rowChanges: function rowChanges() {
          var onRowChangesChange = _this.props.onRowChangesChange;
          return onRowChangesChange;
        },
        deletedRowIds: function deletedRowIds() {
          var onDeletedRowIdsChange = _this.props.onDeletedRowIdsChange;
          return onDeletedRowIdsChange;
        }
      });
      _this.startEditRows = stateHelper.applyFieldReducer.bind(stateHelper, 'editingRowIds', dxGridCore.startEditRows);
      _this.stopEditRows = stateHelper.applyFieldReducer.bind(stateHelper, 'editingRowIds', dxGridCore.stopEditRows);
      _this.changeRow = stateHelper.applyFieldReducer.bind(stateHelper, 'rowChanges', dxGridCore.changeRow);
      _this.cancelChangedRows = stateHelper.applyFieldReducer.bind(stateHelper, 'rowChanges', dxGridCore.cancelChanges);

      _this.commitChangedRows = function (_ref) {
        var rowIds = _ref.rowIds;
        var onCommitChanges = _this.props.onCommitChanges;
        onCommitChanges({
          changed: dxGridCore.changedRowsByIds(getRowChanges(), rowIds)
        });

        _this.cancelChangedRows({
          rowIds: rowIds
        });
      };

      _this.addRow = stateHelper.applyFieldReducer.bind(stateHelper, 'addedRows', dxGridCore.addRow);
      _this.changeAddedRow = stateHelper.applyFieldReducer.bind(stateHelper, 'addedRows', dxGridCore.changeAddedRow);
      _this.cancelAddedRows = stateHelper.applyFieldReducer.bind(stateHelper, 'addedRows', dxGridCore.cancelAddedRows);

      _this.commitAddedRows = function (_ref2) {
        var rowIds = _ref2.rowIds;
        var onCommitChanges = _this.props.onCommitChanges;
        onCommitChanges({
          added: dxGridCore.addedRowsByIds(getAddedRows(), rowIds)
        });

        _this.cancelAddedRows({
          rowIds: rowIds
        });
      };

      _this.deleteRows = stateHelper.applyFieldReducer.bind(stateHelper, 'deletedRowIds', dxGridCore.deleteRows);
      _this.cancelDeletedRows = stateHelper.applyFieldReducer.bind(stateHelper, 'deletedRowIds', dxGridCore.cancelDeletedRows);

      _this.commitDeletedRows = function (_ref3) {
        var rowIds = _ref3.rowIds;
        var onCommitChanges = _this.props.onCommitChanges;
        onCommitChanges({
          deleted: rowIds
        });

        _this.cancelDeletedRows({
          rowIds: rowIds
        });
      };

      return _this;
    }

    _createClass(EditingState, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            createRowChange = _this$props.createRowChange,
            columnExtensions = _this$props.columnExtensions,
            columnEditingEnabled = _this$props.columnEditingEnabled;
        var _this$state = this.state,
            editingRowIds = _this$state.editingRowIds,
            rowChanges = _this$state.rowChanges,
            addedRows = _this$state.addedRows,
            deletedRowIds = _this$state.deletedRowIds;
        return React.createElement(dxReactCore.Plugin, {
          name: "EditingState"
        }, React.createElement(dxReactCore.Getter, {
          name: "createRowChange",
          value: dxGridCore.createRowChangeGetter(createRowChange, columnExtensions)
        }), React.createElement(dxReactCore.Getter, {
          name: "editingRowIds",
          value: editingRowIds
        }), React.createElement(dxReactCore.Action, {
          name: "startEditRows",
          action: this.startEditRows
        }), React.createElement(dxReactCore.Action, {
          name: "stopEditRows",
          action: this.stopEditRows
        }), React.createElement(dxReactCore.Getter, {
          name: "rowChanges",
          value: rowChanges
        }), React.createElement(dxReactCore.Action, {
          name: "changeRow",
          action: this.changeRow
        }), React.createElement(dxReactCore.Action, {
          name: "cancelChangedRows",
          action: this.cancelChangedRows
        }), React.createElement(dxReactCore.Action, {
          name: "commitChangedRows",
          action: this.commitChangedRows
        }), React.createElement(dxReactCore.Getter, {
          name: "addedRows",
          value: addedRows
        }), React.createElement(dxReactCore.Action, {
          name: "addRow",
          action: this.addRow
        }), React.createElement(dxReactCore.Action, {
          name: "changeAddedRow",
          action: this.changeAddedRow
        }), React.createElement(dxReactCore.Action, {
          name: "cancelAddedRows",
          action: this.cancelAddedRows
        }), React.createElement(dxReactCore.Action, {
          name: "commitAddedRows",
          action: this.commitAddedRows
        }), React.createElement(dxReactCore.Getter, {
          name: "deletedRowIds",
          value: deletedRowIds
        }), React.createElement(dxReactCore.Action, {
          name: "deleteRows",
          action: this.deleteRows
        }), React.createElement(dxReactCore.Action, {
          name: "cancelDeletedRows",
          action: this.cancelDeletedRows
        }), React.createElement(dxReactCore.Action, {
          name: "commitDeletedRows",
          action: this.commitDeletedRows
        }), React.createElement(dxReactCore.Getter, {
          name: "isColumnEditingEnabled",
          value: columnExtensionValueGetter$1(columnExtensions, columnEditingEnabled)
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$editingRow = nextProps.editingRowIds,
            editingRowIds = _nextProps$editingRow === void 0 ? prevState.editingRowIds : _nextProps$editingRow,
            _nextProps$rowChanges = nextProps.rowChanges,
            rowChanges = _nextProps$rowChanges === void 0 ? prevState.rowChanges : _nextProps$rowChanges,
            _nextProps$addedRows = nextProps.addedRows,
            addedRows = _nextProps$addedRows === void 0 ? prevState.addedRows : _nextProps$addedRows,
            _nextProps$deletedRow = nextProps.deletedRowIds,
            deletedRowIds = _nextProps$deletedRow === void 0 ? prevState.deletedRowIds : _nextProps$deletedRow;
        return {
          editingRowIds: editingRowIds,
          rowChanges: rowChanges,
          addedRows: addedRows,
          deletedRowIds: deletedRowIds
        };
      }
    }]);

    return EditingState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? EditingState.propTypes = {
    createRowChange: PropTypes.func,
    columnEditingEnabled: PropTypes.bool,
    columnExtensions: PropTypes.array,
    editingRowIds: PropTypes.array,
    defaultEditingRowIds: PropTypes.array,
    onEditingRowIdsChange: PropTypes.func,
    addedRows: PropTypes.array,
    defaultAddedRows: PropTypes.array,
    onAddedRowsChange: PropTypes.func,
    rowChanges: PropTypes.object,
    defaultRowChanges: PropTypes.object,
    onRowChangesChange: PropTypes.func,
    deletedRowIds: PropTypes.array,
    defaultDeletedRowIds: PropTypes.array,
    onDeletedRowIdsChange: PropTypes.func,
    onCommitChanges: PropTypes.func.isRequired
  } : void 0;
  EditingState.defaultProps = {
    createRowChange: undefined,
    columnEditingEnabled: true,
    columnExtensions: undefined,
    editingRowIds: undefined,
    defaultEditingRowIds: [],
    onEditingRowIdsChange: undefined,
    rowChanges: undefined,
    defaultRowChanges: {},
    onRowChangesChange: undefined,
    addedRows: undefined,
    defaultAddedRows: [],
    onAddedRowsChange: undefined,
    deletedRowIds: undefined,
    defaultDeletedRowIds: [],
    onDeletedRowIdsChange: undefined
  };

  var PagingState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(PagingState, _React$PureComponent);

    function PagingState(props) {
      var _this;

      _classCallCheck(this, PagingState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PagingState).call(this, props));
      _this.state = {
        currentPage: props.currentPage || props.defaultCurrentPage,
        pageSize: props.pageSize !== undefined ? props.pageSize : props.defaultPageSize
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        currentPage: function currentPage() {
          var onCurrentPageChange = _this.props.onCurrentPageChange;
          return onCurrentPageChange;
        },
        pageSize: function pageSize() {
          var onPageSizeChange = _this.props.onPageSizeChange;
          return onPageSizeChange;
        }
      });
      _this.setCurrentPage = stateHelper.applyFieldReducer.bind(stateHelper, 'currentPage', dxGridCore.setCurrentPage);
      _this.setPageSize = stateHelper.applyFieldReducer.bind(stateHelper, 'pageSize', dxGridCore.setPageSize);
      return _this;
    }

    _createClass(PagingState, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            pageSize = _this$state.pageSize,
            currentPage = _this$state.currentPage;
        return React.createElement(dxReactCore.Plugin, {
          name: "PagingState"
        }, React.createElement(dxReactCore.Getter, {
          name: "currentPage",
          value: currentPage
        }), React.createElement(dxReactCore.Getter, {
          name: "pageSize",
          value: pageSize
        }), React.createElement(dxReactCore.Action, {
          name: "setCurrentPage",
          action: this.setCurrentPage
        }), React.createElement(dxReactCore.Action, {
          name: "setPageSize",
          action: this.setPageSize
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$currentPag = nextProps.currentPage,
            currentPage = _nextProps$currentPag === void 0 ? prevState.currentPage : _nextProps$currentPag,
            _nextProps$pageSize = nextProps.pageSize,
            pageSize = _nextProps$pageSize === void 0 ? prevState.pageSize : _nextProps$pageSize;
        return {
          currentPage: currentPage,
          pageSize: pageSize
        };
      }
    }]);

    return PagingState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? PagingState.propTypes = {
    pageSize: PropTypes.number,
    defaultPageSize: PropTypes.number,
    onPageSizeChange: PropTypes.func,
    currentPage: PropTypes.number,
    defaultCurrentPage: PropTypes.number,
    onCurrentPageChange: PropTypes.func
  } : void 0;
  PagingState.defaultProps = {
    pageSize: undefined,
    defaultPageSize: 10,
    onPageSizeChange: undefined,
    currentPage: undefined,
    defaultCurrentPage: 0,
    onCurrentPageChange: undefined
  };

  var pluginDependencies$2 = [{
    name: 'PagingState'
  }];

  var rowsWithHeadersComputed = function rowsWithHeadersComputed(_ref) {
    var rows = _ref.rows,
        pageSize = _ref.pageSize,
        getRowLevelKey = _ref.getRowLevelKey;
    return dxGridCore.rowsWithPageHeaders(rows, pageSize, getRowLevelKey);
  };

  var totalCountComputed = function totalCountComputed(_ref2) {
    var rows = _ref2.rows;
    return dxGridCore.rowCount(rows);
  };

  var paginatedRowsComputed = function paginatedRowsComputed(_ref3) {
    var rows = _ref3.rows,
        pageSize = _ref3.pageSize,
        page = _ref3.currentPage;
    return dxGridCore.paginatedRows(rows, pageSize, page);
  };

  var currentPageComputed = function currentPageComputed(_ref4, _ref5) {
    var page = _ref4.currentPage,
        totalCount = _ref4.totalCount,
        pageSize = _ref4.pageSize;
    var setCurrentPage = _ref5.setCurrentPage;
    return dxGridCore.currentPage(page, totalCount, pageSize, setCurrentPage);
  }; // eslint-disable-next-line react/prefer-stateless-function


  var IntegratedPaging =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(IntegratedPaging, _React$PureComponent);

    function IntegratedPaging() {
      _classCallCheck(this, IntegratedPaging);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegratedPaging).apply(this, arguments));
    }

    _createClass(IntegratedPaging, [{
      key: "render",
      value: function render() {
        return React.createElement(dxReactCore.Plugin, {
          name: "IntegratedPaging",
          dependencies: pluginDependencies$2
        }, React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: rowsWithHeadersComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "totalCount",
          computed: totalCountComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "currentPage",
          computed: currentPageComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: paginatedRowsComputed
        }));
      }
    }]);

    return IntegratedPaging;
  }(React.PureComponent);

  var pluginDependencies$3 = [{
    name: 'PagingState'
  }];
  var CustomPaging =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(CustomPaging, _React$PureComponent);

    function CustomPaging() {
      _classCallCheck(this, CustomPaging);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomPaging).apply(this, arguments));
    }

    _createClass(CustomPaging, [{
      key: "render",
      value: function render() {
        var totalCount = this.props.totalCount;
        return React.createElement(dxReactCore.Plugin, {
          name: "CustomPaging",
          dependencies: pluginDependencies$3
        }, React.createElement(dxReactCore.Getter, {
          name: "totalCount",
          value: totalCount
        }));
      }
    }]);

    return CustomPaging;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? CustomPaging.propTypes = {
    totalCount: PropTypes.number
  } : void 0;
  CustomPaging.defaultProps = {
    totalCount: 0
  };

  var dependencies = [{
    name: 'SortingState',
    optional: true
  }];

  var columnExtensionValueGetter$2 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
    return dxGridCore.getColumnExtensionValueGetter(columnExtensions, 'groupingEnabled', defaultValue);
  };

  var GroupingState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(GroupingState, _React$PureComponent);

    function GroupingState(props) {
      var _this;

      _classCallCheck(this, GroupingState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupingState).call(this, props));
      _this.state = {
        grouping: props.grouping || props.defaultGrouping,
        draftGrouping: null,
        expandedGroups: props.expandedGroups || props.defaultExpandedGroups
      };
      _this.stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        grouping: function grouping() {
          var onGroupingChange = _this.props.onGroupingChange;
          return onGroupingChange;
        },
        expandedGroups: function expandedGroups() {
          var onExpandedGroupsChange = _this.props.onExpandedGroupsChange;
          return onExpandedGroupsChange;
        }
      });
      _this.changeColumnGrouping = _this.changeColumnGrouping.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.toggleGroupExpanded = _this.stateHelper.applyReducer.bind(_this.stateHelper, dxGridCore.toggleExpandedGroups);
      _this.draftColumnGrouping = _this.stateHelper.applyReducer.bind(_this.stateHelper, dxGridCore.draftColumnGrouping);
      _this.cancelColumnGroupingDraft = _this.stateHelper.applyReducer.bind(_this.stateHelper, dxGridCore.cancelColumnGroupingDraft);
      _this.changeColumnSorting = _this.changeColumnSorting.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(GroupingState, [{
      key: "changeColumnSorting",
      value: function changeColumnSorting(_ref, _ref2, _ref3) {
        var columnName = _ref.columnName,
            keepOther = _ref.keepOther,
            restParams = _objectWithoutProperties(_ref, ["columnName", "keepOther"]);

        var sorting = _ref2.sorting;
        var _changeColumnSorting = _ref3.changeColumnSorting;
        var grouping = this.state.grouping;
        var groupingIndex = grouping.findIndex(function (columnGrouping) {
          return columnGrouping.columnName === columnName;
        });

        if (groupingIndex === -1) {
          _changeColumnSorting(_objectSpread({
            columnName: columnName,
            keepOther: keepOther || grouping.map(function (columnGrouping) {
              return columnGrouping.columnName;
            })
          }, restParams));

          return false;
        }

        var sortIndex = dxGridCore.adjustSortIndex(groupingIndex, grouping, sorting);

        _changeColumnSorting(_objectSpread({
          columnName: columnName,
          keepOther: true,
          sortIndex: sortIndex
        }, restParams));

        return false;
      }
    }, {
      key: "changeColumnGrouping",
      value: function changeColumnGrouping(_ref4, getters, actions) {
        var columnName = _ref4.columnName,
            groupIndex = _ref4.groupIndex;
        this.stateHelper.applyReducer(dxGridCore.changeColumnGrouping, {
          columnName: columnName,
          groupIndex: groupIndex
        }, function (nextState, state) {
          var grouping = nextState.grouping;
          var prevGrouping = state.grouping;
          var sorting = getters.sorting;
          var changeColumnSorting = actions.changeColumnSorting;
          if (!sorting) return;
          var columnSortingIndex = sorting.findIndex(function (columnSorting) {
            return columnSorting.columnName === columnName;
          });
          var prevGroupingIndex = prevGrouping.findIndex(function (columnGrouping) {
            return columnGrouping.columnName === columnName;
          });
          var groupingIndex = grouping.findIndex(function (columnGrouping) {
            return columnGrouping.columnName === columnName;
          });
          if (columnSortingIndex === -1 || prevGroupingIndex === prevGrouping.length - 1 && groupingIndex === -1) return;
          var sortIndex = dxGridCore.adjustSortIndex(groupingIndex === -1 ? grouping.length : groupingIndex, grouping, sorting);
          if (columnSortingIndex === sortIndex) return;
          changeColumnSorting(_objectSpread({
            keepOther: true,
            sortIndex: sortIndex
          }, sorting[columnSortingIndex]));
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            grouping = _this$state.grouping,
            draftGrouping = _this$state.draftGrouping,
            expandedGroups = _this$state.expandedGroups;
        var _this$props = this.props,
            columnExtensions = _this$props.columnExtensions,
            columnGroupingEnabled = _this$props.columnGroupingEnabled;
        return React.createElement(dxReactCore.Plugin, {
          name: "GroupingState",
          dependencies: dependencies
        }, React.createElement(dxReactCore.Getter, {
          name: "grouping",
          value: grouping
        }), React.createElement(dxReactCore.Getter, {
          name: "draftGrouping",
          value: draftGrouping || grouping
        }), React.createElement(dxReactCore.Getter, {
          name: "isColumnGroupingEnabled",
          value: columnExtensionValueGetter$2(columnExtensions, columnGroupingEnabled)
        }), React.createElement(dxReactCore.Action, {
          name: "changeColumnGrouping",
          action: this.changeColumnGrouping
        }), React.createElement(dxReactCore.Action, {
          name: "draftColumnGrouping",
          action: this.draftColumnGrouping
        }), React.createElement(dxReactCore.Action, {
          name: "cancelColumnGroupingDraft",
          action: this.cancelColumnGroupingDraft
        }), React.createElement(dxReactCore.Getter, {
          name: "expandedGroups",
          value: expandedGroups
        }), React.createElement(dxReactCore.Action, {
          name: "toggleGroupExpanded",
          action: this.toggleGroupExpanded
        }), React.createElement(dxReactCore.Action, {
          name: "changeColumnSorting",
          action: this.changeColumnSorting
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$grouping = nextProps.grouping,
            grouping = _nextProps$grouping === void 0 ? prevState.grouping : _nextProps$grouping,
            _nextProps$expandedGr = nextProps.expandedGroups,
            expandedGroups = _nextProps$expandedGr === void 0 ? prevState.expandedGroups : _nextProps$expandedGr;
        return {
          grouping: grouping,
          expandedGroups: expandedGroups
        };
      }
    }]);

    return GroupingState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? GroupingState.propTypes = {
    grouping: PropTypes.array,
    defaultGrouping: PropTypes.array,
    onGroupingChange: PropTypes.func,
    expandedGroups: PropTypes.array,
    defaultExpandedGroups: PropTypes.array,
    onExpandedGroupsChange: PropTypes.func,
    columnExtensions: PropTypes.array,
    columnGroupingEnabled: PropTypes.bool
  } : void 0;
  GroupingState.defaultProps = {
    grouping: undefined,
    defaultGrouping: [],
    onGroupingChange: undefined,
    expandedGroups: undefined,
    defaultExpandedGroups: [],
    onExpandedGroupsChange: undefined,
    columnExtensions: undefined,
    columnGroupingEnabled: true
  };

  var pluginDependencies$4 = [{
    name: 'GroupingState'
  }];

  var getCollapsedRowsComputed$1 = function getCollapsedRowsComputed(_ref) {
    var getCollapsedRows = _ref.getCollapsedRows;
    return dxGridCore.groupCollapsedRowsGetter(getCollapsedRows);
  };

  var expandedGroupedRowsComputed = function expandedGroupedRowsComputed(_ref2) {
    var rows = _ref2.rows,
        grouping = _ref2.grouping,
        expandedGroups = _ref2.expandedGroups;
    return dxGridCore.expandedGroupRows(rows, grouping, expandedGroups);
  };

  var IntegratedGrouping =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(IntegratedGrouping, _React$PureComponent);

    function IntegratedGrouping() {
      _classCallCheck(this, IntegratedGrouping);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegratedGrouping).apply(this, arguments));
    }

    _createClass(IntegratedGrouping, [{
      key: "render",
      value: function render() {
        var columnExtensions = this.props.columnExtensions;

        var getColumnCriteria = function getColumnCriteria(columnName) {
          return dxGridCore.getColumnExtension(columnExtensions, columnName).criteria;
        };

        var groupedRowsComputed = function groupedRowsComputed(_ref3) {
          var rows = _ref3.rows,
              grouping = _ref3.grouping,
              getCellValue = _ref3.getCellValue;
          return dxGridCore.groupedRows(rows, grouping, getCellValue, getColumnCriteria);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "IntegratedGrouping",
          dependencies: pluginDependencies$4
        }, React.createElement(dxReactCore.Getter, {
          name: "isGroupRow",
          value: dxGridCore.groupRowChecker
        }), React.createElement(dxReactCore.Getter, {
          name: "getRowLevelKey",
          value: dxGridCore.groupRowLevelKeyGetter
        }), React.createElement(dxReactCore.Getter, {
          name: "getCollapsedRows",
          computed: getCollapsedRowsComputed$1
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: groupedRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: expandedGroupedRowsComputed
        }));
      }
    }]);

    return IntegratedGrouping;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? IntegratedGrouping.propTypes = {
    columnExtensions: PropTypes.array
  } : void 0;
  IntegratedGrouping.defaultProps = {
    columnExtensions: undefined
  };

  var pluginDependencies$5 = [{
    name: 'GroupingState'
  }];

  var getCollapsedRowsComputed$2 = function getCollapsedRowsComputed(_ref) {
    var getCollapsedRows = _ref.getCollapsedRows;
    return dxGridCore.groupCollapsedRowsGetter(getCollapsedRows);
  };

  var expandedGroupedRowsComputed$1 = function expandedGroupedRowsComputed(_ref2) {
    var rows = _ref2.rows,
        grouping = _ref2.grouping,
        expandedGroups = _ref2.expandedGroups;
    return dxGridCore.expandedGroupRows(rows, grouping, expandedGroups);
  };

  var getRowIdComputed = function getRowIdComputed(_ref3) {
    var getRowId = _ref3.getRowId,
        rows = _ref3.rows;
    return dxGridCore.customGroupingRowIdGetter(getRowId, rows);
  };

  var CustomGrouping =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(CustomGrouping, _React$PureComponent);

    function CustomGrouping() {
      _classCallCheck(this, CustomGrouping);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrouping).apply(this, arguments));
    }

    _createClass(CustomGrouping, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            getChildGroups = _this$props.getChildGroups,
            appliedGrouping = _this$props.grouping,
            appliedExpandedGroups = _this$props.expandedGroups;

        var groupedRowsComputed = function groupedRowsComputed(_ref4) {
          var rows = _ref4.rows,
              grouping = _ref4.grouping;
          return dxGridCore.customGroupedRows(rows, grouping, getChildGroups);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "CustomGrouping",
          dependencies: pluginDependencies$5
        }, appliedGrouping && React.createElement(dxReactCore.Getter, {
          name: "grouping",
          value: appliedGrouping
        }), appliedExpandedGroups && React.createElement(dxReactCore.Getter, {
          name: "expandedGroups",
          value: appliedExpandedGroups
        }), React.createElement(dxReactCore.Getter, {
          name: "isGroupRow",
          value: dxGridCore.groupRowChecker
        }), React.createElement(dxReactCore.Getter, {
          name: "getRowLevelKey",
          value: dxGridCore.groupRowLevelKeyGetter
        }), React.createElement(dxReactCore.Getter, {
          name: "getCollapsedRows",
          computed: getCollapsedRowsComputed$2
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: groupedRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "getRowId",
          computed: getRowIdComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: expandedGroupedRowsComputed$1
        }));
      }
    }]);

    return CustomGrouping;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? CustomGrouping.propTypes = {
    getChildGroups: PropTypes.func.isRequired,
    grouping: PropTypes.array,
    expandedGroups: PropTypes.array
  } : void 0;
  CustomGrouping.defaultProps = {
    grouping: undefined,
    expandedGroups: undefined
  };

  var SelectionState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(SelectionState, _React$PureComponent);

    function SelectionState(props) {
      var _this;

      _classCallCheck(this, SelectionState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectionState).call(this, props));
      _this.state = {
        selection: props.selection || props.defaultSelection
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        selection: function selection() {
          var onSelectionChange = _this.props.onSelectionChange;
          return onSelectionChange;
        }
      });
      _this.toggleSelection = stateHelper.applyFieldReducer.bind(stateHelper, 'selection', dxGridCore.toggleSelection);
      return _this;
    }

    _createClass(SelectionState, [{
      key: "render",
      value: function render() {
        var selection = this.state.selection;
        return React.createElement(dxReactCore.Plugin, {
          name: "SelectionState"
        }, React.createElement(dxReactCore.Getter, {
          name: "selection",
          value: selection
        }), React.createElement(dxReactCore.Action, {
          name: "toggleSelection",
          action: this.toggleSelection
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$selection = nextProps.selection,
            selection = _nextProps$selection === void 0 ? prevState.selection : _nextProps$selection;
        return {
          selection: selection
        };
      }
    }]);

    return SelectionState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? SelectionState.propTypes = {
    selection: PropTypes.array,
    defaultSelection: PropTypes.array,
    onSelectionChange: PropTypes.func
  } : void 0;
  SelectionState.defaultProps = {
    selection: undefined,
    defaultSelection: [],
    onSelectionChange: undefined
  };

  var rowsWithAvailableToSelectComputed = function rowsWithAvailableToSelectComputed(_ref) {
    var rows = _ref.rows,
        getRowId = _ref.getRowId,
        isGroupRow = _ref.isGroupRow;
    return dxGridCore.rowsWithAvailableToSelect(rows, getRowId, isGroupRow);
  };

  var allSelectedComputed = function allSelectedComputed(_ref2) {
    var rows = _ref2.rows,
        selection = _ref2.selection;
    return dxGridCore.allSelected(rows, selection);
  };

  var someSelectedComputed = function someSelectedComputed(_ref3) {
    var rows = _ref3.rows,
        selection = _ref3.selection;
    return dxGridCore.someSelected(rows, selection);
  };

  var selectAllAvailableComputed = function selectAllAvailableComputed(_ref4) {
    var availableToSelect = _ref4.rows.availableToSelect;
    return !!availableToSelect.length;
  };

  var toggleSelectAll = function toggleSelectAll(state, _ref5, _ref6) {
    var availableToSelect = _ref5.rows.availableToSelect;
    var toggleSelection = _ref6.toggleSelection;
    toggleSelection({
      rowIds: availableToSelect,
      state: state
    });
  };

  var unwrapRowsComputed = function unwrapRowsComputed(_ref7) {
    var rows = _ref7.rows;
    return dxGridCore.unwrapSelectedRows(rows);
  };

  var pluginDependencies$6 = [{
    name: 'SelectionState'
  }]; // eslint-disable-next-line react/prefer-stateless-function

  var IntegratedSelection =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(IntegratedSelection, _React$PureComponent);

    function IntegratedSelection() {
      _classCallCheck(this, IntegratedSelection);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegratedSelection).apply(this, arguments));
    }

    _createClass(IntegratedSelection, [{
      key: "render",
      value: function render() {
        return React.createElement(dxReactCore.Plugin, {
          name: "IntegratedSelection",
          dependencies: pluginDependencies$6
        }, React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: rowsWithAvailableToSelectComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "allSelected",
          computed: allSelectedComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "someSelected",
          computed: someSelectedComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "selectAllAvailable",
          computed: selectAllAvailableComputed
        }), React.createElement(dxReactCore.Action, {
          name: "toggleSelectAll",
          action: toggleSelectAll
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: unwrapRowsComputed
        }));
      }
    }]);

    return IntegratedSelection;
  }(React.PureComponent);

  var columnExtensionValueGetter$3 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
    return dxGridCore.getColumnExtensionValueGetter(columnExtensions, 'sortingEnabled', defaultValue);
  };

  var SortingState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(SortingState, _React$PureComponent);

    function SortingState(props) {
      var _this;

      _classCallCheck(this, SortingState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SortingState).call(this, props));
      _this.state = {
        sorting: props.sorting || props.defaultSorting
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        sorting: function sorting() {
          var onSortingChange = _this.props.onSortingChange;
          return onSortingChange;
        }
      });
      _this.changeColumnSorting = stateHelper.applyReducer.bind(stateHelper, function (prevState, payload) {
        var _this$props$sorting = _this.props.sorting,
            sorting = _this$props$sorting === void 0 ? prevState.sorting : _this$props$sorting;
        var persistentSortedColumns = dxGridCore.getPersistentSortedColumns(sorting, props.columnExtensions);
        var keepOther = dxGridCore.calculateKeepOther(prevState.sorting, payload.keepOther, persistentSortedColumns);
        return dxGridCore.changeColumnSorting(prevState, _objectSpread({}, payload, {
          keepOther: keepOther
        }));
      });
      return _this;
    }

    _createClass(SortingState, [{
      key: "render",
      value: function render() {
        var sorting = this.state.sorting;
        var _this$props = this.props,
            columnExtensions = _this$props.columnExtensions,
            columnSortingEnabled = _this$props.columnSortingEnabled;
        return React.createElement(dxReactCore.Plugin, {
          name: "SortingState"
        }, React.createElement(dxReactCore.Getter, {
          name: "sorting",
          value: sorting
        }), React.createElement(dxReactCore.Getter, {
          name: "isColumnSortingEnabled",
          value: columnExtensionValueGetter$3(columnExtensions, columnSortingEnabled)
        }), React.createElement(dxReactCore.Action, {
          name: "changeColumnSorting",
          action: this.changeColumnSorting
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$sorting = nextProps.sorting,
            sorting = _nextProps$sorting === void 0 ? prevState.sorting : _nextProps$sorting;
        return {
          sorting: sorting
        };
      }
    }]);

    return SortingState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? SortingState.propTypes = {
    sorting: PropTypes.array,
    defaultSorting: PropTypes.array,
    onSortingChange: PropTypes.func,
    columnExtensions: PropTypes.array,
    columnSortingEnabled: PropTypes.bool
  } : void 0;
  SortingState.defaultProps = {
    sorting: undefined,
    defaultSorting: [],
    onSortingChange: undefined,
    columnExtensions: undefined,
    columnSortingEnabled: true
  };

  var pluginDependencies$7 = [{
    name: 'SortingState'
  }];
  var IntegratedSorting =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(IntegratedSorting, _React$PureComponent);

    function IntegratedSorting() {
      _classCallCheck(this, IntegratedSorting);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegratedSorting).apply(this, arguments));
    }

    _createClass(IntegratedSorting, [{
      key: "render",
      value: function render() {
        var columnExtensions = this.props.columnExtensions;

        var getColumnCompare = function getColumnCompare(columnName) {
          return dxGridCore.getColumnExtension(columnExtensions, columnName).compare;
        };

        var rowsComputed = function rowsComputed(_ref) {
          var rows = _ref.rows,
              sorting = _ref.sorting,
              getCellValue = _ref.getCellValue,
              isGroupRow = _ref.isGroupRow,
              getRowLevelKey = _ref.getRowLevelKey;
          return dxGridCore.sortedRows(rows, sorting, getCellValue, getColumnCompare, isGroupRow, getRowLevelKey);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "IntegratedSorting",
          dependencies: pluginDependencies$7
        }, React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: rowsComputed
        }));
      }
    }]);

    return IntegratedSorting;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? IntegratedSorting.propTypes = {
    columnExtensions: PropTypes.array
  } : void 0;
  IntegratedSorting.defaultProps = {
    columnExtensions: undefined
  };

  var getTargetColumns = function getTargetColumns(payload, columns) {
    return payload.filter(function (item) {
      return item.type === 'column';
    }).map(function (item) {
      return columns.find(function (column) {
        return column.name === item.columnName;
      });
    });
  };

  var DragDropProvider =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(DragDropProvider, _React$PureComponent);

    function DragDropProvider(props) {
      var _this;

      _classCallCheck(this, DragDropProvider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropProvider).call(this, props));
      _this.state = {
        payload: null,
        clientOffset: null
      };

      _this.change = function (_ref) {
        var payload = _ref.payload,
            clientOffset = _ref.clientOffset;
        return _this.setState({
          payload: payload,
          clientOffset: clientOffset
        });
      };

      return _this;
    }

    _createClass(DragDropProvider, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Container = _this$props.containerComponent,
            Column = _this$props.columnComponent;
        var _this$state = this.state,
            payload = _this$state.payload,
            clientOffset = _this$state.clientOffset;
        return React.createElement(dxReactCore.Plugin, {
          name: "DragDropProvider"
        }, React.createElement(dxReactCore.Getter, {
          name: "draggingEnabled",
          value: true
        }), React.createElement(dxReactCore.Template, {
          name: "root"
        }, React.createElement(dxReactCore.DragDropProvider, {
          onChange: this.change
        }, React.createElement(dxReactCore.TemplatePlaceholder, null)), payload && React.createElement(dxReactCore.TemplateConnector, null, function (_ref2) {
          var columns = _ref2.columns;
          return React.createElement(Container, {
            clientOffset: clientOffset
          }, getTargetColumns(payload, columns).map(function (column) {
            return React.createElement(Column, {
              key: column.name,
              column: column
            });
          }));
        })));
      }
    }]);

    return DragDropProvider;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? DragDropProvider.propTypes = {
    containerComponent: PropTypes.func.isRequired,
    columnComponent: PropTypes.func.isRequired
  } : void 0;
  DragDropProvider.components = {
    containerComponent: 'Container',
    columnComponent: 'Column'
  };

  var pluginDependencies$8 = [{
    name: 'Table'
  }];

  var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
    var tableHeaderRows = _ref.tableHeaderRows;
    return dxGridCore.tableHeaderRowsWithReordering(tableHeaderRows);
  };

  var TableColumnReorderingRaw =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableColumnReorderingRaw, _React$PureComponent);

    function TableColumnReorderingRaw(props) {
      var _this;

      _classCallCheck(this, TableColumnReorderingRaw);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TableColumnReorderingRaw).call(this, props));
      _this.state = {
        order: props.defaultOrder,
        sourceColumnIndex: -1,
        targetColumnIndex: -1
      };
      _this.onOver = _this.handleOver.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.onLeave = _this.handleLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.onDrop = _this.handleDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(TableColumnReorderingRaw, [{
      key: "getState",
      value: function getState() {
        var orderState = this.state.order;
        var _this$props$order = this.props.order,
            order = _this$props$order === void 0 ? orderState : _this$props$order;
        return _objectSpread({}, this.state, {
          order: order
        });
      }
    }, {
      key: "getDraftOrder",
      value: function getDraftOrder() {
        var _this$getState = this.getState(),
            order = _this$getState.order,
            sourceColumnIndex = _this$getState.sourceColumnIndex,
            targetColumnIndex = _this$getState.targetColumnIndex;

        return dxGridCore.draftOrder(order, sourceColumnIndex, targetColumnIndex);
      }
    }, {
      key: "getAvailableColumns",
      value: function getAvailableColumns() {
        var _this2 = this;

        return this.getDraftOrder().filter(function (columnName) {
          return !!_this2.cellDimensionGetters[columnName];
        });
      }
    }, {
      key: "cacheCellDimensions",
      value: function cacheCellDimensions() {
        var _this3 = this;

        this.cellDimensions = this.cellDimensions && this.cellDimensions.length ? this.cellDimensions : this.getAvailableColumns().map(function (columnName) {
          return _this3.cellDimensionGetters[columnName]();
        });
      }
    }, {
      key: "resetCellDimensions",
      value: function resetCellDimensions() {
        this.cellDimensions = [];
      }
    }, {
      key: "ensureCellDimensionGetters",
      value: function ensureCellDimensionGetters(tableColumns) {
        var _this4 = this;

        Object.keys(this.cellDimensionGetters).forEach(function (columnName) {
          var columnIndex = tableColumns.findIndex(function (_ref2) {
            var type = _ref2.type,
                column = _ref2.column;
            return type === dxGridCore.TABLE_DATA_TYPE && column.name === columnName;
          });

          if (columnIndex === -1) {
            delete _this4.cellDimensionGetters[columnName];
          }
        });
      }
    }, {
      key: "storeCellDimensionsGetter",
      value: function storeCellDimensionsGetter(tableColumn, getter, tableColumns) {
        if (tableColumn.type === dxGridCore.TABLE_DATA_TYPE) {
          this.cellDimensionGetters[tableColumn.column.name] = getter;
        }

        this.ensureCellDimensionGetters(tableColumns);
      }
    }, {
      key: "handleOver",
      value: function handleOver(_ref3) {
        var payload = _ref3.payload,
            x = _ref3.clientOffset.x;
        var sourceColumnName = payload[0].columnName;
        var availableColumns = this.getAvailableColumns();
        var relativeSourceColumnIndex = availableColumns.indexOf(sourceColumnName);
        if (relativeSourceColumnIndex === -1) return;
        this.cacheCellDimensions();
        var cellDimensions = this.cellDimensions;
        var overlappedColumns = cellDimensions.filter(function (_ref4) {
          var left = _ref4.left,
              right = _ref4.right;
          return left <= x && x <= right;
        });
        if (overlappedColumns.length > 1) return;
        var relativeTargetIndex = dxGridCore.getTableTargetColumnIndex(cellDimensions, relativeSourceColumnIndex, x);
        if (relativeTargetIndex === -1) return;

        var _this$getState2 = this.getState(),
            prevSourceColumnIndex = _this$getState2.sourceColumnIndex,
            prevTargetColumnIndex = _this$getState2.targetColumnIndex;

        var draftOrder = this.getDraftOrder();
        var targetColumnIndex = draftOrder.indexOf(availableColumns[relativeTargetIndex]);
        if (targetColumnIndex === prevTargetColumnIndex) return;
        var sourceColumnIndex = prevSourceColumnIndex === -1 ? draftOrder.indexOf(sourceColumnName) : prevSourceColumnIndex;
        this.setState({
          sourceColumnIndex: sourceColumnIndex,
          targetColumnIndex: targetColumnIndex
        });
      }
    }, {
      key: "handleLeave",
      value: function handleLeave() {
        this.setState({
          sourceColumnIndex: -1,
          targetColumnIndex: -1
        });
        this.resetCellDimensions();
      }
    }, {
      key: "handleDrop",
      value: function handleDrop() {
        var _this$getState3 = this.getState(),
            sourceColumnIndex = _this$getState3.sourceColumnIndex,
            targetColumnIndex = _this$getState3.targetColumnIndex,
            order = _this$getState3.order;

        var onOrderChange = this.props.onOrderChange;
        if (sourceColumnIndex === -1 && targetColumnIndex === -1) return;
        var nextOrder = dxGridCore.changeColumnOrder(order, {
          sourceColumnName: order[sourceColumnIndex],
          targetColumnName: order[targetColumnIndex]
        });
        this.setState({
          order: nextOrder,
          sourceColumnIndex: -1,
          targetColumnIndex: -1
        });

        if (onOrderChange) {
          onOrderChange(nextOrder);
        }

        this.resetCellDimensions();
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        var _this$props = this.props,
            Container = _this$props.tableContainerComponent,
            Row = _this$props.rowComponent,
            Cell = _this$props.cellComponent;

        var columnsComputed = function columnsComputed(_ref5) {
          var tableColumns = _ref5.tableColumns;
          return dxGridCore.orderedColumns(tableColumns, _this5.getDraftOrder());
        };

        this.cellDimensionGetters = {};
        return React.createElement(dxReactCore.Plugin, {
          name: "TableColumnReordering",
          dependencies: pluginDependencies$8
        }, React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: columnsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "tableHeaderRows",
          computed: tableHeaderRowsComputed
        }), React.createElement(dxReactCore.Template, {
          name: "table"
        }, function (params) {
          return React.createElement(Container, _extends({}, params, {
            onOver: _this5.onOver,
            onLeave: _this5.onLeave,
            onDrop: _this5.onDrop
          }), React.createElement(dxReactCore.TemplatePlaceholder, null));
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref6) {
            var tableRow = _ref6.tableRow;
            return tableRow.type === dxGridCore.TABLE_REORDERING_TYPE;
          }
        }, function (params) {
          return React.createElement(Row, params);
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref7) {
            var tableRow = _ref7.tableRow;
            return tableRow.type === dxGridCore.TABLE_REORDERING_TYPE;
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref8) {
            var tableColumns = _ref8.tableColumns;
            return React.createElement(Cell, _extends({}, params, {
              getCellDimensions: function getCellDimensions(getter) {
                return _this5.storeCellDimensionsGetter(params.tableColumn, getter, tableColumns);
              }
            }));
          });
        }));
      }
    }]);

    return TableColumnReorderingRaw;
  }(React.PureComponent);

  process.env.NODE_ENV !== "production" ? TableColumnReorderingRaw.propTypes = {
    order: PropTypes.arrayOf(PropTypes.string),
    defaultOrder: PropTypes.arrayOf(PropTypes.string),
    onOrderChange: PropTypes.func,
    tableContainerComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    cellComponent: PropTypes.func.isRequired
  } : void 0;
  TableColumnReorderingRaw.defaultProps = {
    order: undefined,
    defaultOrder: [],
    onOrderChange: undefined
  };
  TableColumnReorderingRaw.components = {
    tableContainerComponent: 'TableContainer',
    rowComponent: 'Row',
    cellComponent: 'Cell'
  };

  var TableContainer = function TableContainer(_ref9) {
    var onOver = _ref9.onOver,
        onLeave = _ref9.onLeave,
        onDrop = _ref9.onDrop,
        children = _ref9.children;
    return React.createElement(dxReactCore.DropTarget, {
      onOver: onOver,
      onLeave: onLeave,
      onDrop: onDrop
    }, children);
  };

  var TableColumnReordering = dxReactCore.withComponents({
    TableContainer: TableContainer
  })(TableColumnReorderingRaw);

  var RowPlaceholder = function RowPlaceholder(props) {
    return React.createElement(dxReactCore.TemplatePlaceholder, {
      name: "tableRow",
      params: props
    });
  };

  var CellPlaceholder = function CellPlaceholder(props) {
    return React.createElement(dxReactCore.TemplatePlaceholder, {
      name: "tableCell",
      params: props
    });
  };

  var tableHeaderRows = [];

  var tableBodyRowsComputed = function tableBodyRowsComputed(_ref) {
    var rows = _ref.rows,
        getRowId = _ref.getRowId;
    return dxGridCore.tableRowsWithDataRows(rows, getRowId);
  };

  var tableFooterRows = [];
  var defaultMessages = {
    noData: 'No data'
  };
  var Table =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Table, _React$PureComponent);

    function Table(props) {
      var _this;

      _classCallCheck(this, Table);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this, props));
      _this.tableColumnsComputed = dxCore.memoize(function (columnExtensions) {
        return function (_ref2) {
          var columns = _ref2.columns;
          return dxGridCore.tableColumnsWithDataRows(columns, columnExtensions);
        };
      });
      return _this;
    }

    _createClass(Table, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Layout = _this$props.layoutComponent,
            Cell = _this$props.cellComponent,
            Row = _this$props.rowComponent,
            NoDataRow = _this$props.noDataRowComponent,
            NoDataCell = _this$props.noDataCellComponent,
            StubRow = _this$props.stubRowComponent,
            StubCell = _this$props.stubCellComponent,
            StubHeaderCell = _this$props.stubHeaderCellComponent,
            columnExtensions = _this$props.columnExtensions,
            messages = _this$props.messages,
            containerComponent = _this$props.containerComponent,
            tableComponent = _this$props.tableComponent,
            headComponent = _this$props.headComponent,
            bodyComponent = _this$props.bodyComponent,
            footerComponent = _this$props.footerComponent;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages, messages));
        var tableColumnsComputed = this.tableColumnsComputed(columnExtensions);
        return React.createElement(dxReactCore.Plugin, {
          name: "Table"
        }, React.createElement(dxReactCore.Getter, {
          name: "tableHeaderRows",
          value: tableHeaderRows
        }), React.createElement(dxReactCore.Getter, {
          name: "tableBodyRows",
          computed: tableBodyRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "tableFooterRows",
          value: tableFooterRows
        }), React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "getTableCellColSpan",
          value: dxGridCore.tableCellColSpanGetter
        }), React.createElement(dxReactCore.Template, {
          name: "body"
        }, React.createElement(dxReactCore.TemplatePlaceholder, {
          name: "table"
        })), React.createElement(dxReactCore.Template, {
          name: "table"
        }, React.createElement(dxReactCore.TemplateConnector, null, function (_ref3) {
          var headerRows = _ref3.tableHeaderRows,
              bodyRows = _ref3.tableBodyRows,
              footerRows = _ref3.tableFooterRows,
              columns = _ref3.tableColumns,
              getTableCellColSpan = _ref3.getTableCellColSpan;
          return React.createElement(Layout, {
            tableComponent: tableComponent,
            headComponent: headComponent,
            bodyComponent: bodyComponent,
            footerComponent: footerComponent,
            containerComponent: containerComponent,
            headerRows: headerRows,
            bodyRows: bodyRows,
            footerRows: footerRows,
            columns: columns,
            rowComponent: RowPlaceholder,
            cellComponent: CellPlaceholder,
            getCellColSpan: getTableCellColSpan
          });
        })), React.createElement(dxReactCore.Template, {
          name: "tableCell"
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref4) {
            var headerRows = _ref4.tableHeaderRows;
            return dxGridCore.isHeaderStubTableCell(params.tableRow, headerRows) ? React.createElement(StubHeaderCell, params) : React.createElement(StubCell, params);
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref5) {
            var tableRow = _ref5.tableRow,
                tableColumn = _ref5.tableColumn;
            return dxGridCore.isDataTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref6) {
            var getCellValue = _ref6.getCellValue;
            var columnName = params.tableColumn.column.name;
            var value = getCellValue(params.tableRow.row, columnName);
            return React.createElement(dxReactCore.TemplatePlaceholder, {
              name: "valueFormatter",
              params: {
                row: params.tableRow.row,
                column: params.tableColumn.column,
                value: value
              }
            }, function (content) {
              return React.createElement(Cell, _extends({}, params, {
                row: params.tableRow.row,
                column: params.tableColumn.column,
                value: value
              }), content);
            });
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref7) {
            var tableRow = _ref7.tableRow;
            return dxGridCore.isNoDataTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref8) {
            var tableColumns = _ref8.tableColumns;

            if (dxGridCore.isNoDataTableCell(params.tableColumn, tableColumns)) {
              return React.createElement(NoDataCell, _extends({}, params, {
                getMessage: getMessage
              }));
            }

            return null;
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow"
        }, function (params) {
          return React.createElement(StubRow, params);
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref9) {
            var tableRow = _ref9.tableRow;
            return dxGridCore.isDataTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(Row, _extends({}, params, {
            row: params.tableRow.row
          }));
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref10) {
            var tableRow = _ref10.tableRow;
            return dxGridCore.isNoDataTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(NoDataRow, params);
        }));
      }
    }]);

    return Table;
  }(React.PureComponent);
  Table.COLUMN_TYPE = dxGridCore.TABLE_DATA_TYPE;
  Table.ROW_TYPE = dxGridCore.TABLE_DATA_TYPE;
  Table.NODATA_ROW_TYPE = dxGridCore.TABLE_NODATA_TYPE;
  process.env.NODE_ENV !== "production" ? Table.propTypes = {
    layoutComponent: PropTypes.func.isRequired,
    tableComponent: PropTypes.func.isRequired,
    headComponent: PropTypes.func.isRequired,
    bodyComponent: PropTypes.func.isRequired,
    footerComponent: PropTypes.func.isRequired,
    containerComponent: PropTypes.func.isRequired,
    cellComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    noDataCellComponent: PropTypes.func.isRequired,
    noDataRowComponent: PropTypes.func.isRequired,
    stubRowComponent: PropTypes.func.isRequired,
    stubCellComponent: PropTypes.func.isRequired,
    stubHeaderCellComponent: PropTypes.func.isRequired,
    columnExtensions: PropTypes.array,
    messages: PropTypes.shape({
      noData: PropTypes.string
    })
  } : void 0;
  Table.defaultProps = {
    columnExtensions: undefined,
    messages: {}
  };
  Table.components = {
    tableComponent: 'Table',
    headComponent: 'TableHead',
    bodyComponent: 'TableBody',
    footerComponent: 'TableFooter',
    containerComponent: 'Container',
    layoutComponent: 'Layout',
    rowComponent: 'Row',
    cellComponent: 'Cell',
    noDataRowComponent: 'NoDataRow',
    noDataCellComponent: 'NoDataCell',
    stubRowComponent: 'StubRow',
    stubCellComponent: 'StubCell',
    stubHeaderCellComponent: 'StubHeaderCell'
  };

  var TableSelection =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableSelection, _React$PureComponent);

    function TableSelection() {
      _classCallCheck(this, TableSelection);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableSelection).apply(this, arguments));
    }

    _createClass(TableSelection, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            highlightRow = _this$props.highlightRow,
            selectByRowClick = _this$props.selectByRowClick,
            showSelectionColumn = _this$props.showSelectionColumn,
            showSelectAll = _this$props.showSelectAll,
            HeaderCell = _this$props.headerCellComponent,
            Cell = _this$props.cellComponent,
            Row = _this$props.rowComponent,
            selectionColumnWidth = _this$props.selectionColumnWidth;

        var tableColumnsComputed = function tableColumnsComputed(_ref) {
          var tableColumns = _ref.tableColumns;
          return dxGridCore.tableColumnsWithSelection(tableColumns, selectionColumnWidth);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableSelection",
          dependencies: [{
            name: 'Table'
          }, {
            name: 'SelectionState'
          }, {
            name: 'IntegratedSelection',
            optional: !showSelectAll
          }]
        }, showSelectionColumn && React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsComputed
        }), showSelectionColumn && showSelectAll && React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref2) {
            var tableRow = _ref2.tableRow,
                tableColumn = _ref2.tableColumn;
            return dxGridCore.isSelectAllTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref3, _ref4) {
            var selectAllAvailable = _ref3.selectAllAvailable,
                allSelected = _ref3.allSelected,
                someSelected = _ref3.someSelected;
            var toggleSelectAll = _ref4.toggleSelectAll;
            return React.createElement(HeaderCell, _extends({}, params, {
              disabled: !selectAllAvailable,
              allSelected: allSelected,
              someSelected: someSelected,
              onToggle: function onToggle(select) {
                return toggleSelectAll(select);
              }
            }));
          });
        }), showSelectionColumn && React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref5) {
            var tableRow = _ref5.tableRow,
                tableColumn = _ref5.tableColumn;
            return dxGridCore.isSelectTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref6, _ref7) {
            var selection = _ref6.selection;
            var toggleSelection = _ref7.toggleSelection;
            return React.createElement(Cell, _extends({}, params, {
              row: params.tableRow.row,
              selected: selection.indexOf(params.tableRow.rowId) !== -1,
              onToggle: function onToggle() {
                return toggleSelection({
                  rowIds: [params.tableRow.rowId]
                });
              }
            }));
          });
        }), (highlightRow || selectByRowClick) && React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref8) {
            var tableRow = _ref8.tableRow;
            return dxGridCore.isDataTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref9, _ref10) {
            var selection = _ref9.selection;
            var toggleSelection = _ref10.toggleSelection;
            return React.createElement(Row, _extends({}, params, {
              selectByRowClick: selectByRowClick,
              selected: highlightRow && selection.indexOf(params.tableRow.rowId) !== -1,
              onToggle: function onToggle() {
                return toggleSelection({
                  rowIds: [params.tableRow.rowId]
                });
              }
            }));
          });
        }));
      }
    }]);

    return TableSelection;
  }(React.PureComponent);
  TableSelection.COLUMN_TYPE = dxGridCore.TABLE_SELECT_TYPE;
  process.env.NODE_ENV !== "production" ? TableSelection.propTypes = {
    headerCellComponent: PropTypes.func.isRequired,
    cellComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    highlightRow: PropTypes.bool,
    selectByRowClick: PropTypes.bool,
    showSelectAll: PropTypes.bool,
    showSelectionColumn: PropTypes.bool,
    selectionColumnWidth: PropTypes.number.isRequired
  } : void 0;
  TableSelection.defaultProps = {
    highlightRow: false,
    selectByRowClick: false,
    showSelectAll: false,
    showSelectionColumn: true
  };
  TableSelection.components = {
    rowComponent: 'Row',
    cellComponent: 'Cell',
    headerCellComponent: 'HeaderCell'
  };

  var RowDetailState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(RowDetailState, _React$PureComponent);

    function RowDetailState(props) {
      var _this;

      _classCallCheck(this, RowDetailState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RowDetailState).call(this, props));
      _this.state = {
        expandedRowIds: props.expandedRowIds || props.defaultExpandedRowIds
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        expandedRowIds: function expandedRowIds() {
          var onExpandedRowIdsChange = _this.props.onExpandedRowIdsChange;
          return onExpandedRowIdsChange;
        }
      });
      _this.toggleDetailRowExpanded = stateHelper.applyFieldReducer.bind(stateHelper, 'expandedRowIds', dxGridCore.toggleDetailRowExpanded);
      return _this;
    }

    _createClass(RowDetailState, [{
      key: "render",
      value: function render() {
        var expandedRowIds = this.state.expandedRowIds;
        return React.createElement(dxReactCore.Plugin, {
          name: "RowDetailState"
        }, React.createElement(dxReactCore.Getter, {
          name: "expandedDetailRowIds",
          value: expandedRowIds
        }), React.createElement(dxReactCore.Action, {
          name: "toggleDetailRowExpanded",
          action: this.toggleDetailRowExpanded
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$expandedRo = nextProps.expandedRowIds,
            expandedRowIds = _nextProps$expandedRo === void 0 ? prevState.expandedRowIds : _nextProps$expandedRo;
        return {
          expandedRowIds: expandedRowIds
        };
      }
    }]);

    return RowDetailState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? RowDetailState.propTypes = {
    expandedRowIds: PropTypes.array,
    defaultExpandedRowIds: PropTypes.array,
    onExpandedRowIdsChange: PropTypes.func
  } : void 0;
  RowDetailState.defaultProps = {
    expandedRowIds: undefined,
    defaultExpandedRowIds: [],
    onExpandedRowIdsChange: undefined
  };

  var getCellColSpanComputed = function getCellColSpanComputed(_ref) {
    var getTableCellColSpan = _ref.getTableCellColSpan;
    return dxGridCore.tableDetailCellColSpanGetter(getTableCellColSpan);
  };

  var pluginDependencies$9 = [{
    name: 'RowDetailState'
  }, {
    name: 'Table'
  }];
  var TableRowDetail =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableRowDetail, _React$PureComponent);

    function TableRowDetail() {
      _classCallCheck(this, TableRowDetail);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableRowDetail).apply(this, arguments));
    }

    _createClass(TableRowDetail, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            rowHeight = _this$props.rowHeight,
            Content = _this$props.contentComponent,
            ToggleCell = _this$props.toggleCellComponent,
            Cell = _this$props.cellComponent,
            Row = _this$props.rowComponent,
            toggleColumnWidth = _this$props.toggleColumnWidth;

        var tableColumnsComputed = function tableColumnsComputed(_ref2) {
          var tableColumns = _ref2.tableColumns;
          return dxGridCore.tableColumnsWithDetail(tableColumns, toggleColumnWidth);
        };

        var tableBodyRowsComputed = function tableBodyRowsComputed(_ref3) {
          var tableBodyRows = _ref3.tableBodyRows,
              expandedDetailRowIds = _ref3.expandedDetailRowIds;
          return dxGridCore.tableRowsWithExpandedDetail(tableBodyRows, expandedDetailRowIds, rowHeight);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableRowDetail",
          dependencies: pluginDependencies$9
        }, React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "tableBodyRows",
          computed: tableBodyRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "getTableCellColSpan",
          computed: getCellColSpanComputed
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref4) {
            var tableRow = _ref4.tableRow,
                tableColumn = _ref4.tableColumn;
            return dxGridCore.isDetailToggleTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref5, _ref6) {
            var expandedDetailRowIds = _ref5.expandedDetailRowIds;
            var toggleDetailRowExpanded = _ref6.toggleDetailRowExpanded;
            return React.createElement(ToggleCell, _extends({}, params, {
              row: params.tableRow.row,
              expanded: dxGridCore.isDetailRowExpanded(expandedDetailRowIds, params.tableRow.rowId),
              onToggle: function onToggle() {
                return toggleDetailRowExpanded({
                  rowId: params.tableRow.rowId
                });
              }
            }));
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref7) {
            var tableRow = _ref7.tableRow;
            return dxGridCore.isDetailTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref8) {
            var tableColumns = _ref8.tableColumns;

            if (dxGridCore.isDetailTableCell(params.tableColumn, tableColumns)) {
              return React.createElement(Cell, _extends({}, params, {
                row: params.tableRow.row
              }), React.createElement(Content, {
                row: params.tableRow.row
              }));
            }

            return null;
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref9) {
            var tableRow = _ref9.tableRow;
            return dxGridCore.isDetailTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(Row, _extends({}, params, {
            row: params.tableRow.row
          }));
        }));
      }
    }]);

    return TableRowDetail;
  }(React.PureComponent);
  TableRowDetail.ROW_TYPE = dxGridCore.TABLE_DETAIL_TYPE;
  TableRowDetail.COLUMN_TYPE = dxGridCore.TABLE_DETAIL_TYPE;
  process.env.NODE_ENV !== "production" ? TableRowDetail.propTypes = {
    contentComponent: PropTypes.func,
    toggleCellComponent: PropTypes.func.isRequired,
    cellComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    toggleColumnWidth: PropTypes.number.isRequired,
    rowHeight: PropTypes.number
  } : void 0;
  TableRowDetail.defaultProps = {
    contentComponent: function contentComponent() {
      return null;
    },
    rowHeight: undefined
  };
  TableRowDetail.components = {
    rowComponent: 'Row',
    cellComponent: 'Cell',
    toggleCellComponent: 'ToggleCell'
  };

  var pluginDependencies$a = [{
    name: 'GroupingState'
  }, {
    name: 'Table'
  }, {
    name: 'DataTypeProvider',
    optional: true
  }];

  var tableBodyRowsComputed$1 = function tableBodyRowsComputed(_ref) {
    var tableBodyRows = _ref.tableBodyRows,
        isGroupRow = _ref.isGroupRow;
    return dxGridCore.tableRowsWithGrouping(tableBodyRows, isGroupRow);
  };

  var getCellColSpanComputed$1 = function getCellColSpanComputed(_ref2) {
    var getTableCellColSpan = _ref2.getTableCellColSpan;
    return dxGridCore.tableGroupCellColSpanGetter(getTableCellColSpan);
  };

  var showColumnWhenGroupedGetter = function showColumnWhenGroupedGetter(showColumnsWhenGrouped) {
    var columnExtensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var map = columnExtensions.reduce(function (acc, columnExtension) {
      acc[columnExtension.columnName] = columnExtension.showWhenGrouped;
      return acc;
    }, {});
    return function (columnName) {
      return map[columnName] || showColumnsWhenGrouped;
    };
  };

  var TableGroupRow =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableGroupRow, _React$PureComponent);

    function TableGroupRow() {
      _classCallCheck(this, TableGroupRow);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableGroupRow).apply(this, arguments));
    }

    _createClass(TableGroupRow, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            GroupCell = _this$props.cellComponent,
            Content = _this$props.contentComponent,
            Icon = _this$props.iconComponent,
            GroupRow = _this$props.rowComponent,
            GroupIndentCell = _this$props.indentCellComponent,
            indentColumnWidth = _this$props.indentColumnWidth,
            showColumnsWhenGrouped = _this$props.showColumnsWhenGrouped,
            columnExtensions = _this$props.columnExtensions;

        var tableColumnsComputed = function tableColumnsComputed(_ref3) {
          var columns = _ref3.columns,
              tableColumns = _ref3.tableColumns,
              grouping = _ref3.grouping,
              draftGrouping = _ref3.draftGrouping;
          return dxGridCore.tableColumnsWithGrouping(columns, tableColumns, grouping, draftGrouping, indentColumnWidth, showColumnWhenGroupedGetter(showColumnsWhenGrouped, columnExtensions));
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableGroupRow",
          dependencies: pluginDependencies$a
        }, React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "tableBodyRows",
          computed: tableBodyRowsComputed$1
        }), React.createElement(dxReactCore.Getter, {
          name: "getTableCellColSpan",
          computed: getCellColSpanComputed$1
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref4) {
            var tableRow = _ref4.tableRow;
            return dxGridCore.isGroupTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref5, _ref6) {
            var grouping = _ref5.grouping,
                expandedGroups = _ref5.expandedGroups;
            var toggleGroupExpanded = _ref6.toggleGroupExpanded;

            if (dxGridCore.isGroupTableCell(params.tableRow, params.tableColumn)) {
              return React.createElement(dxReactCore.TemplatePlaceholder, {
                name: "valueFormatter",
                params: {
                  column: params.tableColumn.column,
                  value: params.tableRow.row.value
                }
              }, function (content) {
                return React.createElement(GroupCell, _extends({}, params, {
                  contentComponent: Content,
                  iconComponent: Icon,
                  row: params.tableRow.row,
                  column: params.tableColumn.column,
                  expanded: expandedGroups.indexOf(params.tableRow.row.compoundKey) !== -1,
                  onToggle: function onToggle() {
                    return toggleGroupExpanded({
                      groupKey: params.tableRow.row.compoundKey
                    });
                  }
                }), content);
              });
            }

            if (dxGridCore.isGroupIndentTableCell(params.tableRow, params.tableColumn, grouping)) {
              if (GroupIndentCell) {
                return React.createElement(GroupIndentCell, _extends({}, params, {
                  row: params.tableRow.row,
                  column: params.tableColumn.column
                }));
              }

              return React.createElement(dxReactCore.TemplatePlaceholder, null);
            }

            return null;
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref7) {
            var tableRow = _ref7.tableRow;
            return dxGridCore.isGroupTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(GroupRow, _extends({}, params, {
            row: params.tableRow.row
          }));
        }));
      }
    }]);

    return TableGroupRow;
  }(React.PureComponent);
  TableGroupRow.ROW_TYPE = dxGridCore.TABLE_GROUP_TYPE;
  TableGroupRow.COLUMN_TYPE = dxGridCore.TABLE_GROUP_TYPE;
  process.env.NODE_ENV !== "production" ? TableGroupRow.propTypes = {
    cellComponent: PropTypes.func.isRequired,
    contentComponent: PropTypes.func.isRequired,
    iconComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    indentCellComponent: PropTypes.func,
    indentColumnWidth: PropTypes.number.isRequired,
    showColumnsWhenGrouped: PropTypes.bool,
    columnExtensions: PropTypes.array
  } : void 0;
  TableGroupRow.defaultProps = {
    indentCellComponent: null,
    showColumnsWhenGrouped: false,
    columnExtensions: undefined
  };
  TableGroupRow.components = {
    rowComponent: 'Row',
    cellComponent: 'Cell',
    contentComponent: 'Content',
    iconComponent: 'Icon'
  };

  var tableHeaderRowsComputed$1 = function tableHeaderRowsComputed(_ref) {
    var tableHeaderRows = _ref.tableHeaderRows;
    return dxGridCore.tableRowsWithHeading(tableHeaderRows);
  };

  var TableHeaderRow =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableHeaderRow, _React$PureComponent);

    function TableHeaderRow() {
      _classCallCheck(this, TableHeaderRow);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableHeaderRow).apply(this, arguments));
    }

    _createClass(TableHeaderRow, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            showSortingControls = _this$props.showSortingControls,
            showGroupingControls = _this$props.showGroupingControls,
            HeaderCell = _this$props.cellComponent,
            HeaderRow = _this$props.rowComponent,
            Content = _this$props.contentComponent,
            SortLabel = _this$props.sortLabelComponent,
            GroupButton = _this$props.groupButtonComponent,
            Title = _this$props.titleComponent,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(messages);
        return React.createElement(dxReactCore.Plugin, {
          name: "TableHeaderRow",
          dependencies: [{
            name: 'Table'
          }, {
            name: 'SortingState',
            optional: !showSortingControls
          }, {
            name: 'GroupingState',
            optional: !showGroupingControls
          }, {
            name: 'DragDropProvider',
            optional: true
          }, {
            name: 'TableColumnResizing',
            optional: true
          }]
        }, React.createElement(dxReactCore.Getter, {
          name: "tableHeaderRows",
          computed: tableHeaderRowsComputed$1
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref2) {
            var tableRow = _ref2.tableRow,
                tableColumn = _ref2.tableColumn;
            return dxGridCore.isHeadingTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref3, _ref4) {
            var sorting = _ref3.sorting,
                tableColumns = _ref3.tableColumns,
                draggingEnabled = _ref3.draggingEnabled,
                tableColumnResizingEnabled = _ref3.tableColumnResizingEnabled,
                isColumnSortingEnabled = _ref3.isColumnSortingEnabled,
                isColumnGroupingEnabled = _ref3.isColumnGroupingEnabled;
            var changeColumnSorting = _ref4.changeColumnSorting,
                changeColumnGrouping = _ref4.changeColumnGrouping,
                changeTableColumnWidth = _ref4.changeTableColumnWidth,
                draftTableColumnWidth = _ref4.draftTableColumnWidth,
                cancelTableColumnWidthDraft = _ref4.cancelTableColumnWidthDraft;
            var _params$tableColumn$c = params.tableColumn.column,
                columnName = _params$tableColumn$c.name,
                columnTitle = _params$tableColumn$c.title;
            var atLeastOneDataColumn = tableColumns.filter(function (_ref5) {
              var type = _ref5.type;
              return type === dxGridCore.TABLE_DATA_TYPE;
            }).length > 1;
            var sortingEnabled = isColumnSortingEnabled && isColumnSortingEnabled(columnName);
            var groupingEnabled = isColumnGroupingEnabled && isColumnGroupingEnabled(columnName) && atLeastOneDataColumn;
            return React.createElement(HeaderCell, _extends({}, params, {
              column: params.tableColumn.column,
              getMessage: getMessage,
              draggingEnabled: draggingEnabled && atLeastOneDataColumn,
              resizingEnabled: tableColumnResizingEnabled,
              onWidthChange: function onWidthChange(_ref6) {
                var shift = _ref6.shift;
                return changeTableColumnWidth({
                  columnName: columnName,
                  shift: shift
                });
              },
              onWidthDraft: function onWidthDraft(_ref7) {
                var shift = _ref7.shift;
                return draftTableColumnWidth({
                  columnName: columnName,
                  shift: shift
                });
              },
              onWidthDraftCancel: function onWidthDraftCancel() {
                return cancelTableColumnWidthDraft();
              } // @deprecated
              ,
              sortingEnabled: sortingEnabled // @deprecated
              ,
              groupingEnabled: groupingEnabled // @deprecated
              ,
              showSortingControls: showSortingControls // @deprecated
              ,
              showGroupingControls: showGroupingControls // @deprecated
              ,
              sortingDirection: showSortingControls && sorting !== undefined ? dxGridCore.getColumnSortingDirection(sorting, columnName) : undefined // @deprecated
              ,
              onSort: function onSort(_ref8) {
                var direction = _ref8.direction,
                    keepOther = _ref8.keepOther;
                return changeColumnSorting({
                  columnName: columnName,
                  direction: direction,
                  keepOther: keepOther
                });
              } // @deprecated
              ,
              onGroup: function onGroup() {
                return changeColumnGrouping({
                  columnName: columnName
                });
              } // @deprecated
              ,
              before: React.createElement(dxReactCore.TemplatePlaceholder, {
                name: "tableHeaderCellBefore",
                params: {
                  column: params.tableColumn.column
                }
              })
            }), React.createElement(dxReactCore.TemplatePlaceholder, {
              name: "tableHeaderCellBefore",
              params: {
                column: params.tableColumn.column
              }
            }), React.createElement(Content, {
              column: params.tableColumn.column,
              align: params.tableColumn.align
            }, showSortingControls ? React.createElement(SortLabel, {
              column: params.tableColumn.column,
              align: params.tableColumn.align,
              direction: dxGridCore.getColumnSortingDirection(sorting, columnName),
              disabled: !sortingEnabled,
              onSort: function onSort(_ref9) {
                var direction = _ref9.direction,
                    keepOther = _ref9.keepOther;
                changeColumnSorting({
                  columnName: columnName,
                  direction: direction,
                  keepOther: keepOther
                });
              },
              getMessage: getMessage
            }, React.createElement(Title, null, columnTitle || columnName)) : React.createElement(Title, null, columnTitle || columnName)), showGroupingControls ? React.createElement(GroupButton, {
              disabled: !groupingEnabled,
              onGroup: function onGroup() {
                return changeColumnGrouping({
                  columnName: columnName
                });
              }
            }) : null);
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref10) {
            var tableRow = _ref10.tableRow;
            return dxGridCore.isHeadingTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(HeaderRow, params);
        }));
      }
    }]);

    return TableHeaderRow;
  }(React.PureComponent);
  TableHeaderRow.ROW_TYPE = dxGridCore.TABLE_HEADING_TYPE;
  process.env.NODE_ENV !== "production" ? TableHeaderRow.propTypes = {
    showSortingControls: PropTypes.bool,
    showGroupingControls: PropTypes.bool,
    cellComponent: PropTypes.func.isRequired,
    contentComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    titleComponent: PropTypes.func.isRequired,
    sortLabelComponent: PropTypes.func.isRequired,
    groupButtonComponent: PropTypes.func.isRequired,
    messages: PropTypes.object
  } : void 0;
  TableHeaderRow.defaultProps = {
    showSortingControls: false,
    showGroupingControls: false,
    messages: null
  };
  TableHeaderRow.components = {
    cellComponent: 'Cell',
    rowComponent: 'Row',
    contentComponent: 'Content',
    sortLabelComponent: 'SortLabel',
    titleComponent: 'Title',
    groupButtonComponent: 'GroupButton'
  };

  var CellPlaceholder$1 = function CellPlaceholder(props) {
    return React.createElement(dxReactCore.TemplatePlaceholder, {
      params: props
    });
  };

  var TableBandHeader =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableBandHeader, _React$PureComponent);

    function TableBandHeader() {
      _classCallCheck(this, TableBandHeader);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableBandHeader).apply(this, arguments));
    }

    _createClass(TableBandHeader, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Cell = _this$props.cellComponent,
            Row = _this$props.rowComponent,
            HeaderCell = _this$props.bandedHeaderCellComponent,
            InvisibleCell = _this$props.invisibleCellComponent,
            columnBands = _this$props.columnBands;

        var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
          var tableHeaderRows = _ref.tableHeaderRows,
              tableColumns = _ref.tableColumns;
          return dxGridCore.tableRowsWithBands(tableHeaderRows, columnBands, tableColumns);
        };

        var tableHeaderColumnChainsComputed = function tableHeaderColumnChainsComputed(_ref2) {
          var tableHeaderRows = _ref2.tableHeaderRows,
              tableColumns = _ref2.tableColumns;
          return dxGridCore.tableHeaderColumnChainsWithBands(tableHeaderRows, tableColumns, columnBands);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableBandHeader",
          dependencies: [{
            name: 'Table'
          }, {
            name: 'TableHeaderRow'
          }, {
            name: 'TableSelection',
            optional: true
          }, {
            name: 'TableEditColumn',
            optional: true
          }]
        }, React.createElement(dxReactCore.Getter, {
          name: "tableHeaderRows",
          computed: tableHeaderRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "tableHeaderColumnChains",
          computed: tableHeaderColumnChainsComputed
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref3) {
            var tableRow = _ref3.tableRow;
            return dxGridCore.isBandedOrHeaderRow(tableRow);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref4) {
            var tableColumns = _ref4.tableColumns,
                tableHeaderRows = _ref4.tableHeaderRows,
                tableHeaderColumnChains = _ref4.tableHeaderColumnChains;
            var bandComponent = dxGridCore.getBandComponent(params, tableHeaderRows, tableColumns, columnBands, tableHeaderColumnChains);

            switch (bandComponent.type) {
              case dxGridCore.BAND_DUPLICATE_RENDER:
                return React.createElement(dxReactCore.TemplatePlaceholder, null);

              case dxGridCore.BAND_EMPTY_CELL:
                return React.createElement(InvisibleCell, null);

              case dxGridCore.BAND_GROUP_CELL:
                {
                  var _bandComponent$payloa = bandComponent.payload,
                      value = _bandComponent$payloa.value,
                      payload = _objectWithoutProperties(_bandComponent$payloa, ["value"]);

                  return React.createElement(Cell, _extends({}, params, payload), value);
                }

              case dxGridCore.BAND_HEADER_CELL:
                return React.createElement(dxReactCore.TemplatePlaceholder, {
                  name: "tableCell",
                  params: _objectSpread({}, params, bandComponent.payload)
                });

              default:
                return null;
            }
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref5) {
            var tableRow = _ref5.tableRow,
                tableColumn = _ref5.tableColumn;
            return dxGridCore.isHeadingTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(HeaderCell, _extends({
            component: CellPlaceholder$1
          }, params));
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref6) {
            var tableRow = _ref6.tableRow;
            return dxGridCore.isBandedTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(Row, params);
        }));
      }
    }]);

    return TableBandHeader;
  }(React.PureComponent);
  TableBandHeader.ROW_TYPE = dxGridCore.TABLE_BAND_TYPE;
  process.env.NODE_ENV !== "production" ? TableBandHeader.propTypes = {
    columnBands: PropTypes.array.isRequired,
    cellComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    bandedHeaderCellComponent: PropTypes.func.isRequired,
    invisibleCellComponent: PropTypes.func.isRequired
  } : void 0;
  TableBandHeader.components = {
    cellComponent: 'Cell',
    rowComponent: 'Row',
    bandedHeaderCellComponent: 'BandedHeaderCell',
    invisibleCellComponent: 'InvisibleCell'
  };

  var pluginDependencies$b = [{
    name: 'FilteringState'
  }, {
    name: 'Table'
  }, {
    name: 'DataTypeProvider',
    optional: true
  }];
  var defaultMessages$1 = {
    filterPlaceholder: 'Filter...',
    contains: 'Contains',
    notContains: 'Does not contain',
    startsWith: 'Starts with',
    endsWith: 'Ends with',
    equal: 'Equals',
    notEqual: 'Does not equal',
    greaterThan: 'Greater than',
    greaterThanOrEqual: 'Greater than or equal to',
    lessThan: 'Less than',
    lessThanOrEqual: 'Less than or equal to'
  };
  var TableFilterRow =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableFilterRow, _React$PureComponent);

    function TableFilterRow(props) {
      var _this;

      _classCallCheck(this, TableFilterRow);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TableFilterRow).call(this, props));
      _this.state = {
        filterOperations: {}
      };
      return _this;
    }

    _createClass(TableFilterRow, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            rowHeight = _this$props.rowHeight,
            showFilterSelector = _this$props.showFilterSelector,
            FilterCell = _this$props.cellComponent,
            FilterRow = _this$props.rowComponent,
            FilterSelector = _this$props.filterSelectorComponent,
            iconComponent = _this$props.iconComponent,
            toggleButtonComponent = _this$props.toggleButtonComponent,
            EditorComponent = _this$props.editorComponent,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages$1, messages));

        var tableHeaderRowsComputed = function tableHeaderRowsComputed(_ref) {
          var tableHeaderRows = _ref.tableHeaderRows;
          return dxGridCore.tableHeaderRowsWithFilter(tableHeaderRows, rowHeight);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableFilterRow",
          dependencies: pluginDependencies$b
        }, React.createElement(dxReactCore.Getter, {
          name: "tableHeaderRows",
          computed: tableHeaderRowsComputed
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref2) {
            var tableRow = _ref2.tableRow,
                tableColumn = _ref2.tableColumn;
            return dxGridCore.isFilterTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref3, _ref4) {
            var filters = _ref3.filters,
                isColumnFilteringEnabled = _ref3.isColumnFilteringEnabled,
                getAvailableFilterOperations = _ref3.getAvailableFilterOperations;
            var changeColumnFilter = _ref4.changeColumnFilter;
            var filterOperations = _this2.state.filterOperations;
            var columnName = params.tableColumn.column.name;
            var filter = dxGridCore.getColumnFilterConfig(filters, columnName);

            var onFilter = function onFilter(config) {
              return changeColumnFilter({
                columnName: columnName,
                config: config
              });
            };

            var columnFilterOperations = dxGridCore.getColumnFilterOperations(getAvailableFilterOperations, columnName);
            var selectedFilterOperation = dxGridCore.getSelectedFilterOperation(filterOperations, columnName, filter, columnFilterOperations);

            var handleFilterOperationChange = function handleFilterOperationChange(value) {
              _this2.setState({
                filterOperations: _objectSpread({}, filterOperations, _defineProperty({}, columnName, value))
              });

              if (filter && !dxGridCore.isFilterValueEmpty(filter.value)) {
                onFilter({
                  value: filter.value,
                  operation: value
                });
              }
            };

            var handleFilterValueChange = function handleFilterValueChange(value) {
              return onFilter(!dxGridCore.isFilterValueEmpty(value) ? {
                value: value,
                operation: selectedFilterOperation
              } : null);
            };

            var filteringEnabled = isColumnFilteringEnabled(columnName);
            return React.createElement(dxReactCore.TemplatePlaceholder, {
              name: "valueEditor",
              params: {
                column: params.tableColumn.column,
                value: filter ? filter.value : undefined,
                onValueChange: handleFilterValueChange
              }
            }, function (content) {
              return React.createElement(FilterCell, _extends({}, params, {
                getMessage: getMessage,
                column: params.tableColumn.column,
                filter: filter,
                filteringEnabled: filteringEnabled,
                onFilter: onFilter
              }), showFilterSelector ? React.createElement(FilterSelector, {
                toggleButtonComponent: toggleButtonComponent,
                iconComponent: iconComponent,
                value: selectedFilterOperation,
                availableValues: columnFilterOperations,
                onChange: handleFilterOperationChange,
                disabled: !filteringEnabled,
                getMessage: getMessage
              }) : null, content || React.createElement(EditorComponent, {
                value: filter ? filter.value : undefined,
                disabled: !filteringEnabled,
                getMessage: getMessage,
                onChange: handleFilterValueChange
              }));
            });
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref5) {
            var tableRow = _ref5.tableRow;
            return dxGridCore.isFilterTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(FilterRow, params);
        }));
      }
    }]);

    return TableFilterRow;
  }(React.PureComponent);
  TableFilterRow.ROW_TYPE = dxGridCore.TABLE_FILTER_TYPE;
  process.env.NODE_ENV !== "production" ? TableFilterRow.propTypes = {
    rowHeight: PropTypes.any,
    showFilterSelector: PropTypes.bool,
    messages: PropTypes.shape({
      filterPlaceholder: PropTypes.string,
      contains: PropTypes.string,
      notContains: PropTypes.string,
      startsWith: PropTypes.string,
      endsWith: PropTypes.string,
      equal: PropTypes.string,
      notEqual: PropTypes.string,
      greaterThan: PropTypes.string,
      greaterThanOrEqual: PropTypes.string,
      lessThan: PropTypes.string,
      lessThanOrEqual: PropTypes.string
    }),
    cellComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    filterSelectorComponent: PropTypes.func.isRequired,
    toggleButtonComponent: PropTypes.func.isRequired,
    iconComponent: PropTypes.func.isRequired,
    editorComponent: PropTypes.func.isRequired
  } : void 0;
  TableFilterRow.defaultProps = {
    rowHeight: undefined,
    showFilterSelector: false,
    messages: {}
  };
  TableFilterRow.components = {
    rowComponent: 'Row',
    cellComponent: 'Cell',
    filterSelectorComponent: 'FilterSelector',
    iconComponent: 'Icon',
    editorComponent: 'Editor',
    toggleButtonComponent: 'ToggleButton'
  };

  var pluginDependencies$c = [{
    name: 'EditingState'
  }, {
    name: 'Table'
  }, {
    name: 'DataTypeProvider',
    optional: true
  }];
  var TableEditRow =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableEditRow, _React$PureComponent);

    function TableEditRow() {
      _classCallCheck(this, TableEditRow);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableEditRow).apply(this, arguments));
    }

    _createClass(TableEditRow, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            EditCell = _this$props.cellComponent,
            EditRow = _this$props.rowComponent,
            rowHeight = _this$props.rowHeight;

        var tableBodyRowsComputed = function tableBodyRowsComputed(_ref) {
          var tableBodyRows = _ref.tableBodyRows,
              editingRowIds = _ref.editingRowIds,
              addedRows = _ref.addedRows;
          return dxGridCore.tableRowsWithEditing(tableBodyRows, editingRowIds, addedRows, rowHeight);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableEditRow",
          dependencies: pluginDependencies$c
        }, React.createElement(dxReactCore.Getter, {
          name: "tableBodyRows",
          computed: tableBodyRowsComputed
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref2) {
            var tableRow = _ref2.tableRow,
                tableColumn = _ref2.tableColumn;
            return dxGridCore.isEditTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref3, _ref4) {
            var getCellValue = _ref3.getCellValue,
                createRowChange = _ref3.createRowChange,
                rowChanges = _ref3.rowChanges,
                isColumnEditingEnabled = _ref3.isColumnEditingEnabled;
            var changeAddedRow = _ref4.changeAddedRow,
                changeRow = _ref4.changeRow;
            var _params$tableRow = params.tableRow,
                rowId = _params$tableRow.rowId,
                row = _params$tableRow.row;
            var column = params.tableColumn.column;
            var columnName = column.name;
            var isNew = dxGridCore.isAddedTableRow(params.tableRow);
            var changedRow = isNew ? row : _objectSpread({}, row, dxGridCore.getRowChange(rowChanges, rowId));
            var value = getCellValue(changedRow, columnName);

            var onValueChange = function onValueChange(newValue) {
              var changeArgs = {
                rowId: rowId,
                change: createRowChange(changedRow, newValue, columnName)
              };

              if (isNew) {
                changeAddedRow(changeArgs);
              } else {
                changeRow(changeArgs);
              }
            };

            return React.createElement(dxReactCore.TemplatePlaceholder, {
              name: "valueEditor",
              params: {
                column: column,
                row: row,
                value: value,
                onValueChange: onValueChange
              }
            }, function (content) {
              return React.createElement(EditCell, _extends({}, params, {
                row: row,
                column: column,
                value: value,
                editingEnabled: isColumnEditingEnabled(columnName),
                onValueChange: onValueChange
              }), content);
            });
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref5) {
            var tableRow = _ref5.tableRow;
            return dxGridCore.isEditTableRow(tableRow) || dxGridCore.isAddedTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(EditRow, _extends({}, params, {
            row: params.tableRow.row
          }));
        }));
      }
    }]);

    return TableEditRow;
  }(React.PureComponent);
  TableEditRow.ADDED_ROW_TYPE = dxGridCore.TABLE_ADDED_TYPE;
  TableEditRow.EDIT_ROW_TYPE = dxGridCore.TABLE_EDIT_TYPE;
  process.env.NODE_ENV !== "production" ? TableEditRow.propTypes = {
    rowHeight: PropTypes.any,
    cellComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired
  } : void 0;
  TableEditRow.defaultProps = {
    rowHeight: undefined
  };
  TableEditRow.components = {
    rowComponent: 'Row',
    cellComponent: 'Cell'
  };

  var pluginDependencies$d = [{
    name: 'EditingState'
  }, {
    name: 'Table'
  }];
  var defaultMessages$2 = {
    addCommand: 'New',
    editCommand: 'Edit',
    deleteCommand: 'Delete',
    commitCommand: 'Save',
    cancelCommand: 'Cancel'
  };
  var TableEditColumn =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableEditColumn, _React$PureComponent);

    function TableEditColumn() {
      _classCallCheck(this, TableEditColumn);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableEditColumn).apply(this, arguments));
    }

    _createClass(TableEditColumn, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Cell = _this$props.cellComponent,
            HeaderCell = _this$props.headerCellComponent,
            Command = _this$props.commandComponent,
            showAddCommand = _this$props.showAddCommand,
            showEditCommand = _this$props.showEditCommand,
            showDeleteCommand = _this$props.showDeleteCommand,
            width = _this$props.width,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages$2, messages));

        var tableColumnsComputed = function tableColumnsComputed(_ref) {
          var tableColumns = _ref.tableColumns;
          return dxGridCore.tableColumnsWithEditing(tableColumns, width);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableEditColumn",
          dependencies: pluginDependencies$d
        }, React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsComputed
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref2) {
            var tableRow = _ref2.tableRow,
                tableColumn = _ref2.tableColumn;
            return dxGridCore.isHeadingEditCommandsTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (getters, actions) {
            return React.createElement(HeaderCell, params, showAddCommand && React.createElement(Command, {
              id: "add",
              text: getMessage('addCommand'),
              onExecute: function onExecute() {
                return actions.addRow();
              }
            }));
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref3) {
            var tableRow = _ref3.tableRow,
                tableColumn = _ref3.tableColumn;
            return dxGridCore.isEditCommandsTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (getters, actions) {
            var isEdit = dxGridCore.isEditTableRow(params.tableRow);
            var isNew = dxGridCore.isAddedTableRow(params.tableRow);
            var isEditing = isEdit || isNew;
            var rowIds = [params.tableRow.rowId];
            return React.createElement(Cell, _extends({}, params, {
              row: params.tableRow.row
            }), showEditCommand && !isEditing && React.createElement(Command, {
              id: "edit",
              text: getMessage('editCommand'),
              onExecute: function onExecute() {
                return actions.startEditRows({
                  rowIds: rowIds
                });
              }
            }), showDeleteCommand && !isEditing && React.createElement(Command, {
              id: "delete",
              text: getMessage('deleteCommand'),
              onExecute: function onExecute() {
                actions.deleteRows({
                  rowIds: rowIds
                });
                actions.commitDeletedRows({
                  rowIds: rowIds
                });
              }
            }), isEditing && React.createElement(Command, {
              id: "commit",
              text: getMessage('commitCommand'),
              onExecute: function onExecute() {
                if (isNew) {
                  actions.commitAddedRows({
                    rowIds: rowIds
                  });
                } else {
                  actions.stopEditRows({
                    rowIds: rowIds
                  });
                  actions.commitChangedRows({
                    rowIds: rowIds
                  });
                }
              }
            }), isEditing && React.createElement(Command, {
              id: "cancel",
              text: getMessage('cancelCommand'),
              onExecute: function onExecute() {
                if (isNew) {
                  actions.cancelAddedRows({
                    rowIds: rowIds
                  });
                } else {
                  actions.stopEditRows({
                    rowIds: rowIds
                  });
                  actions.cancelChangedRows({
                    rowIds: rowIds
                  });
                }
              }
            }));
          });
        }));
      }
    }]);

    return TableEditColumn;
  }(React.PureComponent);
  TableEditColumn.COLUMN_TYPE = dxGridCore.TABLE_EDIT_COMMAND_TYPE;
  process.env.NODE_ENV !== "production" ? TableEditColumn.propTypes = {
    cellComponent: PropTypes.func.isRequired,
    headerCellComponent: PropTypes.func.isRequired,
    commandComponent: PropTypes.func.isRequired,
    showAddCommand: PropTypes.bool,
    showEditCommand: PropTypes.bool,
    showDeleteCommand: PropTypes.bool,
    width: PropTypes.number,
    messages: PropTypes.shape({
      addCommand: PropTypes.string,
      editCommand: PropTypes.string,
      deleteCommand: PropTypes.string,
      commitCommand: PropTypes.string,
      cancelCommand: PropTypes.string
    })
  } : void 0;
  TableEditColumn.defaultProps = {
    showAddCommand: false,
    showEditCommand: false,
    showDeleteCommand: false,
    width: 140,
    messages: {}
  };
  TableEditColumn.components = {
    cellComponent: 'Cell',
    headerCellComponent: 'HeaderCell',
    commandComponent: 'Command'
  };

  var pluginDependencies$e = [{
    name: 'Table'
  }];
  var TableColumnResizing =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableColumnResizing, _React$PureComponent);

    function TableColumnResizing(props) {
      var _this;

      _classCallCheck(this, TableColumnResizing);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TableColumnResizing).call(this, props));
      _this.state = {
        columnWidths: props.columnWidths || props.defaultColumnWidths,
        draftColumnWidths: []
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        columnWidths: function columnWidths() {
          var onColumnWidthsChange = _this.props.onColumnWidthsChange;
          return onColumnWidthsChange;
        }
      });
      _this.tableColumnsComputed = dxCore.memoize(function (columnWidths) {
        return function (_ref) {
          var tableColumns = _ref.tableColumns;
          return dxGridCore.tableColumnsWithWidths(tableColumns, columnWidths);
        };
      });
      _this.tableColumnsDraftComputed = dxCore.memoize(function (draftColumnWidths) {
        return function (_ref2) {
          var tableColumns = _ref2.tableColumns;
          return dxGridCore.tableColumnsWithDraftWidths(tableColumns, draftColumnWidths);
        };
      });
      _this.changeTableColumnWidth = stateHelper.applyReducer.bind(stateHelper, function (prevState, payload) {
        var minColumnWidth = _this.props.minColumnWidth;
        return dxGridCore.changeTableColumnWidth(prevState, _objectSpread({}, payload, {
          minColumnWidth: minColumnWidth
        }));
      });
      _this.draftTableColumnWidth = stateHelper.applyReducer.bind(stateHelper, function (prevState, payload) {
        var minColumnWidth = _this.props.minColumnWidth;
        return dxGridCore.draftTableColumnWidth(prevState, _objectSpread({}, payload, {
          minColumnWidth: minColumnWidth
        }));
      });
      _this.cancelTableColumnWidthDraft = stateHelper.applyReducer.bind(stateHelper, dxGridCore.cancelTableColumnWidthDraft);
      return _this;
    }

    _createClass(TableColumnResizing, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            columnWidths = _this$state.columnWidths,
            draftColumnWidths = _this$state.draftColumnWidths;
        var tableColumnsComputed = this.tableColumnsComputed(columnWidths);
        var tableColumnsDraftComputed = this.tableColumnsDraftComputed(draftColumnWidths);
        return React.createElement(dxReactCore.Plugin, {
          name: "TableColumnResizing",
          dependencies: pluginDependencies$e
        }, React.createElement(dxReactCore.Getter, {
          name: "tableColumnResizingEnabled",
          value: true
        }), React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsDraftComputed
        }), React.createElement(dxReactCore.Action, {
          name: "changeTableColumnWidth",
          action: this.changeTableColumnWidth
        }), React.createElement(dxReactCore.Action, {
          name: "draftTableColumnWidth",
          action: this.draftTableColumnWidth
        }), React.createElement(dxReactCore.Action, {
          name: "cancelTableColumnWidthDraft",
          action: this.cancelTableColumnWidthDraft
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$columnWidt = nextProps.columnWidths,
            columnWidths = _nextProps$columnWidt === void 0 ? prevState.columnWidths : _nextProps$columnWidt;
        return {
          columnWidths: columnWidths
        };
      }
    }]);

    return TableColumnResizing;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? TableColumnResizing.propTypes = {
    defaultColumnWidths: PropTypes.array,
    columnWidths: PropTypes.array,
    onColumnWidthsChange: PropTypes.func,
    minColumnWidth: PropTypes.number.isRequired
  } : void 0;
  TableColumnResizing.defaultProps = {
    defaultColumnWidths: [],
    columnWidths: undefined,
    onColumnWidthsChange: undefined
  };

  var pluginDependencies$f = [{
    name: 'PagingState'
  }];
  var defaultMessages$3 = {
    showAll: 'All',
    info: function info(_ref) {
      var from = _ref.from,
          to = _ref.to,
          count = _ref.count;
      return "".concat(from).concat(from < to ? "-".concat(to) : '', " of ").concat(count);
    }
  };
  var PagingPanel =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(PagingPanel, _React$PureComponent);

    function PagingPanel() {
      _classCallCheck(this, PagingPanel);

      return _possibleConstructorReturn(this, _getPrototypeOf(PagingPanel).apply(this, arguments));
    }

    _createClass(PagingPanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Pager = _this$props.containerComponent,
            pageSizes = _this$props.pageSizes,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages$3, messages));
        return React.createElement(dxReactCore.Plugin, {
          name: "PagingPanel",
          dependencies: pluginDependencies$f
        }, React.createElement(dxReactCore.Template, {
          name: "footer"
        }, React.createElement(dxReactCore.TemplatePlaceholder, null), React.createElement(dxReactCore.TemplateConnector, null, function (_ref2, _ref3) {
          var currentPage = _ref2.currentPage,
              pageSize = _ref2.pageSize,
              totalCount = _ref2.totalCount;
          var setCurrentPage = _ref3.setCurrentPage,
              setPageSize = _ref3.setPageSize;
          return React.createElement(Pager, {
            currentPage: currentPage,
            pageSize: pageSize,
            totalCount: totalCount,
            totalPages: dxGridCore.pageCount(totalCount, pageSize),
            pageSizes: pageSizes,
            getMessage: getMessage,
            onCurrentPageChange: setCurrentPage,
            onPageSizeChange: setPageSize
          });
        })));
      }
    }]);

    return PagingPanel;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? PagingPanel.propTypes = {
    pageSizes: PropTypes.arrayOf(PropTypes.number),
    containerComponent: PropTypes.func.isRequired,
    messages: PropTypes.shape({
      showAll: PropTypes.string,
      info: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    })
  } : void 0;
  PagingPanel.defaultProps = {
    pageSizes: [],
    messages: {}
  };
  PagingPanel.components = {
    containerComponent: 'Container'
  };

  var ItemLayout =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(ItemLayout, _React$PureComponent);

    function ItemLayout(props) {
      var _this;

      _classCallCheck(this, ItemLayout);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemLayout).call(this, props));
      _this.state = {
        dragging: false
      };
      return _this;
    }

    _createClass(ItemLayout, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            item = _this$props.item,
            Item = _this$props.itemComponent,
            draggingEnabled = _this$props.draggingEnabled,
            onDragStart = _this$props.onDragStart,
            onDragEnd = _this$props.onDragEnd;
        var dragging = this.state.dragging;
        var itemElement = React.createElement(Item, {
          item: _objectSpread({}, item, {
            draft: dragging || item.draft
          })
        });
        return draggingEnabled ? React.createElement(dxReactCore.DragSource, {
          payload: [{
            type: 'column',
            columnName: item.column.name
          }],
          onStart: function onStart() {
            _this2.setState({
              dragging: true
            });

            onDragStart();
          },
          onEnd: function onEnd() {
            _this2.setState({
              dragging: false
            });

            onDragEnd();
          }
        }, itemElement) : itemElement;
      }
    }]);

    return ItemLayout;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? ItemLayout.propTypes = {
    item: PropTypes.shape({
      column: PropTypes.object,
      draft: PropTypes.bool
    }).isRequired,
    itemComponent: PropTypes.func.isRequired,
    draggingEnabled: PropTypes.bool,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func
  } : void 0;
  ItemLayout.defaultProps = {
    draggingEnabled: false,
    onDragStart: function onDragStart() {},
    onDragEnd: function onDragEnd() {}
  };

  var GroupPanelLayout =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(GroupPanelLayout, _React$PureComponent);

    function GroupPanelLayout(props) {
      var _this;

      _classCallCheck(this, GroupPanelLayout);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupPanelLayout).call(this, props));
      _this.state = {
        sourceColumnName: null,
        targetItemIndex: -1
      };

      _this.handleDragEvent = function (eventHandler, _ref) {
        var payload = _ref.payload,
            restArgs = _objectWithoutProperties(_ref, ["payload"]);

        var isColumnGroupingEnabled = _this.props.isColumnGroupingEnabled;
        var columnName = payload[0].columnName;

        if (isColumnGroupingEnabled(columnName)) {
          eventHandler(_objectSpread({
            payload: payload
          }, restArgs));
        }
      };

      _this.onEnter = function (_ref2) {
        var payload = _ref2.payload;

        _this.setState({
          sourceColumnName: payload[0].columnName
        });
      };

      _this.onOver = function (_ref3) {
        var clientOffset = _ref3.clientOffset;
        var _this$props = _this.props,
            onGroupDraft = _this$props.onGroupDraft,
            items = _this$props.items;
        var _this$state = _this.state,
            sourceColumnName = _this$state.sourceColumnName,
            prevTargetItemIndex = _this$state.targetItemIndex; // eslint-disable-next-line react/no-find-dom-node

        var itemGeometries = _this.itemRefs.map(function (ref) {
          return reactDom.findDOMNode(ref).getBoundingClientRect();
        });

        var sourceItemIndex = items.findIndex(function (_ref4) {
          var column = _ref4.column;
          return column.name === sourceColumnName;
        });
        var targetItemIndex = dxGridCore.getGroupCellTargetIndex(itemGeometries, sourceItemIndex, clientOffset);
        if (prevTargetItemIndex === targetItemIndex) return;
        onGroupDraft({
          columnName: sourceColumnName,
          groupIndex: targetItemIndex
        });

        _this.setState({
          targetItemIndex: targetItemIndex
        });
      };

      _this.onLeave = function () {
        var onGroupDraft = _this.props.onGroupDraft;
        var sourceColumnName = _this.state.sourceColumnName;

        if (!_this.draggingColumnName) {
          _this.resetState();

          return;
        }

        onGroupDraft({
          columnName: sourceColumnName,
          groupIndex: -1
        });

        _this.setState({
          targetItemIndex: -1
        });
      };

      _this.onDrop = function () {
        var onGroup = _this.props.onGroup;
        var _this$state2 = _this.state,
            sourceColumnName = _this$state2.sourceColumnName,
            targetItemIndex = _this$state2.targetItemIndex;

        _this.resetState();

        onGroup({
          columnName: sourceColumnName,
          groupIndex: targetItemIndex
        });
      };

      _this.onDragStart = function (columnName) {
        _this.draggingColumnName = columnName;
      };

      _this.onDragEnd = function () {
        _this.draggingColumnName = null;
        var _this$state3 = _this.state,
            sourceColumnName = _this$state3.sourceColumnName,
            targetItemIndex = _this$state3.targetItemIndex;
        var onGroup = _this.props.onGroup;

        if (sourceColumnName && targetItemIndex === -1) {
          onGroup({
            columnName: sourceColumnName
          });
        }

        _this.resetState();
      };

      return _this;
    }

    _createClass(GroupPanelLayout, [{
      key: "resetState",
      value: function resetState() {
        var onGroupDraftCancel = this.props.onGroupDraftCancel;
        onGroupDraftCancel();
        this.setState({
          sourceColumnName: null,
          targetItemIndex: -1
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            items = _this$props2.items,
            EmptyMessage = _this$props2.emptyMessageComponent,
            Container = _this$props2.containerComponent,
            Item = _this$props2.itemComponent,
            draggingEnabled = _this$props2.draggingEnabled,
            isColumnGroupingEnabled = _this$props2.isColumnGroupingEnabled;
        this.itemRefs = [];
        var groupPanel = items.length ? React.createElement(Container, null, items.map(function (item) {
          var columnName = item.column.name;
          return React.createElement(ItemLayout, {
            key: columnName,
            ref: function ref(element) {
              return element && _this2.itemRefs.push(element);
            },
            item: item,
            itemComponent: Item,
            draggingEnabled: draggingEnabled && isColumnGroupingEnabled(columnName),
            onDragStart: function onDragStart() {
              return _this2.onDragStart(columnName);
            },
            onDragEnd: _this2.onDragEnd
          });
        })) : React.createElement(EmptyMessage, null);
        return draggingEnabled ? React.createElement(dxReactCore.DropTarget, {
          onEnter: function onEnter(args) {
            return _this2.handleDragEvent(_this2.onEnter, args);
          },
          onOver: function onOver(args) {
            return _this2.handleDragEvent(_this2.onOver, args);
          },
          onLeave: function onLeave(args) {
            return _this2.handleDragEvent(_this2.onLeave, args);
          },
          onDrop: function onDrop(args) {
            return _this2.handleDragEvent(_this2.onDrop, args);
          }
        }, groupPanel) : groupPanel;
      }
    }]);

    return GroupPanelLayout;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? GroupPanelLayout.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      column: PropTypes.object,
      draft: PropTypes.bool
    })).isRequired,
    onGroup: PropTypes.func,
    itemComponent: PropTypes.func.isRequired,
    containerComponent: PropTypes.func.isRequired,
    emptyMessageComponent: PropTypes.func.isRequired,
    draggingEnabled: PropTypes.bool,
    isColumnGroupingEnabled: PropTypes.func,
    onGroupDraft: PropTypes.func,
    onGroupDraftCancel: PropTypes.func
  } : void 0;
  GroupPanelLayout.defaultProps = {
    onGroup: function onGroup() {},
    draggingEnabled: false,
    isColumnGroupingEnabled: function isColumnGroupingEnabled() {},
    onGroupDraft: function onGroupDraft() {},
    onGroupDraftCancel: function onGroupDraftCancel() {}
  };

  var defaultMessages$4 = {
    groupByColumn: 'Drag a column header here to group by that column'
  };

  var GroupingPanelRaw =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(GroupingPanelRaw, _React$PureComponent);

    function GroupingPanelRaw() {
      _classCallCheck(this, GroupingPanelRaw);

      return _possibleConstructorReturn(this, _getPrototypeOf(GroupingPanelRaw).apply(this, arguments));
    }

    _createClass(GroupingPanelRaw, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            LayoutComponent = _this$props.layoutComponent,
            Container = _this$props.containerComponent,
            Item = _this$props.itemComponent,
            EmptyMessage = _this$props.emptyMessageComponent,
            showSortingControls = _this$props.showSortingControls,
            showGroupingControls = _this$props.showGroupingControls,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages$4, messages));

        var EmptyMessagePlaceholder = function EmptyMessagePlaceholder() {
          return React.createElement(EmptyMessage, {
            getMessage: getMessage
          });
        };

        var ItemPlaceholder = function ItemPlaceholder(_ref) {
          var item = _ref.item;
          var columnName = item.column.name;
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref2, _ref3) {
            var sorting = _ref2.sorting,
                isColumnSortingEnabled = _ref2.isColumnSortingEnabled,
                isColumnGroupingEnabled = _ref2.isColumnGroupingEnabled;
            var changeColumnGrouping = _ref3.changeColumnGrouping,
                changeColumnSorting = _ref3.changeColumnSorting;
            var sortingEnabled = isColumnSortingEnabled && isColumnSortingEnabled(columnName);
            var groupingEnabled = isColumnGroupingEnabled && isColumnGroupingEnabled(columnName);
            return React.createElement(Item, {
              item: item,
              sortingEnabled: sortingEnabled,
              groupingEnabled: groupingEnabled,
              showSortingControls: showSortingControls,
              sortingDirection: showSortingControls ? dxGridCore.getColumnSortingDirection(sorting, columnName) : undefined,
              showGroupingControls: showGroupingControls,
              onGroup: function onGroup() {
                return changeColumnGrouping({
                  columnName: columnName
                });
              },
              onSort: function onSort(_ref4) {
                var direction = _ref4.direction,
                    keepOther = _ref4.keepOther;
                return changeColumnSorting({
                  columnName: columnName,
                  direction: direction,
                  keepOther: keepOther
                });
              }
            });
          });
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "GroupingPanel",
          dependencies: [{
            name: 'GroupingState'
          }, {
            name: 'Toolbar'
          }, {
            name: 'SortingState',
            optional: !showSortingControls
          }]
        }, React.createElement(dxReactCore.Template, {
          name: "toolbarContent"
        }, React.createElement(dxReactCore.TemplateConnector, null, function (_ref5, _ref6) {
          var columns = _ref5.columns,
              grouping = _ref5.grouping,
              draftGrouping = _ref5.draftGrouping,
              draggingEnabled = _ref5.draggingEnabled,
              isColumnGroupingEnabled = _ref5.isColumnGroupingEnabled;
          var changeColumnGrouping = _ref6.changeColumnGrouping,
              draftColumnGrouping = _ref6.draftColumnGrouping,
              cancelColumnGroupingDraft = _ref6.cancelColumnGroupingDraft;
          return React.createElement(LayoutComponent, {
            items: dxGridCore.groupingPanelItems(columns, grouping, draftGrouping),
            isColumnGroupingEnabled: isColumnGroupingEnabled,
            draggingEnabled: draggingEnabled,
            onGroup: changeColumnGrouping,
            onGroupDraft: draftColumnGrouping,
            onGroupDraftCancel: cancelColumnGroupingDraft,
            itemComponent: ItemPlaceholder,
            emptyMessageComponent: EmptyMessagePlaceholder,
            containerComponent: Container
          });
        }), React.createElement(dxReactCore.TemplatePlaceholder, null)));
      }
    }]);

    return GroupingPanelRaw;
  }(React.PureComponent);

  process.env.NODE_ENV !== "production" ? GroupingPanelRaw.propTypes = {
    showSortingControls: PropTypes.bool,
    showGroupingControls: PropTypes.bool,
    layoutComponent: PropTypes.func.isRequired,
    containerComponent: PropTypes.func.isRequired,
    itemComponent: PropTypes.func.isRequired,
    emptyMessageComponent: PropTypes.func.isRequired,
    messages: PropTypes.object
  } : void 0;
  GroupingPanelRaw.defaultProps = {
    showSortingControls: false,
    showGroupingControls: false,
    messages: {}
  };
  GroupingPanelRaw.components = {
    layoutComponent: 'Layout',
    containerComponent: 'Container',
    itemComponent: 'Item',
    emptyMessageComponent: 'EmptyMessage'
  };
  var GroupingPanel = dxReactCore.withComponents({
    Layout: GroupPanelLayout
  })(GroupingPanelRaw);

  var DataTypeProvider =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(DataTypeProvider, _React$PureComponent);

    function DataTypeProvider() {
      _classCallCheck(this, DataTypeProvider);

      return _possibleConstructorReturn(this, _getPrototypeOf(DataTypeProvider).apply(this, arguments));
    }

    _createClass(DataTypeProvider, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            columnNames = _this$props.for,
            Formatter = _this$props.formatterComponent,
            Editor = _this$props.editorComponent,
            availableFilterOperations = _this$props.availableFilterOperations;

        var getAvailableFilterOperationsComputed = function getAvailableFilterOperationsComputed(_ref) {
          var getAvailableFilterOperations = _ref.getAvailableFilterOperations;
          return dxGridCore.getAvailableFilterOperationsGetter(getAvailableFilterOperations, availableFilterOperations, columnNames);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "DataTypeProvider"
        }, React.createElement(dxReactCore.Getter, {
          name: "getAvailableFilterOperations",
          computed: getAvailableFilterOperationsComputed
        }), Formatter ? React.createElement(dxReactCore.Template, {
          name: "valueFormatter",
          predicate: function predicate(_ref2) {
            var column = _ref2.column;
            return columnNames.includes(column.name);
          }
        }, function (params) {
          return React.createElement(Formatter, params);
        }) : null, Editor ? React.createElement(dxReactCore.Template, {
          name: "valueEditor",
          predicate: function predicate(_ref3) {
            var column = _ref3.column;
            return columnNames.includes(column.name);
          }
        }, function (params) {
          return React.createElement(Editor, params);
        }) : null);
      }
    }]);

    return DataTypeProvider;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? DataTypeProvider.propTypes = {
    for: PropTypes.arrayOf(PropTypes.string).isRequired,
    formatterComponent: PropTypes.func,
    editorComponent: PropTypes.func,
    availableFilterOperations: PropTypes.arrayOf(PropTypes.string)
  } : void 0;
  DataTypeProvider.defaultProps = {
    formatterComponent: undefined,
    editorComponent: undefined,
    availableFilterOperations: undefined
  };

  var pluginDependencies$g = [{
    name: 'Table'
  }];
  var defaultMessages$5 = {
    noColumns: 'Nothing to show'
  };

  var visibleTableColumnsComputed = function visibleTableColumnsComputed(_ref) {
    var tableColumns = _ref.tableColumns,
        hiddenColumnNames = _ref.hiddenColumnNames;
    return dxGridCore.visibleTableColumns(tableColumns, hiddenColumnNames);
  };

  var columnExtensionValueGetter$4 = function columnExtensionValueGetter(columnExtensions, defaultValue) {
    return dxGridCore.getColumnExtensionValueGetter(columnExtensions, 'togglingEnabled', defaultValue);
  };

  var TableColumnVisibility =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableColumnVisibility, _React$PureComponent);

    function TableColumnVisibility(props) {
      var _this;

      _classCallCheck(this, TableColumnVisibility);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TableColumnVisibility).call(this, props));
      _this.state = {
        hiddenColumnNames: props.hiddenColumnNames || props.defaultHiddenColumnNames
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        hiddenColumnNames: function hiddenColumnNames() {
          var onHiddenColumnNamesChange = _this.props.onHiddenColumnNamesChange;
          return onHiddenColumnNamesChange;
        }
      });
      _this.toggleColumnVisibility = stateHelper.applyFieldReducer.bind(stateHelper, 'hiddenColumnNames', dxGridCore.toggleColumn);
      return _this;
    }

    _createClass(TableColumnVisibility, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            EmptyMessage = _this$props.emptyMessageComponent,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages$5, messages));
        var hiddenColumnNames = this.state.hiddenColumnNames;
        var _this$props2 = this.props,
            columnExtensions = _this$props2.columnExtensions,
            columnTogglingEnabled = _this$props2.columnTogglingEnabled;
        return React.createElement(dxReactCore.Plugin, {
          name: "TableColumnVisibility",
          dependencies: pluginDependencies$g
        }, React.createElement(dxReactCore.Getter, {
          name: "hiddenColumnNames",
          value: hiddenColumnNames
        }), React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: visibleTableColumnsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "isColumnTogglingEnabled",
          value: columnExtensionValueGetter$4(columnExtensions, columnTogglingEnabled)
        }), React.createElement(dxReactCore.Action, {
          name: "toggleColumnVisibility",
          action: this.toggleColumnVisibility
        }), React.createElement(dxReactCore.Template, {
          name: "table"
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref2) {
            var tableColumns = _ref2.tableColumns;
            return dxGridCore.tableDataColumnsExist(tableColumns) ? React.createElement(dxReactCore.TemplatePlaceholder, null) : React.createElement(EmptyMessage, _extends({
              getMessage: getMessage
            }, params));
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$hiddenColu = nextProps.hiddenColumnNames,
            hiddenColumnNames = _nextProps$hiddenColu === void 0 ? prevState.hiddenColumnNames : _nextProps$hiddenColu;
        return {
          hiddenColumnNames: hiddenColumnNames
        };
      }
    }]);

    return TableColumnVisibility;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? TableColumnVisibility.propTypes = {
    hiddenColumnNames: PropTypes.arrayOf(PropTypes.string),
    defaultHiddenColumnNames: PropTypes.arrayOf(PropTypes.string),
    emptyMessageComponent: PropTypes.func.isRequired,
    onHiddenColumnNamesChange: PropTypes.func,
    messages: PropTypes.object,
    columnExtensions: PropTypes.array,
    columnTogglingEnabled: PropTypes.bool
  } : void 0;
  TableColumnVisibility.defaultProps = {
    hiddenColumnNames: undefined,
    defaultHiddenColumnNames: [],
    onHiddenColumnNamesChange: undefined,
    messages: {},
    columnExtensions: undefined,
    columnTogglingEnabled: true
  };
  TableColumnVisibility.components = {
    emptyMessageComponent: 'EmptyMessage'
  };

  var Toolbar =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Toolbar, _React$PureComponent);

    function Toolbar() {
      _classCallCheck(this, Toolbar);

      return _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).apply(this, arguments));
    }

    _createClass(Toolbar, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Root = _this$props.rootComponent,
            FlexibleSpaceComponent = _this$props.flexibleSpaceComponent;
        return React.createElement(dxReactCore.Plugin, {
          name: "Toolbar"
        }, React.createElement(dxReactCore.Template, {
          name: "header"
        }, React.createElement(Root, null, React.createElement(dxReactCore.TemplatePlaceholder, {
          name: "toolbarContent"
        })), React.createElement(dxReactCore.TemplatePlaceholder, null)), React.createElement(dxReactCore.Template, {
          name: "toolbarContent"
        }, React.createElement(FlexibleSpaceComponent, null)));
      }
    }]);

    return Toolbar;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? Toolbar.propTypes = {
    rootComponent: PropTypes.func.isRequired,
    flexibleSpaceComponent: PropTypes.func.isRequired
  } : void 0;
  Toolbar.components = {
    rootComponent: 'Root',
    flexibleSpaceComponent: 'FlexibleSpace'
  };

  var TreeDataState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TreeDataState, _React$PureComponent);

    function TreeDataState(props) {
      var _this;

      _classCallCheck(this, TreeDataState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeDataState).call(this, props));
      _this.state = {
        expandedRowIds: props.expandedRowIds || props.defaultExpandedRowIds
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        expandedRowIds: function expandedRowIds() {
          var onExpandedRowIdsChange = _this.props.onExpandedRowIdsChange;
          return onExpandedRowIdsChange;
        }
      });
      _this.toggleRowExpanded = stateHelper.applyFieldReducer.bind(stateHelper, 'expandedRowIds', dxGridCore.toggleRowExpanded);
      return _this;
    }

    _createClass(TreeDataState, [{
      key: "render",
      value: function render() {
        var expandedRowIds = this.state.expandedRowIds;
        return React.createElement(dxReactCore.Plugin, {
          name: "TreeDataState"
        }, React.createElement(dxReactCore.Getter, {
          name: "expandedRowIds",
          value: expandedRowIds
        }), ' ', React.createElement(dxReactCore.Action, {
          name: "toggleRowExpanded",
          action: this.toggleRowExpanded
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$expandedRo = nextProps.expandedRowIds,
            expandedRowIds = _nextProps$expandedRo === void 0 ? prevState.expandedRowIds : _nextProps$expandedRo;
        return {
          expandedRowIds: expandedRowIds
        };
      }
    }]);

    return TreeDataState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? TreeDataState.propTypes = {
    expandedRowIds: PropTypes.array,
    defaultExpandedRowIds: PropTypes.array,
    onExpandedRowIdsChange: PropTypes.func
  } : void 0;
  TreeDataState.defaultProps = {
    expandedRowIds: undefined,
    defaultExpandedRowIds: [],
    onExpandedRowIdsChange: undefined
  };

  var pluginDependencies$h = [{
    name: 'TreeDataState'
  }];

  var expandedTreeRowsComputed = function expandedTreeRowsComputed(_ref) {
    var rows = _ref.rows,
        getRowId = _ref.getRowId,
        expandedRowIds = _ref.expandedRowIds;
    return dxGridCore.expandedTreeRows(rows, getRowId, expandedRowIds);
  };

  var getRowIdComputed$1 = function getRowIdComputed(_ref2) {
    var getRowId = _ref2.getRowId,
        rows = _ref2.rows;
    return dxGridCore.customTreeRowIdGetter(getRowId, rows);
  };

  var getRowLevelKeyComputed = function getRowLevelKeyComputed(_ref3) {
    var getRowLevelKey = _ref3.getRowLevelKey,
        rows = _ref3.rows;
    return dxGridCore.customTreeRowLevelKeyGetter(getRowLevelKey, rows);
  };

  var isTreeRowLeafComputed = function isTreeRowLeafComputed(_ref4) {
    var rows = _ref4.rows;
    return dxGridCore.isTreeRowLeafGetter(rows);
  };

  var getTreeRowLevelComputed = function getTreeRowLevelComputed(_ref5) {
    var rows = _ref5.rows;
    return dxGridCore.getTreeRowLevelGetter(rows);
  };

  var collapsedTreeRowsGetterComputed = function collapsedTreeRowsGetterComputed(_ref6) {
    var rows = _ref6.rows,
        getCollapsedRows = _ref6.getCollapsedRows;
    return dxGridCore.collapsedTreeRowsGetter(getCollapsedRows, rows);
  };

  var unwrappedTreeRowsComputed = function unwrappedTreeRowsComputed(_ref7) {
    var rows = _ref7.rows;
    return dxGridCore.unwrappedCustomTreeRows(rows);
  };

  var CustomTreeData =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(CustomTreeData, _React$PureComponent);

    function CustomTreeData() {
      _classCallCheck(this, CustomTreeData);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomTreeData).apply(this, arguments));
    }

    _createClass(CustomTreeData, [{
      key: "render",
      value: function render() {
        var getChildRows = this.props.getChildRows;

        var treeRowsComputed = function treeRowsComputed(_ref8) {
          var rows = _ref8.rows;
          return dxGridCore.customTreeRowsWithMeta(rows, getChildRows);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "CustomTreeData",
          dependencies: pluginDependencies$h
        }, React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: treeRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "getRowId",
          computed: getRowIdComputed$1
        }), React.createElement(dxReactCore.Getter, {
          name: "getRowLevelKey",
          computed: getRowLevelKeyComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "isTreeRowLeaf",
          computed: isTreeRowLeafComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "getTreeRowLevel",
          computed: getTreeRowLevelComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: expandedTreeRowsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "getCollapsedRows",
          computed: collapsedTreeRowsGetterComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "rows",
          computed: unwrappedTreeRowsComputed
        }));
      }
    }]);

    return CustomTreeData;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? CustomTreeData.propTypes = {
    getChildRows: PropTypes.func.isRequired
  } : void 0;

  var TableTreeColumn =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableTreeColumn, _React$PureComponent);

    function TableTreeColumn() {
      _classCallCheck(this, TableTreeColumn);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableTreeColumn).apply(this, arguments));
    }

    _createClass(TableTreeColumn, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            forColumnName = _this$props.for,
            showSelectionControls = _this$props.showSelectionControls,
            showSelectAll = _this$props.showSelectAll,
            Indent = _this$props.indentComponent,
            ExpandButton = _this$props.expandButtonComponent,
            Checkbox = _this$props.checkboxComponent,
            Content = _this$props.contentComponent,
            Cell = _this$props.cellComponent;
        return React.createElement(dxReactCore.Plugin, {
          name: "TableTreeColumn",
          dependencies: [{
            name: 'DataTypeProvider',
            optional: true
          }, {
            name: 'TreeDataState'
          }, {
            name: 'SelectionState',
            optional: !showSelectionControls
          }, {
            name: 'IntegratedSelection',
            optional: !showSelectAll
          }, {
            name: 'Table'
          }, {
            name: 'TableHeaderRow',
            optional: true
          }]
        }, React.createElement(dxReactCore.Getter, {
          name: "tableTreeColumnName",
          value: forColumnName
        }), React.createElement(dxReactCore.Template, {
          name: "tableHeaderCellBefore",
          predicate: function predicate(_ref) {
            var column = _ref.column;
            return column.name === forColumnName;
          }
        }, React.createElement(ExpandButton, {
          visible: false
        }), showSelectionControls && showSelectAll && React.createElement(dxReactCore.TemplateConnector, null, function (_ref2, _ref3) {
          var selectAllAvailable = _ref2.selectAllAvailable,
              allSelected = _ref2.allSelected,
              someSelected = _ref2.someSelected;
          var toggleSelectAll = _ref3.toggleSelectAll;
          return React.createElement(Checkbox, {
            disabled: !selectAllAvailable,
            checked: allSelected,
            indeterminate: someSelected,
            onChange: toggleSelectAll
          });
        })), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref4) {
            var tableRow = _ref4.tableRow,
                tableColumn = _ref4.tableColumn;
            return dxGridCore.isTreeTableCell(tableRow, tableColumn, forColumnName);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref5, _ref6) {
            var getCollapsedRows = _ref5.getCollapsedRows,
                expandedRowIds = _ref5.expandedRowIds,
                selection = _ref5.selection,
                isTreeRowLeaf = _ref5.isTreeRowLeaf,
                getTreeRowLevel = _ref5.getTreeRowLevel,
                getCellValue = _ref5.getCellValue;
            var toggleRowExpanded = _ref6.toggleRowExpanded,
                toggleSelection = _ref6.toggleSelection;
            var _params$tableRow = params.tableRow,
                row = _params$tableRow.row,
                rowId = _params$tableRow.rowId;
            var columnName = params.tableColumn.column.name;
            var value = getCellValue(row, columnName);
            var collapsedRows = getCollapsedRows(row);
            return React.createElement(dxReactCore.TemplatePlaceholder, {
              name: "valueFormatter",
              params: {
                row: row,
                column: params.tableColumn.column,
                value: value
              }
            }, function (content) {
              return React.createElement(Cell, _extends({}, params, {
                row: row,
                column: params.tableColumn.column,
                value: value
              }), React.createElement(Indent, {
                level: getTreeRowLevel(row)
              }), React.createElement(ExpandButton, {
                visible: collapsedRows ? !!collapsedRows.length : !isTreeRowLeaf(row),
                expanded: expandedRowIds.indexOf(rowId) > -1,
                onToggle: function onToggle() {
                  return toggleRowExpanded({
                    rowId: rowId
                  });
                }
              }), showSelectionControls && React.createElement(Checkbox, {
                disabled: false,
                checked: selection.indexOf(rowId) > -1,
                indeterminate: false,
                onChange: function onChange() {
                  return toggleSelection({
                    rowIds: [rowId]
                  });
                }
              }), React.createElement(Content, null, content || value));
            });
          });
        }));
      }
    }]);

    return TableTreeColumn;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? TableTreeColumn.propTypes = {
    for: PropTypes.string.isRequired,
    showSelectionControls: PropTypes.bool,
    showSelectAll: PropTypes.bool,
    cellComponent: PropTypes.func.isRequired,
    indentComponent: PropTypes.func.isRequired,
    expandButtonComponent: PropTypes.func.isRequired,
    checkboxComponent: PropTypes.func.isRequired,
    contentComponent: PropTypes.func.isRequired
  } : void 0;
  TableTreeColumn.defaultProps = {
    showSelectionControls: false,
    showSelectAll: false
  };
  TableTreeColumn.components = {
    cellComponent: 'Cell',
    contentComponent: 'Content',
    indentComponent: 'Indent',
    expandButtonComponent: 'ExpandButton',
    checkboxComponent: 'Checkbox'
  };

  var SearchState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(SearchState, _React$PureComponent);

    function SearchState(props) {
      var _this;

      _classCallCheck(this, SearchState);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchState).call(this, props));
      _this.state = {
        value: props.value || props.defaultValue
      };
      var stateHelper = dxReactCore.createStateHelper(_assertThisInitialized(_assertThisInitialized(_this)), {
        value: function value() {
          var onValueChange = _this.props.onValueChange;
          return onValueChange;
        }
      });
      _this.changeValue = stateHelper.applyFieldReducer.bind(stateHelper, 'value', dxGridCore.changeSearchValue);
      return _this;
    }

    _createClass(SearchState, [{
      key: "render",
      value: function render() {
        var value = this.state.value;

        var filterExpressionComputed = function filterExpressionComputed(_ref) {
          var filterExpression = _ref.filterExpression,
              columns = _ref.columns;
          return dxGridCore.searchFilterExpression(value, columns, filterExpression);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "SearchState"
        }, React.createElement(dxReactCore.Getter, {
          name: "filterExpression",
          computed: filterExpressionComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "searchValue",
          value: value
        }), React.createElement(dxReactCore.Action, {
          name: "changeSearchValue",
          action: this.changeValue
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _nextProps$value = nextProps.value,
            value = _nextProps$value === void 0 ? prevState.value : _nextProps$value;
        return {
          value: value
        };
      }
    }]);

    return SearchState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? SearchState.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onValueChange: PropTypes.func
  } : void 0;
  SearchState.defaultProps = {
    value: undefined,
    defaultValue: '',
    onValueChange: undefined
  };

  var pluginDependencies$i = [{
    name: 'Toolbar'
  }, {
    name: 'SearchState'
  }];
  var defaultMessages$6 = {
    searchPlaceholder: 'Search...'
  };
  var SearchPanel =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(SearchPanel, _React$PureComponent);

    function SearchPanel() {
      _classCallCheck(this, SearchPanel);

      return _possibleConstructorReturn(this, _getPrototypeOf(SearchPanel).apply(this, arguments));
    }

    _createClass(SearchPanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Input = _this$props.inputComponent,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages$6, messages));
        return React.createElement(dxReactCore.Plugin, {
          name: "SearchPanel",
          dependencies: pluginDependencies$i
        }, React.createElement(dxReactCore.Template, {
          name: "toolbarContent"
        }, React.createElement(dxReactCore.TemplatePlaceholder, null), React.createElement(dxReactCore.TemplateConnector, null, function (_ref, _ref2) {
          var searchValue = _ref.searchValue;
          var changeSearchValue = _ref2.changeSearchValue;
          return React.createElement(Input, {
            value: searchValue,
            onValueChange: changeSearchValue,
            getMessage: getMessage
          });
        })));
      }
    }]);

    return SearchPanel;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? SearchPanel.propTypes = {
    inputComponent: PropTypes.func.isRequired,
    messages: PropTypes.object
  } : void 0;
  SearchPanel.defaultProps = {
    messages: {}
  };
  SearchPanel.components = {
    inputComponent: 'Input'
  };

  var tableHeaderRowsComputed$2 = function tableHeaderRowsComputed(_ref) {
    var tableHeaderRows = _ref.tableHeaderRows;
    return dxGridCore.tableHeaderRowsWithFixed(tableHeaderRows);
  };

  var tableHeaderColumnChainsComputed = function tableHeaderColumnChainsComputed(_ref2) {
    var tableColumns = _ref2.tableColumns,
        tableHeaderRows = _ref2.tableHeaderRows,
        tableHeaderColumnChains = _ref2.tableHeaderColumnChains;
    return dxGridCore.tableHeaderColumnChainsWithFixed(tableHeaderColumnChains, tableHeaderRows, tableColumns);
  };

  var CellPlaceholder$2 = function CellPlaceholder(props) {
    return React.createElement(dxReactCore.TemplatePlaceholder, {
      params: props
    });
  };

  var pluginDependencies$j = [{
    name: 'Table'
  }, {
    name: 'TableBandHeader',
    optional: true
  }, {
    name: 'TableColumnReordering',
    optional: true
  }, {
    name: 'TableEditColumn',
    optional: true
  }, {
    name: 'TableEditRow',
    optional: true
  }, {
    name: 'TableFilterRow',
    optional: true
  }, {
    name: 'TableHeaderRow',
    optional: true
  }, {
    name: 'TableSelection',
    optional: true
  }, {
    name: 'TableSummaryRow',
    optional: true
  }, {
    name: 'TableTreeColumn',
    optional: true
  }];
  var TableFixedColumns =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableFixedColumns, _React$PureComponent);

    function TableFixedColumns(props) {
      var _this;

      _classCallCheck(this, TableFixedColumns);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TableFixedColumns).call(this, props));
      _this.state = {
        tableColumnDimensions: {}
      };
      return _this;
    }

    _createClass(TableFixedColumns, [{
      key: "handleListenerSizeChange",
      value: function handleListenerSizeChange(key, width) {
        this.setState(function (state) {
          return {
            tableColumnDimensions: _objectSpread({}, state.tableColumnDimensions, _defineProperty({}, key, width))
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            leftColumns = _this$props.leftColumns,
            rightColumns = _this$props.rightColumns,
            Cell = _this$props.cellComponent,
            ListenerRow = _this$props.listenerRowComponent,
            ListenerCell = _this$props.listenerCellComponent;

        var tableColumnsComputed = function tableColumnsComputed(_ref3) {
          var tableColumns = _ref3.tableColumns;
          return dxGridCore.tableColumnsWithFixed(tableColumns, leftColumns, rightColumns);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "TableFixedColumns",
          dependencies: pluginDependencies$j
        }, React.createElement(dxReactCore.Getter, {
          name: "tableHeaderRows",
          computed: tableHeaderRowsComputed$2
        }), React.createElement(dxReactCore.Getter, {
          name: "tableColumns",
          computed: tableColumnsComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "tableHeaderColumnChains",
          computed: tableHeaderColumnChainsComputed
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref4) {
            var tableColumn = _ref4.tableColumn;
            return !!tableColumn.fixed;
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref5) {
            var tableColumns = _ref5.tableColumns,
                tableHeaderColumnChains = _ref5.tableHeaderColumnChains;
            var tableColumnDimensions = _this2.state.tableColumnDimensions;
            var fixedColumnProps = dxGridCore.calculateFixedColumnProps(params, {
              leftColumns: leftColumns,
              rightColumns: rightColumns
            }, tableColumns, tableColumnDimensions, tableHeaderColumnChains);
            return React.createElement(Cell, _extends({}, params, fixedColumnProps, {
              component: CellPlaceholder$2
            }));
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref6) {
            var tableRow = _ref6.tableRow;
            return dxGridCore.isFixedTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(ListenerRow, params);
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref7) {
            var tableRow = _ref7.tableRow;
            return dxGridCore.isFixedTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(ListenerCell, _extends({}, params, {
            listen: !!params.tableColumn.fixed,
            onSizeChange: function onSizeChange(_ref8) {
              var width = _ref8.width;
              return _this2.handleListenerSizeChange(params.tableColumn.key, width);
            }
          }));
        }));
      }
    }]);

    return TableFixedColumns;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? TableFixedColumns.propTypes = {
    leftColumns: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.symbol])),
    rightColumns: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.symbol])),
    cellComponent: PropTypes.func.isRequired,
    listenerRowComponent: PropTypes.func.isRequired,
    listenerCellComponent: PropTypes.func.isRequired
  } : void 0;
  TableFixedColumns.defaultProps = {
    leftColumns: [],
    rightColumns: []
  };
  TableFixedColumns.components = {
    cellComponent: 'Cell',
    listenerRowComponent: 'ListenerRow',
    listenerCellComponent: 'ListenerCell'
  };

  var SummaryState =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(SummaryState, _React$PureComponent);

    function SummaryState() {
      _classCallCheck(this, SummaryState);

      return _possibleConstructorReturn(this, _getPrototypeOf(SummaryState).apply(this, arguments));
    }

    _createClass(SummaryState, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            totalItems = _this$props.totalItems,
            groupItems = _this$props.groupItems,
            treeItems = _this$props.treeItems;
        return React.createElement(dxReactCore.Plugin, {
          name: "SummaryState"
        }, React.createElement(dxReactCore.Getter, {
          name: "totalSummaryItems",
          value: totalItems
        }), React.createElement(dxReactCore.Getter, {
          name: "groupSummaryItems",
          value: groupItems
        }), React.createElement(dxReactCore.Getter, {
          name: "treeSummaryItems",
          value: treeItems
        }));
      }
    }]);

    return SummaryState;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? SummaryState.propTypes = {
    totalItems: PropTypes.array,
    groupItems: PropTypes.array,
    treeItems: PropTypes.array
  } : void 0;
  SummaryState.defaultProps = {
    totalItems: undefined,
    groupItems: undefined,
    treeItems: undefined
  };

  var pluginDependencies$k = [{
    name: 'SummaryState'
  }];
  var IntegratedSummary =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(IntegratedSummary, _React$PureComponent);

    function IntegratedSummary() {
      _classCallCheck(this, IntegratedSummary);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegratedSummary).apply(this, arguments));
    }

    _createClass(IntegratedSummary, [{
      key: "render",
      value: function render() {
        var calculator = this.props.calculator;

        var totalSummaryValuesComputed = function totalSummaryValuesComputed(_ref) {
          var rows = _ref.rows,
              totalSummaryItems = _ref.totalSummaryItems,
              getCellValue = _ref.getCellValue,
              getRowLevelKey = _ref.getRowLevelKey,
              isGroupRow = _ref.isGroupRow,
              getCollapsedRows = _ref.getCollapsedRows;
          return dxGridCore.totalSummaryValues(rows, totalSummaryItems, getCellValue, getRowLevelKey, isGroupRow, getCollapsedRows, calculator);
        };

        var groupSummaryValuesComputed = function groupSummaryValuesComputed(_ref2) {
          var rows = _ref2.rows,
              groupSummaryItems = _ref2.groupSummaryItems,
              getCellValue = _ref2.getCellValue,
              getRowLevelKey = _ref2.getRowLevelKey,
              isGroupRow = _ref2.isGroupRow;
          return dxGridCore.groupSummaryValues(rows, groupSummaryItems, getCellValue, getRowLevelKey, isGroupRow, calculator);
        };

        var treeSummaryValuesComputed = function treeSummaryValuesComputed(_ref3) {
          var rows = _ref3.rows,
              treeSummaryItems = _ref3.treeSummaryItems,
              getCellValue = _ref3.getCellValue,
              getRowLevelKey = _ref3.getRowLevelKey,
              isGroupRow = _ref3.isGroupRow,
              getRowId = _ref3.getRowId;
          return dxGridCore.treeSummaryValues(rows, treeSummaryItems, getCellValue, getRowLevelKey, isGroupRow, getRowId, calculator);
        };

        return React.createElement(dxReactCore.Plugin, {
          name: "IntegratedSummary",
          dependencies: pluginDependencies$k
        }, React.createElement(dxReactCore.Getter, {
          name: "totalSummaryValues",
          computed: totalSummaryValuesComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "groupSummaryValues",
          computed: groupSummaryValuesComputed
        }), React.createElement(dxReactCore.Getter, {
          name: "treeSummaryValues",
          computed: treeSummaryValuesComputed
        }));
      }
    }]);

    return IntegratedSummary;
  }(React.PureComponent);
  IntegratedSummary.defaultCalculator = dxGridCore.defaultSummaryCalculator;
  process.env.NODE_ENV !== "production" ? IntegratedSummary.propTypes = {
    calculator: PropTypes.func
  } : void 0;
  IntegratedSummary.defaultProps = {
    calculator: undefined
  };

  var pluginDependencies$l = [{
    name: 'SummaryState'
  }];
  var CustomSummary =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(CustomSummary, _React$PureComponent);

    function CustomSummary() {
      _classCallCheck(this, CustomSummary);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomSummary).apply(this, arguments));
    }

    _createClass(CustomSummary, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            totalValues = _this$props.totalValues,
            groupValues = _this$props.groupValues,
            treeValues = _this$props.treeValues;
        return React.createElement(dxReactCore.Plugin, {
          name: "CustomSummary",
          dependencies: pluginDependencies$l
        }, React.createElement(dxReactCore.Getter, {
          name: "totalSummaryValues",
          value: totalValues
        }), React.createElement(dxReactCore.Getter, {
          name: "groupSummaryValues",
          value: groupValues
        }), React.createElement(dxReactCore.Getter, {
          name: "treeSummaryValues",
          value: treeValues
        }));
      }
    }]);

    return CustomSummary;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? CustomSummary.propTypes = {
    totalValues: PropTypes.array,
    groupValues: PropTypes.object,
    treeValues: PropTypes.object
  } : void 0;
  CustomSummary.defaultProps = {
    totalValues: undefined,
    groupValues: undefined,
    treeValues: undefined
  };

  var dependencies$1 = [{
    name: 'DataTypeProvider',
    optional: true
  }, {
    name: 'SummaryState'
  }, {
    name: 'CustomSummary',
    optional: true
  }, {
    name: 'IntegratedSummary',
    optional: true
  }, {
    name: 'Table'
  }, {
    name: 'TableTreeColumn',
    optional: true
  }];
  var defaultMessages$7 = {
    sum: 'Sum',
    min: 'Min',
    max: 'Max',
    avg: 'Avg',
    count: 'Count'
  };

  var tableBodyRowsComputed$2 = function tableBodyRowsComputed(_ref) {
    var tableBodyRows = _ref.tableBodyRows,
        getRowLevelKey = _ref.getRowLevelKey,
        isGroupRow = _ref.isGroupRow,
        getRowId = _ref.getRowId;
    return dxGridCore.tableRowsWithSummaries(tableBodyRows, getRowLevelKey, isGroupRow, getRowId);
  };

  var tableFooterRowsComputed = function tableFooterRowsComputed(_ref2) {
    var tableFooterRows = _ref2.tableFooterRows;
    return dxGridCore.tableRowsWithTotalSummaries(tableFooterRows);
  };

  var defaultTypelessSummaries = ['count'];
  var TableSummaryRow =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableSummaryRow, _React$PureComponent);

    function TableSummaryRow() {
      _classCallCheck(this, TableSummaryRow);

      return _possibleConstructorReturn(this, _getPrototypeOf(TableSummaryRow).apply(this, arguments));
    }

    _createClass(TableSummaryRow, [{
      key: "renderContent",
      value: function renderContent(column, columnSummaries) {
        var _this$props = this.props,
            formatlessSummaryTypes = _this$props.formatlessSummaryTypes,
            Item = _this$props.itemComponent,
            messages = _this$props.messages;
        var getMessage = dxCore.getMessagesFormatter(_objectSpread({}, defaultMessages$7, messages));

        var SummaryItem = function SummaryItem(_ref3) {
          var summary = _ref3.summary,
              children = _ref3.children;
          return React.createElement(Item, {
            getMessage: getMessage,
            type: summary.type,
            value: summary.value
          }, children || String(summary.value));
        };

        return React.createElement(React.Fragment, null, columnSummaries.map(function (summary) {
          if (summary.value === null || formatlessSummaryTypes.includes(summary.type) || defaultTypelessSummaries.includes(summary.type)) {
            return React.createElement(SummaryItem, {
              key: summary.type,
              summary: summary
            });
          }

          return React.createElement(dxReactCore.TemplatePlaceholder, {
            key: summary.type,
            name: "valueFormatter",
            params: {
              column: column,
              value: summary.value
            }
          }, function (content) {
            return React.createElement(SummaryItem, {
              summary: summary
            }, content);
          });
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props2 = this.props,
            TotalRow = _this$props2.totalRowComponent,
            GroupRow = _this$props2.groupRowComponent,
            TreeRow = _this$props2.treeRowComponent,
            TotalCell = _this$props2.totalCellComponent,
            GroupCell = _this$props2.groupCellComponent,
            TreeCell = _this$props2.treeCellComponent,
            TreeColumnCell = _this$props2.treeColumnCellComponent,
            TreeColumnContent = _this$props2.treeColumnContentComponent,
            TreeColumnIndent = _this$props2.treeColumnIndentComponent;
        return React.createElement(dxReactCore.Plugin, {
          name: "TableSummaryRow",
          dependencies: dependencies$1
        }, React.createElement(dxReactCore.Getter, {
          name: "tableBodyRows",
          computed: tableBodyRowsComputed$2
        }), React.createElement(dxReactCore.Getter, {
          name: "tableFooterRows",
          computed: tableFooterRowsComputed
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref4) {
            var tableRow = _ref4.tableRow,
                tableColumn = _ref4.tableColumn;
            return dxGridCore.isTotalSummaryTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref5) {
            var totalSummaryItems = _ref5.totalSummaryItems,
                totalSummaryValues = _ref5.totalSummaryValues;
            var columnSummaries = dxGridCore.getColumnSummaries(totalSummaryItems, params.tableColumn.column.name, totalSummaryValues);
            return React.createElement(TotalCell, _extends({}, params, {
              column: params.tableColumn.column
            }), _this.renderContent(params.tableColumn.column, columnSummaries));
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref6) {
            var tableRow = _ref6.tableRow,
                tableColumn = _ref6.tableColumn;
            return dxGridCore.isGroupSummaryTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref7) {
            var groupSummaryItems = _ref7.groupSummaryItems,
                groupSummaryValues = _ref7.groupSummaryValues;
            var columnSummaries = dxGridCore.getColumnSummaries(groupSummaryItems, params.tableColumn.column.name, groupSummaryValues[params.tableRow.row.compoundKey]);
            return React.createElement(GroupCell, _extends({}, params, {
              column: params.tableColumn.column
            }), _this.renderContent(params.tableColumn.column, columnSummaries));
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableCell",
          predicate: function predicate(_ref8) {
            var tableRow = _ref8.tableRow,
                tableColumn = _ref8.tableColumn;
            return dxGridCore.isTreeSummaryTableCell(tableRow, tableColumn);
          }
        }, function (params) {
          return React.createElement(dxReactCore.TemplateConnector, null, function (_ref9) {
            var treeSummaryItems = _ref9.treeSummaryItems,
                treeSummaryValues = _ref9.treeSummaryValues,
                tableTreeColumnName = _ref9.tableTreeColumnName,
                getRowId = _ref9.getRowId,
                getTreeRowLevel = _ref9.getTreeRowLevel;
            var columnSummaries = dxGridCore.getColumnSummaries(treeSummaryItems, params.tableColumn.column.name, treeSummaryValues[getRowId(params.tableRow.row)]);

            if (tableTreeColumnName === params.tableColumn.column.name) {
              return React.createElement(TreeColumnCell, _extends({}, params, {
                column: params.tableColumn.column
              }), React.createElement(TreeColumnIndent, {
                level: getTreeRowLevel(params.tableRow.row)
              }), React.createElement(TreeColumnContent, null, _this.renderContent(params.tableColumn.column, columnSummaries)));
            }

            return React.createElement(TreeCell, _extends({}, params, {
              column: params.tableColumn.column
            }), _this.renderContent(params.tableColumn.column, columnSummaries));
          });
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref10) {
            var tableRow = _ref10.tableRow;
            return dxGridCore.isTotalSummaryTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(TotalRow, params);
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref11) {
            var tableRow = _ref11.tableRow;
            return dxGridCore.isGroupSummaryTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(GroupRow, params);
        }), React.createElement(dxReactCore.Template, {
          name: "tableRow",
          predicate: function predicate(_ref12) {
            var tableRow = _ref12.tableRow;
            return dxGridCore.isTreeSummaryTableRow(tableRow);
          }
        }, function (params) {
          return React.createElement(TreeRow, params);
        }));
      }
    }]);

    return TableSummaryRow;
  }(React.PureComponent);
  TableSummaryRow.TREE_ROW_TYPE = dxGridCore.TABLE_TREE_SUMMARY_TYPE;
  TableSummaryRow.GROUP_ROW_TYPE = dxGridCore.TABLE_GROUP_SUMMARY_TYPE;
  TableSummaryRow.TOTAL_ROW_TYPE = dxGridCore.TABLE_TOTAL_SUMMARY_TYPE;
  process.env.NODE_ENV !== "production" ? TableSummaryRow.propTypes = {
    formatlessSummaryTypes: PropTypes.array,
    totalRowComponent: PropTypes.func.isRequired,
    groupRowComponent: PropTypes.func.isRequired,
    treeRowComponent: PropTypes.func.isRequired,
    totalCellComponent: PropTypes.func.isRequired,
    groupCellComponent: PropTypes.func.isRequired,
    treeCellComponent: PropTypes.func.isRequired,
    treeColumnCellComponent: PropTypes.func.isRequired,
    treeColumnContentComponent: PropTypes.func.isRequired,
    treeColumnIndentComponent: PropTypes.func.isRequired,
    itemComponent: PropTypes.func.isRequired,
    messages: PropTypes.shape({
      sum: PropTypes.string,
      min: PropTypes.string,
      max: PropTypes.string,
      avg: PropTypes.string,
      count: PropTypes.string
    })
  } : void 0;
  TableSummaryRow.defaultProps = {
    formatlessSummaryTypes: [],
    messages: {}
  };
  TableSummaryRow.components = {
    totalRowComponent: 'TotalRow',
    groupRowComponent: 'GroupRow',
    treeRowComponent: 'TreeRow',
    totalCellComponent: 'TotalCell',
    groupCellComponent: 'GroupCell',
    treeCellComponent: 'TreeCell',
    treeColumnCellComponent: 'TableTreeCell',
    treeColumnContentComponent: 'TableTreeContent',
    treeColumnIndentComponent: 'TableTreeIndent',
    itemComponent: 'Item'
  };

  var TableLayout =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TableLayout, _React$PureComponent);

    function TableLayout(props) {
      var _this;

      _classCallCheck(this, TableLayout);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TableLayout).call(this, props));
      _this.state = {
        animationState: new Map()
      };
      _this.animations = new Map();
      _this.savedScrolldWidth = {};
      _this.tableRef = React.createRef();
      return _this;
    }

    _createClass(TableLayout, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var columns = this.props.columns;
        var prevColumns = prevProps.columns;
        var tableWidth = this.getTableWidth(prevColumns, columns);
        this.animations = dxGridCore.getAnimations(prevColumns, columns, tableWidth, this.animations);
        cancelAnimationFrame(this.raf);
        this.raf = requestAnimationFrame(this.processAnimationFrame.bind(this));
      }
    }, {
      key: "getTableWidth",
      value: function getTableWidth(prevColumns, columns) {
        var _this$tableRef$curren = this.tableRef.current,
            offsetWidth = _this$tableRef$curren.offsetWidth,
            scrollWidth = _this$tableRef$curren.scrollWidth;
        var animationState = this.state.animationState;
        var widthChanged = this.savedOffsetWidth !== offsetWidth || !this.savedScrolldWidth[columns.length];
        var columnCountChanged = columns.length !== prevColumns.length;

        if (columnCountChanged || widthChanged && !animationState.size) {
          this.savedScrolldWidth = {};
          this.savedScrolldWidth[columns.length] = scrollWidth;
          this.savedOffsetWidth = offsetWidth;
        }

        return this.savedScrolldWidth[columns.length];
      }
    }, {
      key: "getColumns",
      value: function getColumns() {
        var columns = this.props.columns;
        var animationState = this.state.animationState;
        var result = columns;
        var isFixedWidth = columns.filter(function (column) {
          return column.width === undefined;
        }).length === 0;

        if (isFixedWidth) {
          result = result.slice();
          result.push({
            key: dxGridCore.TABLE_FLEX_TYPE.toString(),
            type: dxGridCore.TABLE_FLEX_TYPE
          });
        }

        if (animationState.size) {
          result = result.map(function (column) {
            return animationState.has(column.key) ? _objectSpread({}, column, {
              animationState: animationState.get(column.key)
            }) : column;
          });
        }

        return result;
      }
    }, {
      key: "processAnimationFrame",
      value: function processAnimationFrame() {
        var animationComponentState = this.state.animationState;
        this.animations = dxGridCore.filterActiveAnimations(this.animations);

        if (!this.animations.size) {
          if (animationComponentState.size) {
            this.setState({
              animationState: new Map()
            });
          }

          return;
        }

        var animationState = dxGridCore.evalAnimations(this.animations);
        this.setState({
          animationState: animationState
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Layout = _this$props.layoutComponent,
            minColumnWidth = _this$props.minColumnWidth,
            restProps = _objectWithoutProperties(_this$props, ["layoutComponent", "minColumnWidth"]);

        var columns = this.getColumns();
        var minWidth = columns.map(function (column) {
          return column.width || (column.type === dxGridCore.TABLE_FLEX_TYPE ? 0 : minColumnWidth);
        }).reduce(function (acc, width) {
          return acc + width;
        }, 0);
        return React.createElement(Layout, _extends({}, restProps, {
          tableRef: this.tableRef,
          columns: columns,
          minWidth: minWidth,
          minColumnWidth: minColumnWidth
        }));
      }
    }]);

    return TableLayout;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? TableLayout.propTypes = {
    columns: PropTypes.array.isRequired,
    minColumnWidth: PropTypes.number.isRequired,
    layoutComponent: PropTypes.func.isRequired
  } : void 0;

  var ColumnGroup =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(ColumnGroup, _React$PureComponent);

    function ColumnGroup() {
      _classCallCheck(this, ColumnGroup);

      return _possibleConstructorReturn(this, _getPrototypeOf(ColumnGroup).apply(this, arguments));
    }

    _createClass(ColumnGroup, [{
      key: "render",
      value: function render() {
        var columns = this.props.columns;
        return React.createElement("colgroup", null, columns.map(function (column) {
          return React.createElement("col", {
            key: column.key,
            style: column.width !== undefined ? {
              width: "".concat(column.width, "px")
            } : null
          });
        }));
      }
    }]);

    return ColumnGroup;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? ColumnGroup.propTypes = {
    columns: PropTypes.array.isRequired
  } : void 0;

  var AUTO_HEIGHT = 'auto';
  var VirtualTableLayout =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(VirtualTableLayout, _React$PureComponent);

    function VirtualTableLayout(props) {
      var _this;

      _classCallCheck(this, VirtualTableLayout);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualTableLayout).call(this, props));
      _this.state = {
        rowHeights: new Map(),
        viewportTop: 0,
        viewportLeft: 0,
        width: 800,
        height: 600
      };
      _this.state.headerHeight = props.headerRows.reduce(function (acc, row) {
        return acc + _this.getRowHeight(row);
      }, 0);
      _this.state.bodyHeight = 0;
      _this.state.footerHeight = props.footerRows.reduce(function (acc, row) {
        return acc + _this.getRowHeight(row);
      }, 0);
      _this.rowRefs = new Map();
      _this.blockRefs = new Map();
      _this.registerRowRef = _this.registerRowRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getRowHeight = _this.getRowHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.updateViewport = _this.updateViewport.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleContainerSizeChange = _this.handleContainerSizeChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(VirtualTableLayout, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.isEdgeBrowser = dxCore.isEdgeBrowser();
        this.storeRowHeights();
        this.storeBloksHeights();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.storeRowHeights();
        this.storeBloksHeights();
      }
    }, {
      key: "getRowHeight",
      value: function getRowHeight(row) {
        var rowHeights = this.state.rowHeights;
        var estimatedRowHeight = this.props.estimatedRowHeight;
        var storedHeight = rowHeights.get(row.key);
        if (storedHeight !== undefined) return storedHeight;
        if (row.height) return row.height;
        return estimatedRowHeight;
      }
    }, {
      key: "storeRowHeights",
      value: function storeRowHeights() {
        var _this2 = this;

        var rowsWithChangedHeights = Array.from(this.rowRefs.entries()) // eslint-disable-next-line react/no-find-dom-node
        .map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              row = _ref2[0],
              ref = _ref2[1];

          return [row, reactDom.findDOMNode(ref)];
        }).filter(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              node = _ref4[1];

          return !!node;
        }).map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              row = _ref6[0],
              node = _ref6[1];

          return [row, node.getBoundingClientRect().height];
        }).filter(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 1),
              row = _ref8[0];

          return row.type !== dxGridCore.TABLE_STUB_TYPE;
        }).filter(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              row = _ref10[0],
              height = _ref10[1];

          return height !== _this2.getRowHeight(row);
        });

        if (rowsWithChangedHeights.length) {
          var rowHeights = this.state.rowHeights;
          rowsWithChangedHeights.forEach(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
                row = _ref12[0],
                height = _ref12[1];

            return rowHeights.set(row.key, height);
          });
          this.setState({
            rowHeights: rowHeights
          });
        }
      }
    }, {
      key: "storeBloksHeights",
      value: function storeBloksHeights() {
        var headerHeight = this.blockRefs.get('header') // eslint-disable-next-line react/no-find-dom-node
        ? reactDom.findDOMNode(this.blockRefs.get('header')).getBoundingClientRect().height : 0;
        var bodyHeight = this.blockRefs.get('body') // eslint-disable-next-line react/no-find-dom-node
        ? reactDom.findDOMNode(this.blockRefs.get('body')).getBoundingClientRect().height : 0;
        var footerHeight = this.blockRefs.get('footer') // eslint-disable-next-line react/no-find-dom-node
        ? reactDom.findDOMNode(this.blockRefs.get('footer')).getBoundingClientRect().height : 0;
        var _this$state = this.state,
            prevHeaderHeight = _this$state.headerHeight,
            prevBodyHeight = _this$state.bodyHeight,
            prevFooterHeight = _this$state.footerHeight;

        if (prevHeaderHeight !== headerHeight || prevBodyHeight !== bodyHeight || prevFooterHeight !== footerHeight) {
          this.setState({
            headerHeight: headerHeight,
            bodyHeight: bodyHeight,
            footerHeight: footerHeight
          });
        }
      }
    }, {
      key: "registerRowRef",
      value: function registerRowRef(row, ref) {
        if (ref === null) {
          this.rowRefs.delete(row);
        } else {
          this.rowRefs.set(row, ref);
        }
      }
    }, {
      key: "registerBlockRef",
      value: function registerBlockRef(name, ref) {
        if (ref === null) {
          this.blockRefs.delete(name);
        } else {
          this.blockRefs.set(name, ref);
        }
      }
    }, {
      key: "shouldSkipScrollEvent",
      value: function shouldSkipScrollEvent(e) {
        var node = e.target; // NOTE: prevent nested scroll to update viewport

        if (node !== e.currentTarget) {
          return true;
        } // NOTE: prevent iOS to flicker in bounces and correct rendering on high dpi screens


        var correction = this.isEdgeBrowser ? 1 : 0;
        var nodeHorizontalOffset = parseInt(node.scrollLeft + node.clientWidth, 10) - correction;
        var nodeVerticalOffset = parseInt(node.scrollTop + node.clientHeight, 10) - correction;

        if (node.scrollTop < 0 || node.scrollLeft < 0 || nodeHorizontalOffset > Math.max(node.scrollWidth, node.clientWidth) || nodeVerticalOffset > Math.max(node.scrollHeight, node.clientHeight)) {
          return true;
        }

        return false;
      }
    }, {
      key: "updateViewport",
      value: function updateViewport(e) {
        var node = e.target;

        if (this.shouldSkipScrollEvent(e)) {
          return;
        }

        this.setState({
          viewportTop: node.scrollTop,
          viewportLeft: node.scrollLeft
        });
      }
    }, {
      key: "handleContainerSizeChange",
      value: function handleContainerSizeChange(_ref13) {
        var width = _ref13.width,
            height = _ref13.height;
        this.setState({
          width: width,
          height: height
        });
      }
    }, {
      key: "renderRowsBlock",
      value: function renderRowsBlock(name, collapsedGrid, Table, Body, blockRef, marginBottom) {
        var _this3 = this;

        var _this$props = this.props,
            minWidth = _this$props.minWidth,
            Row = _this$props.rowComponent,
            Cell = _this$props.cellComponent;
        var tableRef = blockRef || React.createRef();
        return React.createElement(dxReactCore.RefHolder, {
          ref: function ref(_ref15) {
            return _this3.registerBlockRef(name, _ref15);
          }
        }, React.createElement(Table, {
          tableRef: tableRef,
          style: _objectSpread({
            minWidth: "".concat(minWidth, "px")
          }, marginBottom ? {
            marginBottom: "".concat(marginBottom, "px")
          } : null)
        }, React.createElement(ColumnGroup, {
          columns: collapsedGrid.columns
        }), React.createElement(Body, null, collapsedGrid.rows.map(function (visibleRow) {
          var row = visibleRow.row,
              _visibleRow$cells = visibleRow.cells,
              cells = _visibleRow$cells === void 0 ? [] : _visibleRow$cells;
          return React.createElement(dxReactCore.RefHolder, {
            key: row.key,
            ref: function ref(_ref14) {
              return _this3.registerRowRef(row, _ref14);
            }
          }, React.createElement(Row, {
            tableRow: row,
            style: row.height !== undefined ? {
              height: "".concat(row.height, "px")
            } : undefined
          }, cells.map(function (cell) {
            var column = cell.column;
            return React.createElement(Cell, {
              key: column.key,
              tableRow: row,
              tableColumn: column,
              style: column.animationState,
              colSpan: cell.colSpan
            });
          })));
        }))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            headerRows = _this$props2.headerRows,
            bodyRows = _this$props2.bodyRows,
            footerRows = _this$props2.footerRows,
            columns = _this$props2.columns,
            minColumnWidth = _this$props2.minColumnWidth,
            propHeight = _this$props2.height,
            Container = _this$props2.containerComponent,
            HeadTable = _this$props2.headTableComponent,
            FootTable = _this$props2.footerTableComponent,
            Table = _this$props2.tableComponent,
            Head = _this$props2.headComponent,
            Body = _this$props2.bodyComponent,
            Footer = _this$props2.footerComponent,
            getCellColSpan = _this$props2.getCellColSpan,
            tableRef = _this$props2.tableRef;
        var _this$state2 = this.state,
            viewportLeft = _this$state2.viewportLeft,
            viewportTop = _this$state2.viewportTop,
            headerHeight = _this$state2.headerHeight,
            bodyHeight = _this$state2.bodyHeight,
            footerHeight = _this$state2.footerHeight,
            width = _this$state2.width,
            height = _this$state2.height;

        var getColumnWidth = function getColumnWidth(column) {
          return column.type === dxGridCore.TABLE_FLEX_TYPE ? null : column.width || minColumnWidth;
        };

        var getColSpan = function getColSpan(tableRow, tableColumn) {
          return getCellColSpan({
            tableRow: tableRow,
            tableColumn: tableColumn,
            tableColumns: columns
          });
        };

        var collapsedHeaderGrid = dxGridCore.getCollapsedGrid({
          rows: headerRows,
          columns: columns,
          top: 0,
          left: viewportLeft,
          width: width,
          height: headerHeight,
          getColumnWidth: getColumnWidth,
          getRowHeight: this.getRowHeight,
          getColSpan: getColSpan
        });
        var collapsedBodyGrid = dxGridCore.getCollapsedGrid({
          rows: bodyRows,
          columns: columns,
          top: viewportTop,
          left: viewportLeft,
          width: width,
          height: height - headerHeight - footerHeight,
          getColumnWidth: getColumnWidth,
          getRowHeight: this.getRowHeight,
          getColSpan: getColSpan
        });
        var collapsedFooterGrid = dxGridCore.getCollapsedGrid({
          rows: footerRows,
          columns: columns,
          top: 0,
          left: viewportLeft,
          width: width,
          height: footerHeight,
          getColumnWidth: getColumnWidth,
          getRowHeight: this.getRowHeight,
          getColSpan: getColSpan
        });
        return React.createElement(dxReactCore.Sizer, {
          onSizeChange: this.handleContainerSizeChange,
          containerComponent: Container,
          style: _objectSpread({}, propHeight === AUTO_HEIGHT ? null : {
            height: "".concat(propHeight, "px")
          }),
          onScroll: this.updateViewport
        }, !!headerRows.length && this.renderRowsBlock('header', collapsedHeaderGrid, HeadTable, Head), this.renderRowsBlock('body', collapsedBodyGrid, Table, Body, tableRef, Math.max(0, height - headerHeight - bodyHeight - footerHeight)), !!footerRows.length && this.renderRowsBlock('footer', collapsedFooterGrid, FootTable, Footer));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var prevRowHeight = prevState.rowHeights;
        var rowHeights = [].concat(_toConsumableArray(nextProps.headerRows), _toConsumableArray(nextProps.bodyRows), _toConsumableArray(nextProps.footerRows)).reduce(function (acc, row) {
          var rowHeight = prevRowHeight.get(row.key);

          if (rowHeight !== undefined) {
            acc.set(row.key, rowHeight);
          }

          return acc;
        }, new Map());
        return {
          rowHeights: rowHeights
        };
      }
    }]);

    return VirtualTableLayout;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? VirtualTableLayout.propTypes = {
    minWidth: PropTypes.number.isRequired,
    minColumnWidth: PropTypes.number.isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]).isRequired,
    headerRows: PropTypes.array,
    bodyRows: PropTypes.array.isRequired,
    footerRows: PropTypes.array,
    columns: PropTypes.array.isRequired,
    cellComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    bodyComponent: PropTypes.func.isRequired,
    headComponent: PropTypes.func,
    footerComponent: PropTypes.func,
    tableComponent: PropTypes.func.isRequired,
    headTableComponent: PropTypes.func,
    footerTableComponent: PropTypes.func,
    containerComponent: PropTypes.func.isRequired,
    estimatedRowHeight: PropTypes.number.isRequired,
    getCellColSpan: PropTypes.func.isRequired,
    tableRef: dxReactCore.RefType.isRequired
  } : void 0;
  VirtualTableLayout.defaultProps = {
    headerRows: [],
    footerRows: [],
    headComponent: function headComponent() {
      return null;
    },
    headTableComponent: function headTableComponent() {
      return null;
    },
    footerComponent: function footerComponent() {
      return null;
    },
    footerTableComponent: function footerTableComponent() {
      return null;
    }
  };

  var getColumnStyle = function getColumnStyle(_ref) {
    var column = _ref.column;
    return column.animationState;
  };

  var getRowStyle = function getRowStyle(_ref2) {
    var row = _ref2.row;
    return row.height !== undefined ? {
      height: "".concat(row.height, "px")
    } : undefined;
  };

  var RowLayout =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(RowLayout, _React$PureComponent);

    function RowLayout() {
      _classCallCheck(this, RowLayout);

      return _possibleConstructorReturn(this, _getPrototypeOf(RowLayout).apply(this, arguments));
    }

    _createClass(RowLayout, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            row = _this$props.row,
            columns = _this$props.columns,
            Row = _this$props.rowComponent,
            Cell = _this$props.cellComponent,
            getCellColSpan = _this$props.getCellColSpan;

        var getColSpan = function getColSpan(tableRow, tableColumn) {
          return getCellColSpan({
            tableRow: tableRow,
            tableColumn: tableColumn,
            tableColumns: columns
          });
        };

        return React.createElement(Row, {
          tableRow: row,
          style: getRowStyle({
            row: row
          })
        }, columns.map(function (column) {
          return React.createElement(Cell, {
            key: column.key,
            tableRow: row,
            tableColumn: column,
            style: getColumnStyle({
              column: column
            }),
            colSpan: getColSpan(row, column)
          });
        }));
      }
    }]);

    return RowLayout;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? RowLayout.propTypes = {
    row: PropTypes.any.isRequired,
    columns: PropTypes.array.isRequired,
    rowComponent: PropTypes.func.isRequired,
    cellComponent: PropTypes.func.isRequired,
    getCellColSpan: PropTypes.func.isRequired
  } : void 0;

  var RowsBlockLayout =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(RowsBlockLayout, _React$PureComponent);

    function RowsBlockLayout() {
      _classCallCheck(this, RowsBlockLayout);

      return _possibleConstructorReturn(this, _getPrototypeOf(RowsBlockLayout).apply(this, arguments));
    }

    _createClass(RowsBlockLayout, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            rows = _this$props.rows,
            columns = _this$props.columns,
            Block = _this$props.blockComponent,
            rowComponent = _this$props.rowComponent,
            cellComponent = _this$props.cellComponent,
            getCellColSpan = _this$props.getCellColSpan;
        return React.createElement(Block, null, rows.map(function (row) {
          return React.createElement(RowLayout, {
            key: row.key,
            row: row,
            columns: columns,
            rowComponent: rowComponent,
            cellComponent: cellComponent,
            getCellColSpan: getCellColSpan
          });
        }));
      }
    }]);

    return RowsBlockLayout;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? RowsBlockLayout.propTypes = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    blockComponent: PropTypes.func.isRequired,
    rowComponent: PropTypes.func.isRequired,
    cellComponent: PropTypes.func.isRequired,
    getCellColSpan: PropTypes.func.isRequired
  } : void 0;

  var StaticTableLayout =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(StaticTableLayout, _React$PureComponent);

    function StaticTableLayout() {
      _classCallCheck(this, StaticTableLayout);

      return _possibleConstructorReturn(this, _getPrototypeOf(StaticTableLayout).apply(this, arguments));
    }

    _createClass(StaticTableLayout, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            headerRows = _this$props.headerRows,
            bodyRows = _this$props.bodyRows,
            footerRows = _this$props.footerRows,
            columns = _this$props.columns,
            minWidth = _this$props.minWidth,
            Container = _this$props.containerComponent,
            Table = _this$props.tableComponent,
            headComponent = _this$props.headComponent,
            bodyComponent = _this$props.bodyComponent,
            footerComponent = _this$props.footerComponent,
            rowComponent = _this$props.rowComponent,
            cellComponent = _this$props.cellComponent,
            getCellColSpan = _this$props.getCellColSpan,
            tableRef = _this$props.tableRef;
        return React.createElement(Container, null, React.createElement(Table, {
          tableRef: tableRef,
          style: {
            minWidth: "".concat(minWidth, "px")
          }
        }, React.createElement(ColumnGroup, {
          columns: columns
        }), !!headerRows.length && React.createElement(RowsBlockLayout, {
          rows: headerRows,
          columns: columns,
          blockComponent: headComponent,
          rowComponent: rowComponent,
          cellComponent: cellComponent,
          getCellColSpan: getCellColSpan
        }), React.createElement(RowsBlockLayout, {
          rows: bodyRows,
          columns: columns,
          blockComponent: bodyComponent,
          rowComponent: rowComponent,
          cellComponent: cellComponent,
          getCellColSpan: getCellColSpan
        }), !!footerRows.length && React.createElement(RowsBlockLayout, {
          rows: footerRows,
          columns: columns,
          blockComponent: footerComponent,
          rowComponent: rowComponent,
          cellComponent: cellComponent,
          getCellColSpan: getCellColSpan
        })));
      }
    }]);

    return StaticTableLayout;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? StaticTableLayout.propTypes = {
    headerRows: PropTypes.array,
    bodyRows: PropTypes.array.isRequired,
    footerRows: PropTypes.array,
    columns: PropTypes.array.isRequired,
    minWidth: PropTypes.number.isRequired,
    containerComponent: PropTypes.func.isRequired,
    tableComponent: PropTypes.func.isRequired,
    headComponent: PropTypes.func,
    bodyComponent: PropTypes.func.isRequired,
    footerComponent: PropTypes.func,
    rowComponent: PropTypes.func.isRequired,
    cellComponent: PropTypes.func.isRequired,
    getCellColSpan: PropTypes.func.isRequired,
    tableRef: dxReactCore.RefType.isRequired
  } : void 0;
  StaticTableLayout.defaultProps = {
    headerRows: [],
    footerRows: [],
    headComponent: function headComponent() {
      return null;
    },
    footerComponent: function footerComponent() {
      return null;
    }
  };

  var makeVirtualTable = function makeVirtualTable(Table, _ref) {
    var VirtualLayout = _ref.VirtualLayout,
        FixedHeader = _ref.FixedHeader,
        FixedFooter = _ref.FixedFooter,
        defaultEstimatedRowHeight = _ref.defaultEstimatedRowHeight,
        defaultHeight = _ref.defaultHeight;

    var VirtualTable =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(VirtualTable, _React$PureComponent);

      function VirtualTable(props) {
        var _this;

        _classCallCheck(this, VirtualTable);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualTable).call(this, props));
        _this.layoutRenderComponent = dxReactCore.connectProps(VirtualLayout, function () {
          var _this$props = _this.props,
              height = _this$props.height,
              estimatedRowHeight = _this$props.estimatedRowHeight,
              headTableComponent = _this$props.headTableComponent,
              footerTableComponent = _this$props.footerTableComponent;
          return {
            height: height,
            estimatedRowHeight: estimatedRowHeight,
            headTableComponent: headTableComponent,
            footerTableComponent: footerTableComponent
          };
        });
        return _this;
      }

      _createClass(VirtualTable, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.layoutRenderComponent.update();
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
              height = _this$props2.height,
              estimatedRowHeight = _this$props2.estimatedRowHeight,
              headTableComponent = _this$props2.headTableComponent,
              restProps = _objectWithoutProperties(_this$props2, ["height", "estimatedRowHeight", "headTableComponent"]);

          return React.createElement(Table, _extends({
            layoutComponent: this.layoutRenderComponent
          }, restProps));
        }
      }]);

      return VirtualTable;
    }(React.PureComponent);

    process.env.NODE_ENV !== "production" ? VirtualTable.propTypes = {
      estimatedRowHeight: PropTypes.number,
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
      headTableComponent: PropTypes.func,
      footerTableComponent: PropTypes.func
    } : void 0;
    VirtualTable.defaultProps = {
      estimatedRowHeight: defaultEstimatedRowHeight,
      height: defaultHeight,
      headTableComponent: FixedHeader,
      footerTableComponent: FixedFooter
    };
    Object.values(Table.components).forEach(function (name) {
      VirtualTable[name] = Table[name];
    });
    VirtualTable.FixedHeader = FixedHeader;
    VirtualTable.FixedFooter = FixedFooter;
    return VirtualTable;
  };

  exports.Grid = Grid;
  exports.ColumnChooser = ColumnChooser;
  exports.FilteringState = FilteringState;
  exports.IntegratedFiltering = IntegratedFiltering;
  exports.EditingState = EditingState;
  exports.PagingState = PagingState;
  exports.IntegratedPaging = IntegratedPaging;
  exports.CustomPaging = CustomPaging;
  exports.GroupingState = GroupingState;
  exports.IntegratedGrouping = IntegratedGrouping;
  exports.CustomGrouping = CustomGrouping;
  exports.SelectionState = SelectionState;
  exports.IntegratedSelection = IntegratedSelection;
  exports.SortingState = SortingState;
  exports.IntegratedSorting = IntegratedSorting;
  exports.DragDropProvider = DragDropProvider;
  exports.TableColumnReordering = TableColumnReordering;
  exports.Table = Table;
  exports.TableSelection = TableSelection;
  exports.RowDetailState = RowDetailState;
  exports.TableRowDetail = TableRowDetail;
  exports.TableGroupRow = TableGroupRow;
  exports.TableHeaderRow = TableHeaderRow;
  exports.TableBandHeader = TableBandHeader;
  exports.TableFilterRow = TableFilterRow;
  exports.TableEditRow = TableEditRow;
  exports.TableEditColumn = TableEditColumn;
  exports.TableColumnResizing = TableColumnResizing;
  exports.PagingPanel = PagingPanel;
  exports.GroupingPanel = GroupingPanel;
  exports.DataTypeProvider = DataTypeProvider;
  exports.TableColumnVisibility = TableColumnVisibility;
  exports.Toolbar = Toolbar;
  exports.TreeDataState = TreeDataState;
  exports.CustomTreeData = CustomTreeData;
  exports.TableTreeColumn = TableTreeColumn;
  exports.SearchState = SearchState;
  exports.SearchPanel = SearchPanel;
  exports.TableFixedColumns = TableFixedColumns;
  exports.SummaryState = SummaryState;
  exports.IntegratedSummary = IntegratedSummary;
  exports.CustomSummary = CustomSummary;
  exports.TableSummaryRow = TableSummaryRow;
  exports.TableLayout = TableLayout;
  exports.VirtualTableLayout = VirtualTableLayout;
  exports.StaticTableLayout = StaticTableLayout;
  exports.GroupPanelLayout = GroupPanelLayout;
  exports.makeVirtualTable = makeVirtualTable;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dx-react-grid.umd.js.map
