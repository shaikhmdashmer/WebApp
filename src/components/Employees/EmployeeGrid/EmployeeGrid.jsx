import React, { Fragment } from "react";
import "./EmployeeGrid.style.scss";
import EmployeeGridItem from "../EmployeeGridItem/EmployeeGridItem";
import { Row, Container } from "react-bootstrap";
import { EmployeeDetails } from "../EmployeeDetails/EmployeeDetails";
import { useDispatch } from "react-redux";
import { setSelctedEmployee } from "../../../state/actions/employees";

const EmployeeGrid = ({ filteredEmployees, category, handleShow, show }) => {
  const dispatch = useDispatch();
  const handleSelectedEmployee = (employee) => {
    dispatch(setSelctedEmployee(employee));
  };

  return (
    <Fragment>
      {!show ? (
        <Fragment>
          <Container>
            <Row>
              {filteredEmployees.map((employee, index) => (
                <EmployeeGridItem
                  employee={employee}
                  key={employee.id}
                  index={index}
                  category={category}
                  handleShow={handleShow}
                  handleSelectedEmployee={handleSelectedEmployee}
                />
              ))}
            </Row>
          </Container>
        </Fragment>
      ) : (
        <EmployeeDetails />
      )}
    </Fragment>
  );
};

export default EmployeeGrid;
