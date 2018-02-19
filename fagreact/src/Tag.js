import React, {Component} from 'react';
import ItemGrid from './ItemGrid';

class Tag extends Component{
	constructor(props){
		super(props);
		this.tag = this.props.match.params.tag;
	}

	render(){
		return(
			<div className="Tag">
			<div className="container">
				<h2>Tagged { this.tag }</h2>
				<ItemGrid tag={ this.tag } />
			</div>
			</div>
		);
	}
}

export default Tag;