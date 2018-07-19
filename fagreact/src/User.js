import React, {Component} from 'react';
import ItemGrid from './ItemGrid';
import Client from './Client';

class User extends Component{
	constructor(props){
		super(props);
		this.state = {userid: '', fullname: ''}
		this.getNameFromId = this.getNameFromId.bind(this)
	}

	componentDidMount(){
		this.setState({userid: this.props.match.params.userid});
		this.getNameFromId();
	}

	getNameFromId(){
		Client.getUserById(this.props.match.params.userid)
			.then((response) => {
			  // In this case, we check the content-type of the response
			  if (response.type === 'cors') {
			  	console.log(response);
			    return [];
			  }else{
			  	return response.json();
			  }
			 })
			.then((body) => {
				this.setState({ fullname: body[0].full_name});
			});
	}

	render(){
		return(
		<div className="User">
			<div className="container">
				<div className="container">
				<h2 style={{ 'marginTop': '80px'}}> {this.state.fullname} - submissions </h2>
				<hr />
				</div>
				<ItemGrid user={this.state.userid} />
			</div>
		</div>
		)
	}
}

export default User;