'use strict';

var _index = require('/routes/index');

var _index2 = _interopRequireDefault(_index);

var _universal = require('/routes/universal');

var _universal2 = _interopRequireDefault(_universal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var URL = require('url');

app.use(express.static(__dirname + 'client/build'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//serve static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')));
// Set up route handling, include static assets and an optional API
app.use('/', _index2.default);
app.use('/', _universal2.default);

app.get('/api', function (req, res) {
	console.log('api point hit');
});

app.listen(5000, function () {
	console.log('API listening for connnections.');
});