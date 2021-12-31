import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import  { editProfile } from './actions/action'
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText, Spinner } from 'reactstrap';
import process from "../../../env";

const service_url = process.env.SERVICE_URL

const EditProfile = () => {

  const [Inputs, setInputs] = useState({})

  const { layouts: { layoutData } } = useSelector(state => state)

  const dispatch = useDispatch()

  const getProfileData = () => {
    axios.get(`${service_url}/currentuser`).then((res) => {
      setInputs(res?.data)
    })
  }

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]:e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile(Inputs))
  }
  
  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <>
      <div className='my-3'>
        <h2>Edit Profile</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3'>
        <Card className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            {
              !Inputs.first_name ? (
                <div className='text-center'>
                  <Spinner className='m-auto' animation="border" 
                    style={{ width:"4rem", height:"4rem", color:"#2eca6a" }} 
                  />
                </div>
              ) : (
                  <Form role='submit' onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <Label>
                          First Name
                        </Label>
                        <Input
                          className={`form-control-alternative`}
                          type="text"
                          name='first_name'
                          onChange={handleChange}
                          value={Inputs.first_name}
                        />
                      <div className="text-danger text-sm">
                        {/* {
                          isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                        } */}
                      </div>
                      </Col>
                      <Col>
                        <Label>
                          Last Name
                        </Label>
                        <Input
                          className={`form-control-alternative`}
                          type="text"
                          name='last_name'
                          onChange={handleChange}
                          value={Inputs.last_name}
                        />
                        <div className="text-danger text-sm">
                          {/* {
                            isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
                          } */}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <Label>
                        Middle Name
                      </Label>
                      <Input
                        className={`form-control-alternative`}
                        type="text"
                        name='middle_name'
                        onChange={handleChange}
                        value={Inputs.middle_name}
                        />
                      <div className="text-danger text-sm">
                        {/* {
                          isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                        } */}
                      </div>
                      </Col>
                      <Col>
                        <Label>
                          Email
                        </Label>
                        <Input
                          className={`form-control-alternative`}
                          type="email"
                          autoComplete="new-email"
                          name='email'
                          onChange={handleChange}
                          value={Inputs.email}
                          />
                        <div className="text-danger text-sm">
                          {/* {
                            isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                          } */}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Label>
                          Phone Number
                        </Label>
                        <Input
                          className={`form-control-alternative`}
                          type="text"
                          name='phone_number'
                          onChange={handleChange}
                          value={Inputs.phone_number}
                          />
                        <div className="text-danger text-sm">
                          {/* {
                            isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                          } */}
                        </div>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label for="exampleFile">Upload Avatar</Label>
                          <Input type="file" name="file" id="exampleFile" />
                          <FormText color="muted">
                            The image should not be more than 300kb.
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button className="" color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                )
            }
            
          </CardBody>
        </Card>

        <div className='my-3'>
          <h2>Change Password</h2>
          <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
        </div>

        <div className='mb-3'>
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form>
                <Row>
                  <Col md="6">
                    <Label>
                      Current Password
                    </Label>
                    <Input
                      className={`form-control-alternative`}
                      type="password"
                      name='password'
                      // onChange={handleChange}
                      // value={Inputs.password}
                    />
                    <div className="text-danger text-sm">
                      {/* {
                        isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
                      } */}
                    </div>
                  </Col>
                  <Col md="6">
                    <Label>
                      New Password
                    </Label>
                    <Input
                      className={`form-control-alternative`}
                      type="password"
                      name='password'
                      // onChange={handleChange}
                      // value={Inputs.password}
                    />
                    <div className="text-danger text-sm">
                      {/* {
                        isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
                      } */}
                    </div>
                  </Col>
                  <Col md="6">
                    <Label>
                      Confirm New Password
                    </Label>
                    <Input
                      className={`form-control-alternative`}
                      type="password"
                      name='password'
                      // onChange={handleChange}
                      // value={Inputs.password}
                    />
                    <div className="text-danger text-sm">
                      {/* {
                        isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
                      } */}
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-3">
                  <Button className="" color="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default EditProfile
