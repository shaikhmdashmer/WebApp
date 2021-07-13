import React, { useEffect, useState } from "react";
import "./MultiHomeDisplay.css";
import { IDCardDisplay } from "../../MultiHomeDisplay/IDCardDisplay";
import { Carousel } from "react-responsive-carousel";
import { getEmployees } from "../../../services/subscriberService";
import { subscriberRegistrationNo } from "../../../config.json";

export const MultiEminentProfessorsDisplay = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const getAllEmployeesUI = async () => {
    const result = await getEmployees(216, subscriberRegistrationNo, "");
    if (result) {
      const data = result.data[0];
      setEmployeesData([...data]);
    }
  };
  useEffect(() => {
    getAllEmployeesUI();
  }, []);
  return (
    <React.Fragment>
      {employeesData &&
        employeesData.length > 0 &&
        employeesData.map((item, index) => {
          return item.FirstName != null && IDCardDisplay(item);
        })}
    </React.Fragment>
  );
};
