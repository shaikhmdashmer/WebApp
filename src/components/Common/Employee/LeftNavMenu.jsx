import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import * as QueryString from "query-string";
import { useLocation, Link } from "react-router-dom";
import {
  getAllCategories,
  getSelectedCategory,
} from "../../../state/selectors/categories";
import { setTextFilter } from "../../../state/actions/filters";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedCategoryLevel2,
  setSelectedCategoryLevel3,
} from "../../../state/actions/categories";
import "./LeftNavMenu.css";

export const LeftNavMenu = ({ currItem, classNameTop, firstIndex }) => {
  const dispatch = useDispatch();
  const params = QueryString.parse(useLocation().search);
  const selector = useSelector(getAllCategories);
  const selecteorCatLevel1 = useSelector(getSelectedCategory);
  const [level3, setLevel3] = useState();
  const [level2Change, setLevel2Change] = useState(false);

  const manageSelectedCategory = (cat2, cat3) => {
    dispatch(setTextFilter(""));
    const els = document.getElementById(cat2);
    els && els.click();
    dispatch(setSelectedCategoryLevel2(cat2));
    dispatch(setSelectedCategoryLevel3(cat3));
  };
  const handleSelectedCategory = (e) => {
    manageSelectedCategory(e.target.name, e.target.id);
  };
  const handleSelectedParentTab = (e) => {
    dispatch(setSelectedCategoryLevel2(params.Category2));
    dispatch(setSelectedCategoryLevel3(params.Category3));
    // setLevel2Change(!level2Change);
  };

  useEffect(() => {
    const filterCategoriesData = selector.filter(
      (cat) => cat.ParentId == currItem.CategoryId
    );
    setLevel3(filterCategoriesData);

    if (params.Category2 === filterCategoriesData[0].CategoryId) {
      setLevel2Change(true);
    } else {
      setLevel2Change(false);
    }
    // if (firstIndex === 0) {
    //   manageSelectedCategory(
    //     currItem.CategoryId,
    //     filterCategoriesData[0].CategoryId
    //   );
    // }
  }, [currItem]);
  useEffect(() => {
    if (params.Category2 == currItem.CategoryId) {
      setLevel2Change(true);
    } else {
      setLevel2Change(false);
    }
  }, [params.Category2, params.Category3]);
  useEffect(() => {
    return () => {
      dispatch(setSelectedCategoryLevel2(0));
      dispatch(setSelectedCategoryLevel3(0));
    };
  }, []);
  return (
    <React.Fragment>
      <div className={`btn-div`}>
        {level3 && (
          <Link
            id={currItem.CategoryId}
            className={`${classNameTop}`}
            to={`homecommon${selecteorCatLevel1}?Category1=${selecteorCatLevel1}&Category2=${currItem.CategoryId}&Category3=${level3[0].CategoryId}`}
            onClick={handleSelectedParentTab}
            variant="light"
          >
            {currItem.CategoryName}
          </Link>
        )}
      </div>
      {level2Change && (
        <div
          className={`${level2Change} ? "nav-menu-display" : "nav-menu-hide"`}
        >
          <Nav id="nav-menu">
            {level3 &&
              level3.map((level3Cat) => (
                <Link
                  id={level3Cat.CategoryId}
                  name={level3Cat.ParentId}
                  className={`nav-sub-menu ${
                    level3Cat.CategoryId == params.Category3
                      ? "activeSubTabs"
                      : ""
                  }`}
                  to={`homecommon${params.Category1}?Category1=${params.Category1}&Category2=${level3Cat.ParentId}&Category3=${level3Cat.CategoryId}`}
                  onClick={handleSelectedCategory}
                >
                  {level3Cat.CategoryName}
                </Link>
              ))}
          </Nav>
        </div>
      )}
    </React.Fragment>
  );
};
