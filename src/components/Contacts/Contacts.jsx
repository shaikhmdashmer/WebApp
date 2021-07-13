import React from "react";
import { Dropdown, Container } from "react-bootstrap";
import {GetInTouch} from "../Common/GetInTouch";
import {SectionTitle} from "../Common/SectionTitle";

export const Contacts = () => {
  return (
    <React.Fragment>
        <div className="section-top-padding"></div>
      <SectionTitle sectionheading="Contact Us" />
     
      
      <GetInTouch />

    </React.Fragment>
  );
};
