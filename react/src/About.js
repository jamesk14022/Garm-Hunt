import React from 'react';
import './resources/css/about.css';
import './resources/css/eqheight.css';

const About = (props) => (
	<div className="About">
		<div className="container">
		<div className="row">
		<div className="col-md-5 col-sm-12 col-xs-12">
			<h2>About GarmHunt</h2>
			<hr />

			<p>GarmHunt's mission is to help fashion conscious individuals find innovative new brands that they'll love. We 
			help fledgling brands promote themselves and get discovered. Outfits, rather than individual items are shared - 
			with links to where individuals can purcahse each item.</p><p> Models and influencers are also
			free to share their outfits to inspire others and grow their social media audience. </p><p> Garmhunt is currently
			in beta, which means we are continuing to build the platform as you use it. User's feedback will be addressed so 
			that we build a fashion discovery experience that is valuable to both individuals and brands. Email us at feedback@garmhunt.com if you have any suggestions.</p>
		</div>
		<div className="col-md-5 col-md-offset-1 col-sm-12 col-xs-12 about-photos">
			<div className="row">
				<div className="col-md-6 row-eq-height"><img src="/about1.jpg" className='img-responsive' /></div>
				<div className="col-md-6 row-eq-height"><img src="/about2.jpg" className='img-responsive' /></div>
				<div className="col-md-6 row-eq-height"><img src="/about3.jpg" className='img-responsive' /></div>
				<div className="col-md-6 row-eq-height"><img src="/about4.jpg" className='img-responsive' /></div>
			</div>
		</div>
		</div>
		</div>
	</div>
);

export default About;