'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _modules = require('../src/modules');

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a store and history based on a path
var createServerStore = function createServerStore() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

  var initialState = {};

  // We don't have a DOM, so let's create some fake history and push the current path
  var history = (0, _createMemoryHistory2.default)({ initialEntries: [path] });

  // All the middlewares
  var middleware = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];
  var composedEnhancers = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware));

  // Store it all
  var store = (0, _redux.createStore)(_modules2.default, initialState, composedEnhancers);

  // Return all that I need
  return {
    history: history,
    store: store
  };
};

exports.default = createServerStore;