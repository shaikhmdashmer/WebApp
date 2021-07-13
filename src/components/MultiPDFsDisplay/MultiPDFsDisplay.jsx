import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiPDFsDisplay.css";
import { getSelectPdfData } from "../../state/selectors/categories";
import { imagesRepoUrl } from "../../config.json";

export const MultiPDFsDisplay = () => {
  const settings = {
    customPaging: function (i) {
      return <a>{i + 1}</a>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const imagesData = useSelector(getSelectPdfData);
  return (
    <Slider {...settings}>
      {imagesData &&
        imagesData.map((item) => {
          return (
            <iframe
              src={`${imagesRepoUrl}${item}`}
              frameborder="0"
              width="100%"
              height="560px"
            ></iframe>
          );
        })}
    </Slider>
  );
};
