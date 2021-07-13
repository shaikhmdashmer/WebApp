import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const FeatureBox = (props) => {
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const featureDisplay = `products/Zeeshan/whychooseus/${props.featureBoxImg}`;
  return (
    <React.Fragment>
      <Col md="12" lg="4">
        <Link to={props.redirectUrl} onClick={handleScrollTop}>
          <div>{props.featureImgHTML}</div>

          <div className="video-container1">
            <div class="title-techf ">{props.whychoosetitle}</div>
            <div className="title-tech4">{props.whychooseparagraph}</div>
          </div>
        </Link>
      </Col>
    </React.Fragment>
  );
};
