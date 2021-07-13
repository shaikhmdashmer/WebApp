import React from "react";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getSelectImgData } from "../../state/selectors/categories";
import { imagesRepoUrl } from "../../config.json";
import "./MultiImagesDisplay.scss";

export const MultiImagesDisplay = () => {
  const imagesData = useSelector(getSelectImgData);

  return (
    <div style={{ width: "100%", height: "565px" }}>
      <div
        className="video-promo ptb-100 background-img"
        style={{
          backgroundImage: `url(${require("../../img/tech-bg.jpg")})`,
        }}
      >
        <Carousel autoPlay infiniteLoop showStatus={false}>
          {imagesData &&
            imagesData.map((item) => {
              return (
                <img
                  className="imgThubnailRoll img-special-photos"
                  src={`${imagesRepoUrl}${item}`}
                />
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};
