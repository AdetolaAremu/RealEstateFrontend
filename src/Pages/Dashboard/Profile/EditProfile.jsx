import React from 'react';
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText } from 'reactstrap';

const EditProfile = () => {
  return (
    <>
      <div className='my-3'>
        <h2>Edit Profile</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3'>
        <Card className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
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
                <Col>
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
                      Confirm Password
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
