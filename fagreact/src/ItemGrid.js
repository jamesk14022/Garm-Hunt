import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from './Client.js';
import Masonry from 'react-masonry-component';
import './resources/css/item-grid.css';

class ItemGrid extends Component {
constructor(props){
  super(props);
  this.state = {outfits: []};
}

componentDidMount(){
  Client.getRandomOutfits(1)
  .then(response => response.json())
    .then((body) => {
      console.log(body);
      this.setState({ 'outfits': this.state.outfits.concat(body).concat(body).concat(body).concat(body) });
  });
}

render() {
  var items = this.state.outfits.map((item, index) =>
    <div className="dynamicItem" key={index}>
    <Link className="link-item" to={`/outfit/` + item._id} >
      <div className="editor-item">
        <img alt="outfit" className="img-item" src={'data:' + item.images[0].contentType + ';base64, ' + item.images[0].base64}/>
        <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
      </div>
    </Link>
    </div>
  )

  var masonryOptions = {
      transitionDuration: 0
  };

  return (
  <div className="container">
  <Masonry
    className="masonry"
    options={masonryOptions} // default {}
    disableImagesLoaded={false} // default false
    updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
  >
  {items}
  </Masonry>
  </div>
  );
}
}

export default ItemGrid;
