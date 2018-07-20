import React from 'react';
import ReviewOutfitCard from './ReviewOutfitCard';

const ReviewOutfits = ({ outfits,  ...otherProps}) => (
	<div className="ReviewOutfits">
	<div className="container">
	<div className="row">
		{outfits.map((outfit, index) =>
			<div key={index} className="col-md-2">
				<ReviewOutfitCard key={index} {...otherProps} outfit={ outfit } />
			</div>
		)}
	</div>
	</div>
	</div>
);

export default ReviewOutfits;