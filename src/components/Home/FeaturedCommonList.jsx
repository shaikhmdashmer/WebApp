import React from "react";
import { Row, Container, Col } from "react-bootstrap";

export const FeaturedCommonList = ({ imgPath }) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <img src={imgPath} alt="HomeImage" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
