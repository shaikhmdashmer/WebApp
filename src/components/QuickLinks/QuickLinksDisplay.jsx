import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../QuickLinks/QuickLinksDisplay.css";
import { Link } from "react-router-dom";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";
import {
  setSelectedCategory,
  setSelectedCategoryLevel2,
  setSelectedCategoryLevel3,
} from "../../state/actions/categories";

export const QuickLinksDisplay = ({ affairsData }) => {
  const dispatch = useDispatch();
  const params = QueryString.parse(useLocation().search);

  // const handleSelectedParentTab = (e) => {
  //   // const els = document.getElementsByClassName("nav-menu-display");
  //   // els[0] && els[0].click();
  //   // setLevel2Change(!level2Change);
  //   dispatch(setSelectedCategory(params.Category1));
  //   dispatch(setSelectedCategoryLevel2(params.Category2));
  //   dispatch(setSelectedCategoryLevel3(params.Category3));
  // };

  return (
    <div>
      {affairsData && (
        <div className="base-tab-list base-tab-list-3">
          <div className="container">
            <div className="find-flight-title text-center"></div>
            <div className="row">
              <div className="quick-registration-form">
                <div className="row">
                  {/* <div className=" "> */}
                  <div className="biz-hero-registration-form bg-white">
                    <h4 className="text-center ">
                      <i className="fa fa-bolt fa-bolt-icon"></i>Quick Links
                    </h4>
                    <div className="quick-linkss">
                      {affairsData.length > 0 &&
                        affairsData.map((item) => {
                          return (
                            <p className="quick-p">
                              {item.isExternalLink === 0 ? (
                                <Link
                                  to={`${item.relativeUrl}`}
                                  className="linkaffairs"
                                  // onClick={handleSelectedParentTab}
                                >
                                  <i className={item.iconPath}></i>
                                  {item.affairsName}
                                </Link>
                              ) : (
                                <a
                                  href={`${item.relativeUrl}`}
                                  className="linkaffairs"
                                  target="_blank"
                                >
                                  <i className={item.iconPath}></i>
                                  {item.affairsName}
                                </a>
                              )}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
