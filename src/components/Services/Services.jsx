import React from "react";
import { SectionTitle } from "../Common/SectionTitle";
import { Container } from "react-bootstrap";
import { CardServices } from "../Services/CardServices";
import {AboutUsSection} from "../Common/AboutUsSection";

export const Services = () => {
  return (
    <React.Fragment>
      <div className="section-top-padding"></div>
      <Container>
        <AboutUsSection />
      </Container>
    </React.Fragment>
  );
};
