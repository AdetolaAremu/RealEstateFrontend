import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import ROUTE from "../Helpers/routes.json";
import Home from "../Pages/Dashboard/Home/Index";
import CreatePost from "../Pages/Dashboard/Post/CreatePost";
import Profile from "../Pages/Dashboard/Profile/Profile";
import EditProfile from "../Pages/Dashboard/Profile/EditProfile";
import { Container, Row, Col } from 'reactstrap';
import NavUser from "../components/Navbars/userNavbar";
import UserFooter from '../components/Navbars/userFooter';
import { AiOutlineAlignLeft, AiOutlineLike, AiOutlineComment } from "react-icons/ai";

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
            <div className='d-flex'>
              <div className='bg-white rounded-circle p-3 w-25 text-center '>
                <AiOutlineAlignLeft style={{ fontSize:"30px", }} />
              </div>
              <span className='mx-3 pt-3 fw-bold text-white'>Posts</span>
            </div>
            <div className='fw-bold text-white' style={{ fontSize:"100px", textAlign:"right" }}>
              0
            </div>
          </div>

          <div className='rounded second-header shadow-lg p-3 bg-body'>
            <div className='d-flex'>
              <div className='bg-white rounded-circle p-3 w-25 text-center '>
                <AiOutlineLike style={{ fontSize:"30px", }} />
              </div>
              <span className='mx-3 pt-3 fw-bold text-white'>Liked Posts</span>
            </div>
            <div className='fw-bold text-white' style={{ fontSize:"100px", textAlign:"right" }}>
              0
            </div>
          </div>

          <div className='rounded third-header shadow-lg p-3 bg-body'>
            <div className='d-flex'>
              <div className='bg-white rounded-circle p-3 w-25 text-center '>
                <AiOutlineComment style={{ fontSize:"30px", }} />
              </div>
              <span className='mx-3 pt-3 fw-bold text-white'>Comments</span>
            </div>
            <div className='fw-bold text-white' style={{ fontSize:"100px", textAlign:"right" }}>
              0
            </div>
          </div>
        </div>
         
        <Switch>
          <Route exact path={ROUTE.DASHBOARD_HOME} component={Home} />
          <Route exact path={ROUTE.CREATE_POST} component={CreatePost} />
          <Route exact path={ROUTE.VIEW_PROFILE} component={Profile} />
          <Route exact path={ROUTE.EDIT_PROFILE} component={EditProfile} />
        </Switch>
      </Container>
      <UserFooter />
    </div>
  )
}

export default Admin
