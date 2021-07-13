import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import { imagesRepoUrl } from "../../config.json";
import "./IDCardDisplay.css";

export const IDCardDisplay = (item) => {
  const sectionStyle = {
    backgroundImage: `url(${imagesRepoUrl}${item.employeeThumbnail})`,
  };
  return (
    <React.Fragment>
      <Card className="place-IdCard">
        <Row>
          <Col lg="2">
            <div className="employeecard-desk" style={sectionStyle}></div>
          </Col>
          <Col lg="10">
            <a className="prof-title-multi">
              <u>{`${item.FirstName} ${item.LastName}`}</u>
            </a>
            <p className="idcard-details">
              {`${item.FirstName} ${item.LastName} of ${item.designame} 
              
                ${
                  item.AboutMe &&
                  ReactHtmlParser(
                    item.AboutMe.replace(/\\n/g, "<br />")
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
                  )
                }`}
              <a className="more-content" href="">
                See More...
              </a>
            </p>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
