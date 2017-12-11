import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from './Client.js';

class Admin extends Component {
constructor(props){
  super(props);
  this.state = {}
}

componentDidMount(){

}

render() {
return (
<div className="Home">
<div className="container">
  <h2>Admin area</h2>
</div>
</div>

    );
  }
}

export default Admin;