import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const WhyChooseBox = (props) => {
  const imgDisplay = `products/Zeeshan/whychooseus/${props.whyChooseIcon}`;
  return (
    <React.Fragment>
      <Col md="12" lg="4">
        <div className="card-margin service_box wow fadeInUp service-box-layout1">
          <Card className="why-choose-card">
            <Card.Img
              variant="top"
              src={imgDisplay}
              className="why-choose-icon"
            />

            <Card.Body>
              <div className="why-choose-content">
                <a  className="why-choose-title text-center">
                  {props.whychoosetitle}
                </a>

                <Card.Text className="why-choose-paragraph text-center">
                  {props.whychooseparagraph}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </React.Fragment>
  );
};
