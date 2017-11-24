'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _universal = require('../universal');

var _universal2 = _interopRequireDefault(_universal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Any route that comes in, send it to the universalLoader

var router = _express2.default.Router();

router.get('/', _universal2.default);

exports.default = router;