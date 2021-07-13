import React, { useState, useEffect } from "react";
import "../Home/Home.style.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import "./VideoDisplay.css";
import { getSelectVideoData } from "../../state/selectors/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const VideoDisplay = () => {
  const selectorVideos = useSelector(getSelectVideoData);
  return (
    <React.Fragment>
      {selectorVideos && (
        <React.Fragment>
          <div
            className="video-promo ptb-100 background-img"
            style={{
              backgroundImage: `url(${require("../../img/tech-bg.jpg")})`,
            }}
          ></div>

          <a
            className="popup-video video_icon"
            href="https://www.youtube.com/embed/6H9mfAJM9mw"
          >
            <i className="fa fa-play"></i>
          </a>
          <div className="video-container">
            <div class="title-tech1 ">NSAKCET VIDEO TOUR</div>
            <div className="title-tech3">
              Take a tour in NSACKET and you will find the best university in
              the state.{" "}
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
