import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from './Client.js';
import './resources/css/home.css';

class Home extends Component {
constructor(props){
  super(props);
  this.state = { 'editorOutfits': [] }
}

componentDidMount(){
  Client.getRandomOutfits(1)
    .then(response => response.json())
      .then((body) => {
        console.log(body);
        this.setState({ 'editorOutfits': body });
    });
}

render() {
return (
<div className="Home">

  <div className="container">

  <div className="row">

  <div className="col-lg-12">
    <div className="input-group input-group-lg">
      <input type="text" className="form-control" placeholder="Search for..." />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
    </div>
</div.

</div>

  <h3>Editor's Picks</h3>

  <div className="row">
  {this.state.editorOutfits.map(function(item){
    return (
    <div className="dynamicItem">
      <Link to={`/outfit/` + item._id} >
      <div className="col-md-2">
      <div className="editor-item">
        <img className="img-responsive img-item" src={'data:' + item.images[0].contentType + ';base64, ' + item.images[0].base64} />
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
      </div>
    </Link>
    </div>
    );
  }, this)}
    
  </div>

  <hr className="home-division"/>

  <div className="row">
  <div className="col-md-6"><div className="feature"><h3>Palace x Adidas<span className="spacer"></span></h3></div></div>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  <a href="/index.php/item/index/id">
    <div className="col-md-3"><div className="fash-item">
      <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      
    </div>
    <div className="fash-item-info">
      <p>Socks n Sliders</p>
      <p>£45.00</p>
    </div></div>
  </a>
  </div>
</div>
</div>

    );
  }
}

export default Home;
