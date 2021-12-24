import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap';
import LandingNavbar from '../../components/Navbars/LandingNavbar';
import PublicFooter from "../../components/Footers/publicfooter"
import './landing.css';
import sample from "../../components/Images/sample.jpg";
import sample2 from "../../components/Images/post-3.jpg"
import { Row, Col, Card, Container } from 'reactstrap';
import { BsFillEmojiSunglassesFill, BsCreditCardFill, BsPersonFill, BsFillEyeFill, BsPeopleFill,BsArrowRight
} from 'react-icons/bs';

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
        <div className='text-white' 
          style={{ position:"absolute", top:"40%", left:"10%" }}
        >
          <div className='mb-5'>Ikorodu</div>
          <div className='text-uppercase mb-5' style={{ fontSize:"50px", fontWeight:"bolder" }}>
            two bed room flat
          </div>
          <p class="intro-subtitle intro-price">
            <a href="#"><span class="price-a">rent | # 12.000</span></a>
          </p>
        </div>
      </div>

      <section className="section-services section-t8 pt-5">
        <Container>
          <Row>
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Our Services</h2>
                </div>
              </div>
            </div>
          </Row>
          <Row className='mt-3'>
            <div className="col-md-4">
              <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span>
                      <BsPeopleFill />
                    </span>
                  </div>
                  <div className="card-title-c align-self-center">
                    <h2 className="title-c">Lifestyle</h2>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="content-c">
                    Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                    convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span>
                      <BsPeopleFill />
                    </span>
                  </div>
                  <div className="card-title-c align-self-center">
                    <h2 className="title-c">Lifestyle</h2>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="content-c">
                    Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                    convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span>
                      <BsPeopleFill />
                    </span>
                  </div>
                  <div className="card-title-c align-self-center">
                    <h2 className="title-c">Lifestyle</h2>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="content-c">
                    Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                    convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-12">
              <div class="title-wrap d-flex justify-content-between">
                <div class="title-box">
                  <h2 class="title-a">Latest Properties</h2>
                </div>
                <div class="title-link">
                  <a href="/">All Property</a>
                  <span className='ml-4'><BsArrowRight className='arrowAll' /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className='mt-2'>
          <Row>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img src={sample} style={{ width:"100%", height:"100%" }}  alt="image" />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase latest-header'>two bedroom flat</div>
                  <p class="tolatest mt-3">
                    <a href="#"><span class="price-latest">rent | # 12.000</span></a>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img src={sample} style={{ width:"100%", height:"100%" }}  alt="image" />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase latest-header'>two bedroom flat</div>
                  <p class="tolatest mt-3">
                    <a href="#"><span class="price-latest">rent | # 12.000</span></a>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img src={sample} style={{ width:"100%", height:"100%" }}  alt="image" />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase latest-header'>two bedroom flat</div>
                  <p class="tolatest mt-3">
                    <a href="#"><span class="price-latest">rent | # 12.000</span></a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-12">
              <div class="title-wrap d-flex justify-content-between">
                <div class="title-box">
                  <h2 class="title-a">Latest News</h2>
                </div>
                <div class="title-link">
                  <a href="/">All News</a>
                  <span className='ml-4'><BsArrowRight className='arrowAll' /></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <Row>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img src={sample2} style={{ width:"100%", height:"100%", filter:"brightness(95%)" }} alt="image" 
              />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase genre-header'>travel</div>
                  <div className='text-uppercase latest-header mt-2'>two bedroom flat</div>
                  <div className='text-white mt-2'>18, December, 2022</div>
                </div>
              </div>
            </Col>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img src={sample2} style={{ width:"100%", height:"100%", filter:"brightness(95%)" }} 
                  alt="image" 
                />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase genre-header'>tourism</div>
                  <div className='text-uppercase latest-header mt-2'>two bedroom flat</div>
                  <div className='text-white mt-2'>18, December, 2022</div>
                </div>
              </div>
            </Col>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img src={sample2} style={{ width:"100%", height:"100%", filter:"brightness(95%)" }} 
                  alt="image" 
                />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase genre-header'>park</div>
                  <div className='text-uppercase latest-header mt-2'>two bedroom flat</div>
                  <div className='text-white mt-2'>18, December, 2022</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* <Row className="justify-content-md-center mt-4 mx-5">
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
      
       */} 
     
      <PublicFooter />
    </>
  )
}

export default Landing;
