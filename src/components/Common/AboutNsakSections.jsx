import React from "react";
import "../Home/Home.style.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export const AboutNsakSections = () => {
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <React.Fragment>
      <section>
        <div className="row">
          <div className="col-xl-12">
            <div className="plr2">
              <div className="col-12  colHome">
                <div className="title-tech ">ABOUT NSAKCET</div>
              </div>

              <div className="about-nsak-section-p-2">
                <p className="about-para">
                  This institution has been established under the aegis of
                  MADARSA-I-AIZZA, a registered educational society registered
                  on 28th December 1961 under the Hyderabad societies
                  registration Act No. 1 of 1350 fosli. In fact the
                  Madrasa-i-aizza was founded in the year 1876 AD by the efforts
                  of Moulvi Shaik Ahmed Husain sahib, Nawab Rafi Yar Jung, with
                  the express object of imparting liberal / scientific /
                  professional education to the children of Muslim community.In
                  the year 1945, the school was made a feeder of the Osmania
                  University preparing students for the H.S.C public
                  examinations. The late Nawab Sir Nizamath Jung, an illustrious
                  son of the founder was associated with the school as honorary
                  secretary for over 50 years till he retired in 1947 and during
                  his regime the school made rapid strides on the path of
                  progress. Telugu medium classes were opened as parallel
                  section in the year 1955. In 1964, English classes were opened
                  and in the year 1987, a modern school in English medium with
                  name ?Neo School Aizza? was established. The year 1999 was a
                  landmark in the history of the educational society when the
                  management decided to start an engineering college in the
                  educationally backward region of ADILABAD. The engineering
                  college is functioning for the past 8 years very
                  successfully.The college is one of the best engineering
                  colleges imparting quality education with values.
                </p>
              </div>

              <div className="readmore-section">
                <div className="readmore-container">
                  <Link
                    to={`homecommon40?Category1=40&Category2=41&Category3=42`}
                    onClick={handleScrollTop}
                    className="readmore-button  readmore-transparent readmore-button-no-border"
                  >
                    <span class="readmore-content">Read More</span>

                    <ArrowRightAltIcon />
                  </Link>
                </div>
              </div>

              <div className="section-bottom-padding"></div>
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
