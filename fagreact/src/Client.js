function getOutfit(id){
  return fetch(`/outfits/` + id, {
    accept: "application/json"
  })
  //could implement callback here or .then()
}

const Client = { getOutfit };
export default Client