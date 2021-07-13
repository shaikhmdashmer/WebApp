import React from "react";
import {
  Card,
  Button,
  CardColumns,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";
import { ActivityBox } from "./ActivityBox";
import { SectionTitle } from "./SectionTitle";

export const ActivitySection = (props) => {
  return (
    <React.Fragment>
      {/* <div className="section-top-padding"></div> */}
      {props.isTitle && <SectionTitle sectionheading="Our Services" />}
      <div className="">
        {/* <div className="courses-title">
          <h3> Courses Offered</h3>
          <div className="title-divider">
            
          </div>



        </div> */}
        <div className="home-news-container home-news-container-2">
          <div className="title">Activities</div>

          <Row>
            <ActivityBox
              whyChooseIcon="service-6.svg"
              whychoosetitle="Sports"
              whychooseparagraph=""
            />
            <ActivityBox
              whyChooseIcon="service-3.svg"
              whychoosetitle="Cultural"
              whychooseparagraph=""
            />

            <ActivityBox
              whyChooseIcon="service-7.svg"
              whychoosetitle="Technical"
              whychooseparagraph=""
            />
          </Row>
        </div>
      </div>
      <div className="section-bottom-padding"></div>
    </React.Fragment>
  );
};
