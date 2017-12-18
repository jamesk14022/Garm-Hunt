import React, { Component } from 'react';
import './resources/css/footer.css';

class Footer extends Component{
	render(){
		return(
			<div className="Footer">
			<div className="container">
			<hr />
			<ul className="list-inline">
			  <li className="list-inline-item">Correct_Couture, 2017</li>
			  <li className="list-inline-item">james@correctcouture.com</li>
			</ul>
			</div>
			</div>
		);
	}	
}

export default Footer;