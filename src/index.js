import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
// import jwt_decode from 'jwtdecode'
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './store';
import landing from "./Pages/Landing/landing";
import post from "./Pages/PublicPost/index";
import AuthLayout from "../src/layouts/Auths";
import AdminLayout from "../src/layouts/Admin";
import viewProperty from "./Pages/PublicPost/viewProperty"

import { setCurrentUser } from './Pages/AuthPages/actions/action'

import ROUTE from "./Helpers/routes.json"


if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    // store.dispatch(logoutUser());
    // Redirect to login
    // window.location.href = CONSTANTS.LOGIN;
  }
}


ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route path="/auth" component={AuthLayout} />
        <Route path="/user" component={AdminLayout} />
        <Route path={ROUTE.ALL_PROPERTIES} component={post} />
        <Route path="/view-post" component={viewProperty} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);