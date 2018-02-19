var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

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

const URL = require('url');

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

//takes array of image data and makes it parseable by browser
function convertImageData(outfits){
	Object.keys(outfits).forEach(function(key,index) {
		for(let i = 0; i < outfits[key].images.length; i++){
			outfits[key].images[i]['base64'] = outfits[key].images[i].data.toString('base64');
		}
	});
	return outfits;
}

//get specific outfit based on Id
app.get('/api/outfits/:outfitId', function(req, res){
	Outfit.find({ _id: req.params.outfitId }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(convertImageData(outfit)[0]);
	}
	);
});

//returns an array of outfits based on tag
app.get('/api/tags/outfits/:tag', function(req, res){
	Outfit.find({ 'tags.tag': req.params.tag }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(convertImageData(outfit));
	}
	);
});

//delivers a number of outfits, defaulting to 1
app.get('/api/outfits', function(req, res){
	let limit = parseInt(req.body.limit) || 6;
	Outfit.find().limit(limit).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(convertImageData(outfit));
	}
	);
});

//post a new outfit to the app
app.post('/api/outfit', upload.any(), function(req, res){
	//validate the outfit input to make sur eits valid
	//subimt outfit to monogodb

	//decode json string of items(json'd bc it has to be transferred as multipart)
	try{
		var items = JSON.parse(req.body.items);
	} catch(err) {
		if(err) console.log(err);
	}
	
	var images = [];
	req.files.forEach(function(item){
		images.push({ data: fs.readFileSync(item.path), contentType: item.mimetype });
	});

	var userOutfit = new Outfit();
	userOutfit.author = 'your\'s truley';
	userOutfit.date = Date.now();
	userOutfit.images = images;
	userOutfit.items = items;
	userOutfit.model = { name: req.body.modelName, url: req.body.modelLink};
	userOutfit.tags = [{ tag: 'frontpage' }];

	userOutfit.save(function(err, fluffy){
		if (err) console.log(err);
	});
});

//delete an outfit from the app based on id
app.delete('/api/outfits/:outfitId', function(req, res){
	Outfit.findOneAndRemove({ _id: req.params.outfitId }, function(err, response){
		if (err) console.log(err);
	});
});

app.listen(5000, function(){
	console.log('API listening for connnections.');
});