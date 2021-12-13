import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap';
import LandingNavbar from '../../components/Navbars/LandingNavbar';
import './landing.css';
import sample from "../../components/Images/sample.jpg";
import { Row, Col, Card } from 'reactstrap';
import { BsFillEmojiSunglassesFill, BsCreditCardFill, BsPersonFill, BsFillEyeFill } from 'react-icons/bs';

const Landing= () => {
  return (
    <>
      <LandingNavbar />
      <div style={{ position:"relative" }}>
        <div
          className=""
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" +
              require("../../components/Images/landingbg.webp").default +
              ")",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            color:"white",
          }}
        >
        </div>
        <div className='text-center text-white' 
          style={{ position:"absolute", top:"50%", left:"35%", fontSize:"32px", fontWeight:"bolder" }}
        >
          <div>
            The best of the best of Real Estate
          </div>
          <InputGroup className='mt-4'>
            <Input type="text" />
            <Button className='bg-danger border border-danger'>Submit</Button>
          </InputGroup>
        </div>
      </div>
      <Row className="justify-content-md-center mt-4 mx-5">
        <Col className='text-center my-3'>
          <div className='bg-info text-center emojis' style={{ width:"62px", height:"50px", borderRadius:"10%", 
            border:"1px solid white", color:"white" }}
          >
            <BsFillEmojiSunglassesFill style={{ fontSize:"35px", marginTop:"5px" }} />
          </div>
          <div className='fw-bold h5'>The price will make smile</div>
          <div>lorem ipsum facto lorem ipsum</div>
        </Col>
        <Col className='text-center my-3'>
          <div className='bg-warning text-center emojis' style={{ width:"62px", height:"50px", borderRadius:"10%", 
            border:"1px solid white", color:"white" }}
          >
            <BsCreditCardFill style={{ fontSize:"35px", marginTop:"5px" }} />
          </div>
          <div className='fw-bold h5'>You save money</div>
          <div>lorem ipsum facto lorem ipsum</div>
        </Col>
        <Col className='text-center my-3'>
          <div className='bg-primary text-center emojis' style={{ width:"62px", height:"50px", borderRadius:"10%", 
            border:"1px solid white", color:"white" }}
          >
            <BsPersonFill style={{ fontSize:"35px", marginTop:"5px" }} />
          </div>
          <div className='fw-bold h5'>Puts you in charge</div>
          <div>lorem ipsum facto lorem ipsum</div>
        </Col>
        <Col className='text-center my-3'>
          <div className='bg-danger text-center emojis' style={{ width:"62px", height:"50px", borderRadius:"10%", 
            border:"1px solid white", color:"white" }}
          >
            <BsFillEyeFill style={{ fontSize:"35px", marginTop:"5px" }} />
          </div>
          <div className='fw-bold h5'>You get what you see</div>
          <div>lorem ipsum facto lorem ipsum</div>
        </Col>
      </Row>
      <div className='d-flex justify-content-between mx-5 mt-4'>
        <div className='fw-bold h5'>Latest Posts</div>
        <Button>See all</Button> 
      </div>
      <div className='mt-2' style={{background:"#e4e7ed"}}>
        <Row className='mx-4 p-4'>
          <Col>
            <div className="card" style={{width: '18rem'}}>
              <img src={sample} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Two Bed Flat</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" style={{width: '18rem'}}>
              <img src={sample} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Self Con</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" style={{width: '18rem'}}>
              <img src={sample} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Two bed</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      
      <div className='text-center mt-3'>
        <div className='fw-bold h5'>
          Popular Categories
        </div>
        <Row>
          <Col>
            <BsFillEmojiSunglassesFill style={{ fontSize:"35px" }} />
            <div className='mt-2'>Single Room</div>
          </Col>
          <Col>
            <BsFillEmojiSunglassesFill style={{ fontSize:"35px" }} />
            <div className='mt-2'>Room and Parlour</div>
          </Col>
          <Col>
            <BsFillEmojiSunglassesFill style={{ fontSize:"35px" }} />
            <div className='mt-2'>2 Bed Flat</div>
          </Col>
          <Col>
            <BsFillEmojiSunglassesFill style={{ fontSize:"35px" }} />
            <div className='mt-2'>3 Bed Flat</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <BsFillEmojiSunglassesFill style={{ fontSize:"35px" }} />
            <div className='mt-2'>Duplex</div>
          </Col>
          <Col>
            <BsFillEmojiSunglassesFill style={{ fontSize:"35px" }} />
            <div className='mt-2'>Shop To Let</div>
          </Col>
        </Row>
      </div>
      
      <div style={{background:"#e4e7ed"}} className='mt-3'>
        <div className='d-flex justify-content-between p-4'>
          <div className=''>
            RilyEstate copyright 2021
          </div>
          <div>
            GitHub
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;
