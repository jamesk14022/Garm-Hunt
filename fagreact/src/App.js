import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Outfit from './Outfit';
import Submit from './Submit';
import Admin from './Admin';
import Tag from './Tag';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/outfit/:id' component={Outfit}/>
      <Route path='/tag/:tag' component={Tag}/>
      <Route path='/submit' component={Submit}/>
      <Route path='/admin' component={Admin}/>
    </Switch>
    <Footer />
  </div>
)

export default App
