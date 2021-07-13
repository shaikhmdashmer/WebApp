import React from "react";
import { Card, Button, CardColumns, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";
import { WhyChooseBox } from "../Common/WhyChooseBox";
import { SectionTitle } from "../Common/SectionTitle";

export const WhyChooseSection= (props) => {
  return (
<React.Fragment>
<div className="section-top-padding"></div>
        {props.isTitle && <SectionTitle sectionheading="Our Services" />}
        <Container>
          
          <Row>
            <WhyChooseBox
              whyChooseIcon="service-6.svg"
              whychoosetitle="Software Development"
              whychooseparagraph="We have strong experience in Web Application development and have skillful professional with creative minds"
            />
            <WhyChooseBox
              whyChooseIcon="service-5.svg"
              whychoosetitle="Mobile App Development"
              whychooseparagraph="We have sound experience in mobile App Development, our professional having exposure on both Android and IOS"
            />
            <WhyChooseBox
              whyChooseIcon="service-4.svg"
              whychoosetitle="UI / UX Designing"
              whychooseparagraph="Our amazing designers with creative skills on Human-First approach to product and services of app designing"
              
            />
            <WhyChooseBox
              whyChooseIcon="service-3.svg"
              whychoosetitle="Digital Marketing"
              whychooseparagraph="We are expert in promotion of products and Services, we have impactful exposure in digital marketing experience"
              
            />
            <WhyChooseBox
              whyChooseIcon="service-2.svg"
              whychoosetitle="Cloud Services"
              whychooseparagraph="Our experts on Cloud services and DevOps Solutions implementations with Cloud Migration experiences"
            />
            <WhyChooseBox
              whyChooseIcon="service-1.svg"
              whychoosetitle="Maintenance"
              whychooseparagraph="Our skillful people available to provide support 24X7 to steady state projects and products with high availability"
            />
        
          </Row>
        
        </Container>

        <div className="section-bottom-padding"></div>
      



            




    </React.Fragment>
  );
};
