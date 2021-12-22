import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTE from "../Helpers/routes.json";
import Home from "../Pages/Dashboard/Home/Index";
import CreatePost from "../Pages/Dashboard/Post/CreatePost";
import { Container, Row, Col } from 'reactstrap';
import NavUser from "../components/Navbars/userNavbar";
import UserFooter from '../components/Navbars/userFooter';

import './layouts.css'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Admin = () => {
  return (
    <div>
      <NavUser />
      <Container>
        <div className='d-flex justify-content-between' style={{marginTop:"5rem"}}>

          <div className='rounded first-header shadow-lg p-3 bg-body'>

          </div>

          <div className='rounded second-header shadow-lg p-3 bg-body'>

          </div>

          <div className='rounded third-header shadow-lg p-3bg-bod y'>

          </div>

        </div>
         
        <Switch>
          <Route exact path={ROUTE.DASHBOARD_HOME} component={Home} />
          <Route exact path={ROUTE.CREATE_POST} component={CreatePost} />
        </Switch>
      </Container>
      <UserFooter />
    </div>
  )
}

export default Admin
