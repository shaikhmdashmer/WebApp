import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import brandLogo from "../../../img/nsak-logo.png";
import "../NsakLogo/NsakLogo.css";

export const NsakLogo = () => {
  return (
    <div className="brand">
      <Link to={`home?Category1=0`} className="brandname">
        <img
          className="brand-logo"
          src={brandLogo}
          alt="Nawab Shah Alam Khan College Of Engineering"
        />
      </Link>
      <div className="png-logo">
        <a href="https://www.osmania.ac.in" target="_blank">
          <img
            className="brand-name"
            src="images/osmania-university.png"
            alt=""
          />
        </a>
        <a href="https://www.task.telangana.gov.in" target="_blank">
          <img className="brand-name" src="images/task.png" alt="" />
        </a>
        <a href="https://www.ieeensakcet.com" target="_blank">
          <img
            className="brand-name"
            src="images/nasakcetieeee.jpg"
            alt="ieeensakcet"
          />
        </a>
        <a href="https://www.aicte-india.org" target="_blank">
          <img className="brand-name" src="images/aicte.png" alt="AICTE" />
        </a>
        <a href="https://www.netacad.com" target="_blank">
          <img className="brand-name" src="images/cisco.png" alt="" />
        </a>
        <a href="#" target="_blank">
          <img className="brand-name" src="images/iso.png" alt="" />
        </a>
      </div>
    </div>
  );
};
