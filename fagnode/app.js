var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

const URL = require('url');

app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));


//get specific outfit based on Id
app.get('/api/outfits/:outfitId', function(req, res){
	console.log('Params are, ' + req.params.outfitId);
});

//delivers a number of outfits, defaulting to 1
app.get('/api/outfits', function(req, res){
	console.log('non params route');
	let limit = Integer.parseInt(req.body.limit) || 1;
});

app.listen(5000, function(){
	console.log('API listening for connnections.')
});