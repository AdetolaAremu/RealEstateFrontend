import React from 'react'
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupText, InputGroup, Col 
} from "reactstrap";
import { MdPassword } from "react-icons/md";


function Login() {
  return (
    <div >
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Col lg="5" md="7">
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className='mb-5 text-center' style={{ fontSize:"2rem", fontWeight:"600" }}>
                <span>Deal</span><span style={{ color:"#2eca6a" }}>Estate</span>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      @
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative`}
                      placeholder="username"
                      type="email"
                      autoComplete="new-email"
                      name='email'
                      // onChange={handleChange}
                      // value={Inputs.email}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {/* {
                      isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                    } */}
                  </div>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <MdPassword />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative`}
                      placeholder="Password"
                      type="password"
                      name='password'
                      autoComplete="new-password"
                      // onChange={handleChange}
                      // value={Inputs.password}
                    />
                  </InputGroup>
                  <div className="text-danger text-sm">
                    {/* {
                      isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
                    } */}
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
