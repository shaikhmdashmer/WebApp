import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { imagesRepoUrl } from "../../../config.json";
import { getEmployees } from "../../../services/subscriberService";
import { subscriberRegistrationNo } from "../../../config.json";
import { setSelectedCategory } from "../../../state/actions/categories";
import "./MultiEventsAndPlacementsDisplay.css";

export const MultiEventsAndPlacementsDisplay = () => {
  const dispatch = useDispatch();
  const [employeesData, setEmployeesData] = useState([]);
  const getAllEmployeesUI = async () => {
    const result = await getEmployees(214, subscriberRegistrationNo, "");
    if (result) {
      const dataAll = result.data[0];
      setEmployeesData([...dataAll]);
    }
  };
  const handleEminentProfessors = () => {
    const els = document.getElementById("58");
    // els && els.click();
  };
  useEffect(() => {
    getAllEmployeesUI();
  }, []);
  return (
    <div className="place-IdCard-comp">
      <Carousel showStatus={false}>
        {employeesData &&
          employeesData.map((item) => {
            return (
              <React.Fragment>
                <Row>
                  <Col className="colHome">
                    <div className="prof-title-comp slider-overlay-carousel-comp">
                      <a onClick={handleEminentProfessors}>
                        {`${item.DeptName}`}
                      </a>
                    </div>
                    <img
                      className="img-card-prof imgThubnailRoll"
                      src={`${imagesRepoUrl}${item.employeeThumbnail}`}
                    />
                    <a
                      className="prof-title slider-overlay-carousel"
                      onClick={handleEminentProfessors}
                    >
                      {`${item.Prefix} ${item.FirstName} ${item.LastName}`}
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col className="colHome placement-text">
                    {ReactHtmlParser(
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
                    )}
                  </Col>
                </Row>
              </React.Fragment>
            );
          })}
      </Carousel>
    </div>
  );
};
