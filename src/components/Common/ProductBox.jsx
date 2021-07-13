import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const ProductBox = (props) => {
  const imgPath = `/products/Zeeshan/productthumbnail/${props.productThumbnail}`;
  const sectionStyle = {
    backgroundImage: "url(" + imgPath + ")",
  };

  return (
    <React.Fragment>
      <Col lg="4">
        <div className="card-margin">
          <Card className="card-shadow">
            {/* <div className="productcard-image" style={{ backgroundImage: imgDisplay }}></div> */}
            <div className="productcard-image" style={sectionStyle}></div>
            {/* <div className="productcard-image" style={{ backgroundImage: `url(${require("../../img/product-1.png")})` }}></div> */}
            <Card.Body>
              <div className="card-content">
                <Card.Title className="productcard-title text-center">
                  {props.productboxname}
                </Card.Title>

                <Card.Text className="productcard-paragraph">
                  {props.productboxdescription}
                </Card.Text>
                <div className=" text-center">
                  <a
                    href="#"
                    className="btn-default btn-block btn3"
                    onClick={() => {
                      props.handleSelectedProduct(props.product);
                      props.handleShow();
                    }}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </React.Fragment>
  );
};
