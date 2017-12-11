import React, {Component} from 'react';
import Client from './Client.js';
import './resources/css/outfit.css';

class Outfit extends Component{
	constructor(props){
		super(props);
		this.deleteOutfit = this.deleteOutfit.bind(this);
		this.state = { outfit: { model: { url: ''}, items: [], images: [{ contentType : '', base64: ''}]} };
	}

	componentDidMount(){
		Client.getOutfit(this.props.match.params.id)
			.then(response => response.json())
	  		.then((body) => {
	    		console.log(body);
	    		this.setState({ outfit: body });
  		});
	}

	deleteOutfit(e){
		e.preventDefault();
		Client.deleteOutfit(this.props.match.params.id);
	}

	render(){
		return(
		<div className="Outfit">
			<div className="container main-content">
				<div className="row">

					<div className="col-md-6">
						 <img className="img-responsive" src={'data:' + this.state.outfit.images[0].contentType + ';base64, ' + this.state.outfit.images[0].base64} />
						 <a onClick={this.deleteOutfit}>Remove Outfit</a>
					</div>

					<div className="col-md-6">
						<div id="item-details">
						<div id="item-misc">
							<div id="social">
								<div className="social-buttons"><i className="fa fa-facebook"></i></div>
			            		<div className="social-buttons"><i className="fa fa-instagram"></i></div>
		            		</div>
						</div>
						<ul className="list-group item-list">
							{this.state.outfit.items.map(function(item){
							    return (
							    <div className="dynamicItem">
							     	<li className="item">
										<a href={ item.url }>
										{ item.name }
										<i className="fa fa-arrow-right" aria-hidden="true"></i>
										</a>
									</li>
							    </div>
							    );
							}, this)}
						</ul>
							<div id="people">
								<div className="row">
									<div className="col-md-6 col-md-offset-6">
										<div id="author">
											<div className="spotify-widget">
											<div className="row">
											<div className="col-md-3">
												<div className="sw_user_pic_wrapper">
													<img className="sw_user_pic" src="https://i.pinimg.com/736x/4b/8c/40/4b8c40cd45ece9b22237861ea3918327--baby-head-the-head.jpg" />
												</div>
											</div>
											<div className="col-md-9">
												<div className="sw_user_info">
													<h4 className="sw_display_name">James Kingsbury</h4>
													<h5 className="sw_username">@lakobos</h5>
												</div>
											</div>
											</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="suggested-items">
				<h2>More from Jackets</h2>
					<div className="row">
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
						<a className="dark-link" href=""><div className="col-md-3"><div className="fash-item"></div><div className="fash-item-info"><p>Title</p><p>£90</p><p></p></div></div></a>
				</div>
			</div>
			</div>
		</div>
		);
	}
}

export default Outfit;