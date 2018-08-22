const express = require('express');
const router = express.Router();

//get specific outfit based on Id
//can access both approved and unapproved items this way, potential secuity issue?
router.get('/outfits/:outfitId', function(req, res){
	const db = req.app.db;

	db.outfits.find({ _id: req.params.outfitId }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(outfit[0]);
	}
	);
});

//returns an array of outfits based on tag
router.get('/tags/outfits/:tag', function(req, res){
	const db = req.app.db;

	db.outfits.find({ 'tags.tag': req.params.tag, accepted: true }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(outfit);
	}
	);
});

//returns an array of outfits based on user
router.get('/users/outfits/:user', function(req, res){
	const db = req.app.db;

	db.outfits.find({ 'author.id': req.params.user }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(outfit);
	}
	);
});

//returns user based on id
router.get('/users/:userid', function(req, res){
	const db = req.app.db;

	db.users.find({ facebook_id: req.params.userid }).lean().exec(function(err, user){
	if (err) return console.log(err);
	res.json(user);
	});
});

//delivers a number of approved outfits, defaulting to 6
router.get('/outfits', function(req, res){
	const db = req.app.db;

	let limit = parseInt(req.body.limit) || 6;
	db.outfits.find({ accepted: true }).limit(limit).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(outfit);
	}
	);
});

//delivers a number of unapproved outfits, defaulting to 6
router.get('/unapproved/outfits', function(req, res){
	const db = req.app.db;

	db.outfits.find({ accepted: false }).lean().exec(function(err, outfit){
		if (err) return console.log(err);
		res.json(outfit);
	}
	);
});

//reassign an outfit from unapproved to approved
router.get('/unapproved/reassign/:outfitId', function(req, res){
	const db = req.app.db;

	var myquery = { _id : req.params.outfitId };
    var newvalues = { $set: {accepted: true } };
    db.outfits.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });	
    res.end();
});

//add a new user
router.post('/user', function(req, res){
	const db = req.app.db;

	let { id, name } = req.body;
	let userData = new User();
	userData.facebook_id = id;
	userData.full_name = name;

	db.users.count({ facebook_id: id }, function(err, count){
		if(count === 0){
			userData.save(function(err, fluffy){
				if (err) console.log(err);
				res.end();
			});
		}
	});

	res.end();

});

//post a new outfit to the app
router.post('/outfit', function(req, res){
	const db = req.app.db;
	req.ui = shortid();

	upload(req, res, function (err) {
    if (err) {
    	console.log(err);
      	console.log("Something went wrong!");
    }

	try{
		var items = JSON.parse(req.body.items);
		var rawTags = JSON.parse(req.body.tags);
	} catch(err) {
		if(err) console.log(err);
	}

	var tags = [];
	for(let i = 0; i < rawTags.length; i++){
		tags.push({ tag: rawTags[i].text });
	}

	var images = [];
	for(let i = 0; i<req.files.length; i++){
		images.push({ public_id: req.files[i].public_id, url: req.files[i].url });
	}

	var userOutfit = new db.outfits();
	userOutfit._id = req.ui;
	userOutfit.images = images;
	userOutfit.author = { id: req.body.userID, fullName: 'eg' };
	userOutfit.date = Date.now();
	userOutfit.items = items;
	userOutfit.model = { name: req.body.modelName, url: req.body.modelLink};
	userOutfit.tags = tags;
	userOutfit.accepted = false;

	userOutfit.save(function(err, fluffy){
		if (err) console.log(err);
		res.end();
	});

	res.end();
	
	console.log("File uploaded sucessfully!.");
	});

	//validate the outfit input to make sur eits valid
	//subimt outfit to monogodb

	//decode json string of items(json'd bc it has to be transferred as multipart)
});

//delete an outfit from the app based on id
//works on all outfits
router.delete('/outfits/:outfitId', function(req, res){
	const db = req.app.db;
	
	db.outfits.findOneAndRemove({ _id: req.params.outfitId }, function(err, response){
		if (err) console.log(err);
	});
});

module.exports = router;