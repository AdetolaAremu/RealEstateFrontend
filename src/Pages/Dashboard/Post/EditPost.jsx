import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText, Spinner } from 'reactstrap';
import { editUserEachPost } from './actions/action';
import { ToastContainer } from 'react-toastify';
import process from "../../../env";

const service_url = process.env.SERVICE_URL

const EditPost = (props) => {

  const [Inputs, setInputs] = useState({})
  
  const dispatch = useDispatch()

  const { stats } = useSelector(state => state)

  const getPostToUpdate = () => {
    axios.get(`${service_url}/my-each-posts/${props.match.params.id}`)
    .then((res) => setInputs(res?.data))
  }

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]:e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserEachPost(Inputs, props.match.params.id))
  }

  useEffect(() => {
    getPostToUpdate()
  }, [])

  if (stats?.redirectTo) {
    return <Redirect to={stats?.redirectTo} />
  }

  return (
    <>
      <ToastContainer />
      <div className='my-3'>
        <h2>Edit Post</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3'>
        <Card className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            {
                !Inputs.title ? (
                  <div className='text-center'>
                    <Spinner className='m-auto' animation="border" 
                      style={{ width:"4rem", height:"4rem", color:"#2eca6a" }} 
                    />
                  </div>
                ) : (
                  <Form role="submit" onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <Label>
                          Title
                        </Label>
                        <Input
                          className={`form-control-alternative`}
                          placeholder="E.g Duplex for sale"
                          type="text"
                          name='title'
                          onChange={handleChange}
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
                          type="text"
                          name='price'
                          onChange={handleChange}
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
                          <Label>
                            City
                          </Label>
                          <Input
                            className={`form-control-alternative`}
                            type="text"
                            name='city'
                            onChange={handleChange}
                            value={Inputs?.city}
                          />
                          <div className="text-danger text-sm">
                            {/* {
                              isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
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
                          onChange={handleChange}
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
                          <Label for="exampleFile">Change Image</Label>
                          <Input type="file" name="file" id="exampleFile" />
                          <FormText color="muted">
                            Maximum size 300kb, accepted format(png,jpeg,jpg).
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <FormGroup>
                      <Label for="exampleText">Description</Label>
                      <Input onChange={handleChange} value={Inputs?.text} type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    </Row>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                )
            }
            
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default EditPost
