import React from "react";
import {
  Card,
  Button,
  CardColumns,
  Col,
  Row,
  Container,
  Form,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@material-ui/icons/Search";
import "../Home/Home.style.css";
import whyChooseOne from "../../img/why-choose-icon-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setTextFilter } from "../../state/actions/filters";
import { getSearchBoxInput } from "../../state/selectors/filters";

export const SearchComponent = ({
  productCategories,
  categoryId,
  handleCategory,
  categoryName,
}) => {
  const inputValue = useSelector(getSearchBoxInput);
  const dispatch = useDispatch();
  const searchProducts = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
  };
  return (
    <React.Fragment>
      <Container>
        <div className="search-component">
          {/* <Row>
            <Nav
              defaultActiveKey="/home"
              as="ul"
              className="mx-auto category-group text-center"
            >
              {productCategories.map((item) => (
                <Nav.Item as="li">
                  <Nav.Link
                    className="category-name"
                    value={item.productcategoryName}
                    data={item.productcategoryName}
                    id={item.productcategoryId}
                    description={item.productcategoryDesc}
                    href="#"
                    onClick={handleCategory}
                  >
                    {item.productcategoryName}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Row> */}

          <div className="searchbox">
            <Col md="12" lg="9" className="">
              <div className="form-group">
                <input
                  type="text"
                  class="form-control search-input"
                  value={inputValue}
                  onChange={searchProducts}
                  placeholder={`Search here`}
                  onFocus={() => dispatch(setTextFilter(""))}
                />
                <SearchIcon className="search-icon" />
              </div>
            </Col>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};
