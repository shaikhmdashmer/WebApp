import React from "react";
import PropTypes from "prop-types";
import { EmployeeBox } from "../../Common/Employee/EmployeeBox";
import "./EmployeeGridItem.styles.scss";

const EmployeeGridItem = ({ employee, handleShow, handleSelectedEmployee }) => {
  return (
    employee.FirstName && (
      <EmployeeBox
        employee={employee}
        handleShow={handleShow}
        handleSelectedEmployee={handleSelectedEmployee}
      />
    )
  );
};

EmployeeGridItem.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    stats: PropTypes.shape({
      size: PropTypes.string,
      resolution: PropTypes.string,
      GPU: PropTypes.string,
      CPU: PropTypes.string,
      camera: PropTypes.string,
      battery: PropTypes.string,
    }),
  }),
};

export default EmployeeGridItem;
