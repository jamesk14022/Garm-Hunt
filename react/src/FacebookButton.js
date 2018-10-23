import React, { Component } from 'react';
import Client from './Client.js';

class FacebookButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '2059721240965995',
        cookie     : true,  // enable cookies to allow the server to access
                             // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      });

      // Now that we've initialized the JavaScript SDK, we call
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.
      window.FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }


  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback(response) {
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      window.FB.api('/me', function(response) {
        this.props.onLogin(true, response);
        Client.postUser(response);
      }.bind(this));
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      this.props.onLogin(false);
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      this.props.onLogin(false);
    }
  }
  
  handleClick() {
    if(this.props.action === 'login'){
      window.FB.login((response) => this.statusChangeCallback(response));
    }else if(this.props.action === 'logout'){
      window.FB.logout((response) => this.statusChangeCallback(response));
    }
  }

  render() {
    let {children} = this.props;
    return (
      <div onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default FacebookButton;