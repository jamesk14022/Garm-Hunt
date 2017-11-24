import React, {Component} from 'react';
import Client from './Client.js';
import './resources/css/outfit.css';

class Outfit extends Component{
	render(){
		Client.getOutfit(69);
		return(
		<div className="Outfit">
			<div className="container main-content">
				<div className="row">

					<div className="col-md-6">
						<div id="gallery"></div>
					</div>

					<div className="col-md-6">
						<div id="item-details">
							<h2>title</h2>
							<h3>£90</h3>
							<ul>
								<li>Triple Woven</li>
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