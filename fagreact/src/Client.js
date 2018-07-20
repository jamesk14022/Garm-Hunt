function getUnapprovedOutfits(){
	return fetch(`/api/outfits/unapproved`);
}

// change the status of an outfit from unapproved to approved
// using outfit id as selector
function changeApprovalState(id){
	return fetch(`/api/outfits/reassign/` + id);
}

function getOutfitById(id){
  return fetch(`/api/outfits/` + id);
}

function getOutfitsByTag(tag){
	tag = tag || 'frontpage'
	return fetch(`/api/tags/outfits/` + tag);
}

function getOutfitsByUser(user){
	return fetch(`/api/users/outfits/` + user);
}

//need to json the limit paramenter to get it to work
function getRandomOutfits(limit){
	let data = {
		limit: limit
	}
	return fetch(`/api/outfits/`, {
		body: data 
	});
}

//must use json to properly send body data to node 
function postUser(user){
	let data = JSON.stringify(user);
	return fetch(`/api/user/`, {
		 headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
		method: 'POST',
		body: data 
	});
}

function getUserById(id){
	return fetch(`/api/users/` + id);
}

function postOutfit(outfit){
	var formData  = new FormData();
	for(var name in outfit) {
		formData.append(name, outfit[name]);
	}

	let images = outfit['images'];
	if(images){
		for (var i = 0; i < images.length; i++) {
			formData.append("images[]", images[i], images[i]['name']);
		}
	}

	console.log(formData);

	return fetch(`/api/outfit`, {
	method: 'POST',
	body: formData
	});
}

function deleteOutfit(id){
	return fetch(`/api/outfits/` + id, {
	method: 'DELETE'
	});
}

const Client = { getOutfitById, changeApprovalState, getOutfitsByTag, getUserById, getOutfitsByUser, getRandomOutfits, postOutfit, postUser, deleteOutfit, getUnapprovedOutfits };
export default Client