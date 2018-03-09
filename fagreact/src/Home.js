import React, { Component } from 'react';
import ItemGrid from './ItemGrid.js'
import './resources/css/home.css';

class Home extends Component {
	render() {
		return (
		<div className="Home">
		  <div className="container-fluid container-feature">
		  <div className="row">
		  	<div className="col-md-12"><div className="feature"><h3>Palace x Adidas<span className="spacer"></span></h3></div></div>
		  </div>
		  <div className="row">
		    <div className="col-md-6"><div className="feature"><h3>Palace x Adidas<span className="spacer"></span></h3></div></div>
		    <div className="col-md-6"><div className="feature"><h3>Palace x Adidas<span className="spacer"></span></h3></div></div>
		  </div>
		  <div className="row row-eq-height">
		  	<div className="col-md-10"><ItemGrid tag="frontpage"/></div>
		  	<div className="col-md-2 tall"><div id="email-funnel">Correct_Couture<input type="text"/></div></div>
		  </div>
		</div>
		</div>
	);
}
}

export default Home;
