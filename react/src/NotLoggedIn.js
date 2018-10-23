import React from 'react';
import { Link } from 'react-router-dom';
import './resources/css/submitsuccess.css';

const NotLoggedIn = props => (
	<div className="SubmitSuccess">
		<div className="container">
	    <div className="row">
	        <div className="col-md-12">
	            <div className="success-template">
	                <h2>Not Logged In</h2>
	                <div className="success-details">You must log in with your Facebook account to access this page. Please log in with the button in the nav bar above.</div>
	            </div>
	        </div>
	    </div>
		</div>
	</div>
)

export default NotLoggedIn;