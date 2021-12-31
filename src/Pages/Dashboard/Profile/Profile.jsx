import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText } from 'reactstrap';
import ROUTE from "../../../Helpers/routes.json"
import { getLoggedInUser } from '../../../layouts/actions/action';

const Profile = () => {
  
  const { layouts: { layoutData } } = useSelector(state => state)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getLoggedInUser())
  }, [])

  return (
    <>
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
                  <div className='fw-bold text-capitalize h4'>{layoutData?.email}</div>
                </Col>
              </Row>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Profile