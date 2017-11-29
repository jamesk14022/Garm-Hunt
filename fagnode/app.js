var express = require('express');
var app = express();
var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

var multer = require('multer');
var upload = multer({ dest: 'upload/'});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/agg');


var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

const URL = require('url');

app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

var outfitSchema = new mongoose.Schema({
	id: String, //alphanumeric??
	author: String,
	date: Date,
	images: [{ data: Buffer, contentType: String }],
	items: [{ url: String }],
	model: { name: String, url: String}
});


var Outfit = mongoose.model('Outfit', outfitSchema);


//get specific outfit based on Id
app.get('/api/outfits/:outfitId', function(req, res){

	console.log('params route hit');
	Outfit.find({ id: req.params.outfitId }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		outfit[0].images[0]['base64'] = outfit[0].images[0].data.toString('base64');
		res.json(outfit[0]);
	}
	);
});

//delivers a number of outfits, defaulting to 1
app.get('/api/outfits', function(req, res){
	console.log('non routeparams route');
	let limit = parseInt(req.body.limit) || 1;
});

app.post('/api/outfit', upload.single('image'), function(req, res){
	//validate the outfit input to make sur eits valid
	//subimt outfit to monogodb

	var userOutfit = new Outfit();
	userOutfit.id = '0';
	userOutfit.author = 'your\'s truley';
	userOutfit.date = Date.now();
	userOutfit.images = [{ data: fs.readFileSync(req.file.path), contentType: req.file.mimetype }];
	userOutfit.items = [];
	userOutfit.model = { name: req.body.modelName, url: req.body.modelLink}

	userOutfit.save(function(err, fluffy){
		if (err) console.log(err);
	});
});

app.listen(5000, function(){
	console.log('API listening for connnections.');
});