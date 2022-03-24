import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Row, Label, Spinner } from 'reactstrap';
import ROUTE from "../../../Helpers/routes.json"
import { ToastContainer } from 'react-toastify';

const Profile = () => {
  
  const { layouts: { layoutData, layoutLoading } } = useSelector(state => state)

  return (
    <>
      <ToastContainer />
      <div className='my-3'>
        <h2>Profile</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3'>
        <Card className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className='d-flex justify-content-end'>
              <Button color='primary' tag={Link} to={ROUTE.EDIT_PROFILE}>
                Edit Profile
              </Button>
            </div>
              { layoutLoading ? (<div className='d-flex justify-content-center'><Spinner animation="border" 
                  style={{ width:"4rem", height:"4rem", color:"#2eca6a" }} /></div>) : (
                <div>
                  <Row>
                    <Col>
                      <Label>
                        First Name
                      </Label>
                      <div className='fw-bold text-capitalize h4'>{layoutData?.first_name}</div>
                    </Col>
                    <Col>
                      <Label>
                        Last Name
                      </Label>
                      <div className='fw-bold text-capitalize h4'>{layoutData?.last_name}</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Label>
                      Middle Name
                    </Label>
                    <div className='fw-bold text-capitalize h4'>{ layoutData?.middle_name == null ? "--" : layoutData?.middle_name }</div>
                    </Col>
                    <Col>
                      <Label>
                        Username
                      </Label>
                      <div className='fw-bold text-capitalize h4'>{layoutData?.username}</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Label>
                        Phone Number
                      </Label>
                      <div className='fw-bold text-capitalize h4'>{layoutData?.phone_number}</div>
                    </Col>
                    <Col>
                      <Label>
                        Email
                      </Label>
                      <div className='fw-bold h4'>{layoutData?.email}</div>
                    </Col>
                  </Row>
                </div>)
              }
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Profile