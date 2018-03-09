import React, {Component} from 'react';
import Client from './Client.js';
import { Link } from 'react-router-dom';
import './resources/css/outfit.css';
import ItemGrid from './ItemGrid';

class Outfit extends Component{
	constructor(props){
		super(props);
		this.deleteOutfit = this.deleteOutfit.bind(this);
		this.setImageFocus = this.setImageFocus.bind(this);
		//focus denotes array pos of image to be enlarged
		this.state = { outfit: {author: '', model: { url: ''}, items: [], images: [{ contentType : '', base64: ''}], tags: [ { tag : ''}]}, focus: 0 };
	}

	componentDidMount(){
		Client.getOutfitById(this.props.match.params.id)
			.then(response => response.json())
	  		.then((body) => {
	    		console.log(body);
	    		this.setState({ outfit: body });
  		});
	}

	componentWillReceiveProps(newProps){
		// handles change from (/outfit/xxx to /outfit/xxx)
	  	Client.getOutfitById(newProps.match.params.id)
	    .then(response => response.json())
		.then((body) => {
			console.log(body);
			this.setState({ outfit: body });
		});
		window.scrollTo(0,0);
	}

	//sets image to be englarged
	setImageFocus(key){
		this.setState({ focus: key })
	}

	deleteOutfit(e){
		e.preventDefault();
		Client.deleteOutfit(this.props.match.params.id);
	}

	render(){
		let { modelName, modelLink, author } = this.state.outfit;
		let modelInfo = null;

		if(modelName && modelLink){
			modelInfo = <Link to={ modelLink }><p>{ modelName }</p></Link>;
		}else if(modelName){
			modelInfo = <p>{ modelName }</p>;
		}else{	
			modelInfo = <p>No model information available.</p>;
		}

		return(
		<div className="Outfit">
			<div className="container main-content">
				<div className="row">
					<div className="col-md-6">
						 <img alt="outfit" className="img-responsive" src={'data:' + this.state.outfit.images[this.state.focus].contentType + ';base64, ' + this.state.outfit.images[this.state.focus].base64} />
						 <a onClick={this.deleteOutfit}>Remove Outfit</a>
					</div>

					<div className="col-md-6">
						<div className="tags">
							{this.state.outfit.tags.map((tag, index) =>
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
							{this.state.outfit.items.map((item, index) =>
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
										{ modelInfo }
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
												<h4 className="display_name">{(author) ? <Link to={'/user/' + author}><p>{author}</p></Link> : <p>Info unavailable</p>}</h4>
												<h5 className="username">{author}</h5>
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
								{(this.state.outfit.images.length < 2) ? <div></div> : this.state.outfit.images.map((image, index) => 
								<div key={index} className="col-md-3">
									 <img alt="outfit thumbnail" className="img-responsive" key={index} src={'data:' + image.contentType + ';base64, ' + image.base64} onClick={() => this.setImageFocus(index)} />
								</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="suggested-items">
					<div className="row">
					<div className="col-md-12">
						<h2>More from {this.state.outfit.tags[0].tag}</h2>
						<hr />
					</div>
					</div>
					<div className="row">
						<ItemGrid tag={this.state.outfit.tags[0].tag}/>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Outfit;