import React from 'react';
import {Image, CloudinaryContext} from 'cloudinary-react';
import { Link } from 'react-router-dom';

const ReviewOutfitCard = ({ outfit, approvalCallback }) => (
	<div className="ReviewOutfitCard">
		
		<CloudinaryContext cloudName="hccxvb0bt">
			<Image alt="outfit" className="img-item img-responsive"  publicId={outfit.images[0].public_id}  />
		</CloudinaryContext>

		<ul>
			<li>{outfit.images.length} images</li>
			<li>{outfit.items.length} items</li>
			<li>{outfit.author.id} is the uploader</li>
		</ul>

		<Link to={ 'outfit/' + outfit._id }>View full outfit</Link>

		<div className="btn-group" role="group" aria-label="...">
			<button type="button" onClick={ () => approvalCallback( outfit._id, false ) } className="btn btn-danger">Reject</button>
			<button type="button" onClick={ () => approvalCallback( outfit._id, true ) } className="btn btn-success">Success</button>
  		</div>
	</div>
);

export default ReviewOutfitCard;