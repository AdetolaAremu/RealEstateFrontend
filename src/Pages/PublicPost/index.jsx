import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import _debounce from 'lodash/debounce';
import { getAllPosts, getCitiesInTheDB, searchPost, filterByCity, getAllTypes, filterByType } from './actions/action';
import LandingNavBar from "../../components/Navbars/LandingNavbar";
import ROUTE from '../../Helpers/routes.json';
import { Container, Row, Col, FormGroup, Input, Spinner } from 'reactstrap';
import Publicfooter from '../../components/Footers/publicfooter';
import { BsChevronRight} from 'react-icons/bs';
import { HiLocationMarker } from "react-icons/hi";

const Index = () => {
  const { publicPosts: { publicDataLoading , publicData, cityData, typeData } } = useSelector(state => state)

  const dispatch = useDispatch()

  const handleSearch = _debounce(function(value) {
    dispatch(searchPost(value))
  }, 3000);

  const handleCityFilter = (value) => {
    dispatch(filterByCity(value));
  }

  const getAllposts = () => {
    dispatch(getAllPosts())
  }

  const handleTypeFilter = (value) => {
    dispatch(filterByType(value))
  }

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getCitiesInTheDB());
    dispatch(getAllTypes());
  }, [dispatch])
  
  return (
    <div className='noflow'>
      <LandingNavBar />
      <Container>
        <div style={{ marginTop:"6rem" }}>
          <div className='' style={{ borderLeft:"3px solid #2eca6a" }}>
            <div className='p-3'>
              <h3 className=''>All Properties</h3>
              {/* <div className='text-muted'>All Properties</div> */}
            </div>
          </div>
        </div>
        <div className='bg-secondary my-4 rounded' style={{ borderBottom:"2px solid #2eca6a" }}>
          <Row className='mx-2 pt-3'>
            <Col md="4">
              <FormGroup>
                <Input
                  className={`form-control-alternative`}
                  name="address"
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="search by title, description, keywords etc"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Input
                  className={`form-control-alternative text-capitalize`}
                  type="select"
                  onChange={e => handleCityFilter(e.target.value)}
                >
                  <option defaultValue value={''}>Filter by city</option>
                  <option value={"All"}>All</option>
                  {
                    cityData.map((item) => (
                      <option key={item.id} value={item.city}>{ item.city }</option>
                    ))
                  }
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Input
                  className={`form-control-alternative`}
                  type="select"
                  onChange={e => handleTypeFilter(e.target.value)}
                >
                  <option defaultValue value={""}>Filter by category</option>
                  <option value={"All"}>All</option>
                  {typeData.map((item) => (
                    <option key={item.id} value={item.name}>{ item.name }</option>
                  ))}
                </Input>
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
                  width:"7rem", height:"7rem", color:"green"
                  }} 
                />
              </div>
              <div style={{ zIndex:"0", height:"100%", width:"100%", position:"fixed", 
                top:"0", left:"0", background:"whitesmoke", opacity:"95%"}}
              ></div>
            </div>
          ) : (
          <div className='mt-2'>
            <Row>
              {
                publicData?.map((item) => (
                  <Col key={item.id}>
                    <div className="item explode" style={{ position:"relative" }}>
                      <img className='home-img' src={item?.images[0].url} style={{ width:"100%", height:"100%" }}  alt="home" />
                      <div className="overlay text-white" style={{ position:"absolute", top:"49%", left:"10%" }}>
                        <div className='mb-3 text-capitalize'>
                          <HiLocationMarker style={{ color:"#2eca6a" }} /> { item?.city }
                        </div>
                        <div className='text-uppercase latest-header'>
                          {
                            item?.title?.length > 25 ? `${item?.title?.slice(0,22)}...` : item?.title 
                          }
                        </div>
                        <p className="tolatest mt-3">
                          <span className="price-latest">{ item?.type?.name } | # { item?.price }</span>
                        </p>
                        <p className='clicktoview'>
                          <Link to={`${ROUTE.VIEW_PROPERTY}/${item?.id}`}>Click to view <BsChevronRight /></Link>
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
    </div>
  )
}

export default Index
