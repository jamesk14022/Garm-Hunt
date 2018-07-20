import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OutfitCard extends Component{
	constructor(props){
		super(props);
		this.setImageFocus = this.setImageFocus.bind(this);

		this.state = { focus: 0 };
	}

	//sets image to be englarged
	setImageFocus(key){
		this.setState({ focus: key })
	} 

	render(){
	let { author, model, items, images, tags } = this.props;	
	let { focus } = this.state;
	return(

		<div className="OutfitCard">
		<div className="row">
		<div className="col-md-6">
			 <img alt="outfit" className="img-responsive" src={'data:' + images[focus].contentType + ';base64, ' + images[focus].base64} />
		</div>

		<div className="col-md-6">
			<div className="tags">
				{tags.map((tag, index) =>
					<Link to={`/tag/` + tag.tag} key={index}><p className="item-tag" key={index}>{ tag.tag }</p></Link>
				)}
			</div>
			<div id="item-details">
			<div id="item-misc">
				<div id="app-action">
					<div className="action-buttons"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
	    		</div>
				<div id="social">
					<div className="social-buttons"><i className="fa fa-facebook"></i></div>
	        		<div className="social-buttons"><i className="fa fa-instagram"></i></div>
	    		</div>
			</div>
			<ul className="list-group item-list">
				{items.map((item, index) =>
					<div className="dynamicItem" key={index}>
				     	<li className="item">
							<a href={ item.url }>
							{ item.name }
							<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</a>
						</li>
				    </div>
				    )
				}
			</ul>
			<div id="people">
				<div className="row equal">
					<div className="col-md-6">
						<div id="model">
							{ model.url }
						</div>
					</div>
					<div className="col-md-6 author">
						<div id="author">
							<div className="row">
							<div className="col-md-3">
								<div className="author_pic_wrapper">
									<img alt="author profile" className="author_pic" src="https://i.pinimg.com/736x/4b/8c/40/4b8c40cd45ece9b22237861ea3918327--baby-head-the-head.jpg" />
								</div>
							</div>
							<div className="col-md-9">
								<div className="author_info">
									<h4 className="display_name">{(author) ? <Link to={'/user/' + author.id}><p>{author.fullName}</p></Link> : <p>Info unavailable</p>}</h4>
									<h5 className="username">{author.fullName}</h5>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className="gallery">
				<div className="row">
					{(images.length < 2) ? <div></div> : images.map((image, index) => 
					<div key={index} className="col-md-3">
						 <img alt="outfit thumbnail" className="img-responsive" key={index} src={'data:' + image.contentType + ';base64, ' + image.base64} onClick={() => this.setImageFocus(index)} />
					</div>
					)}
				</div>
			</div>
		</div>
	</div>
	</div>
	);
	}
}

export default OutfitCard;