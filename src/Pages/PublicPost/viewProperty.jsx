import React from 'react';
import Publicfooter from '../../components/Footers/publicfooter';
import { Container, Row, Col, Form, Button } from 'reactstrap';
import LandingNavbar from "../../components/Navbars/LandingNavbar"
import sample from "../../components/Images/sample.jpg";
import pix from "../../components/Images/author-2.jpg";
import { BsCash } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineLike, AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";

import './publicpost.css'

function ViewProperty() {
  return (
    <div>
      <LandingNavbar />
      <Container>
        <div style={{ marginTop:"6rem" }}>
          <div className='' style={{ borderLeft:"3px solid #2eca6a" }}>
            <div className='p-3'>
              <h3 className=''>Name of property here</h3>
              <div className='text-muted'>Category here</div>
            </div>
          </div>
        </div>
        
        <div className='mb-3 text-center'>
          <img className='view-property-img' src={sample} />
        </div>

        <div className='d-flex justify-content-between iconstop'>
          <div className=''>
            <BsCash className='viewicons firsticon' />
            {/* <span className=''>
              <h4 className='text-muted' style={{ marginLeft:"15px" }}>Price</h4>
            </span> */}
          </div>

          <div className=''>
            <Button color="none">
              <AiOutlineLike className='viewicons buttonLike' />
            </Button>
            {/* <span>
              <h4 className='text-muted' style={{ marginLeft:"15px" }}>Like</h4>
            </span> */}
          </div>
          
          <div>
            <HiLocationMarker className='viewicons' />
            {/* <h5 className='text-muted'>City Name</h5> */}
          </div>
        </div>
        <div className='d-flex justify-content-between mx-4 undericons'>
          <div><h5 className='text-muted text-center'>Price</h5></div>
          <div><h5 className='text-muted text-center'>Like</h5></div>
          <div><h5 className='text-muted text-center' style={{ marginRight:"2.8rem" }}>Lagos</h5></div>
        </div>

        <div className='d-flex justify-content-between'>
          <Col className='mt-5 mb-3'>
            <h2>Description</h2>
            <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
            <div lg="10" className='mt-2'>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, 
              lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci 
              luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
              lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci 
              luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
            </div>
          </Col>
          <Col className='mt-5 mb-3' lg="4" style={{ marginLeft:"2rem" }}>
            <h2>Agent Details</h2>
            <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
            <div className='d-flex justify-content-between mt-2' >
              <img className='mr-4' src={pix} alt="..." />
              <div>
                <h3>Tola Aremu</h3>
                <div><AiTwotoneMail /> Email</div>
                <div><HiLocationMarker /> City</div>
                <div><AiTwotonePhone /> 09988777667</div>
              </div>
            </div>
          </Col>
        </div>
        {/* <Row className='mb-5'>
          <Col lg="8">
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, 
            lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci 
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
            lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci 
            luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
          </Col>
          <Col className='d-flex justify-content-between'>
            <img src={pix} alt="..." />
            <div>
              <h3>Tola Aremu</h3>
              <div>Email</div>
              <div><HiLocationMarker /> City</div>
              <div>09988777667</div>
            </div>
          </Col>
        </Row> */}
        <div className='mt-5 mb-3'>
          <h2>Comments</h2>
          <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
        </div>

        <div className='mb-3'>
          <div className='rounded mb-3 p-2 border border-secondary' 
            style={{ minHeight:"3.7rem", background:"#f7fcf9" }}
          >
            <div className="fw-bold">Name here</div>
            <div>The comment will appear here</div>
          </div>
        </div>

        <Form className='mb-5'>
          <textarea rows="10" style={{ width:"100%" }}></textarea>
          <div>
            <Button color="primary">Post</Button>
          </div>
        </Form>        
      </Container>
      <Publicfooter />
    </div>
  )
}

export default ViewProperty;
