import React from 'react';
import OutfitCard from './OutfitCard';
import './resources/css/Feature.css';

const Feature = ({ title, items, descriptions }) => (
	<div className="Feature">
	<div className="container-fluid">
		<div className="row">
		<div className="col-md-8 col-md-offset-1 col-sm-12 col-xs-12">
		<h2>{ title }</h2>
		<hr />
		<p className="article-pretext">Corporate bootlegging is the art of satirising big, household brands through small label 
		fashion. Bootlegging has been around for decades, but corporate bootlegging is a relatively new phenomenon. Vetements famously brought this trend into the limelight with 
		its £185 DHL tee - a polarising piece, either mocked or adored by critics. Christoper Shannon's famous SS17 collection hatersdirect and loversdirect plays on the same theme
		, taking inspiration from the popular high street retailer Sportsdirect. Below is a selection of pieces on this theme by small UK labels, we think you'll recognise some familar brands. A personal 
		favourite of ours is the IKEA inspired bucket hat.</p>
		{items.map((item, index) => (
			<div className="feature-item">
				<p>{ descriptions[index] }</p>
				<OutfitCard { ...item } key={index} />
			</div>
		))}
		</div>
		</div>
	</div>
	</div>
);

export default Feature;