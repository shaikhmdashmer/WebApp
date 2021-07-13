import React from "react";
import { AllTabsComps } from "../AllTabsComps/AllTabsComps";
import { FeaturedCommonList } from "../Home/FeaturedCommonList";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";
import { OnlinePayments } from "../Home/OnlinePayments/OnlinePayments";

export const AboutUs = () => {
  const params = QueryString.parse(useLocation().search);
  return (
    <React.Fragment>
      {params.Category3 == 70707070 && (
        <FeaturedCommonList imgPath="images/aboutusHome.jpg" />
      )}
      {params.Category3 == 261 ? <OnlinePayments /> : <AllTabsComps />}
    </React.Fragment>
  );
};
