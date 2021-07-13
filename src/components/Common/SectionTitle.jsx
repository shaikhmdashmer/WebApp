import React from "react";
import "../Home/Home.style.css";

export const SectionTitle = (props) => {
  return (
    <React.Fragment>
      <div className="title">{props.sectionheading}</div>

      <div class="section-title-border center margin-top-20"></div>
    </React.Fragment>
  );
};
