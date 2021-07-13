import React from "react";
import { Card } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { imagesRepoUrl } from "../../../config.json";
import "./MultiImagesHomeDisplay.scss";

export const MultiImagesHomeDisplay = ({ imagesData }) => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false}>
      {imagesData &&
        imagesData.map((item) => {
          return (
            <img
              className="img-card imgThubnailRoll"
              src={`${imagesRepoUrl}${item}`}
            />
          );
        })}
    </Carousel>
  );
};
