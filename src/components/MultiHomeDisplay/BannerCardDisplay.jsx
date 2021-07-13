import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import { imagesRepoUrl } from "../../config.json";

export const BannerCardDisplay = (item) => {
  const sectionStyle = {
    backgroundImage: `url(${imagesRepoUrl}${item.bannerurl1})`,
  };
  return (
    <React.Fragment>
      <Card className="place-Card-Banner">
        <Card.Body>
          <Row>
            <Col>
              <div
                
              >

<Carousel className="carousel-item-1">
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={`${imagesRepoUrl}${item.bannerurl1}`}
      alt="First slide"
    />
  </Carousel.Item>
  

</Carousel>



              


              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
