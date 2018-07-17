import React, {Component} from 'react';
import Client from './Client.js';
import './resources/css/outfit.css';
import ItemGrid from './ItemGrid';
import OutfitCard from './OutfitCard';

class Outfit extends Component{
	constructor(props){
		super(props);
		//focus denotes array pos of image to be enlarged
		this.state = { outfit: {author: { id: '', fullName: '' }, model: { url: ''}, items: [], images: [{ contentType : '', base64: ''}], tags: [ { tag : ''}] } };
	}

	updateOutfit(id){
		Client.getOutfitById(id)
			.then(response => response.json())
	  		.then((body) => {
	    		this.setState({ outfit: body });
  		});
	}

	componentDidMount(){
		this.updateOutfit(this.props.match.params.id);
	}

	componentWillReceiveProps(newProps){
		// handles change from (/outfit/xxx to /outfit/xxx)
	  	this.updateOutfit(newProps.match.params.id);
		window.scrollTo(0,0);
	}

	render(){

		return(
		<div className="Outfit">
			<div className="container main-content">
				<OutfitCard { ...this.state.outfit } />
				<div className="suggested-items">
					<div className="row">
					<div className="col-md-12">
						<h2>More from { tag }</h2>
						<hr />
					</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<ItemGrid tag={ tag }/>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Outfit;