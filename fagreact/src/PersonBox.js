import React from 'react';
import './resources/css/PersonBox.css';

const PersonBox = ({ Title, Subtext, Link}) => (
	<div className="PersonBox">
		<h3>{ Title }</h3>
		{(Link) ? 
		<a target="_blank" href={ Link }>{ (Subtext) ? Subtext : 'Link' }</a>
		:
		<p>{ Subtext }</p> }
	</div>
);

export default PersonBox;