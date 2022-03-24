import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import  { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LandingNavbar from '../../components/Navbars/LandingNavbar';
import PublicFooter from "../../components/Footers/publicfooter";
import './landing.css';
import { getAllPosts } from '../PublicPost/actions/action';
import ROUTE from '../../Helpers/routes.json';
import firstBlog from '../../components/Images/blog1.webp';
import secondBlog from '../../components/Images/blog2.webp';
import thirdBlog from '../../components/Images/blog3.webp';
import { Row, Col, Container} from 'reactstrap';
import { BsPeopleFill, BsArrowRight, BsFillCartCheckFill, BsCheckCircleFill, BsChevronRight} from 'react-icons/bs';
import { HiLocationMarker } from "react-icons/hi";
import { Carousel, CarouselItem, CarouselIndicators, Spinner } from 'reactstrap';

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false);

  const { publicData, publicDataLoading } = useSelector(state => state.publicPosts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch])  
  
    // Sample items for Carousel
  const items = [
        {
          // src:landingbg,
          city:"ikorodu",
          title:"two bed room flat",
          price:"12,000"
        },
        {
          // src: sample2,
          city:"Lagos Island",
          title:"Self Contain",
          price:"150,000"
        },
        {
          // src: sample,
          city:"Idumota",
          title:"Two rooms",
          price:"100,000"
        }
    ];
  
    // Items array length
    const slicedTopCarousel = publicData.slice(3,6)
    const slicedTopCarouselLength = slicedTopCarousel.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
        slicedTopCarouselLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === slicedTopCarouselLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = publicData.slice(3,6).map((item) => {
        return (
          <CarouselItem
              key={item.id}
              onExited={() => setAnimating(false)}
              onExiting={() => setAnimating(true)}
          >
            <img src={item?.images[0].url} alt="featured" style={{ height:"45rem", width:"100%", minHeight: "600px", }} />
            <div className='text-white' 
              style={{ position:"absolute", top:"40%", left:"10%" }}
            >
              <div className='mb-5 h4 text-capitalize'>
                <HiLocationMarker style={{ color:"#2eca6a" }} /> { item?.city }
              </div>
              <div className='text-uppercase mb-5' style={{ fontSize:"50px", fontWeight:"bolder" }}>
                { item.title }
              </div>
              <p className="intro-subtitle intro-price">
                <span className="price-a">{ item?.type?.name } | # { item?.price }</span>
              </p>
            </div>
          </CarouselItem>
        );
    });

  return (
    <div style={{ overflow:"hidden" }}>
      <LandingNavbar />
      {
        publicDataLoading ? (
          <div>
              <div >
                <Spinner style={{
                  position:"absolute", inset:"0", display:"flex", margin:"auto", zIndex:"30",
                  width:"7rem", height:"7rem", color:"white"
                  }} 
                />
              </div>
              <div style={{ zIndex:"0", height:"100%", width:"100%", position:"fixed", 
                top:"0", left:"0", background:"gray", opacity:"50%"}}
              ></div>
            </div>
          ):(
          <div style={{ position:"relative" }}>
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
            </Carousel>
          </div>
          )
        }

      <section className="section-services section-t8 pt-5">
        <Container>
          <Row>
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">What you get</h2>
                </div>
              </div>
            </div>
          </Row>
          <Row className='mt-3'>
            <Col lg={4}>
              <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span>
                      <BsFillCartCheckFill />
                    </span>
                  </div>
                  <div className="card-title-c align-self-center">
                    <h2 className="title-c" style={{ marginLeft:"-2.2rem" }}>Affordability</h2>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="content-c">
                    Real esate might seem like a price over-kill but you can still get the most affordable deal here
                    ,be at rest and know that you will get the best here
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span>
                      <BsPeopleFill />
                    </span>
                  </div>
                  <div className="card-title-c align-self-center">
                    <h2 className="title-c" style={{ marginLeft:"-2.2rem" }}>Blissfullness</h2>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="content-c">
                    Your comfort should always be a priority for you and so it is for us too, your house
                    should be your home and that is our driving force.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card-box-c foo">
                <div className="card-header-c d-flex"
                >
                  <div className="card-box-ico">
                    <span>
                      <BsCheckCircleFill />
                    </span>
                  </div>
                  <div className="card-title-c align-self-center">
                    <h2 className="title-c" style={{ marginLeft:"-2.2rem" }}>Credibility</h2>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="content-c">
                    We go the extra link to make sure our agents are credible, you will always get the best
                    agents from all over the world, be at ease, we are credible.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Featured Properties</h2>
                </div>
                <Link to="/all-properties" className="title-link">
                  <span href="/">All Property</span>
                  <span className='ml-4'><BsArrowRight className='arrowAll' /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
       
        <div className='mt-2'>
          <Row>
            {
              publicData.slice(0,3).map((secondSliced) => (
                <Col key={secondSliced.id}>
                  <div className="item explode" style={{ position:"relative" }}>
                    <img className='home' src={secondSliced?.images[0].url} style={{ width:"100%", height:"100%" }}  alt="real-estate" />
                    <div className="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                      <div className='text-uppercase latest-header'>{ secondSliced?.title }</div>
                      <p className="tolatest mt-3">
                        <span className="price-latest">{ secondSliced?.type?.name } | # { secondSliced?.price }</span>
                      </p>
                      <p className='clicktoview'>
                        <Link to={`${ROUTE.VIEW_PROPERTY}/${secondSliced?.slug}`}>Click to view <BsChevronRight /></Link>
                      </p>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
      </Container>

      <Container>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Latest News</h2>
                </div>
                <div className="title-link">
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
              <div className="item explode" style={{ position:"relative" }}>
                <img src={firstBlog} alt="blogs" className='home-img' />
                <div className="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase genre-header'>Savings</div>
                  <div className='text-uppercase blog-header mt-2'>Make house penny wise deicision</div>
                  <div className='text-white mt-2'>18, December, 2022</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="item explode" style={{ position:"relative" }}>
                <img src={secondBlog} alt="blogs" className='home-img' />
                <div className="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase genre-header'>Estate</div>
                  <div className='text-uppercase blog-header mt-2'>types of real estate in nigeria</div>
                  <div className='text-white mt-2'>18, December, 2022</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="item explode" style={{ position:"relative" }}>
                <img src={thirdBlog} alt="blogs" className='home-img' />
                <div className="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase genre-header'>Houses</div>
                  <div className='text-uppercase blog-header mt-2'>Looks of semi-detached houses</div>
                  <div className='text-white mt-2'>18, December, 2022</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <PublicFooter />
    </div>
  )
}

export default Landing;
