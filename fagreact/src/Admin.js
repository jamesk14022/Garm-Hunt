import React, { Component } from 'react';
import ReviewOutfits from './ReviewOutfits';
import Client from './Client';

class Admin extends Component {
constructor(props){
  super(props);
  this.state = {};

  this.getServerOutfits = this.getServerOutfits.bind(this);
}

getServerOutfits(){
	Client.getUnapprovedOutfits()
	.then(response => response.json())
    .then((body) => {
      this.setState({'outfits':  body});
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
	this.getServerOutfits;
}

render() {
	return (
	<div className="Home">
	<div className="container">
	  <h2>Admin area</h2>
	  <hr />
	  <ReviewOutfits { ...this.state.outfits } approvalCallback={this.outfitApprovalListener.bind(this)} />
	</div>
	</div>
	);
}
}

export default Admin;