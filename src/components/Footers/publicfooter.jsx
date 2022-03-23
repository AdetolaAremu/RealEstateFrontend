import React from 'react';
import { Link } from 'react-router-dom';
import ROUTE from '../../Helpers/routes.json';
import '../css/style.css';
import { BsChevronRight } from 'react-icons/bs';

function Publicfooter() {
  return (
    <div>
      <div style={{background:"#e4e7ed", width:"100% !important"}} className='mt-5'>
        <div className='py-4 w-100'>
          <section className="section-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">Deal<span style={{color:"#2eca6a"}}>Estate</span></h3>
                    </div>
                    <div className="w-body-a">
                      <p className="w-text-a color-text-a">
                        You get the best estate deals here, you are guaranateed all the satisfaction you 
                        can ever imagine, trust us to give the best deals.
                      </p>
                    </div>
                    <div className="w-footer-a">
                      <ul className="list-unstyled">
                        <li className="color-a">
                          <span className="color-text-a">Phone .</span> aremutola@gmail.com
                        </li>
                        <li className="color-a">
                          <span className="color-text-a">Email .</span> +234 8050 6765 20
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 section-md-t3">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">The <span style={{color:"#2eca6a"}}>Company</span></h3>
                    </div>
                    <div className="w-body-a">
                      <div className="w-body-a">
                        <ul className="list-unstyled">
                          <li className="item-list-a">
                            <BsChevronRight /> <Link to={ROUTE.HOME}>Home</Link>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <Link to={ROUTE.ALL_PROPERTIES}>Properties</Link>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <Link to={ROUTE.LOGIN}>Login</Link>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <Link to={ROUTE.REGISTER}>Register</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 section-md-t3">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">International <span style={{color:"#2eca6a"}}>sites</span></h3>
                    </div>
                    <div className="w-body-a">
                      <ul className="list-unstyled">
                        <li className="item-list-a">
                          <BsChevronRight /> <Link to={ROUTE.HOME}>USA</Link>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <Link to={ROUTE.HOME}>Canada</Link>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <Link to={ROUTE.HOME}>Germany</Link>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <Link to={ROUTE.HOME}>UK</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center mt-1">
                  <nav className="nav-footer">
                    <ul className="list-inline footertext">
                      <li className="list-inline-item" style={{ fontWeight:"600" }}>
                        <Link to={ROUTE.HOME} >Home</Link>
                      </li>
                     
                      <li className="list-inline-item" style={{ fontWeight:"600" }}>
                        <Link to={ROUTE.ALL_PROPERTIES}>Properties</Link>
                      </li>
                     
                      <li className="list-inline-item" style={{ fontWeight:"600" }}>
                        <a href="https://github.com/AdetolaAremu" target="_blank">Github</a>
                      </li>
                    </ul>
                  </nav>
                  
                  <div className="copyright-footer">
                    <div className="copyright color-text-a">
                      © Copyright
                      <span className="color-a"> EstateAgency</span> All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
     </div>
    </div>
  )
}

export default Publicfooter
