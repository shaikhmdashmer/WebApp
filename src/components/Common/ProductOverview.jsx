import React from "react";
import parse from "html-react-parser";
import {
  Card,
  Button,
  CardColumns,
  Col,
  Row,
  Container,
  Form,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const ProductOverview = (props) => {
  const imgPath = `/products/Zeeshan/productthumbnail/${props.selectedProduct.picture}`;
  const imgPathDesc = `/products/Zeeshan/productthumbnail/${props.selectedProduct.descimg}`;

  const history = useHistory();
  const handleRedirectToProductList = () => {
    history.push("/productlist");
  };
  const myProp = props.selectedProduct.description;
  return (
    <React.Fragment>
      <Row className="product-overview-row">
        <Col className="product-overview-col   " md="12" xl="6">
          <div class="sidebar-item">
            <div class="make-me-sticky">
              <img
                className="product-overview-thumbnail"
                src={imgPath}
                alt="product thumbnail"
              />
            </div>
          </div>
        </Col>

        <Col md="12" xl="6" className="product-overview-col">
          <div className="description-section">
            <div className="product-detail-container">
              <div className="product-overview-title">
                {props.selectedProduct.name.replace(/&amp;/g, "&")}
              </div>

              <div className="product-description-p">
                <Container className="product-desc-container">
                  {props.selectedProduct.descbodytitle && (
                    <Row>
                      <Col>
                        <div className="product-sub-p">
                          {props.selectedProduct.descbodytitle.replace(
                            /&amp;/g,
                            "&"
                          )}
                        </div>
                      </Col>
                    </Row>
                  )}
                  <br />
                  {props.selectedProduct.desctitle && (
                    <Row>
                      <Col>
                        <div className="product-sub-p">
                          {props.selectedProduct.desctitle.replace(
                            /&amp;/g,
                            "&"
                          )}
                        </div>
                      </Col>
                    </Row>
                  )}
                  {props.selectedProduct.desdetails && (
                    <Row>
                      <Col>
                        {parse(
                          props.selectedProduct.desdetails.replace(
                            /&amp;/g,
                            "&"
                          )
                        )}
                      </Col>
                    </Row>
                  )}
                  <br />
                  {props.selectedProduct.desimptitle && (
                    <Row>
                      <Col>
                        <div className="product-sub-p">
                          {props.selectedProduct.desimptitle.replace(
                            /&amp;/g,
                            "&"
                          )}
                        </div>
                      </Col>
                    </Row>
                  )}
                  {props.selectedProduct.descimpdetails && (
                    <Row>
                      <Col>{parse(props.selectedProduct.descimpdetails)}</Col>
                    </Row>
                  )}
                  {props.selectedProduct.descimg && (
                    <Row>
                      <Col>
                        <img
                          className="product-overview-thumbnail"
                          src={imgPathDesc}
                          alt="product thumbnail"
                        />
                      </Col>
                    </Row>
                  )}
                </Container>
              </div>
              <div className="product-overview-title2">
                <div className=" text-center">
                  <a
                    href="#"
                    className="btn-default btn-block btn3"
                    onClick={handleRedirectToProductList}
                  >
                    Back to Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
