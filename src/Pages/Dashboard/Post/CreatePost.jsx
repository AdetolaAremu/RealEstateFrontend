import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Form, Button, Card, CardBody, FormGroup, Input, Col, Row, Label, FormText } from 'reactstrap';
import isEmpty from "../../../utils/isEmpty";
import { ToastContainer } from 'react-toastify';
import process from '../../../env';
import { createRealEstatePost } from './actions/action';

const service_url = process.env.SERVICE_URL

const initialState = {
  title:"",
  text:"",
  address:"",
  price:"",
  type:"",
  city:""
}

const CreatePost = () => {

  const [Inputs, setInputs] = useState(initialState)
  const [types, settypes] = useState([])

  const { errors, propertyDataLoading } = useSelector(state => state.posts)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]:e.target.value })
  }

  const getTypes = () => {
    axios.get(`${service_url}/type`).then((res) => {
      settypes(res?.data)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createRealEstatePost())
  }

  useEffect(() => {
    getTypes()
  }, [])

  return (
    <>
      <ToastContainer />
      <div className='my-3'>
        <h2>Create Post</h2>
        <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
      </div>

      <div className='mb-3'>
        <Card className="bg-light shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Label>
                    Title
                  </Label>
                  <Input
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.title) ? "" : "border border-danger"}`}
                    placeholder="E.g Duplex for sale"
                    type="text"
                    name='title'
                    onChange={handleChange}
                    value={Inputs.title}
                  />
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.title) ? null : errors?.data?.errors?.title
                  }
                </div>
                </Col>
                <Col>
                  <Label>
                    Amount/Price
                  </Label>
                  <Input
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.price) ? "" : "border border-danger"}`}
                    placeholder="5,000"
                    type="text"
                    name='price'
                    onChange={handleChange}
                    value={Inputs.price}
                  />
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.price) ? null : errors?.data?.errors?.price
                    }
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
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.city) ? "" : "border border-danger"}`}
                    placeholder="e.g Lagos, London"
                    type="text"
                    name='city'
                    onChange={handleChange}
                    value={Inputs.city}
                  />
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.price) ? null : errors?.data?.errors?.price
                    }
                  </div>
                </Col>
                <Col>
                  <Label
                    className="form-control-label"
                    htmlFor="input-country"
                  >
                    Type
                  </Label>
                  <Input
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.type) ? "" : "border border-danger"}`}
                    name="type"
                    value={Inputs.type}
                    onChange={handleChange}
                    type="select"
                  >
                    <option defaultValue>Choose type</option>
                    {types?.map((item) => (
                      <option key={item.id} value={item.id}>{ item.name }</option>
                    ))}
                  </Input>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.type) ? null : errors?.data?.errors?.type
                    }
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
                <Input onChange={handleChange} value={Inputs.text} type="textarea" name="text" 
                  className={`form-control-alternative ${isEmpty(errors.data?.errors?.text) ? "" : "border border-danger"}`}
                />
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.text) ? null : errors?.data?.errors?.text
                  }
                </div>
              </FormGroup>
              </Row>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit" disabled={propertyDataLoading}>
                  {
                    !propertyDataLoading ? "Submit":"Submitting"
                  }
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
