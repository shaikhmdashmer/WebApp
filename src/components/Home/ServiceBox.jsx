import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import mobileApp from "../../img/mobile-app.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.style.css";

export const ServiceBox = () => {
  return (
    <React.Fragment>
      <Col md="4">
        <Card>
          <Card.Img variant="top" src={mobileApp} className="service-icon" />

          <Card.Body>
            <div className="text-center">
              <Card.Title>Software Development</Card.Title>
            </div>
            <div className="text-center">
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
      
    </React.Fragment>
  );
};
