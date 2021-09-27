import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const containerMargins = {
  marginTop:'2%',
  marginBottom: '2%'
}
export const FeaturedCommonList = ({ imgPath }) => {
  return (
    <React.Fragment>
      <Container style={containerMargins}>
        <Row>
          <Col>
            <img className="img-fluid" src={imgPath} alt="HomeImage" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
