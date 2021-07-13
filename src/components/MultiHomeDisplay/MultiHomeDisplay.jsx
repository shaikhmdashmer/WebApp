import React from "react";
import "./MultiHomeDisplay.css";
import { useSelector } from "react-redux";
import { getHomeLevelDetails } from "../../state/selectors/categories";
import { MainTitleDisplay } from "./MainTitleDisplay";
import { SectionDisplay } from "./SectionDisplay";
import { IDCardDisplay } from "./IDCardDisplay";
import { BannerCardDisplay } from "./BannerCardDisplay";

export const MultiHomeDisplay = () => {
  const selectorHomeLevelDetails = useSelector(getHomeLevelDetails);

  return (
    <React.Fragment>
      {selectorHomeLevelDetails.length > 0 &&
        selectorHomeLevelDetails.map((item, index) => {
          if (index === 0) {
            return (
              <div style={{ width: "100%", height: "560px", overflow: "auto" }}>
                {MainTitleDisplay(item.maintitle, item.maintitle)}
                {item.bannerurl1 && BannerCardDisplay(item)}
                {item.FirstName != null && IDCardDisplay(item)}
                {SectionDisplay(item.sectitle1, item.secdetails1)}
                {SectionDisplay(item.sectitle2, item.secdetails2)}
                {SectionDisplay(item.sectitle3, item.secdetails3)}
                {SectionDisplay(item.sectitle4, item.secdetails4)}
                {SectionDisplay(item.sectitle5, item.secdetails5)}
                {SectionDisplay(item.sectitle6, item.secdetails6)}
                {SectionDisplay(item.sectitle1, item.secdetails7)}
              </div>
            );
          }
        })}
    </React.Fragment>
  );
};
