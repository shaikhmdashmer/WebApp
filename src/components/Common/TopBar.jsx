import React from "react";
import { Card, Button, CardColumns, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.style.css";

export const TopBar = (props) => {
  const featureDisplay = `products/Zeeshan/whychooseus/${props.featureBoxImg}`;
  return (
    <React.Fragment>
      <p className="topbar">
        EAMCET / PGECET / POLYCET / ECET Code : <b>NAWB</b>
      </p>
    </React.Fragment>
  );
};
