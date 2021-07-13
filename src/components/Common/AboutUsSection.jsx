import React from "react";
import { Card, Button, CardColumns, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";
import { Services } from "../Common/Services";
import { SectionTitle } from "../Common/SectionTitle";
 
export const AboutUsSection = (props) => {
  
  return (
    <React.Fragment>

<div className="section-top-padding"></div>
        {/* <SectionTitle sectionheading="Services & Specialty Products" /> */}
        <Container>
          <Row>
            <Services
              whyChooseIcon="why-choose-icon-1.svg"
              whychoosetitle="F2F CLT GD"
            />
            <Services
              whyChooseIcon="why-choose-icon-2.svg"
              whychoosetitle="CATI"
            />
            <Services
              whyChooseIcon="why-choose-icon-3.svg"
              whychoosetitle="FINANCIAL RESEARCH"
            />
            <Services
              whyChooseIcon="why-choose-icon-1.svg"
              whychoosetitle="QUALITIVE RESEARCH"
            />
            <Services
              whyChooseIcon="why-choose-icon-3.svg"
              whychoosetitle="BUSINESS RESEARCH"
            />
            <Services
              whyChooseIcon="why-choose-icon-2.svg"
              whychoosetitle="COMPANY PROFILING"
            />
            <Services
              whyChooseIcon="why-choose-icon-3.svg"
              whychoosetitle="DATA PROCESSING"
            />
            <Services
              whyChooseIcon="why-choose-icon-1.svg"
              whychoosetitle="DATA ANALYSIS"
            />
            <Services
              whyChooseIcon="why-choose-icon-1.svg"
              whychoosetitle="DATA MODELLING"
            />
          </Row>
          <Row></Row>
        </Container>

        <div className="section-bottom-padding"></div>
      



            




    </React.Fragment>
  );
};
