import React from "react";
import { Subcard1 } from "./Subcard1";
import { Subcard2 } from "./Subcard2";
import "../Home/Home.style.css";

export const Carddemo = () => {
  return (
    <div className="serviceContaints">
      <span>
         We provide following services for our valued customers:
      </span>
      <ul>
        <li >OTR, MVTR, PCT, UV, 2D & 3D roughness testing services.</li>
        <li>
          We provide all required testing of film samples & provide comparative
          report for market penetration.
        </li>
        <li>
          New product development, Industrial research and industrial setup
          services.
        </li>
      </ul>
      <p>
        We have passion for long term relationship with our customers by
        providing value added service. Our specialty in
      </p>
      <ul>
        <li>Transparent Barrier Film (Alox film & Alox Topcoat)</li>
        <li>Matte Film</li>
        <li>Metallized film</li>
        <li>Release film</li>
        <li>Anti fog</li>
        <li>Anti static film</li>
        <li>Milky white film</li>
        <li>Super Clear film</li>
        <li>Heat sealable film</li>
        <li>sealable peelable film</li>
        <li>Amber Color Film</li>
        <li>Opaque White Film</li>
        <li>Resins & Chemicals</li>
      </ul>
    </div>
  );
};
