import React, {Component} from 'react';
import Client from './Client.js';
import './resources/css/outfit.css';

class Outfit extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		Client.getOutfit(this.props.match.params.id)
			.then(response => response.json())
	  		.then((body) => {
	    		console.log(body);
	    		let imageAtts = 'data:' + body.images[0].contentType + ';base64, ' + body.images[0].base64;
	    		this.setState({ author: body.author });
	    		this.setState({ imageData:  imageAtts});
  		});
	}

	render(){
		return(
		<div className="Outfit">
			<div className="container main-content">
				<div className="row">

					<div className="col-md-6">
						<img src={this.state.imageData} />
					</div>

					<div className="col-md-6">

						<div id="item-details">
							<h2>title</h2>
							<ul>
								<li>Author: { this.state.author }</li>
								<li>One Off</li>
								<li>Medium</li>
							</ul>
						</div>
						<div id="item-misc">
							<div id="purchase">
								<button type="button" className="btn btn-default"><a className="btn" href="#">Purchase This Item</a></button>
							</div>
							<div id="social">
								<div className="social-buttons"><i className="fa fa-facebook"></i></div>
			            		<div className="social-buttons"><i className="fa fa-instagram"></i></div>
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