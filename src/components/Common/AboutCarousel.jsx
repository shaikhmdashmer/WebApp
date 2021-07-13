import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";
import { imagesRepoUrl } from "../../config.json";
import { QuickLinksDisplay } from "../QuickLinks/QuickLinksDisplay";

export const AboutCarousel = ({ imagesData, affairsData, setLoading }) => {
  return (
    <React.Fragment>
      <Carousel>
        {imagesData &&
          imagesData.map((itemData, index) => {
            imagesData.length - 1 === index &&
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            return (
              <Carousel.Item>
                <img
                  className="carousel-img"
                  src={`${imagesRepoUrl}${itemData}`}
                />
                <div className="slider-overlay-home"></div>
              </Carousel.Item>
            );
          })}
      </Carousel>
   
    </React.Fragment>
  );
};
