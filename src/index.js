import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './page/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route component={App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.register();
