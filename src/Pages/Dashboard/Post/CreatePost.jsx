import React from 'react';
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText } from 'reactstrap';

const CreatePost = () => {
  return (
    <>
      <div className='my-3'>
        <h2>Create Post</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3'>
        <Card className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form>
              <Row>
                <Col>
                  <Label>
                    Topic
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
                    Amount/Price
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
                  <Label
                    className="form-control-label"
                    htmlFor="input-country"
                  >
                    City
                  </Label>
                  <Input
                    className={`form-control-alternative`}
                    name="state_id"
                    // value={Inputs.state_id}
                    // onChange={handleChange}
                    type="select"
                  >
                    <option defaultValue>Choose City</option>
                    {/* {states.map((item) => (
                      <option key={item.id} value={item.id}>{ item.name }</option>
                    ))} */}
                  </Input>
                  <div className="text-danger text-sm">
                    {/* {
                      isEmpty(errors?.data?.errors?.state_id) ? null : errors?.data?.errors?.state_id
                    } */}
                  </div>
                </Col>
                <Col>
                <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  You can upload a maximum of 2 images, not more than 300kb.
                </FormText>
              </FormGroup>
                </Col>
              </Row>
              <Row>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              </Row>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default CreatePost
