import React, { Component } from 'react';
import { AppLayout } from './containers/AppLayout/AppLayout';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Pelanggan from './page/Pelanggan';
import { PageNotFound } from './page/404';

class App extends Component {
  render() {
    return(
      <AppLayout>
        <Switch>
          <Route path='/' exact={true} component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/pelanggan' component={Pelanggan} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </AppLayout>
    )
  }
}

export default App;