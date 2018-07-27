import React, { Component } from 'react';
import Feature from './Feature';
import Client from './Client';

class CorporateBootleg extends Component{
	constructor(props){
		super(props);
		this.getFeature = this.getFeature.bind(this);
		this.state = { items: [], descriptions: []}
	}

	componentDidMount(){
	  Client.getOutfitsByTag('cpboot')
	  .then(response => response.json())
	    .then((body) => { 
	      this.setState({ items:  body });
	  })
	}

	getFeature(){
		if(this.state.items.length > 0){
			return <Feature title='Corporate Bootleg' items={ this.state.items } descriptions={ this.state.descriptions } />;
		}else{
			return null;
		}
	}

	render(){
		return(this.getFeature());
	}
}

export default CorporateBootleg;