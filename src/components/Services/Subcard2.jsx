import React from "react";
import imgLogo from "../../img/logo.svg";

import { Card } from "react-bootstrap";
export const Subcard2 = () => {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={imgLogo} />
        <Card.Title> Mobile App Develpoment </Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};
