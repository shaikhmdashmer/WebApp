import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SearchBoxByCategory } from "../SearchBoxByCategory/SearchBoxByCategory";
import FilterListBrand from "../FilterListBrand/FilterListBrand";
import { AddCategoryComp } from "../AddCategoryComp/AddCategoryComp";
import { AddBrand } from "../AddBrand/AddBrand";
import { AddProduct } from "../AddProduct/AddProduct";
import SearchIcon from "@material-ui/icons/Search";
import "./NavbarCategory.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../state/selectors/categories";
import { setCategories } from "../../state/actions/categories";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Image,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";

import Switch from "react-bootstrap/esm/Switch";
import { getProductCategories } from "../../services/subscriberService";
import { subscriberRegistrationNo } from "../../config.json";

export const NavbarCategory = ({ handleCategory, category }) => {
  const dispatch = useDispatch();
  const [productCategories, setProductCategories] = useState([]);
  const allCategories = useSelector(getAllCategories);
  const getAllCategoriesUI = async () => {
    const result = await getProductCategories(
      subscriberRegistrationNo
    );
    if (result) {
      const data = result.data[0];
      dispatch(setCategories(data));
    }
  };

  useEffect(() => {
    getAllCategoriesUI();
  }, []);
  useEffect(() => {
    allCategories.length>0 && setProductCategories(allCategories);
  }, [allCategories]);
  return (
    <React.Fragment>
      <Row className="contentDiv headerTitle">
        <Col>
          <div>Products</div>
        </Col>
      </Row>
      <Row className="contentDiv buttonContent">
        <Col>
          {productCategories.map((item) => {
            return (
              <Button
                href="#"
                id="homeopathy"
                size="lg"
                onClick={handleCategory}
              >
                {item.productcategoryName}
              </Button>
            );
          })}
        </Col>
      </Row>
      <Row className="contentDiv contentDivSearch">
        <Col lg={4} />
        <Col lg={3} className="searchContentInput">
          <SearchBoxByCategory category={category} />
        </Col>
        <Col lg={1} className="searchContentIcon">
          <SearchIcon fontSize="large" />
        </Col>
        <Col lg={4} />
      </Row>
      <br />
    </React.Fragment>
  );
};
