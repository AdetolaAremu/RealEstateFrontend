import React from 'react'
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupText, InputGroup, Col 
} from "reactstrap";
import { MdPassword } from "react-icons/md";


function Login() {
  return (
    <div className='text-center mt-5'>
      <div className='d-flex justify-content-center'>
        <Col lg="5" md="7">
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Please sign in with your credentials</small>
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
