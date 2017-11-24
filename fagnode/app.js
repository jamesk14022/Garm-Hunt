var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

const URL = require('url');

app.use(express.static(__dirname + 'client/build'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

//serve static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/outfits/:outfitId', function(req, res){
	console.log('Params are, ' + req.params.outfitId);
});

app.listen(5000, function(){
	console.log('API listening for connnections.')
});