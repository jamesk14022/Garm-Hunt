import React from 'react';

const ReviewOutfitCard = ({ id, images, uploader, items, approvalCallback }) => (
	<div className="ReviewOutfitCard">
	
		<img alt="outfit" className="img-responsive"
		src={'data:' + images[0].contentType + ';base64, ' + images[0].base64}/>

		<ul>
			<li>{images.length} images</li>
			<li>{items.length} items</li>
			<li>{uploader.name} is the uploader</li>
		</ul>

		<Link>View full outfit</Link>

		<div className="btn-group" role="group" aria-label="...">
			<button type="button" onClick={ approvalCallback( id, false ) } className="btn btn-danger">Reject</button>
			<button type="button" onClick={ approvalCallback( id, true ) } className="btn btn-success">Success</button>
  		</div>
	</div>
);

export default ReviewOutfitCard;