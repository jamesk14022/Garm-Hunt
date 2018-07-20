import React, { Component } from 'react';
import ReviewOutfits from './ReviewOutfits';
import Client from './Client';

class Admin extends Component {
constructor(props){
  super(props);
  this.state = { outfits:[] };

  this.getServerOutfits = this.getServerOutfits.bind(this);
  this.outfitApprovalListener = this.outfitApprovalListener.bind(this);
}

getServerOutfits(){
	Client.getUnapprovedOutfits()
	.then(response => response.json())
  	.then(responseJson => {
  	console.log(responseJson)
    this.setState({ outfits: responseJson })
})
}

componentDidMount(){
	this.getServerOutfits();
}

outfitApprovalListener(id, approved){
	if( approved ){
		Client.changeApprovalState(id);
	}else{
		Client.deleteOutfit(id);
	}
	this.getServerOutfits();
}

render() {
	if(this.state.outfits.length > 0){
	return (
	<div className="Home">
	<div className="container">
	  <h2>Admin area</h2>
	  <hr />

	<ReviewOutfits outfits={ this.state.outfits } approvalCallback={this.outfitApprovalListener} />
	</div>
	</div>
	);
	}else{
		return (<p>loading</p>);
	}
}
}

export default Admin;