import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './store';
import landing from "./Pages/Landing/landing";
import post from "./Pages/PublicPost/index";
import AuthLayout from "../src/layouts/Auths";
import AdminLayout from "../src/layouts/Admin";
import viewProperty from "./Pages/PublicPost/viewProperty"


ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route path="/auth" component={AuthLayout} />
        <Route path="/user" component={AdminLayout} />
        <Route path="/post" component={post} />
        <Route path="/view-post" component={viewProperty} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);