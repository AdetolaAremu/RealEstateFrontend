import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ROUTE from "../../../Helpers/routes.json"
import { Table, Card, CardBody , Spinner, Modal, ModalBody, ModalHeader, Button, Row, Col} from 'reactstrap';
import { getEachUserPosts, getUserPosts, getMyLikedPosts } from './actions/actions';
// import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsEyeFill, BsPencilSquare, BsTrashFill, BsFillTrashFill, BsPlusSquare, BsArrowRight } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import './homeIndex.css'

const  Index = () => {

  const [viewModal, setviewModal] = useState(false)
  const [CurrentID, setCurrentID] = useState(null)

  const  { dashboard: { indexData, indexLoading, myLikedLoading, myLikedData }, stats } 
    = useSelector(state => state)

  const dispatch = useDispatch()

  const toggleModal = (id) => {
    setviewModal(!viewModal)
    getEachUserPosts(id)
  }
  
  useEffect(() => {
    dispatch(getUserPosts())
    dispatch(getMyLikedPosts())
  }, [])

  return (
    <>
      <ToastContainer />
      <div className='mt-5 mb-3'>
        <h2>Liked Posts</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div class="container" style={{ overflow:"auto", background:"#eaeef6" }}>
        {
          myLikedLoading ? (<Spinner className='m-auto d-flex justify-content-center my-5' animation="border" 
            style={{ width:"4rem", height:"4rem", color:"#2eca6a" }} />) : myLikedData.length ? (
            <div class="row flex-nowrap my-2">
              { myLikedData.map((item) => (
                  <div class="col-3" key={item.id}>
                    <div class="card card-block p-2">
                      <div className='text-center text-capitalize' style={{fontWeight:"500"}}>
                        { item?.title.length > 30 ? (`${item.title.slice(0,20)}...`):item?.title }
                      </div>
                      <div className='mt-3'>
                        {
                          item?.text?.length > 60 ? (`${item?.text.slice(0,60)}...`) : item?.text
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
      
      {/* <div class="container" style={{ overflow:"auto", background:"#eaeef6" }}>
        <div class="row flex-nowrap my-2">
          <div class="col-3">
            <div class="card card-block p-2">
              <div className='text-center fw-bold'>Title: SO LETS SEE</div>
              <div className='mt-4'>
                Description will be here just to check bla bla bla bla bla bla
              </div>
              <div className='mt-3 fw-bold text-center'>5000</div>
              <div className='mt-2 viewLikedPost rounded-md text-center' 
                style={{fontWeight:"500", color:"#159957"}}
              >
                View Post <span><BsArrowRight style={{ marginLeft:"9px" }} /></span>
              </div>
            </div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div className="col-3">
              <div className="card card-block">Card</div>
          </div>
          <div className="col-3">
              <div className="card card-block">Card</div>
          </div>
          <div className="col-3">
              <div className="card card-block">Card</div>
          </div>
          <div className="col-3">
              <div className="card card-block">Card</div>
          </div>
          <div className="col-3">
              <div className="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
          <div class="col-3">
              <div class="card card-block">Card</div>
          </div>
        </div>
      </div> */}
      
      
      <div className='text-center mt-5'>
        <Link to={ROUTE.CREATE_POST}>
          <button className='border border-none bg-none'>
            <BsPlusSquare style={{ fontSize:"7rem" }} />
          </button>
        </Link>
        <div className='text-muted mt-2'>Create Post</div>
      </div>
      
      <div className='my-3'>
        <h2>All Posts</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3 fixed'>
        <Card className="bg-light shadow border-0">
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
                        <Link to={`${ROUTE.VIEW_PROPERTY}/${posts.id}`}>
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
      <Modal isOpen={viewModal} id='create_loan'>
        <ModalHeader toggle={toggleModal}>Delete Post</ModalHeader>
        <ModalBody>
          <div className='text-center mb-4'>
            <BsFillTrashFill fontSize={100} style={{ color:"red" }} />
          </div>
          <div className="pl-lg-4">
            <div>Are you sure you want to delete this post?</div>
            <div className='text-center mt-4'>
              <Button color='success'>Delete</Button>
              <Button color='danger' style={{ marginLeft:"5px" }} onClick={toggleModal}
              >
                Cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Index
