import React from 'react';
import ItemGrid from './ItemGrid.js'
import FontAwesome from 'react-fontawesome';

const Home = props => (
	<div className="Home">
	  <div className="container">
	  <div className="row">
	  	<div className="col-sm-12 col-md-8"><div className="feature"><h3>L.A Skate Inspired<span className="spacer"></span></h3></div></div>
	  	<div className="hidden-xs hidden-sm col-md-4"><div className="explain"><ul>
	  		<li><h3 className="discover">Discover</h3><p>Find outfits from trending small brands and designers</p></li>
	  		<li><h3 className="share">Share</h3><p>Post a personal outfit and inspire others</p></li>
	  		<li><h3 className="promote">Promote</h3><p>Spread word of your social media page or small brand</p></li>
	  	</ul></div></div>
	  </div>
	  <div className="row">
	  <div className="col-sm-12 col-md-12">
		  <h2>Trending Now</h2>
		  <hr />
	  </div>
	  </div>
	  <div className="row row-eq-height">
	  	<div className="col-sm-12 col-md-9"><ItemGrid tag="frontpage"/></div>
	  	<div className="hidden-xs hidden-sm hidden-md col-lg-3 tall">
	  	<div id="email-funnel">
	  		<form>
	  		<h4>Correct_Couture</h4>
	  		<p>Signup to get the latest from Small Brands, we won't spam you!</p>
	  		<div className="form-group">
		  		<input type="email" className="form-control" placeholder="Email Address" />
		  		<button type="button" className="btn btn-primary">Submit</button>
	  		</div>
	  		</form>
	  	</div></div>
	  </div>
	</div>
	</div>
)

export default Home;
