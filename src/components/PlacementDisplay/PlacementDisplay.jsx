import React, { Component, useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import "./PlacementDisplay.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getHomeLevelDetails } from "../../state/selectors/categories";
import { PlacementReducer } from "../PlacementDisplay/PlacementReducer";
import { imagesRepoUrl } from "../../config.json";

export const PlacementDisplay = () => {
  const selectorHomeLevelDetails = useSelector(getHomeLevelDetails);

  return (
    <React.Fragment>
      {selectorHomeLevelDetails.length > 0 &&
        selectorHomeLevelDetails.map((item, index) => {
          const sectionStyle = {
            backgroundImage: `url(${imagesRepoUrl}${item.employeeThumbnail})`,
          };
          if (index === 0) {
            return (
              <React.Fragment>
                <Row>
                  <Col lg="12">
                    <div>
                      <Row>
                        <Col md="12">
                          <Card className="place-Card">
                            <Card.Body>
                              <div
                                className="employeecard-image"
                                style={sectionStyle}
                              ></div>
                              <b>
                                <Card.Title className="pro-name">
                                  {`${item.Prefix} ${item.FirstName} ${item.LastName}`}
                                </Card.Title>
                              </b>
                              <br />
                              <Card.Title className="name">
                                {`${item.designame}`}
                              </Card.Title>
                              <Card.Text>
                                {`Contact # ${item.PhoneNumber}
                        E-mail: ${item.Email}`}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>

                    <React.Fragment>
                      <Row>
                        <Col md="12">
                          {item.sectitle1 !== "" && (
                            <p className="para">
                              <h2 className="vission">
                                <i class="fa fa-tags" aria-hidden="true"></i>{" "}
                                {item.sectitle1}
                              </h2>
                              {ReactHtmlParser(
                                item.secdetails1
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\<p>/g, "<br />")
                                  .replace(/\<\p>/g, "")
                                  .replace(/strong>/g, "h3>")
                                  .replace(/\\t/g, "")
                                  .replace(/href=\\/g, "href=")
                                  .replace(/src=\\/g, "src=")
                                  .replace(/png\\/g, "png")
                                  .replace(/jpg\\/g, "jpg")
                                  .replace(/\<br \/>/g, "")
                                  .replace(/&nbsp;/g, " ")
                              )}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          {item.sectitle2 !== "" && (
                            <p className="para">
                              <h2 className="vission">
                                <i class="fa fa-tags" aria-hidden="true"></i>{" "}
                                {item.sectitle2}
                              </h2>
                              {ReactHtmlParser(
                                item.secdetails2
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\<p>/g, "<br />")
                                  .replace(/\<\p>/g, "")
                                  .replace(/strong>/g, "h3>")
                                  .replace(/\\t/g, "")
                                  .replace(/href=\\/g, "href=")
                                  .replace(/src=\\/g, "src=")
                                  .replace(/png\\/g, "png")
                                  .replace(/jpg\\/g, "jpg")
                                  .replace(/\<br \/>/g, "")
                                  .replace(/&nbsp;/g, " ")
                              )}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          {item.sectitle3 !== "" && (
                            <p className="para">
                              <h2 className="vission">
                                <i class="fa fa-tags" aria-hidden="true"></i>{" "}
                                {item.sectitle3}
                              </h2>
                              {ReactHtmlParser(
                                item.secdetails3
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\<p>/g, "<br />")
                                  .replace(/\<\p>/g, "")
                                  .replace(/strong>/g, "h3>")
                                  .replace(/\\t/g, "")
                                  .replace(/href=\\/g, "href=")
                                  .replace(/src=\\/g, "src=")
                                  .replace(/png\\/g, "png")
                                  .replace(/jpg\\/g, "jpg")
                                  .replace(/\<br \/>/g, "")
                                  .replace(/&nbsp;/g, " ")
                              )}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          {item.sectitle4 !== "" && (
                            <p className="para">
                              <h2 className="vission">
                                <i class="fa fa-tags" aria-hidden="true"></i>{" "}
                                {item.sectitle4}
                              </h2>
                              {ReactHtmlParser(
                                item.secdetails4
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\<p>/g, "<br />")
                                  .replace(/\<\p>/g, "")
                                  .replace(/strong>/g, "h3>")
                                  .replace(/\\t/g, "")
                                  .replace(/href=\\/g, "href=")
                                  .replace(/src=\\/g, "src=")
                                  .replace(/png\\/g, "png")
                                  .replace(/jpg\\/g, "jpg")
                                  .replace(/\<br \/>/g, "")
                                  .replace(/&nbsp;/g, " ")
                              )}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          {item.sectitle5 !== "" && (
                            <p className="para">
                              <h2 className="vission">
                                <i class="fa fa-tags" aria-hidden="true"></i>{" "}
                                {item.sectitle5}
                              </h2>
                              {ReactHtmlParser(
                                item.secdetails5
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\<p>/g, "<br />")
                                  .replace(/\<\p>/g, "")
                                  .replace(/strong>/g, "h3>")
                                  .replace(/\\t/g, "")
                                  .replace(/href=\\/g, "href=")
                                  .replace(/src=\\/g, "src=")
                                  .replace(/png\\/g, "png")
                                  .replace(/jpg\\/g, "jpg")
                                  .replace(/\<br \/>/g, "")
                                  .replace(/&nbsp;/g, " ")
                              )}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          {item.sectitle6 !== "" && (
                            <p className="para">
                              <h2 className="vission">
                                <i class="fa fa-tags" aria-hidden="true"></i>{" "}
                                {item.sectitle6}
                              </h2>
                              {ReactHtmlParser(
                                item.secdetails6
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\<p>/g, "<br />")
                                  .replace(/\<\p>/g, "")
                                  .replace(/strong>/g, "h3>")
                                  .replace(/\\t/g, "")
                                  .replace(/href=\\/g, "href=")
                                  .replace(/src=\\/g, "src=")
                                  .replace(/png\\/g, "png")
                                  .replace(/jpg\\/g, "jpg")
                                  .replace(/\<br \/>/g, "")
                                  .replace(/&nbsp;/g, " ")
                              )}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          {item.sectitle7 !== "" && (
                            <p className="para">
                              <h2 className="vission">
                                <i class="fa fa-tags" aria-hidden="true"></i>{" "}
                                {item.sectitle7}
                              </h2>
                              {ReactHtmlParser(
                                item.secdetails7
                                  .replace(/\\n/g, "<br />")
                                  .replace(/\<p>/g, "<br />")
                                  .replace(/\<\p>/g, "")
                                  .replace(/strong>/g, "h3>")
                                  .replace(/\\t/g, "")
                                  .replace(/href=\\/g, "href=")
                                  .replace(/src=\\/g, "src=")
                                  .replace(/png\\/g, "png")
                                  .replace(/jpg\\/g, "jpg")
                                  .replace(/\<br \/>/g, "")
                                  .replace(/&nbsp;/g, " ")
                              )}
                            </p>
                          )}
                        </Col>
                      </Row>
                    </React.Fragment>
                  </Col>
                </Row>
              </React.Fragment>
            );
          }
        })}
    </React.Fragment>
  );
};
