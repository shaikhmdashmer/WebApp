import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import {
  HomeCommonAboutUs,
  HomeCommonDepartment,
  HomeCommonCources,
  HomeCommonAdmission,
  HomeCommonPlacements,
  HomeCommonFeatures,
  HomeCommonEvents,
  HomeCommonGallery,
  HomeCommonExaminationCenter,
  HomeCommonRandDCell,
  HomeCommonContactUs,
} from "../components/Home/HomeCommonIndex";
import { HomeCommon } from "../components/Home/HomeCommon";
import { ProductsList } from "../components/ProductsList/ProductsList";
import { EmployeesList } from "../components/Employees/EmployeesList/EmployeesList";
import { Contacts } from "../components/Contacts/Contacts";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Admission } from "../components/Admission/Admission";
import { Events } from "../components/Events/Events";
import { Gallery } from "../components/Gallery/Gallery";
import { Courses } from "../components/Courses/Courses";
import { Placement } from "../components/Placement/Placement";
import { Services } from "../components/Services/Services";
import { NavbarCategory } from "../components/ProductsList/NavbarCategory";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { EmployeeOverview } from "../components/Common/Employee/EmployeeOverview";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/contacts" component={Contacts} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/admission" component={Admission} />
      <Route path="/events" component={Events} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/courses" component={Courses} />
      <Route path="/placement" component={Placement} />
      <Route path="/productdetail" component={ProductDetails} />
      <Route path="/services" component={Services} />
      <Route path="/productlist" component={ProductsList} />
      <Route path="/employeelist" component={EmployeesList} />
      <Route path="/employeeoverview" component={EmployeeOverview} />
      <Route path="/NavbarCategory" component={NavbarCategory} />
      <Route path="/homecommon40" component={HomeCommonAboutUs} />
      <Route path="/homecommon142" component={HomeCommonCources} />
      <Route path="/homecommon18" component={HomeCommonDepartment} />
      <Route path="/homecommon37" component={HomeCommonAdmission} />
      <Route path="/homecommon58" component={HomeCommonPlacements} />
      <Route path="/homecommon62" component={HomeCommonFeatures} />
      <Route path="/homecommon75" component={HomeCommonEvents} />
      <Route path="/homecommon88" component={HomeCommonGallery} />
      <Route path="/homecommon131" component={HomeCommonExaminationCenter} />
      <Route path="/homecommon204" component={HomeCommonRandDCell} />
      <Route path="/homecommon136" component={HomeCommonContactUs} />
      <Route path="/homecommon" component={HomeCommon} />
    </Switch>
  );
};

export default Routes;
