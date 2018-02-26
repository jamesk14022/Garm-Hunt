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
				<div className="container">
				<h2 style={{ 'margin-top': '80px'}}>Tagged { this.tag }</h2>
				<hr />
				</div>
				<ItemGrid tag={ this.tag } />
			</div>
			</div>
		);
	}
}

export default Tag;