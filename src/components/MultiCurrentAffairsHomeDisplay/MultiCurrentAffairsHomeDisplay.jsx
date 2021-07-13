import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MultiCurrentAffairsHomeDisplay.css";

export const MultiCurrentAffairsHomeDisplay = ({ affairsData, title }) => {
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const [affairs, setAffairs] = useState([]);
  useEffect(() => {
    setAffairs([...affairsData]);
  }, [affairsData]);
  return (
    <div className="video-promo news-section ptb-100 background-img-home">
      <div className="container plr">
        <div className="row">
          <div className="slider-overlay-home-affairs">
            <div className="col-12">
              {/* <div className="section-top-padding"></div> */}
              <div className="title-tech2 text-white">{title}</div>
              <marquee
                pauseOnHover="true"
                scrollamount="1%"
                behavior="scroll"
                direction="up"
                className="m-height"
              >
                {affairs.length > 0 &&
                  affairs.map((item) => {
                    return (
                      <p className="news-element">
                        <i className={item.iconPath}></i>
                        {item.isExternalLink === 0 ? (
                          <Link
                            to={item.relativeUrl}
                            onClick={handleScrollTop}
                            className="linkaffairs"
                          >
                            {item.affairsName}
                          </Link>
                        ) : (
                          <a
                            href={item.relativeUrl}
                            className="linkaffairs"
                            target="_blank"
                          >
                            {item.affairsName}
                          </a>
                        )}

                        <div className="news-border"></div>
                      </p>
                    );
                  })}
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
