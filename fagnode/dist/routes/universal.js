'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reactRouterDom = require('react-router-dom');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _App = require('../client/src/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A simple helper function to prepare the HTML markup
var prepHTML = function prepHTML(data, _ref) {
  var html = _ref.html,
      head = _ref.head,
      body = _ref.body;

  data = data.replace('<html lang="en">', '<html ' + html);
  data = data.replace('</head>', head + '</head>');
  data = data.replace('<div id="root"></div>', '<div id="root">' + body + '</div>');

  return data;
};

var universalLoader = function universalLoader(req, res) {
  // Load in our HTML file from our build
  var filePath = _path2.default.resolve(__dirname, '../client/build/index.html');

  _fs2.default.readFile(filePath, 'utf8', function (err, htmlData) {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);

      return res.status(404).end();
    }

    // Create a store and sense of history based on the current path

    var _createServerStore = (0, _store2.default)(req.path),
        store = _createServerStore.store,
        history = _createServerStore.history;

    // Render App in React


    var routeMarkup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterRedux.ConnectedRouter,
        { history: history },
        _react2.default.createElement(_reactRouterDom.Route, { component: _App2.default })
      )
    ));

    // Let Helmet know to insert the right tags
    var helmet = _reactHelmet2.default.renderStatic();

    // Form the final HTML response
    var html = prepHTML(htmlData, {
      html: helmet.htmlAttributes.toString(),
      head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString(),
      body: routeMarkup
    });

    // Up, up, and away...
    res.send(html);
  });
};

exports.default = universalLoader;