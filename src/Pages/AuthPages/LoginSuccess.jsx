import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col } from "reactstrap";
import { BsFillCheckCircleFill, BsArrowRight } from "react-icons/bs";
import ROUTE from '../../Helpers/routes.json';

function LoginSuccess() {
  return (
    <>
     <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Col lg="5" md="7">
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
             <div className='text-center'>
              <BsFillCheckCircleFill className='text-success' style={{ fontSize:"80px" }} />
             </div>
             <div className='mt-4 fw-bold text-center' style={{ color:"#626663" }}>
              Your registration is successful, you can now login straight away
             </div>
             <div className='mt-4 text-center'>
              <Link to={ROUTE.LOGIN} className='p-2 rounded text-white' 
                style={{ textDecoration:"none", background:"#073591" }}
              >
                Take me to Login Page <BsArrowRight className='text-white' style={{ fontSize:"20px" }} />
              </Link>
             </div>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  )
}

export default LoginSuccess
