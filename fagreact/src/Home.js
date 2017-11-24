import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './resources/css/home.css';

class Home extends Component {
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
</div>

  <hr />

  <h3>Editor's Picks</h3>

  <div className="row">

    <Link to={`/outfit/123`} >
      <div className="col-md-2">
        <div className="editor-item">
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
      </div>
    </Link>
    <a href="">
      <div className="col-md-2">
        <div className="editor-item">
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
      </div>
    </a>
    <a href="">
      <div className="col-md-2">
        <div className="editor-item">
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
      </div>
    </a>
    <a href="">
      <div className="col-md-2">
        <div className="editor-item">
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
      </div>
    </a>
    <a href="">
      <div className="col-md-2">
        <div className="editor-item">
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
      </div>
    </a>
    <a href="">
      <div className="col-md-2">
        <div className="editor-item">
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
      </div>
    </a>
  </div>

  <hr />

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
</div>
    );
  }
}

export default Home;
