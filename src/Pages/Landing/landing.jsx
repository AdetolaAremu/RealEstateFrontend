import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap';
import LandingNavbar from '../../components/Navbars/LandingNavbar';
import PublicFooter from "../../components/Footers/publicfooter"
import './landing.css';
import sample from "../../components/Images/sample.jpg";
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
                  <a href="property-grid.html">All Property
                    <BsArrowRight className='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className='mt-2'>
          <Row className='mx-4 p-4'>
            <Col>
              <div class="item explode">
                <img src={sample}  alt="image" />
                <div class="overlay">
                  <span>#5000</span>
                  <span className=''>This is self contain...</span>
                  {/* <span></span> */}
                </div>
              </div>
            </Col>
            <Col>
              <div class="item explode">
                <img src={sample}  alt="image" />
                <div class="overlay">
                  <span>#5000</span>
                  <span className=''>This is self contain...</span>
                  {/* <span></span> */}
                </div>
              </div>
            </Col>
            {/* <Col>
              <div class="item explode">
                <img src={sample}  alt="image" />
                <div class="overlay">
                  <span>#5000</span>
                  <span className=''>This is self contain...</span>
                </div>
              </div>
            </Col> */}
          </Row>
        </div>
      </Container>

      <Container>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Testimonials</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item-a swiper-slide">
          <div className="testimonials-box">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="testimonial-img">
                  <img src={sample} className="img-fluid" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="testimonial-ico">
                  <i className="bi bi-chat-quote-fill" />
                </div>
                <div className="testimonials-content">
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                    debitis hic ber quibusdam
                    voluptatibus officia expedita corpori.
                  </p>
                </div>
                <div className="testimonial-author-box">
                  <img src="assets/img/mini-testimonial-1.jpg" alt className="testimonial-avatar" />
                  <h5 className="testimonial-author">Albert &amp; Erika</h5>
                </div>
              </div>
            </div>
          </div>
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
      
      <div className='text-center my-5'>
        <div className='fw-bold h5'>
          See the <span className='fw-bold'>stats</span>
        </div>
        {/* <Row>
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
        </Row> */}
      </div>
      <PublicFooter />
    </>
  )
}

export default Landing;
