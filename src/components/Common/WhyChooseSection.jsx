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
        {props.isTitle && <SectionTitle sectionheading="Why Choose Us" />}
        <Container>
          <Row>
            <WhyChooseBox
              whyChooseIcon="why-choose-icon-1.svg"
              whychoosetitle="INSIGHT & INTELLIGENCE"
            />
            <WhyChooseBox
              whyChooseIcon="why-choose-icon-2.svg"
              whychoosetitle="GLOBAL PRESENCE"
            />
            <WhyChooseBox
              whyChooseIcon="why-choose-icon-3.svg"
              whychoosetitle="STRATEGIC PLANNING"
            />
          </Row>
          <Row></Row>
        </Container>

        <div className="section-bottom-padding"></div>
      



            




    </React.Fragment>
  );
};
