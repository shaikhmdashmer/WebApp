import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const Footer = (props) => {
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <React.Fragment>
      <footer className="mega-footer">
        <Container className="footer-container">
          <Row>
            <Col md="3">
              <div className="footer-column">
                <div className="footer-col-wrapper">
                  <h3 className="footer-col-title">Quick Links</h3>
                  <div className="footer-col-container">
                    <li class="menu-item">
                      <Link
                        onClick={handleScrollTop}
                        to="homecommon40?Category1=40&Category2=241&Category3=261"
                      >
                        Online Fee Payment
                      </Link>
                    </li>
                    <li class="menu-item">
                      <Link
                        onClick={handleScrollTop}
                        to="homecommon40?Category1=40&Category2=241&Category3=270"
                      >
                        Alumni
                      </Link>
                    </li>
                    <li class="menu-item">
                      <Link
                        onClick={handleScrollTop}
                        to="homecommon40?Category1=40&Category2=241&Category3=242"
                      >
                        OU & JNTUH Approvals
                      </Link>
                    </li>
                    <li class="menu-item">
                      <Link
                        onClick={handleScrollTop}
                        to="homecommon40?Category1=40&Category2=241&Category3=244"
                      >
                        SBTET Approvals
                      </Link>
                    </li>
                    <li class="menu-item">
                      <Link
                        onClick={handleScrollTop}
                        to="homecommon88?Category1=88&Category2=219&Category3=97"
                      >
                        Laboratories
                      </Link>
                    </li>
                    <li class="menu-item">
                      <Link
                        onClick={handleScrollTop}
                        to="homecommon58?Category1=58&Category2=59&Category3=60"
                      >
                        Placements
                      </Link>
                    </li>
                    <li class="menu-item">
                      <a href="https://www.ieeensakcet.com/" target="_blank">
                        IEEE nsakcet
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </Col>

            {/* 
        <Col  md="3">
          <div className="footer-column">

          <div className="footer-col-wrapper">


            <h3 className="footer-col-title">
              Programmes 


            </h3>

            <div className="footer-col-container">


            <li class="menu-item"><a href="#">Admission</a></li>
            <li class="menu-item"><a href="#">Placements</a></li>
            <li class="menu-item"><a href="#">Events</a></li>
         
            </div>



          </div>


          </div>
        
        
        </Col > */}

            <Col md="3">
              <div className="footer-column">
                <div className="footer-col-wrapper">
                  <h3 className="footer-col-title">Contact Us</h3>

                  <div className="footer-col-container">
                    <li class="menu-items  menu-items-f2">
                      <a href="#">
                        Contact:#16-4-1, Subedar Ameer Ali Khan Road, New
                        Malakpet Hyderabad – 500024
                      </a>
                    </li>
                    <li class="menu-items menu-items-f ">
                      <a href="#">040-24561118</a>
                    </li>
                    <li class="menu-items menu-items-f ">
                      <a href="#">+91 9849650796</a>
                    </li>
                    <li class="menu-items menu-items-f ">
                      <a href="#">+91 9885360757</a>
                    </li>
                    <li class="menu-items menu-items-f ">
                      <a href="#">+91 9848058830</a>
                    </li>
                    <li class="menu-items menu-items-f">
                      <a href="mailto:info@nsakcet.ac.in">info@nsakcet.ac.in</a>
                    </li>
                    <li class="menu-items menu-items-f">
                      <a href="mailto:nsakcet@gmail.com">nsakcet@gmail.com</a>
                    </li>
                  </div>
                </div>
              </div>
            </Col>

            <Col md="6">
              <div className="footer-column">
                <div className="footer-col-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.841310373735!2d78.49115631487615!3d17.371367388088235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98374153c2a5%3A0xf728da57c1cef040!2sNawab%20Shah%20Alam%20Khan%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1622961438669!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="footer-logo">
                <a href="https://www.ieeensakcet.com" target="_blank">
                  <img
                    className="footer-brand"
                    src="images/nasakcetieeee.jpg"
                    alt="ieeensakcet"
                  />
                </a>
                <a href="https://www.osmania.ac.in" target="_blank">
                  <img
                    className="footer-brand"
                    src="images/osmania-university.png"
                    alt=""
                  />
                </a>
                <a href="https://www.task.telangana.gov.in" target="_blank">
                  <img className="footer-brand" src="images/task.png" alt="" />
                </a>
                <a href="https://www.aicte-india.org" target="_blank">
                  <img
                    className="footer-brand"
                    src="images/aicte.png"
                    alt="AICTE"
                  />
                </a>
                <a href="https://www.netacad.com" target="_blank">
                  <img className="footer-brand" src="images/cisco.png" alt="" />
                </a>
                <a href="#" target="_blank">
                <img className="brand-name" src="images/iso.png" alt="" />
              </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="footer-setion">
        <div className="footer-bottom blue-bg pt-4 pb-4">
          <div className="container footer-container">
            <div className="row text-center text-md-left align-items-center">
              <div className="col-md-6 col-lg-5">
                <p className="text-md-left copyright-text pb-0 mb-0">
                  Copyrights © 2020. All rights reserved by
                  <a href="#"> NSAKCET</a>
                </p>
              </div>
              <div className="col-md-6 col-lg-7">
                <ul className="social-list list-inline list-unstyled text-md-right">
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="Facebook">
                      <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="Twitter">
                      <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="Instagram">
                      <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
