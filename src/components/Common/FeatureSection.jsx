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
import { FeatureBox } from "./FeatureBox";
import { SectionTitle } from "./SectionTitle";

export const FeatureSection = (props) => {
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
          {/* <div className="title">Activities</div> */}

          <Row>
            <FeatureBox
              whyChooseIcon="service-6.svg"
              whychoosetitle="Activities"
              whychooseparagraph="Looking forward to NSAKCET is not limited to the classroom. It happens throughtout campus each and every day through our student activities."
              redirectUrl="homecommon62?Category1=62&Category2=63&Category3=271"
              featureImgHTML={[
                <div
                  className="video-promo ptb-100 background-img2"
                  style={{
                    backgroundImage: `url(${require("../../img/admission.png")})`,
                  }}
                ></div>,
              ]}
            ></FeatureBox>

            <FeatureBox
              whyChooseIcon="service-3.svg"
              whychoosetitle="Examination Cell"
              whychooseparagraph="NSAKCET offer a range of different scholarship programmes for student to help cover tuition fees or living cost.s"
              redirectUrl="homecommon131?Category1=131&Category2=132&Category3=133"
              featureImgHTML={[
                <div
                  className="video-promo ptb-100 background-img2"
                  style={{
                    backgroundImage: `url(${require("../../img/examination3.jpg")})`,
                  }}
                ></div>,
              ]}
            />

            <FeatureBox
              whyChooseIcon="service-7.svg"
              whychoosetitle="Scholarship"
              redirectUrl="homecommon62?Category1=62&Category2=70&Category3=260"
              whychooseparagraph=" NSAKCET offer a range of different scholarship programmes for student to help cover tuition fees or living cost."
              featureImgHTML={[
                <div
                  className="video-promo ptb-100 background-img2"
                  style={{
                    backgroundImage: `url(${require("../../img/scholarship.png")})`,
                  }}
                ></div>,
              ]}
            />
          </Row>
        </div>
      </div>

      <div className="section-bottom-padding"></div>
    </React.Fragment>
  );
};
