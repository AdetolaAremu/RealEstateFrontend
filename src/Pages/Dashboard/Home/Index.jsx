import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Table, Card, CardBody , Spinner, Modal, ModalBody, ModalHeader} from 'reactstrap';
import { BsPlusSquare } from "react-icons/bs";
import ROUTE from "../../../Helpers/routes.json";
import { getUserPosts } from './actions/actions';
import { BsEyeFill, BsPencilSquare, BsTrashFill } from "react-icons/bs";

const  Index = () => {

  const [viewModal, setviewModal] = useState(false)

  const { indexData, indexLoading } = useSelector(state => state.dashboard)

  const dispatch = useDispatch()

  const toggleModal = () => {
    setviewModal(!viewModal)
  }
  
  useEffect(() => {
    dispatch(getUserPosts())
  }, [])

  return (
    <div>
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
            <Table className="align-items-center table-flush" responsive striped>
              <thead className='bg-secondary text-white'>
                <tr>
                  <th>#</th>
                  <th>Topic</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
                {/* {
                  indexLoading ? <Spinner className='m-auto' animation="border" 
                  style={{ width:"4rem", height:"4rem" }} />
                } */}
              <tbody>
                {indexData?.map((posts) => (
                  <tr key={posts.id}>
                    <th scope="row">1</th>
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
                      <button onClick={toggleModal} style={{ border:"1px solid #EBECED"}}>
                        <BsEyeFill style={{ fontSize:"20px" }} />
                      </button>
                      <Link to={`${ROUTE.EDIT_POST}/${posts.id}`} style={{ border:"1px solid #EBECED"}}>
                        <BsPencilSquare style={{ fontSize:"20px" }} />
                      </Link>
                      <button style={{ border:"1px solid #EBECED"}}>
                        <BsTrashFill style={{ fontSize:"20px" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={viewModal} id='create_loan'>
        <ModalHeader toggle={toggleModal}>View post</ModalHeader>
        <ModalBody>
          <div className="pl-lg-4">
            <div>The title will appear</div>
            <div>Price Here</div>
            <div>
              Description will appear here
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Index
