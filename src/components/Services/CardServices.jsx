import React from "react";
import { Subcard1 } from "./Subcard1";
import { Subcard2 } from "./Subcard2";
import "../Home/Home.style.css";

export const CardServices = (props) => {
  const imgPathDesc = `/products/Zeeshan/productthumbnail/${props.descimg}`;

  return (
    <div className="serviceContaints">
      <img
                          className="product-overview-thumbnail"
                          src={imgPathDesc}
                          alt="product thumbnail"
                        />
    </div>
  );
};
