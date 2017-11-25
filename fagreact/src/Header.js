import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './resources/css/navbar.css';

class Header extends Component {
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
      <a className="navbar-brand" href="index.php">Correct_Couture</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><a href="">Women</a></li>
        <li><a href="">Men</a></li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li><a href="">Submit an Item</a></li>
         <li><a href="">Login/Reg</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
);
}
}

export default Header;
