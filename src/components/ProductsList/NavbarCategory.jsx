import React, { useState, useEffect } from "react";
import "./NavbarCategory.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../state/selectors/categories";
import { setCategories } from "../../state/actions/categories";
import { setProducts } from "../../state/actions/products";
import { getSearchBoxInput } from "../../state/selectors/filters";
import { SearchComponent } from "../Common/SearchComponent";
import { subscriberRegistrationNo } from "../../config.json";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import {
  getProductCategories,
  getProducts,
  getEmployees,
} from "../../services/subscriberService";

export const NavbarCategory = ({
  handleCategory,
  categoryId,
  categoryName,
}) => {
  const dispatch = useDispatch();
  const [productCategories, setProductCategories] = useState([]);
  const allCategories = useSelector(getAllCategories);
  const inputSearchData = useSelector(getSearchBoxInput);
  const getAllCategoriesUI = async () => {
    const result = await getProductCategories(subscriberRegistrationNo);
    // console.log("Result-allCategories-result========================>", result);
    if (result) {
      const data = result.data[0];
      dispatch(setCategories(data));
    }
  };
  const getAllProductsUI = async () => {
    const result = await getProducts(
      categoryId,
      subscriberRegistrationNo,
      inputSearchData
    );
    if (result) {
      const data = result.data[0];
      dispatch(setProducts(data));
    }
  };
  
  const getAllEmployeesUI = async () => {
    const result = await getEmployees(
      categoryId,
      subscriberRegistrationNo,
      inputSearchData
    );
    if (result) {
      const data = result.data[0];
      dispatch(setProducts(data));
    }
  };

  useEffect(() => {
    getAllCategoriesUI();
  }, []);
  useEffect(() => {
    getAllProductsUI();
  }, [categoryId, inputSearchData]);
  useEffect(() => {
    setProductCategories(allCategories);
    localStorage.setItem("allCategories", JSON.stringify(allCategories));
  }, [allCategories]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <SearchComponent
              productCategories={productCategories}
              categoryId={categoryId}
              handleCategory={handleCategory}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
