import React, { Component } from 'react';
import Feature from './Feature';
import Client from './Client';

class CorporateBootleg extends Component{
	constructor(props){
		super(props);
		this.getDiscriptions = this.getDiscriptions.bind(this);
		this.state = { items: [], desciptions: this.getDiscriptions() }
	}

	componentDidMount(){
	  Client.getOutfitsByTag('cpboot')
	  .then(response => response.json())
	    .then((body) => { 
	      this.setState({ 'outfits':  body });
	  })
	}

	getDiscriptions(){
		return([
			'lorem ipsum',
			'lorem ipsum',
			'lorem ipsum',
			'lorem ipsum'
		]);
	}

	render(){
		return(
			<Feature title='Corporate Bootleg' items={ this.state.items } desciptions={ this.state.desciptions } />
		);
	}
}

export default CorporateBootleg;