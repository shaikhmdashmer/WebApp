import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SectionTitle } from "../../Common/SectionTitle";
import { FeaturedEmployees } from "../../Common/Employee/FeaturedEmployees";
import { setSelctedEmployee } from "../../../state/actions/employees";

export const FeaturedEmployeesList = () => {
  const [homeDisplayEmployees, setHomeDisplayEmployees] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <img src="images/StaffHome.jpg" alt="StaffHome" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
