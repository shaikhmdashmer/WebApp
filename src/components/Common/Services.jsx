import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";





export const Services = (props) => {
  const imgDisplay = `products/Zeeshan/whychooseus/${props.whyChooseIcon}`;
  return (
    <React.Fragment>
      

      <Col md="12" lg="4">
        <div className=" card-margin-2">
      <Card className="why-choose-card why-choose-card-2">
      <Card.Img variant="top"  src={imgDisplay} className="why-choose-icon why-choose-icon-2" />
     
  <Card.Body>
    <div className="why-choose-content">
    <Card.Title className="why-choose-title text-center">{props.whychoosetitle}</Card.Title>
    
    
    
    <Card.Text className="why-choose-paragraph text-center">
    We have strong relationships with all
 producers, owing to which we are able to
 gauge capacity utilization, raw material
 movements and deliver quick shipments.
    </Card.Text>
    
    </div>
    
  </Card.Body>
</Card>
      </div>
      </Col>


            




    </React.Fragment>
  );
};
