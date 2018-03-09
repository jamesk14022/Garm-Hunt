import React, {Component} from 'react';
import ItemGrid from './ItemGrid';

class User extends Component{
	constructor(props){
		super(props);
		this.user = this.props.match.params.userid;
	}

	render(){
		return(
		<div className="User">
			<div className="container">
				<div className="container">
				<h2 style={{ 'marginTop': '80px'}}> {this.user} - submissions </h2>
				<hr />
				</div>
				<ItemGrid user={ this.user } />
			</div>
		</div>
		)
	}
}

export default User;