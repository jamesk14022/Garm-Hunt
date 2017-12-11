function getOutfit(id){
  return fetch(`http://localhost:5000/api/outfits/` + id);
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

const Client = { getOutfit, getRandomOutfits, postOutfit, deleteOutfit };
export default Client