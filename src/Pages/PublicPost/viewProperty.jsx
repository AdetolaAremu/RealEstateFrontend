import React from 'react';
import Publicfooter from '../../components/Footers/publicfooter';
import { Container, Row, Col, Form, Button } from 'reactstrap';
import sample from "../../components/Images/sample.jpg";
import pix from "../../components/Images/author-2.jpg";
import { HiLocationMarker } from "react-icons/hi";

function ViewProperty() {
  return (
    <div>
      <Container>
        <div className='my-4'>
          <div className='' style={{ borderLeft:"3px solid #2eca6a" }}>
            <div className='p-3'>
              <h3 className=''>Name of property here</h3>
              <div className='text-muted'>Category here</div>
            </div>
          </div>
        </div>
        
        <div className='mb-3 text-center'>
          <img src={sample} style={{ maxHeight:"40rem" }} />
        </div>

        <div className='d-flex justify-content-between'>
          <div className='d-flex mt-5'>
            <div className='border border-4 border-success' style={{ height:"6.5rem", width:"11rem" }}>
              
            </div>
            <span className='mt-4'>
              <h2>Price</h2>
            </span>
          </div>
          
          <div>
            <HiLocationMarker style={{ width:"13rem", height:"7rem", marginLeft:"-3rem" }} />
            <div>City Name here</div>
          </div>
        </div>

        <div className='d-flex justify-content-between'>
          <div className='mt-5 mb-3'>
            <h2>Quick Summary</h2>
            <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
          </div>
          <div className='mt-5 mb-3'>
            <h2>Agent Details</h2>
            <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
          </div>
        </div>
        <Row className='mb-5'>
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
        </Row>
        <div className='mt-5 mb-3'>
          <h2>Comments</h2>
          <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
        </div>

        <div className='mb-5'>
          <div className='rounded mb-3 p-2' style={{ minHeight:"3.7rem", background:"gray" }}>
            hello
          </div>
          <div className='rounded mb-3 p-2' style={{ minHeight:"3.7rem", background:"gray" }}>
            hello
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
