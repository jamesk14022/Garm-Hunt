import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PersonBox from './PersonBox.js';

class OutfitCard extends Component{

	state = { focus: 0 }

	constructor(props){
		super(props);
		this.setImageFocus = this.setImageFocus.bind(this);
	}

	//sets image to be englarged
	setImageFocus(key){
		this.setState({ focus: key })
	} 

	static getDerivedStateFromProps(props, state) {
	//this ensures focus is returned to 0 after new props are passed
    if (props.focus !== state.focus) {
      return {
        focus: 0
      };
    }
    return null;
  }

	render(){
	let { author, model, items, images, tags } = this.props;	
	let { focus } = this.state;

	return(

		<div className="OutfitCard">
		<div className="row">
		<div className="col-md-6 left">
			{(images) ? <img alt="outfit" className="img-responsive" src={'data:' + images[focus].contentType + ';base64, ' + images[focus].base64} /> : ''}
		</div>

		<div className="col-md-6 right">
			<div id="item-details">
			<div className="row">
				<div className="col-md-6 tag">
					<div className="tags">
						{tags.map((tag, index) =>
							<Link to={`/tag/` + tag.tag} key={index}><p className="item-tag" key={index}>{ tag.tag }</p></Link>
						)}
					</div>
				</div>
				<div className="col-md-6 social">
				<div id="item-misc">
					<div className="social-buttons"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
					<div className="social-buttons"><i className="fa fa-facebook"></i></div>
	        		<div className="social-buttons"><i className="fa fa-instagram"></i></div>
				</div>
				</div>
			</div>
			<ul className="list-group item-list">
				{items.map((item, index) =>
					<div className="dynamicItem" key={index}>
				     	<li className="item">
							<a target="_blank" href={ item.url }>
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
							{(model) ?
								<PersonBox Title='Model' Subtext={ model.name } Link={ model.url } />
							:
								<PersonBox Title='Model' Subtext={ 'No model information available.' }/>
							}
						</div>
					</div>
					<div className="col-md-6">
						<div id="author">
							{(author) ?
								<PersonBox Title='Author' Subtext={ author.fullName } Link={'/user/' + author.id} />
							:
								<PersonBox Title='Model' Subtext={ 'No model information available.' }/>
							}
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className="gallery">
				<div className="row">
					{images.map((image, index) => 
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