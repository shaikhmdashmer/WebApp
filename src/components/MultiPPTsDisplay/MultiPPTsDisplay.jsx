import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiPPTsDisplay.css";
import { getMultipleFiles } from "../../services/subscriberService";
import {
  getSelectedCategory,
  getSelectedCategoryLevel2,
  getSelectedCategoryLevel3,
} from "../../state/selectors/categories";
import { imagesRepoUrl } from "../../config.json";

export const MultiPPTsDisplay = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  const selectedCategory2 = useSelector(getSelectedCategoryLevel2);
  const selectedCategory3 = useSelector(getSelectedCategoryLevel3);
  const [imagesData, setImagesData] = useState([]);
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
  const getMultipleFilesPPT = async () => {
    const resultImages = await getMultipleFiles(
      "PPT",
      selectedCategory,
      selectedCategory2,
      selectedCategory3
    );
    setImagesData([...resultImages.data]);
  };
  useEffect(() => {
    getMultipleFilesPPT();
  }, [selectedCategory3]);
  return (
    <>
      <Slider {...settings}>
        {imagesData &&
          imagesData.map((item) => {
            return (
              <iframe
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${imagesRepoUrl}${item}`}
                width="100%"
                height="540px"
                frameBorder="0"
              ></iframe>
            );
          })}
      </Slider>
    </>
  );
};
