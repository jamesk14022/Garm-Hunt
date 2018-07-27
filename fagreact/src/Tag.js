import React, {Component} from 'react';
import ItemGrid from './ItemGrid';

class Tag extends Component{
	constructor(props){
		super(props);
	}

	render(){
	let { tag } = this.props.match.params;
		return(
			<div className="Tag">
			<div className="container">
				<div className="container">
				<h2 style={{ 'marginTop': '80px'}}>Tagged { tag }</h2>
				<hr />
				</div>
				<ItemGrid tag={ tag } />
			</div>
			</div>
		);
	}
}

export default Tag;