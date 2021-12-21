import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTE from "../Helpers/routes.json";
import Home from "../Pages/Dashboard/Home/Index";
import { Container, Row, Col } from 'reactstrap';
import NavUser from "../components/Navbars/userNavbar";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Admin = () => {
  return (
    <div>
      <NavUser />
      
          {/* <Container> */}
          
            <Switch>
              <Route exact path={ROUTE.DASHBOARD_HOME} component={Home} />
            </Switch>
          
          {/* </Container> */}
    </div>
  )
}

export default Admin
