import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../pages/Home';
import Planner from '../pages/Planner';
import Partner from '../pages/Partner';
import Pricing from '../pages/Pricing';

// import Login from '../pages/Login';
// import Registration from '../pages/Registration';
// import ResetPassword from '../pages/ResetPassword';

class Body extends Component {

  render () {

    return (
        <Switch>
          <Route exact path='/' render={(props) => <Home />}/>
          <Route exact activeClassName="active" path='/Home' render={(props) => <Home />}/>
          <Route exact activeClassName="active" path='/Planner' render={(props) => <Planner />}/>
          <Route exact activeClassName="active" path='/Partner' render={(props) => <Partner />}/>
          <Route exact activeClassName="active" path='/Pricing' render={(props) => <Pricing />}/>

        </Switch>

    )
  }
}

export default Body


// <Route exact path='/Login' render={(props) => <Login />}/>
// <Route exact path='/Registration' render={(props) => <Registration />}/>
// <Route exact path='/ResetPassword' render={(props) => <ResetPassword />}/>
