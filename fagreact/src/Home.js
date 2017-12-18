import React, { Component } from 'react';
import ItemGrid from './ItemGrid.js'
import './resources/css/home.css';

class Home extends Component {
	render() {
		return (
		<div className="Home">
		  <div className="container">
		  <div className="row">
		    <div className="col-md-6"><div className="feature"><h3>Palace x Adidas<span className="spacer"></span></h3></div></div>
		  </div>
		</div>
		<ItemGrid />
		</div>
		);
}
}

export default Home;
