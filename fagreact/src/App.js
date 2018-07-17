import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Outfit from './Outfit';
import Submit from './Submit';
import SubmitSuccess from './SubmitSuccess';
import Admin from './Admin';
import Tag from './Tag';
import User from './User';
import About from './About';
import PageNotFound from './PageNotFound';

//hoc reserved for loggedin users
//auth loguic needs brishing up here - insec
const PrivateRoute = ({ component: Component, logged: loggedIn, id: Id, ...rest }) => (
  <Route {...rest} render={(props) => (
    loggedIn === true
    ? <Component id={Id} {...props} />
    : <p style={{'marginTop' : '100px'}}>you needa be loggin in , b</p>
  )}/>
)

class App extends Component {

  constructor(props){
    super(props);
    this.state = { loggedIn: false, userID: null}
    this.onAuthChange = this.onAuthChange.bind(this)
  }

  onAuthChange(result, id){
    if(result === true){
      this.setState({ loggedIn: true, userID: id })
    }else{
      this.setState({ loggedIn: false, userID: null })
    }
    console.log(this.state)
  }

  render(){
    return(  
    <div>
    <Header authChange={this.onAuthChange} />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/outfit/:id' component={Outfit}/>
      <Route path='/tag/:tag' component={Tag}/>
      <Route path='/user/:userid' component={User}/>
      <Route path='/about' component={About}/>
      <PrivateRoute path='/success' component={SubmitSuccess} logged={this.state.loggedIn}/>
      <PrivateRoute path='/submit' component={Submit} logged={this.state.loggedIn} id={this.state.userID}/>
      <PrivateRoute path='/admin' component={Admin} logged={this.state.loggedIn}/>
      <Route component={PageNotFound} />
    </Switch>
    <Footer />
    </div>
  );
  }
}

export default App
