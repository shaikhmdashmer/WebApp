import React from "react";
import { Card, Button, CardColumns, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Home/Home.style.css";
import { imagesRepoUrl } from "../../../config.json";
import { useDispatch, useSelector } from "react-redux";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";
import { getSelectedCategory } from "../../../state/selectors/categories";
import {
  setSelectedCategory,
  setSelectedCategoryPrev,
} from "../../../state/actions/categories";
import { setSelctedEmployee } from "../../../state/actions/employees";

export const EmployeeBox = ({ employee, handleShow }) => {
  const params = QueryString.parse(useLocation().search);
  const dispatch = useDispatch();
  const prevSelectedCategory = useSelector(getSelectedCategory);
  const imgPath = `${imagesRepoUrl}${employee.employeeThumbnail}`;
  const sectionStyle = {
    backgroundImage: "url(" + imgPath + ")",
  };

  // const handleSelectedEmployee = () => {
  //   dispatch(setSelectedCategoryPrev(prevSelectedCategory));
  //   dispatch(setSelectedCategory("employeedetails"));
  //   dispatch(setSelctedEmployee(employee));
  // };

  return (
    <React.Fragment>
      <Col className="colEmployeeCard" lg="4">
        <Row className="cardEmployee">
          <Col lg="3">
            <div className="employeecard-image" style={sectionStyle}></div>
          </Col>
          <Col className="colEmployeeCard" lg="7">
            <div className="card-content">
              <Card.Title className="employeecard-title text-center">
                {`${employee.Prefix || ""} ${employee.FirstName || ""} ${
                  employee.LastName || ""
                }`}
              </Card.Title>
              <Card.Title className="employeecard-title text-center">
                {employee.designame}
              </Card.Title>

              <Card.Text className="employeecard-title text-center">
                {employee.DeptName}
              </Card.Text>
              <Card.Text className="employeecard-title text-center">
                {employee.genderName}
              </Card.Text>
            </div>
          </Col>
          <Col className="colEmployeeCard" lg="2">
            <div className=" text-center">
              <Link
                to={`/employeeoverview?empId=${employee.EmpID}&Category1=${params.Category1}&Category2=${params.Category2}&Category3=${params.Category3}`}
                className="btn-default btn-block btn3"
              >
                View Details
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
};
