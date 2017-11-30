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
var shortid = require('shortid');

var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

const URL = require('url');

app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

var outfitSchema = new mongoose.Schema({
	_id: { type: String, 'default': shortid.generate },
	author: String,
	date: Date,
	images: [{ data: Buffer, contentType: String }],
	items: [{ name: String, url: String }],
	tags: [{ tag: String }],
	features: [{ tag: String}],
	model: { name: String, url: String}
});


var Outfit = mongoose.model('Outfit', outfitSchema);


//get specific outfit based on Id
app.get('/api/outfits/:outfitId', function(req, res){
	Outfit.find({ _id: req.params.outfitId }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		outfit[0].images[0]['base64'] = outfit[0].images[0].data.toString('base64');
		res.json(outfit[0]);
	}
	);
});

//delivers a number of outfits, defaulting to 1
app.get('/api/outfits', function(req, res){
	let limit = parseInt(req.body.limit) || 1;
	Outfit.find().limit(limit).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		outfit[0].images[0]['base64'] = outfit[0].images[0].data.toString('base64');
		res.json(outfit);
	}
	);
});

app.post('/api/outfit', upload.single('image'), function(req, res){
	//validate the outfit input to make sur eits valid
	//subimt outfit to monogodb

	//decode json string of items(json'd bc it has to be transferred as multipart)
	try{
		var items = JSON.parse(req.body.items);
	} catch(err) {
		if(err) console.log(err);
	}

	var userOutfit = new Outfit();
	userOutfit.author = 'your\'s truley';
	userOutfit.date = Date.now();
	userOutfit.images = [{ data: fs.readFileSync(req.file.path), contentType: req.file.mimetype }];
	userOutfit.items = items;
	userOutfit.model = { name: req.body.modelName, url: req.body.modelLink};
	userOutfit.tags = [{ tag: 'frontpage' }];

	userOutfit.save(function(err, fluffy){
		if (err) console.log(err);
	});
});

app.listen(5000, function(){
	console.log('API listening for connnections.');
});