import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Outfit from './Outfit';
import Submit from './Submit';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/outfit/:id' component={Outfit}/>
      <Route path='/submit' component={Submit}/>
    </Switch>
  </div>
)

export default App
