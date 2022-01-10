import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePublicPost, getSinglePublicCommentPost, postComment, likeCount, likePost, checkLiked } from './actions/action';
import isEmpty from '../../utils/isEmpty';
import pix from "../../components/Images/author-2.jpg";
import sample from "../../components/Images/sample.jpg";
import Publicfooter from '../../components/Footers/publicfooter';
import LandingNavbar from "../../components/Navbars/LandingNavbar";
import { ToastContainer } from 'react-toastify';
import { Container, Row, Col, Form, Button, Spinner } from 'reactstrap';
import { BsCash } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotoneMail, AiTwotonePhone, AiFillLike } from "react-icons/ai";
import './publicpost.css';

const initialState = {
  text:""
}

const ViewProperty = (props) => {
  const [Input, setInput] = useState(initialState)

  const { publicPosts: { publicDataLoading, singlePublicData, publicCommentData, publicCommentLoading, 
    commentCrud, likeData, publicDataError } } = useSelector(state => state)

  const dispatch = useDispatch()

  const handleLike = (e) => {
    e.preventDefault()
    dispatch(likePost(props.match.params.id))
  }

  const handleChange = (e) => {
    setInput({...Input, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      post_id:props.match.params.id,
      text:Input.text
    }
    dispatch(postComment(data))
  }

  useEffect(() => {
    dispatch(getSinglePublicPost(props.match.params.id));
    dispatch(getSinglePublicCommentPost(props.match.params.id));
    dispatch(likeCount((props.match.params.id)));
    dispatch(checkLiked(props.match.params.id))
  }, [])

  return (
    <div style={{ overflow:"hidden" }}>
      <LandingNavbar />
      <ToastContainer />
      <Container>
        <div style={{ marginTop:"6rem" }}>
          <div className='' style={{ borderLeft:"3px solid #2eca6a" }}>
            <div className='p-3'>
              <h3 className='text-capitalize'>{ singlePublicData?.title }</h3>
              <div className='text-muted'>{ singlePublicData?.type?.name }</div>
            </div>
          </div>
        </div>
        
        <div className='my-3 text-center'>
          <img className='view-property-img' src={sample} />
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
          <div>
            <div className='d-flex justify-content-between iconstop'>
              <div className=''>
                <BsCash className='viewicons firsticon' />
                {/* <span className=''>
                  <h4 className='text-muted' style={{ marginLeft:"15px" }}>Price</h4>
                </span> */}
              </div>

              <div className=''>
                <Button style={{ borderRadius:'.2rem', boxShadow:'none' }} onClick={handleLike} color="none">
                  <AiFillLike className='viewicons buttonLike' />
                </Button>
                
              </div>
              
              <div>
                <HiLocationMarker className='viewicons' />
                {/* <h5 className='text-muted'>City Name</h5> */}
              </div>
            </div>
            <div className='d-flex justify-content-between mx-4 undericons'>
              <div><h5 className='text-muted text-center'>{ singlePublicData?.price }</h5></div>
              <div>
                <h5 className='text-muted text-center'>
                  { 
                    likeData != 1 ? (`${likeData} Likes`) : (`${likeData} Like`)
                  }
                </h5>
              </div>
              <div>
                <h5 className='text-muted text-center' style={{ marginRight:"2.8rem" }}>
                { singlePublicData?.city }
                </h5>
              </div>
            </div>

            <Row className='d-flex justify-content-between'>
              <Col className='mt-5 mb-3'>
                <h2>Description</h2>
                <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
                <div lg="10" className='mt-2 descript'>{ singlePublicData?.text }</div>
              </Col>
              <Col className='mt-5 mb-3 agentcol' lg="4">
                <h2>Agent Details</h2>
                <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
                <div className='d-flex justify-content-between mt-2' >
                  <img className='mr-4' src={pix} alt="..." />
                  <div className='contactdetials'>
                    <h3>{ singlePublicData?.user?.first_name } { singlePublicData?.user?.last_name }</h3>
                    <div className="mb-1"><AiTwotoneMail /> { singlePublicData?.user?.email }</div>
                    <div className="mb-1"><HiLocationMarker /> { singlePublicData?.user?.username }</div>
                    <div><AiTwotonePhone /> { singlePublicData?.user?.phone_number }</div>
                  </div>
                </div>
              </Col>
            </Row>

            <div className='mt-5 mb-3'>
              <h2>Comments</h2>
              <div style={{ borderBottom:"4px solid #2eca6a", width:"4rem" }}></div>
            </div>
            <div>
              {
                publicCommentLoading ? (<Spinner className='m-auto mb-3 d-flex justify-content-center' 
                animation="border" style={{ width:"4rem", height:"4rem"}} /> ) : publicCommentData?.length ? (
                  <Row>
                    {
                      publicCommentData?.map((comments) => (
                        <Col lg="6" className='mb-3 mr-2' key={comments.id}>
                          <div className='rounded mb-2 p-2 border border-secondary' 
                            style={{ minHeight:"3.7rem", background:"#f7fcf9" }}
                          >
                            <div className='d-flex'>
                              <div className="fw-bold">
                                { comments?.user?.username }
                              </div>
                              <div className='text-muted' style={{ marginLeft:"7px" }}>
                                {new Date(comments?.created_at).toLocaleDateString('en-us', {
                                  month:"2-digit", day:"2-digit", year:"numeric"
                                }) }
                              </div>
                            </div>
                            <div>{ comments?.text }</div>
                          </div>
                        </Col>
                      ))
                    }
                  </Row>
                ) : (
                  <div className='rounded mb-3 p-2 border border-secondary' 
                    style={{ minHeight:"3.7rem", background:"#f7fcf9" }}
                  >
                    <div className='text-center'>No content to display</div>
                  </div>
                )
              }
            </div>
          </div>)
        }

        <Form onSubmit={handleSubmit} className='mb-5'>
          <textarea name="text" onChange={handleChange} value={Input.text} rows="3" 
            style={{ width:"100%" }} placeholder='Enter your comment here, minimum of 5 words'
          ></textarea>
          <div className="text-danger text-sm">
            {
              isEmpty(publicDataError?.data?.errors?.text) ? null : publicDataError?.data?.errors?.text
            }
          </div>
          <div>
            <Button className='btn-lg' color="primary" type="submit"
              disabled={commentCrud || Input.text.length < 5}
            >
              {
                commentCrud ? "Posting":"Post"
              }
            </Button>
          </div>
        </Form>
      </Container>
      <Publicfooter style={{ width:"100%" }} />
    </div>
  )
}

export default ViewProperty;
