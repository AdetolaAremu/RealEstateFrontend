import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import isEmpty from '../../utils/isEmpty'
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupText,InputGroup, Col, Spinner } from "reactstrap";
import { BsFillPersonBadgeFill, BsEnvelopeFill, BsPersonBoundingBox, BsLockFill, BsFillTelephoneFill } from "react-icons/bs"
import { registerNewUser } from './actions/action';

const initialState = {
  first_name:"",
  last_name:"",
  middle_name:"",
  email:"",
  phone_number:"",
  password:"",
  confirm_password:""
}

function Register() {

  const { allAuths: { authLoading, errors }, stats} = useSelector(state => state)

  const dispatch = useDispatch()

  const [Inputs, setInputs] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerNewUser(Inputs))
  }

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]:e.target.value})
  }

  if (stats?.redirectTo) {
    return <Redirect to={stats?.redirectTo} />
  }

  return (
    <>
       <div className='vh-100 d-flex justify-content-center align-items-center' style={{ marginTop:"8rem", marginBottom:"3rem" }}>
        <Col lg="5" md="7">
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className='mb-5 text-center' style={{ fontSize:"2rem", fontWeight:"600" }}>
                <span>Deal</span><span style={{ color:"#2eca6a" }}>Estate</span>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <BsFillPersonBadgeFill />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.first_name) ? "" : "border border-danger"}`}
                      placeholder="First Name"
                      type="text"
                      name='first_name'
                      onChange={handleChange}
                      value={Inputs.first_name}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.first_name) ? null : errors?.data?.errors?.first_name
                    }
                  </div>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <BsFillPersonBadgeFill />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.last_name) ? "" : "border border-danger"}`}
                      placeholder="Last Name"
                      type="text"
                      name='last_name'
                      onChange={handleChange}
                      value={Inputs.last_name}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.last_name) ? null : errors?.data?.errors?.last_name
                    }
                  </div>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <BsFillPersonBadgeFill />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.middle_name) ? "" : "border border-danger"}`}
                      placeholder="Middle Name"
                      type="text"
                      name='middle_name'
                      onChange={handleChange}
                      value={Inputs.middle_name}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.middle_name) ? null : errors?.data?.errors?.middle_name
                    }
                  </div>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <BsPersonBoundingBox />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.username) ? "" : "border border-danger"}`}
                      placeholder="username e.g agentone"
                      type="text"
                      name='username'
                      onChange={handleChange}
                      value={Inputs.username}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.username) ? null : errors?.data?.errors?.username
                    }
                  </div>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      <BsFillTelephoneFill />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.phone_number) ? "" : "border border-danger"}`}
                      placeholder="Phone number"
                      type="text"
                      name='phone_number'
                      onChange={handleChange}
                      value={Inputs.phone_number}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                    }
                  </div>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      <BsEnvelopeFill />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.email) ? "" : "border border-danger"}`}
                      placeholder="Email"
                      type="email"
                      name='email'
                      onChange={handleChange}
                      value={Inputs.email}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                    }
                  </div>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <BsLockFill />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.password) ? "" : "border border-danger"}`}
                      placeholder="Password"
                      type="password"
                      name='password'
                      autoComplete="new-password"
                      onChange={handleChange}
                      value={Inputs.password}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
                    }
                  </div>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <BsLockFill />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.confirm_password) ? "" : "border border-danger"}`}
                      placeholder="Confirm password"
                      type="password"
                      name='confirm_password'
                      onChange={handleChange}
                      value={Inputs.confirm_password}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {
                      isEmpty(errors?.data?.errors?.confirm_password) ? null : errors?.data?.errors?.confirm_password
                    }
                  </div>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit" disabled={authLoading}>
                    {
                      authLoading ? (<Spinner />) : "Register"
                    }
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  )
}

export default Register
