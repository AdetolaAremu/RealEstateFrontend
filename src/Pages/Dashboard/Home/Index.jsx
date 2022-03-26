import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ROUTE from "../../../Helpers/routes.json"
import { Table, Card, CardBody , Spinner, Modal, ModalBody, ModalHeader, Button, Row, Col } from 'reactstrap';
import { getUserPosts, getMyLikedPosts, deleteDashboardPropertiesPost, getAdminStats, getAllUsers } from './actions/actions';
import { BsEyeFill, BsPencilSquare, BsTrashFill, BsFillTrashFill, BsPlusSquare, BsArrowRight } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import './homeIndex.css';

const  Index = () => {

  const [viewModal, setviewModal] = useState(false);
  const [viewAdminStatsModal, setviewAdminStatsModal] = useState(false);
  const [viewAllUsersModal, setviewAllUsersModal] = useState(false);
  const [currentID, setCurrentID] = useState(null);

  const  { dashboard: { indexData, indexLoading, myLikedLoading, myLikedData, adminData, adminUsers }, 
    layouts: { layoutData } } = useSelector(state => state)

  const dispatch = useDispatch()

  const toggleModal = (id) => {
    setCurrentID(id)
    setviewModal(!viewModal)
  }

  const toggleAdminStatsModal = () => {
    setviewAdminStatsModal(!viewAdminStatsModal)
    if (viewAdminStatsModal === false) {
      dispatch(getAdminStats())
    }
  }

  const toggleUsersTable = () => {
    setviewAllUsersModal(!viewAllUsersModal)
    if(viewAllUsersModal === false){
      dispatch(getAllUsers())
    }
  }

  const handleDeletePost = () => {
    dispatch(deleteDashboardPropertiesPost(currentID))
    setviewModal(false)
  }
  
  useEffect(() => {
    dispatch(getUserPosts())
    dispatch(getMyLikedPosts())
  }, [dispatch])

  return (
    <div style={{ overflow:"hidden !important" }}>
      <ToastContainer />
      <div className='mt-5 mb-3'>
        <h2>My Liked Posts</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className="container-fluid" style={{ overflow:"auto", background:"#eaeef6" }}>
        {
          myLikedLoading ? (<Spinner className='m-auto d-flex justify-content-center my-5' animation="border" 
            style={{ minWidth:"4rem", minHeight:"4rem", color:"#2eca6a" }} />) : myLikedData.length ? (
            <div className="row flex-nowrap my-2 thelikecards">
              { myLikedData.map((item) => (
                  <div className="col-3" key={item.id}>
                    <div className="card card-block p-2">
                      <div className='text-center text-capitalize' style={{fontWeight:"500"}}>
                        { item?.title.length > 30 ? (`${item.title.slice(0,20)}...`):item?.title }
                      </div>
                      <div className='mt-3'>
                        {
                          item?.text?.length > 50 ? (`${item?.text.slice(0,50)}...`) : item?.text
                        }
                      </div>
                      <div className='mt-3 text-center' style={{ fontWeight:"500" }}>
                        <span className='text-muted' style={{ fontSize:"12.5px" }}>
                          #</span>{ item?.price }
                      </div>
                      <div className='d-flex justify-content-center'>
                        <Link className='mt-3 viewLikedPost d-flex justify-content-center' 
                          style={{fontWeight:"500", color:"#159957", textDecoration:"none"}}
                          to={`${ROUTE.VIEW_PROPERTY}/${item.id}`}
                        >
                          View Post <span><BsArrowRight style={{ marginLeft:"7px" }} /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
              ))}             
            </div>) : (<div className='text-center'>No content do display</div>)
        }
      </div>
      
      {
        indexData.length >= 2 ? (
          <div className='text-center mt-5'>
            <button className='border border-none bg-none'>
              <BsPlusSquare style={{ fontSize:"7rem" }} />
            </button>
            <div className='text-muted mt-2'>Create Post</div>
            <div className='mt-2 text-danger'>Sorry, due to limited storage, you can not have more than two posts</div>
          </div>
        ):(
          <div className='text-center mt-5'>
            <Link to={ROUTE.CREATE_POST}>
              <button className='border border-none bg-none'>
                <BsPlusSquare style={{ fontSize:"7rem" }} />
              </button>
            </Link>
            <div className='text-muted mt-2'>Create Post</div>
            <div className='mt-2 text-danger'>Sorry, due to limited storage, you can not have more than two posts!</div>
          </div>
        )
      }
      
      
      <div className='my-3'>
        <h2>All Posts</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3 fixed'>
        <Card style={{ overflow:"hidden !important" }} className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
          {
            indexLoading ? (
              <div className='d-flex justify-content-center'>
                <Spinner className='m-auto' animation="border" 
                  style={{ width:"4rem", height:"4rem", color:"#2eca6a" }} 
                />
              </div>
            ) : indexData.length ? (
              <Table className="align-items-center table-flush" responsive striped>
                <thead className='bg-secondary text-white border border-2 border-white'>
                  <tr>
                    <th>S/N</th>
                    <th>Topic</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {indexData?.map((posts, index) => (
                    <tr key={posts.id}>
                      <th scope="row">{ index + 1 }</th>
                      <td>
                        { 
                          posts?.title?.length > 35 ? `${posts?.title?.slice(0,35)}...` : posts?.title
                        }
                      </td>
                      <td>
                        {
                          posts?.text?.length > 35 ? `${posts?.text?.slice(0,35)}...` : posts?.text
                        }
                      </td>
                      <td>
                        <Link to={`${ROUTE.VIEW_PROPERTY}/${posts?.id}`}>
                          <button style={{ border:"1px solid #EBECED"}}>
                            <BsEyeFill style={{ fontSize:"20px" }} />
                          </button>
                        </Link>
                        <Link to={`${ROUTE.EDIT_POST}/${posts.id}`} style={{ border:"1px solid #EBECED"}}>
                          <BsPencilSquare style={{ fontSize:"20px", color:"black" }} />
                        </Link>
                        <button onClick={(e) => toggleModal(posts.id, e)} style={{ border:"1px solid #EBECED"}}>
                          <BsTrashFill style={{ fontSize:"20px" }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>) : (<div className='text-center'>No content do display</div>)
          }
          </CardBody>
        </Card>
      </div>
      
      {
        layoutData?.role === 'admin' &&
        <div>
          <div className='my-3'>
            <h2>Admin Section</h2>
            <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
          </div>

          <div>
            <Row>
              <Col md={4}>
                <Button onClick={toggleAdminStatsModal} color='info'>See Admin Stats</Button>
              </Col>
              <Col md={4}>
                <Button onClick={toggleUsersTable} color='info'>See All Users</Button>
              </Col>
            </Row>
          </div>
        </div>
      }
      

      <Modal isOpen={viewModal} >
        <ModalHeader toggle={toggleModal}>Delete Post</ModalHeader>
        <ModalBody>
          <div className='text-center mb-4'>
            <BsFillTrashFill fontSize={100} style={{ color:"red" }} />
          </div>
          <div className="pl-lg-4">
            <div>Are you sure you want to delete this post?</div>
            <div className='text-center mt-4'>
              <Button onClick={(e, id) => handleDeletePost(id)} color='success'>Delete</Button>
              <Button color='danger' style={{ marginLeft:"5px" }} onClick={toggleModal}
              >
                Cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>


      <Modal isOpen={viewAdminStatsModal} id='create_loan'>
        <ModalHeader toggle={toggleAdminStatsModal}>Admin Stats</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col md={6}>Count of Users: { adminData?.userCount }</Col>
              <Col md={6}>Count of All Posts: { adminData?.allPosts }</Col>
              <Col md={6}>Count of All Likes: { adminData?.allLikes }</Col>
              <Col md={6}>Count of All Comments: { adminData?.allComments }</Col>
            </Row>
          </div>

          <div className="pl-lg-4">
            <div className='text-center mt-4'>
              <Button color='danger' style={{ marginLeft:"5px" }} onClick={toggleAdminStatsModal}>
                Close
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal isOpen={viewAllUsersModal} id='create_loan'>
        <ModalHeader toggle={toggleUsersTable}>Admin Stats</ModalHeader>
        <ModalBody>
        <Table className="align-items-center table-flush" responsive striped>
          <thead className='bg-secondary text-white border border-2 border-white'>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers?.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{ index + 1 }</th>
                <td>
                  { user?.first_name } { user?.last_name }
                </td>
                <td>
                  { user?.email }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
          <div className="pl-lg-4">
            <div className='text-center mt-4'>
              <Button color='danger' style={{ marginLeft:"5px" }} onClick={toggleUsersTable}
              >
                Close
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Index
