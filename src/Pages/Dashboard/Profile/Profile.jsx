import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText } from 'reactstrap';
import ROUTE from "../../../Helpers/routes.json"

const Profile = () => {
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
            <Form>
              <Row>
                <Col>
                  <Label>
                    First Name
                  </Label>
                  <Input
                    className={`form-control-alternative`}
                    placeholder="E.g Duplex for sale"
                    type="email"
                    autoComplete="new-email"
                    name='email'
                    // onChange={handleChange}
                    // value={Inputs.email}
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
                    placeholder="City"
                    type="text"
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
              <Row>
                <Col>
                <Label>
                  Middle Name
                </Label>
                <Input
                  className={`form-control-alternative`}
                  type="text"
                  name='email'
                  // onChange={handleChange}
                  // value={Inputs.email}
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
                    // onChange={handleChange}
                    // value={Inputs.email}
                    />
                  <div className="text-danger text-sm">
                    {/* {
                      isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                    } */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Label>
                    Phone Number
                  </Label>
                  <Input
                    className={`form-control-alternative`}
                    type="text"
                    name='email'
                    // onChange={handleChange}
                    // value={Inputs.email}
                    />
                  <div className="text-danger text-sm">
                    {/* {
                      isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                    } */}
                  </div>
                </Col>
              </Row>
              {/* <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Submit
                </Button>
              </div> */}
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Profile