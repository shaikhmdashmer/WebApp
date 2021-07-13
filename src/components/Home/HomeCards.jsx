import React from "react";
import { Card } from "react-bootstrap";
// import { MultiCurrentAffairsDisplay } from "../MultiCurrentAffairsDisplay/MultiCurrentAffairsDisplay";
import "./HomeCards.css";
export const HomeCards = () => {
  return (
    <div className="college-details">
      {/* ---------------First Card---------------- */}
      <Card className="content">
        <Card.Img variant="top" src="images/altviewresearch-logo.jpg" />
        <Card.Body>
          <Card.Title className="card-title-content">
            Conference Hall
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card>

      {/* -----------Second Card----------------- */}
      <Card className="content">
        <Card.Img variant="top" src="images/altviewresearch-logo.jpg" />
        <Card.Body>
          <Card.Title className="card-title-content">Playing Hall</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card>

      {/* ------------third Card--------------------- */}

      <Card className="content">
        <Card.Img variant="top" src="images/altviewresearch-logo.jpg" />
        <Card.Body>
          <Card.Title className="card-title-content">Meeting Room</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card>

      {/* ---------------Fourth Card--------------- */}
      <Card className="content">
        <Card.Img variant="top" src="images/altviewresearch-logo.jpg" />
        <Card.Body>
          <Card.Title className="card-title-content">Meeting Room</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card>
      {/* <MultiCurrentAffairsDisplay /> */}
    </div>
  );
};
