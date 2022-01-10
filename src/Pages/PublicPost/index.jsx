import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from './actions/action';
import LandingNavBar from "../../components/Navbars/LandingNavbar";
import ROUTE from '../../Helpers/routes.json';
import { Container, Row, Col, FormGroup, Input, Spinner, Card } from 'reactstrap';
import sample from "../../components/Images/sample.jpg";
import Publicfooter from '../../components/Footers/publicfooter';
import { BsPeopleFill, BsArrowRight, BsFillCartCheckFill, BsCheckCircleFill, BsChevronRight} from 'react-icons/bs';
import { HiLocationMarker } from "react-icons/hi";


const Index = () => {
  const { publicPosts: { publicDataLoading , publicData } } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])
  
  return (
    <>
      <LandingNavBar />
      <Container>
        <div style={{ marginTop:"6rem" }}>
          <div className='' style={{ borderLeft:"3px solid #2eca6a" }}>
            <div className='p-3'>
              <h3 className=''>All Properties Page</h3>
              <div className='text-muted'>All Properties</div>
            </div>
          </div>
        </div>
        <div className='bg-secondary my-4 rounded'>
          <Row className='mx-2 pt-3'>
            <Col md="4">
              <FormGroup>
                <Input
                  className={`form-control-alternative`}
                  name="address"
                  // value={Inputs.address}
                  // onChange={handleChange}
                  placeholder="search for name, city etc here"
                  type="text"
                />
                <div className="text-danger text-sm">
                  {/* {
                    isEmpty(errors?.data?.errors?.address) ? null : errors?.data?.errors?.address
                  } */}
                </div>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Input
                  className={`form-control-alternative`}
                  placeholder="Lagos"
                  type="select"
                >
                  <option defaultValue>Choose city</option>
                  {/* {states.map((item) => (
                    <option key={item.id} value={item.id}>{ item.name }</option>
                  ))} */}
                </Input>
                <div className="text-danger text-sm">
                  {/* {
                    isEmpty(errors?.data?.errors?.state_id) ? null : errors?.data?.errors?.state_id
                  } */}
                </div>
              </FormGroup>
            </Col>
          </Row>
        </div>
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
          ) : (
          <div className='mt-2'>
            <Row>
              {
                publicData?.map((item) => (
                  <Col key={item.id}>
                    <div class="item explode" style={{ position:"relative" }}>
                      <img className='home-img' src={sample} style={{ width:"100%", height:"100%" }}  alt="image" />
                      <div class="overlay text-white" style={{ position:"absolute", top:"49%", left:"10%" }}>
                        <div className='mb-3'>
                          <HiLocationMarker style={{ color:"#2eca6a" }} /> { item?.city }
                        </div>
                        <div className='text-uppercase latest-header'>
                          { 
                            item?.title.length > 25 ? `${item?.title.slice(0,22)}...` : item?.title 
                          }
                        </div>
                        <p class="tolatest mt-3">
                          <a href="#"><span className="price-latest">{ item?.type?.name } | # { item?.price }</span></a>
                        </p>
                        <p className='clicktoview'>
                          <Link to={`${ROUTE.VIEW_PROPERTY}/${item.id}`}>Click to view <BsChevronRight /></Link>
                        </p>
                      </div>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </div>)
        }
      </Container>
      
      <Publicfooter />
    </>
  )
}

export default Index
