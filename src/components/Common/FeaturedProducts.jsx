import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const FeaturedProducts = (props) => {
  
  const imgPath = `/products/UniqueBlinds/${props.productThumbnail}`;
  const sectionStyle = {
    backgroundImage: "url(" + imgPath + ")",
  };

  return (
    <React.Fragment>
      <Col lg="4">
        <div className="card-margin">
        <a
                    href={`/productlist?catId=${props.catId}`}
                    className=""
                    
                  >
          <Card className="card2">
            {/* <div className="productcard-image" style={{ backgroundImage: imgDisplay }}></div> */}
            <div className="team-member productcard-image" style={sectionStyle}></div>
            {/* <div className="productcard-image" style={{ backgroundImage: `url(${require("../../img/product-1.png")})` }}></div> */}
            <Card.Body className="member-data">
              <div className="card-content">
                <Card.Title className="productcard-title text-center">
                  {props.productboxname}
                </Card.Title>

          
                <div className=" text-center">
                
                </div>
              </div>
            </Card.Body>
          </Card></a>
        </div>
      </Col>
    </React.Fragment>
  );
};
