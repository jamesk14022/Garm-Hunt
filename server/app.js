var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var express = require('express');
var app = express();
var mkdirp = require('mkdirp');
var multer = require('multer');
var compression = require('compression');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(compression());
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

const CLOUDINARY_SECRET = process.env.cloudinary_sec;
const MONGO_URI = process.env.mongo_uri;

cloudinary.config({ 
  cloud_name: 'hccxvb0bt', 
  api_key: '236422623937785', 
  api_secret: CLOUDINARY_SECRET
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
mongoose.connect(MONGO_URI);
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
app.ui = shortid;
app.upload = multer;

const api = require('./routes/api');
app.use('/api', api);
app.use('/images', express.static(path.join(__dirname, '/images')));

app.listen(process.env.PORT || 8080, function(){
	console.log('API listening for connnections. t');
});