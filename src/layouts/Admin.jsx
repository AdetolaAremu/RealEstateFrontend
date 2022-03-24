import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import ROUTE from "../Helpers/routes.json";
import Home from "../Pages/Dashboard/Home/Index";
import CreatePost from "../Pages/Dashboard/Post/CreatePost";
import Editpost from "../Pages/Dashboard/Post/EditPost";
import Profile from "../Pages/Dashboard/Profile/Profile";
import EditProfile from "../Pages/Dashboard/Profile/EditProfile";
import { Container, Spinner } from 'reactstrap';
import NavUser from "../components/Navbars/userNavbar";
import UserFooter from '../components/Navbars/userFooter';
import { AiOutlineAlignLeft, AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { getLoggedInUser, getUserStats } from './actions/action';
import './layouts.css'

const Admin = () => {
  const { layoutData, layoutLoading, layoutsUserStats } = useSelector(state => state.layouts)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUser())
    dispatch(getUserStats())
  }, [dispatch])

  return (
    <div style={{ overflow:"hidden" }}>
      <NavUser />
      <Container>
        <div style={{ marginTop:"8rem", marginBottom:"3rem" }}>
          <div className='' style={{ borderLeft:"3px solid #2eca6a" }}>
            <div className='p-3'>
              {
                layoutLoading ? (<Spinner animation="border" 
                style={{ width:"4rem", height:"4rem", color:"#2eca6a" }} />) : (
                <div>
                  <h3 className=''>{ layoutData?.first_name } { layoutData?.last_name }</h3>
                  <div className='text-muted'>@{ layoutData?.username }</div>
                </div>)
              }
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-between' id="admincontainer">
          <div className='rounded first-header shadow-lg p-3 bg-body' id="adminheader">
            <div className='d-flex'>
              <div className='bg-white rounded-circle p-3 w-25 text-center therounded'>
                <AiOutlineAlignLeft style={{ fontSize:"30px", }} id="adminicon" />
              </div>
              <span className='mx-3 pt-3 fw-bold text-white'>Posts</span>
            </div>
            <div className='fw-bold text-white' style={{ fontSize:"100px", textAlign:"right" }}>
              { 
               layoutLoading ? (<Spinner style={{ fontSize:"100px" }} />) : layoutsUserStats?.userPosts
              }
            </div>
          </div>

          <div className='rounded second-header shadow-lg p-3 bg-body' id="adminheader">
            <div className='d-flex'>
              <div className='bg-white rounded-circle p-3 w-25 text-center therounded'>
                <AiOutlineLike style={{ fontSize:"30px", }} id="adminicon" />
              </div>
              <span className='mx-3 pt-3 fw-bold text-white'>Liked Posts</span>
            </div>
            <div className='fw-bold text-white' style={{ fontSize:"100px", textAlign:"right" }}>
              {
                layoutLoading ? (<Spinner style={{ fontSize:"100px" }} />) : layoutsUserStats?.likedPosts 
              }
            </div>
          </div>

          <div className='rounded third-header shadow-lg p-3 bg-body' id="adminheader">
            <div className='d-flex'>
              <div className='bg-white rounded-circle p-3 w-25 text-center therounded'>
                <AiOutlineComment style={{ fontSize:"30px", }} id="adminicon" />
              </div>
              <span className='mx-3 pt-3 fw-bold text-white'>Comments</span>
            </div>
            <div className='fw-bold text-white' style={{ fontSize:"100px", textAlign:"right" }}>
              { 
                layoutLoading ? (<Spinner style={{ fontSize:"100px" }} />) : layoutsUserStats?.userComments 
              }
            </div>
          </div>
        </div>
         
        <Switch>
          <Route exact path={ROUTE.DASHBOARD_HOME} component={Home} />
          <Route exact path={ROUTE.CREATE_POST} component={CreatePost} />
          <Route exact path={`${ROUTE.EDIT_POST}/:id`} component={Editpost} />
          <Route exact path={ROUTE.VIEW_PROFILE} component={Profile} />
          <Route exact path={ROUTE.EDIT_PROFILE} component={EditProfile} />
        </Switch>
      </Container>
      <UserFooter />
    </div>
  )
}

export default Admin
