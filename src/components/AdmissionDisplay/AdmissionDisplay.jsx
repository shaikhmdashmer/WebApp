import React from "react";
import { HeadingTop } from "./HeadingTop";
import { OfficeUseOnly } from "./OfficeUseOnly";
import { FirstPage } from "./FirstPage";
import { FourthPage } from "./FourthPage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";

export const AdmissionDisplay = () => {
  console.log("Admin page here");
  return (
    <div>
      {/* <button onClick={() => window.print()}>Print</button> */}
      <HeadingTop />
      <OfficeUseOnly />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
};
