import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './actions/action';
import LandingNavBar from "../../components/Navbars/LandingNavbar";
import { Container, Row, Col, FormGroup, Input, Card } from 'reactstrap';
import sample from "../../components/Images/sample.jpg";
import Publicfooter from '../../components/Footers/publicfooter';
import { BsPeopleFill, BsArrowRight, BsFillCartCheckFill, BsCheckCircleFill, BsChevronRight} from 'react-icons/bs';


const Index = () => {
  const { publicDataLoading, publicData } = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
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
        <div className='mt-2'>
          <Row>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img className='home-img' src={sample} style={{ width:"100%", height:"100%" }}  alt="image" />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase latest-header'>two bedroom flat</div>
                  <p class="tolatest mt-3">
                    <a href="#"><span className="price-latest">rent | # 12.000</span></a>
                  </p>
                  <p className='clicktoview'>
                    <a href="#">Click to view <BsChevronRight /></a>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img className='home-img' src={sample} style={{ width:"100%", height:"100%" }}  alt="image" />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase latest-header'>two bedroom flat</div>
                  <p class="tolatest mt-3">
                    <a href="#"><span class="price-latest">rent | # 12.000</span></a>
                  </p>
                  <p className='clicktoview'>
                    <a href="#">Click to view <BsChevronRight /></a>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div class="item explode" style={{ position:"relative" }}>
                <img className='home-img' src={sample} style={{ width:"100%", height:"100%" }}  alt="image" />
                <div class="overlay text-white" style={{ position:"absolute", top:"65%", left:"10%" }}>
                  <div className='text-uppercase latest-header'>two bedroom flat</div>
                  <p class="tolatest mt-3">
                    <a href="#"><span class="price-latest">rent | # 12.000</span></a>
                  </p>
                  <p className='clicktoview'>
                    <a href="#">Click to view <BsChevronRight /></a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={sample} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={sample} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={sample} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
      <Publicfooter />
    </>
  )
}

export default Index
