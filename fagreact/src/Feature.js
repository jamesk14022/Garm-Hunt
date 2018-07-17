import React from 'react';
import OutfitCard from './OutfitCard';

const Feature = ({ title, items, discriptions }) => (
	<div className="Feature">
		<div className="row">
		<div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
		<h2>{ title }</h2>
		<hr />
		{items.map((item, index) => (
			<p>{ descriptions[index] }</p>
			<OutfitCard { ...item } key={index} />
			<hr />
		))}
		</div>
		</div>
	</div>
);

export default Feature;