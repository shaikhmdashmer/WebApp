import React from "react";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";
import { FeaturedCommonList } from "../Home/FeaturedCommonList";
import { AllTabsComps } from "../AllTabsComps/AllTabsComps";

export const ExaminationCell = () => {
  const params = QueryString.parse(useLocation().search);
  return (
    <React.Fragment>
      {params.Category3 == 70707070 ? (
        <FeaturedCommonList imgPath="images/accreditationgHome.jpg" />
      ) : (
        <AllTabsComps />
      )}
    </React.Fragment>
  );
};
