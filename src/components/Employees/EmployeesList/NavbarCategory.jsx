import React, { useState, useEffect } from "react";
import "./NavbarCategory.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../state/selectors/categories";
import { setCategories } from "../../../state/actions/categories";
import { setEmployees } from "../../../state/actions/employees";
import { getAllGenders } from "../../../state/selectors/gender";
import { getSearchBoxInput } from "../../../state/selectors/filters";
import { SearchComponent } from "../../Common/SearchComponent";
import { subscriberRegistrationNo } from "../../../config.json";
import { Container, Row, Col } from "react-bootstrap";
import {
  getEmployeeCategories,
  getEmployees,
  getMembership,
  getHomeLevelDetails,
} from "../../../services/subscriberService";

export const NavbarCategory = ({
  handleCategory,
  categoryId,
  categoryName,
}) => {
  const dispatch = useDispatch();
  const [employeeCategories, setEmployeeCategories] = useState([]);
  const [allGenders, setAllGenders] = useState();
  const allCategories = useSelector(getAllCategories);
  const inputSearchData = useSelector(getSearchBoxInput);
  const allGendersData = useSelector(getAllGenders);

  const getAllCategoriesUI = async () => {
    const result = await getEmployeeCategories(subscriberRegistrationNo);
    if (result) {
      const data = result.data[0];
      dispatch(setCategories(data));
    }
  };
  const getAllEmployeesUI = async () => {
    const result = await getEmployees(
      categoryId,
      subscriberRegistrationNo,
      inputSearchData
    );
    const resultMembership = await getMembership(subscriberRegistrationNo);
    if (result) {
      const data = result.data[0];
      dispatch(setEmployees(data));
    }
  };

  // useEffect(() => {
  //   getAllCategoriesUI();
  // }, []);
  useEffect(() => {
    if (categoryId) {
      getAllEmployeesUI();
    }
  }, [categoryId, inputSearchData]);
  useEffect(() => {
    setEmployeeCategories(allCategories);
    localStorage.setItem("allCategories", JSON.stringify(allCategories));
  }, [allCategories]);
  useEffect(() => {
    setAllGenders(allGendersData);
  }, [allGendersData]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <SearchComponent
              employeeCategories={employeeCategories}
              categoryId={categoryId}
              handleCategory={handleCategory}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
