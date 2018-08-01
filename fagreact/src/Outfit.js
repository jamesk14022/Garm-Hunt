import React, {Component} from 'react';
import Client from './Client.js';
import './resources/css/outfit.css';
import ItemGrid from './ItemGrid';
import OutfitCard from './OutfitCard';

class Outfit extends Component{

	constructor(props){
		super(props);
		//focus denotes array pos of image to be enlarged
		this.state = { outfit: {author: { id: '', fullName: '' }, model: { url: ''}, items: [], images: [], tags: [ { tag : ''}] } };
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
			<div key={ this.props.match.params.id } className="container-fluid main-content">
				<OutfitCard { ...this.state.outfit } />
			</div>
			<div className="container-fluid">
				<div className="suggested-items">
					<div className="row">
					<div className="col-md-12">
						<h2>More from { this.state.outfit.tags[0].tag }</h2>
						<hr />
					</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<ItemGrid tag={ this.state.outfit.tags[0].tag }/>
						</div>
					</div>


				</div>
			</div>
		</div>
		);
	}
}

export default Outfit;