import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText } from 'reactstrap';
import { getUserEachPost } from './actions/action';
import process from "../../../env";

const service_url = process.env.SERVICE_URL

const EditPost = (props) => {

  const [Inputs, setInputs] = useState({})
  const [Cities, setCities] = useState([])
  
  const dispatch = useDispatch()

  const getPostToUpdate = () => {
    axios.get(`${service_url}/my-each-posts/${props.match.params.id}`)
    .then((res) => setInputs(res?.data))
  }

  const getCity = async () => {
    const res = await axios.get(`${service_url}/cities`).then((res) => {
      setCities(res.data)
    })
  }

  useEffect(() => {
    getPostToUpdate()
    getCity();
  }, [])

  return (
    <>
      <div className='my-3'>
        <h2>Edit Post</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3'>
        <Card className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form>
              <Row>
                <Col>
                  <Label>
                    Title
                  </Label>
                  <Input
                    className={`form-control-alternative`}
                    placeholder="E.g Duplex for sale"
                    type="email"
                    autoComplete="new-email"
                    name='email'
                    // onChange={handleChange}
                    value={Inputs?.title}
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
                    value={Inputs?.price}
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
                    value={Inputs.city_id}
                    // onChange={handleChange}
                    type="select"
                  >
                    <option defaultValue>Choose City</option>
                    {Cities.map((item) => (
                      <option key={item.id} value={item.id}>{ item.name }</option>
                    ))}
                  </Input>
                  <div className="text-danger text-sm">
                    {/* {
                      isEmpty(errors?.data?.errors?.state_id) ? null : errors?.data?.errors?.state_id
                    } */}
                  </div>
                </Col>
                <Col>
                  <Label>
                    Address
                  </Label>
                  <Input
                    className={`form-control-alternative`}
                    placeholder="Address"
                    type="text"
                    name='address'
                    // onChange={handleChange}
                    value={Inputs?.address}
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
                <Input value={Inputs?.text} type="textarea" name="text" id="exampleText" />
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

export default EditPost
