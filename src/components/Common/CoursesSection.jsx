import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";
import { CoursesBox } from "../Common/CoursesBox";

export const CoursesSection = ({ affairsData }) => {
  return (
    <React.Fragment>
      <div className="home-news-container home-news-container-2">
        <Row>
          {affairsData.length > 0 &&
            affairsData.map((item) => <CoursesBox itemData={item} />)}
        </Row>
      </div>

      <div className="section-bottom-padding"></div>
    </React.Fragment>
  );
};
