import React, { useState, useEffect } from "react";
import { subscriberRegistrationNo } from "../../config.json";
import "../MultiCurrentAffairsDisplay/MultiCurrentAffairsDisplay.css";
import { Link } from "react-router-dom";

export const MultiCurrentAffairsDisplay = ({ affairsData, title }) => {
  const [affairs, setAffairs] = useState([]);
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    setAffairs([...affairsData]);
  }, [affairsData]);
  return (
    <div
      className="video-promo news-section ptb-100 background-img"
      style={{
        backgroundImage: `url(${require("../../img/tech-bg.jpg")})`,
      }}
    >
      <div className="container plr">
        <div className="section-top-padding"></div>

        <div className="title-tech2 text-white">{title}</div>
        <marquee
          onmouseover="this.stop()"
          onmouseout="this.start()"
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
  );
};
