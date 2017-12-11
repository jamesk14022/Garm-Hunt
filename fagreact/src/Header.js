import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import './resources/css/navbar.css';

class Header extends Component {
responseFacebook(response) {
  console.log(response);
}

loginClick(){
  console.log('loginClick');
}

render() {
return (
<div className="Header">
  <Helmet>
    <title>Correct_Couture</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  </Helmet>
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to={`/`} >Correct_Couture</Link>

    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li><Link to={`/submit`} >Submit an Outfit</Link></li>
         <li> <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.loginClick}
            callback={this.responseFacebook} />
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
);
}
}

export default Header;
