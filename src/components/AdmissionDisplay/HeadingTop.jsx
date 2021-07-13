import React from "react";
import "./HeadingTop.css";

export const HeadingTop = () => {
  return (
    <div className="heading-top">
      <h1 className="logo">
        <a href="">
          <img
            className="main-logo"
            src="https://www.reviewadda.com/assets/uploads/college/logo/LOGO_10640.jpg"
            alt=""
          />
        </a>
        <b>Nawab Shah Alam Khan College of</b>
      </h1>
      <h2 className="sub-heading">
        <b> Engineering & Technology</b>
      </h2>
      <h2 className="sub-heading1">
        <b> Malakpet, Hyderabad-500024</b>
      </h2>
      <h5 className="sub-heading2">
        Estd.2008:: Approved by AICTE, New Delhi:: Affiliated to JNTU-Hyderabad
      </h5>
      {/* <button onClick={() => window.print()}>Print</button> */}
    </div>
  );
};
