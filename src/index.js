import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './Pages/AuthPages/actions/action';
import Store from './store';
import PrivateRoute from "../src/layouts/PrivateRoute";
import setAuthToken from './utils/setAuthToken';
import ROUTE from "./Helpers/routes.json"
import landing from "./Pages/Landing/landing";
import post from "./Pages/PublicPost/index";
import AuthLayout from "../src/layouts/Auths";
import AdminLayout from "../src/layouts/Admin";
import viewProperty from "./Pages/PublicPost/viewProperty";
import 'bootstrap/dist/css/bootstrap.min.css';


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  Store.dispatch(setCurrentUser(decoded));

  const { exp } = jwt_decode(localStorage.jwtToken)
  const expirationTime = (exp * 1000) - 60000

  if (Date.now() >= expirationTime) {
    Store.dispatch(logoutUser());
    localStorage.clear()
    window.location.href = ROUTE.LOGIN;
  }
}


ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route path="/auth" component={AuthLayout} />
        <PrivateRoute path="/user" component={AdminLayout} />
        <Route path={ROUTE.ALL_PROPERTIES} component={post} />
        <Route path={`${ROUTE.VIEW_PROPERTY}/:id`} component={viewProperty} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);