import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";
import { Row, Navbar } from "react-bootstrap";
import { getAllCategories } from "../../../state/selectors/categories";
import { LeftNavMenu } from "./LeftNavMenu";

export const LeftNavigation = () => {
  const [data, setData] = useState();
  const selector = useSelector(getAllCategories);
  const params = QueryString.parse(useLocation().search);
  useEffect(() => {
    const filterCategoriesData = selector.filter(
      (cat) => cat.ParentId == params.Category1
    );
    setData(filterCategoriesData);
  }, [params.Category1]);

  return (
    <Row>
      <div className="main_Div Menu">
        <Navbar expand="lg">
          <Navbar.Toggle
            className="navBarToggle"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="vertical-menu">
              {data &&
                data.map((item, index) => {
                  return (
                    <LeftNavMenu
                      currItem={item}
                      firstIndex={index}
                      classNameTop={`${
                        item.CategoryId == params.Category2
                          ? "activeSuperTabs"
                          : ""
                      }`}
                    />
                  );
                })}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Row>
  );
};
