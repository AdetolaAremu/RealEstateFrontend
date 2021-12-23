import React from 'react';
import { Link } from "react-router-dom";
import { Table, Card, CardBody } from 'reactstrap';
import { BsPlusSquare } from "react-icons/bs";
import ROUTE from "../../../Helpers/routes.json";

const  Index = () => {
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
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Index
