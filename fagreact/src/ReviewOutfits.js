import React from 'react';
import ReviewOutfitCard from './ReviewOutfitCard';

const ReviewOutfits = ({ outfits,  ...otherProps}) => (
	<div className="ReviewOutfits">
	<div className="container">
	<div className="row">
		{outfits.map((outfit) =>
			<div className="col-md-2">
				<ReviewOutfitCard {...otherProps} outfit={ outfit } />
			</div>
		)}
	</div>
	</div>
	</div>
);

export default ReviewOutfits;