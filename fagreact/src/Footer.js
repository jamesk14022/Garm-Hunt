import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
	<div className="Footer">
	<hr />
	<div className="container">
	<div className="row">
	<div className="col-md-12">
	<ul className="list-inline">
		<li className="list-inline-item"><Link to={`/submit`} >Submit an Outfit</Link></li>
		<li className="list-inline-item">Correct_Couture, 2017</li>
		<li className="list-inline-item">james@correctcouture.com</li>
	</ul>
	</div>
	</div>
	</div>
	</div>
);

export default Footer;