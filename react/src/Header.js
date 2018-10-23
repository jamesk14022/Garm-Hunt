import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FacebookButton from './FacebookButton';
import './resources/css/navbar.css';

class Header extends Component {

constructor(props){
  super(props);
  this.state = { username: '', userid:'' };
  this.onFacebookLogin = this.onFacebookLogin.bind(this);
}

onFacebookLogin(loginStatus, resultObject){
  if (loginStatus === true) {
    this.setState({
      username: resultObject.name,
      userid: resultObject.id
    });
    //pass state to app.js for route auth
    this.props.authChange(true, resultObject.id)
  } else {
    this.setState({
      username: null,
      userid: null
    });
    this.props.authChange(false)
  }
}

render() {
let { username, userid } = this.state;

return (
<div className="Header">
  <Helmet>
    <title>GarmHunt</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  </Helmet>
  <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to={`/`}>GarmHunt <sub>(Beta)</sub></Link>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">

        {username && 
          <li><a><span className="link-fade"><button type="button" className="no-button metro">
        Welcome back, { username }</button></span></a></li>}

        {username && userid &&
          <li><Link to={'/user/' + userid}><span className="link-fade"><button type="button" className="no-button metro">
        My Account</button></span></Link></li>}
         
         {!username && 
          <li><a><span className="link-fade">
          <FacebookButton action="login" onLogin={this.onFacebookLogin}>
            <button type="button" className="no-button metro">Log In</button>
          </FacebookButton>
         </span>
         </a></li>}

         {username && 
          <li><a><span className="link-fade">
          <FacebookButton action="logout" onLogin={this.onFacebookLogin}>
            <button type="button" className="no-button metro">Log Out</button>
          </FacebookButton>
         </span>
         </a></li>}
         
         <li><Link to={'/about/'}><span className="link-fade"><button type="button" className="no-button metro">About Us</button></span></Link></li>
      </ul>
    </div>
  </div>
</nav>
</div>
);
}
}

export default Header;
