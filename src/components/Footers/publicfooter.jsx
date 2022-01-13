import React from 'react'
import '../css/style.css'
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
                        Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                        sed aute irure.
                      </p>
                    </div>
                    <div className="w-footer-a">
                      <ul className="list-unstyled">
                        <li className="color-a">
                          <span className="color-text-a">Phone .</span> contact@example.com
                        </li>
                        <li className="color-a">
                          <span className="color-text-a">Email .</span> +54 356 945234
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
                            <BsChevronRight /> <a href="#">Site Map</a>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <a href="#">Legal</a>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <a href="#">Agent Admin</a>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <a href="#">Careers</a>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <a href="#">Affiliate</a>
                          </li>
                          <li className="item-list-a">
                            <BsChevronRight /> <a href="#">Privacy Policy</a>
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
                          <BsChevronRight /> <a href="#">Venezuela</a>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <a href="#">China</a>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <a href="#">Hong Kong</a>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <a href="#">Argentina</a>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <a href="#">Singapore</a>
                        </li>
                        <li className="item-list-a">
                          <BsChevronRight /> <a href="#">Philippines</a>
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
                <div className="col-md-12 text-center mt-4">
                  <nav className="nav-footer">
                    <ul className="list-inline footertext">
                      <li className="list-inline-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">About</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Property</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Blog</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="socials-a">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright-footer">
                    <p className="copyright color-text-a">
                      © Copyright
                      <span className="color-a"> EstateAgency</span> All Rights Reserved.
                    </p>
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
