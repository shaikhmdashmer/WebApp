import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CoursesDisplay.css";
import MainPageCourses from "./MainPageCourses";


export const CoursesDisplay = () => {
  return <React.Fragment><MainPageCourses/></React.Fragment>;
};
