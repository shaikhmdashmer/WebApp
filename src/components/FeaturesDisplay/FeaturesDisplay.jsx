import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturesDisplay.css";
import { MultiPPTsDisplay } from "../MultiPPTsDisplay/MultiPPTsDisplay";

export const FeaturesDisplay = () => {
  return (
    <React.Fragment>
      <MultiPPTsDisplay />
    </React.Fragment>
  );
};
