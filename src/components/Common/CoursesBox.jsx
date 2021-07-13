import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const CoursesBox = ({ itemData }) => {
  const imgDisplay = `products/Zeeshan/whychooseus/${itemData.iconPath}`;
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <React.Fragment>
      <Col md="12" lg="2" className="col-6" onClick={handleScrollTop}>
        {itemData.isExternalLink === 0 ? (
          <Link to={itemData.relativeUrl}>
            <div className="card-margin service_box wow fadeInUp service-box-layout1">
              <Card className="why-choose-card">
                <Card.Img
                  variant="top"
                  src={imgDisplay}
                  className="why-choose-icon"
                />
                <Card.Body>
                  <div className="why-choose-content">
                    <Card.Title className="why-choose-title text-center">
                      {itemData.affairsName}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Link>
        ) : (
          <a href={itemData.relativeUrl} target="_blank">
            <div className="card-margin service_box wow fadeInUp service-box-layout1">
              <Card className="why-choose-card">
                <Card.Img
                  variant="top"
                  src={imgDisplay}
                  className="why-choose-icon"
                />
                <Card.Body>
                  <div className="why-choose-content">
                    <Card.Title className="why-choose-title text-center">
                      {itemData.affairsName}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </a>
        )}
      </Col>
    </React.Fragment>
  );
};
