import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getEmployees } from "../../services/subscriberService";
import { subscriberRegistrationNo, imagesRepoUrl } from "../../config.json";

import Slider from "react-slick";
import "../Home/Home.style.css";

export const ProfessorBox = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const getAllEmployeesUI = async () => {
    const result = await getEmployees(216, subscriberRegistrationNo, "");
    if (result) {
      const data = result.data[0];
      setEmployeesData([...data]);
    }
  };
  useEffect(() => {
    getAllEmployeesUI();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <React.Fragment>
      <section>
        <div className="row">
          <div className="col-xl-12">
            <div className="">
              <div className="col-12  colHome">
                <div className="title-tech-p ">Eminent Professor</div>
              </div>

              <div className="professor-box-layout">
                <Slider {...settings}>
                  {employeesData &&
                    employeesData.length > 0 &&
                    employeesData.map((item) => (
                      <Link to="/homecommon40?Category1=40&Category2=41&Category3=48">
                        <div className="team-item">
                          <div className="team-item_content">
                            <div className="team-img">
                              <img
                                className="team-img-f"
                                src={`${imagesRepoUrl}${item.employeeThumbnail}`}
                                alt=""
                              />
                            </div>

                            <div className="team-item_info">
                              <div className="team-item_titles">
                                <h4 class="team-title">{item.FirstName}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </Slider>
              </div>

              {/* <div className="section-bottom-padding"></div> */}
            </div>
          </div>
          {/* 
            <div className="col-xl-4">
              <div
                className="video-promo news-section ptb-100 background-img"
                style={{
                  backgroundImage: `url(${require("../../img/tech-bg.jpg")})`,
                }}
              >
                <div className="container plr">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-top-padding"></div>
                      <div className="title-tech2 text-white">Latest News </div>

                      <marquee
                        scrollamount="4%"
                        behavior="scroll"
                        direction="down"
                      >
                        <div className="news-element">
                          <p>Alumini Donor</p>
                        </div>
                        <div className="news-border"></div>

                        <div className="news-element">
                          <p>Athletic Calendar</p>
                        </div>
                        <div className="news-border"></div>

                        <div className="news-element">
                          <p>All Kingster’s Events</p>
                        </div>
                        <div className="news-border"></div>

                        <div className="news-element">
                          <p>Partnership & Out Reach</p>
                        </div>
                        <div className="news-border"></div>

                        <div className="news-element">
                          <p>Academic Programs</p>
                        </div>
                        <div className="news-border"></div>

                        <div className="news-element">
                          <p>Tution And Fees</p>
                        </div>
                        <div className="news-border"></div>
                      </marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
        </div>
      </section>
    </React.Fragment>
  );
};
