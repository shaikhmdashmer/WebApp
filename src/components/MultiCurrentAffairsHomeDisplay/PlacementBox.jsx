import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MultiCurrentAffairsHomeDisplay.css";

export const PlacementBox = ({ affairsData, title }) => {
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const [affairs, setAffairs] = useState([]);
  useEffect(() => {
    const filtdata = affairsData.slice(0, 6);
    setAffairs([...filtdata]);
  }, [affairsData]);
  return (
    <div className="video-promo news-section ptb-100 background-img-home">
      <div className="container plr">
        <div className="row">
          <div className="slider-overlay-home-affairs">
            <div className="col-12">
              {/* <div className="section-top-padding"></div> */}
              <div className="title-tech2 text-white">{title}</div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
