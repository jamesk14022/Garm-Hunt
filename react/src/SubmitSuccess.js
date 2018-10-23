import React from 'react';
import { Link } from 'react-router-dom';
import './resources/css/submitsuccess.css';

const SubmitSuccess = props => (
	<div className="SubmitSuccess">
		<div className="container">
	    <div className="row">
	        <div className="col-md-12">
	            <div className="success-template">
	                <h2>Success! You have submitted your outfit</h2>
	                <div className="success-details">We will check your submission and post it within the next 24 hours.</div>
	                <div className="success-actions">
	                    <Link to='/' className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>Take Me Home</Link>
	                </div>
	            </div>
	        </div>
	    </div>
		</div>
	</div>
)

export default SubmitSuccess