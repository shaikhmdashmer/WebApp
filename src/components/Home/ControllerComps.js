import React from "react";
import { EmployeesList } from "../../components/Employees/EmployeesList/EmployeesList";
import { Gallery } from "../../components/Gallery/Gallery";
import { Events } from "../../components/Events/Events";
import { Placement } from "../../components/Placement/Placement";
import { Courses } from "../../components/Courses/Courses";
import { Admission } from "../../components/Admission/Admission";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Contacts } from "../../components/Contacts/Contacts";
import { RandD } from "../../components/RandD/RandD";
import { Features } from "../../components/Features/Features";
import { ExaminationCell } from "../../components/ExaminationCell/ExaminationCell";
import { EmployeeDetails } from "../../components/Employees/EmployeeDetails/EmployeeDetails";
import { MultiEminentProfessorsDisplay } from "../../components/Home/MultiEminentProfessorsDisplay/MultiEminentProfessorsDisplay";
import { OnlinePayments } from "./OnlinePayments/OnlinePayments";

export const getComponentElement = (selectedCategory) => {
  switch (selectedCategory) {
    case "18":
      return <EmployeesList />;
    case "75":
      return <Events />;
    case "48":
      return <MultiEminentProfessorsDisplay />;
    case "88":
      return <Gallery />;
    case "58":
      return <Placement />;
    case "142":
      return <Courses />;
    case "37":
      return <Admission />;
    case "40":
      return <AboutUs />;
    case "136":
      return <Contacts />;
    case "204":
      return <RandD />;
    case "62":
      return <Features />;
    case "131":
      return <ExaminationCell />;
    case "777771":
      return <MultiEminentProfessorsDisplay />;
    case "261":
      return <OnlinePayments />;
    case "employeedetails":
      return <EmployeeDetails />;
      
    default:
      return <h1>Welcome to Nawab Shah Alam</h1>;
  }
};
