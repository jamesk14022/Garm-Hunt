function getOutfit(id){
  return fetch(`http://localhost:5000/api/outfits/` + id);
  //could implement callback here or .then()
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

const Client = { getOutfit, postOutfit };
export default Client