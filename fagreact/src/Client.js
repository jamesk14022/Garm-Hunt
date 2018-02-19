function getOutfitById(id){
  return fetch(`http://localhost:5000/api/outfits/` + id);
}

function getOutfitsByTag(tag){
	tag = tag || 'frontpage'
	return fetch(`http://localhost:5000/api/tags/outfits/` + tag);
}

function getRandomOutfits(limit){
	let data = {
		limit: limit
	}
	return fetch(`http://localhost:5000/api/outfits/`, {
		body: data 
	});
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

	return fetch(`http://localhost:5000/api/outfit`, {
	method: 'POST',
	body: formData
	});
}

function deleteOutfit(id){
	return fetch(`http://localhost:5000/api/outfits/` + id, {
	method: 'DELETE'
	});
}

const Client = { getOutfitById, getOutfitsByTag, getRandomOutfits, postOutfit, deleteOutfit };
export default Client