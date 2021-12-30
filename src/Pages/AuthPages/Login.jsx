import React from 'react'
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupText, InputGroup, Col 
} from "reactstrap";
import { MdPassword } from "react-icons/md";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerNewUser } from './actions/action';
import isEmpty from '../../utils/isEmpty';

const initialState = {
  username:"",
  password:""
}

function Login() {
  const [Inputs, setInputs] = useState(initialState)

  const { errors } = useSelector(state => state.allAuths)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(Inputs));
  }

  return (
    <div >
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Col lg="5" md="7">
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className='mb-5 text-center' style={{ fontSize:"2rem", fontWeight:"600" }}>
                <span>Deal</span><span style={{ color:"#2eca6a" }}>Estate</span>
              </div>
              <Form onSubmit={handleSubmit} role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      @
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.username) ? "" : "border border-danger"}`}
                      placeholder="username"
                      type="text"
                      autoComplete="new-email"
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
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <MdPassword />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative ${isEmpty(errors.data?.errors?.password) ? "" : "border border-danger"}`}  
                      placeholder="Password"
                      type="password"
                      name='password'
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
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </div>
  )
}

export default Login
