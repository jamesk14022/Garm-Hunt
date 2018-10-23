'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./home.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-default' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'div',
              { className: 'navbar-header' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': 'bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
                _react2.default.createElement(
                  'span',
                  { className: 'sr-only' },
                  'Toggle navigation'
                ),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' })
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-brand', href: 'index.php' },
                'Correct_Couture'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
              _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav' },
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown' },
                  _react2.default.createElement(
                    'a',
                    { href: '', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                    'Brands',
                    _react2.default.createElement('span', { className: 'caret' })
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: 'index.php/items/index/Tommy%20Hilfiger' },
                        'Tommy Hilfiger'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: 'index.php/items/index/Lacoste' },
                        'Lacoste'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: 'index.php/items/index/Ralph%20Lauren' },
                        'RL'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown' },
                  _react2.default.createElement(
                    'a',
                    { href: '', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                    'Tags',
                    _react2.default.createElement('span', { className: 'caret' })
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: 'index.php/items/index/retail' },
                        'Retail'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: 'index.php/items/index/one%20off' },
                        'One Off'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: 'index.php/items/index/drops' },
                        'New Drops'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav navbar-right' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    'Submit an Item'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    'Login/Reg'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                'div',
                { className: 'input-group input-group-lg' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search for...' }),
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-btn' },
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-default', type: 'button' },
                    'Go!'
                  )
                )
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'h3',
              null,
              'Editor\'s Picks'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'a',
                { href: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'div',
                    { className: 'editor-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'div',
                    { className: 'editor-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'div',
                    { className: 'editor-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'div',
                    { className: 'editor-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'div',
                    { className: 'editor-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-2' },
                  _react2.default.createElement(
                    'div',
                    { className: 'editor-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'feature' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'Palace x Adidas',
                    _react2.default.createElement('span', { className: 'spacer' })
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/index.php/item/index/id' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-button' },
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-heart', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'link-button' },
                      _react2.default.createElement('span', { href: 'url', className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'fash-item-info' },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Socks n Sliders'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      '\xA345.00'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;