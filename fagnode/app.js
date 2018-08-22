var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');

var express = require('express');
var app = express();
var mkdirp = require('mkdirp');

var compression = require('compression');
app.use(compression());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "content-type, Content-Type, Accept");

    if ( req.method === 'OPTIONS' ) {
        res.end();
    }else{
	    // Pass to next layer of middleware
	    next();
	}
});

var multer = require('multer');

cloudinary.config({ 
  cloud_name: 'hccxvb0bt', 
  api_key: '236422623937785', 
  api_secret: 'myekpk7JTUvTL6En8vKm_eyGAho' 
});

var Storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: function (req, file, cb) {
    cb(undefined, 'outfit-images/' + req.ui);
  },
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage: Storage }).any();

var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_r09ljrwl:tjtjogjpuaa8sfiemk7a8rdop5@ds141221.mlab.com:41221/heroku_r09ljrwl');
var shortid = require('shortid');

var path = require('path');
var fs = require('fs');

const URL = require('url');
const outfitSchema = new mongoose.Schema({
	_id: { type: String, 'default': shortid.generate },
	author: { id: String, fullName: String },
	date: Date,
	images: [{ public_id: String, url: String }],
	items: [{ name: String, url: String }],
	tags: [{ tag: String }],
	features: [{ tag: String}],
	model: { name: String, url: String}, 
	accepted: Boolean
});

const userSchema = new mongoose.Schema({
	facebook_id: String, 
	full_name: String,
	email: String
});

let db = {
	outfits: mongoose.model('Outfit', outfitSchema),
	users: mongoose.model('User', userSchema)
}

app.db = db;

app.use('/api', api);
app.use('/images', express.static(path.join(__dirname, '/images')));

app.listen(process.env.PORT || 8080, function(){
	console.log('API listening for connnections. t');
});