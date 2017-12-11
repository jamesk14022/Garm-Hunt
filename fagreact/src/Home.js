import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from './Client.js';
import ItemGrid from './ItemGrid.js'
import './resources/css/home.css';

class Home extends Component {
constructor(props){
  super(props);
}

render() {
return (
<div className="Home">
  <div className="container">
  <div className="row">
  <div className="col-lg-12">
    <div className="input-group input-group-lg search-bar">
      <input type="text" className="form-control" placeholder="Search for..." />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
    </div>
</div>
</div>
  <div className="row">
    <div className="col-md-6"><div className="feature"><h3>Palace x Adidas<span className="spacer"></span></h3></div></div>
  </div>
</div>
<ItemGrid />
</div>
);
}
}

export default Home;
