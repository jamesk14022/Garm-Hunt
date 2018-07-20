import React from 'react';
import { Link } from 'react-router-dom';

const ReviewOutfitCard = ({ outfit, approvalCallback }) => (
	<div className="ReviewOutfitCard">
	
		<img alt="outfit" className="img-responsive"
		src={'data:' + outfit.images[0].contentType + ';base64, ' + outfit.images[0].base64}/>

		<ul>
			<li>{outfit.images.length} images</li>
			<li>{outfit.items.length} items</li>
			<li>{outfit.author.id} is the uploader</li>
		</ul>

		<Link to={ 'outfit' + outfit._id }>View full outfit</Link>

		<div className="btn-group" role="group" aria-label="...">
			<button type="button" onClick={ () => approvalCallback( outfit._id, false ) } className="btn btn-danger">Reject</button>
			<button type="button" onClick={ () => approvalCallback( outfit._id, true ) } className="btn btn-success">Success</button>
  		</div>
	</div>
);

export default ReviewOutfitCard;