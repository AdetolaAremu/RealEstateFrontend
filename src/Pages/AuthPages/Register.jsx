import React from 'react'
import { Button, Card, CardBody, FormGroup, Form,
  Input, InputGroupAddon, InputGroupText,InputGroup, Col 
} from "reactstrap";
import { MdPassword } from "react-icons/md";

function Register() {
  return (
    <div className='mt-5'>
       <div className='d-flex justify-content-center'>
        <Col lg="5" md="7">
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Please sign up with correct credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      @
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative`}
                      placeholder="First Name"
                      type="text"
                      name='first_name'
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
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      @
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative`}
                      placeholder="Last Name"
                      type="text"
                      name='last_name'
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
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      @
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative`}
                      placeholder="username e.g agentone"
                      type="text"
                      name='username'
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
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                     <InputGroupText>
                      @
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative`}
                      placeholder="Email"
                      type="text"
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
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupText>
                      <MdPassword />
                    </InputGroupText>
                    <Input
                      className={`form-control-alternative`}
                      placeholder="Confirm password"
                      type="password"
                      name='confirm_password'
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
                    Register
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

export default Register
