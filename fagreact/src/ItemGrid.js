import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Client from './Client.js';
import Masonry from 'react-masonry-component';
import './resources/css/item-grid.css';

class ItemGrid extends Component {
constructor(props){
  super(props);
  console.log(props)
  this.state = {loading: false, outfits: [], pagination: {pages: 1, itemsPerPage: 20, currentPage: 1}};
  this.setPage = this.setPage.bind(this);
}

populateGrid(tag, user){
  if(tag){
  Client.getOutfitsByTag(tag)
  .then(response => response.json())
    .then((body) => {
      console.log(body);
      var multiOutfits = this.state.outfits.concat(body).concat(body).concat(body).concat(body);
      this.setState({'outfits':  multiOutfits});
      let pages = Math.ceil(multiOutfits.length / this.state.pagination.itemsPerPage);
      this.setState({ loading: false, pagination: {...this.state.pagination, pages: pages}});
  })
  }else if(user){
    Client.getOutfitsByUser(user)
      .then(response => response.json())
        .then((body) => {
          var multiOutfits = this.state.outfits.concat(body).concat(body).concat(body).concat(body);
          this.setState({'outfits':  multiOutfits});
          let pages = Math.ceil(multiOutfits.length / this.state.pagination.itemsPerPage);
          this.setState({ loading: false, pagination: {...this.state.pagination, pages: pages}});
      })
  }
}

componentDidMount(){
  this.setState({ loading: true });
  this.populateGrid(this.props.tag, this.props.user);
}

componentWillReceiveProps(nextProps){
  this.setState({ loading: true });
  this.populateGrid(nextProps.tag, nextProps.user);
}


setPage(newPage){
  this.setState({pagination: {...this.state.pagination, currentPage: newPage}});
  ReactDom.findDOMNode(this).scrollIntoView();
}

render() {
  let currentPage = this.state.pagination.currentPage;
  let previous, next;
  let fauxArr = [...Array(this.state.pagination.pages)];
  let allOutfits = [...this.state.outfits];
  let outfitsToRender = allOutfits.slice(this.state.pagination.itemsPerPage * (currentPage - 1), this.state.pagination.itemsPerPage * currentPage);
  let masonryOptions = {
      transitionDuration: 0,
      gutter: 0
  };

  if(currentPage !== 1){ 
    previous = <li onClick={() => this.setPage(currentPage - 1)}><a aria-label="Previous"><span aria-hidden="true">Previous</span></a></li>;
  }

  if(currentPage !== fauxArr.length){
    next = <li onClick={() => this.setPage(currentPage + 1)}><a aria-label="Next"><span aria-hidden="true">Next</span></a></li>;
  }


  if( outfitsToRender ){
  return (
  <div className="container-masonry">
    <Masonry
      className="masonry"
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
    >
    {(this.state.loading) ? <p>loading</p> : outfitsToRender.map((item, index) =>
      <div className="dynamicItem" key={index}>
      <Link className="link-item" to={`/outfit/` + item._id} >
        <div className="editor-item">
          <img alt="outfit" className="img-item" src={'data:' + item.images[0].contentType + ';base64, ' + item.images[0].base64}/>
          <div className="like-button"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></div>
        </div>
      </Link>
      </div>
    )}
    </Masonry>
    <nav id="pagination" aria-label="Page navigation">
      <ul className="pagination pagination-lg">
        { previous }

        {fauxArr.map((x, i) =>
          <li key={i} className={(i+1===currentPage) ? "active" : "" } onClick={() => this.setPage(i + 1)}><a>{i + 1}</a></li>
        )}

        { next }
      </ul>
    </nav>
  </div>
  );
}else{
  return null;
}
}
}

export default ItemGrid;
