import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Table, Card, CardBody , Spinner, Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';
import { BsPlusSquare } from "react-icons/bs";
import ROUTE from "../../../Helpers/routes.json";
import { getEachUserPosts, getUserPosts } from './actions/actions';
import { BsEyeFill, BsPencilSquare, BsTrashFill, BsFillTrashFill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';

const  Index = () => {

  const [viewModal, setviewModal] = useState(false)
  const [CurrentID, setCurrentID] = useState(null)

  const  { dashboard: { indexData, indexLoading },stats } = useSelector(state => state)

  const dispatch = useDispatch()

  const toggleModal = (id) => {
    setviewModal(!viewModal)
    getEachUserPosts(id)
  }
  
  useEffect(() => {
    dispatch(getUserPosts())
  }, [])

  return (
    <>
      <ToastContainer />
      <div className='my-3'>
        <h2>Liked Posts</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='py-5 px-5 text-center'>
        No content to display
      </div>
      
      <div className='text-center mt-3'>
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

      <div className='mb-3'>
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
                        <button style={{ border:"1px solid #EBECED"}}>
                          <BsEyeFill style={{ fontSize:"20px" }} />
                        </button>
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
