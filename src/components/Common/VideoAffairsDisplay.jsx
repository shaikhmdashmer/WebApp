import React, { useState, useEffect } from "react";
import "../Home/Home.style.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import "./VideoAffairsDisplay.css";
import { getSelectVideoData } from "../../state/selectors/categories";

export const VideoAffairsDisplay = () => {
  const selectorVideos = useSelector(getSelectVideoData);
  return (
    <React.Fragment>
      {selectorVideos && (
        <div
          className="video-promo ptb-100 background-img"
          style={{
            backgroundImage: `url(${require("../../img/tech-bg.jpg")})`,
          }}
        >
          <Carousel
            className="video-crousel"
            autoPlay
            infiniteLoop
            showStatus={false}
          >
            {selectorVideos.length > 0 &&
              selectorVideos.map((item) => {
                return (
                  <iframe
                    className="video-frame"
                    src={item.relativeUrl}
                    title={item.affairsName}
                    frameborder=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                );
              })}
          </Carousel>
        </div>
      )}
    </React.Fragment>
  );
};
