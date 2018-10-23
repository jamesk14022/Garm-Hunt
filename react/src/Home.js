import React from 'react';
import { Link } from 'react-router-dom';
import ItemGrid from './ItemGrid.js'

const Home = props => (
	<div className="Home">
	  <div className="container-fluid">
	  <div className="row feature-row">
	  	<Link to='/corporatebootleg'><div className="col-sm-12 col-md-8"><div className="feature"><h3>Corporate Bootleg<span className="spacer"></span></h3></div></div></Link>
	  	<div className="hidden-xs hidden-sm col-md-4"><div className="explain"><ul>
	  		<li><h3 className="discover">Discover</h3><p>Find clothes from new small brands and designers that you can't find anywhere else.</p></li>
	  		<li><h3 className="share">Share</h3><p>Post a personal outfit and inspire our audience.</p></li>
	  		<li><h3 className="promote">Promote</h3><p>Spread word of your small brand or social media account. Get discovered!</p></li>
	  		<div className="learn"><Link to='about'>Learn More</Link></div>
	  	</ul></div></div>
	  </div>
	  <div className="row">
	  <div className="col-sm-12 col-md-12">
		  <h2 className="grid-heading">Trending Now</h2>
		  <hr />
	  </div>
	  </div>
	  <div className="row row-eq-height">
	  	<div className="col-sm-12 col-md-9"><ItemGrid tag="frontpage"/></div>
	  	<div className="hidden-xs hidden-sm hidden-md col-lg-3 tall">
	  	<div id="email-funnel">
	  		<form>
	  		<h4>GarmHunt</h4>
	  		<p>Signup to get the latest from GarmHunt, we won't spam you!</p>
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
