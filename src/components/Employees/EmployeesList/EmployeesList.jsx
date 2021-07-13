import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  getSearchBoxInput,
  getAllFilters,
} from "../../../state/selectors/filters";
import EmployeeGrid from "../EmployeeGrid/EmployeeGrid";
import { FeaturedEmployeesList } from "../../Common/Employee/FeaturedEmployeesList";
import { NavbarCategory } from "./NavbarCategory";
import {
  setTextFilter,
  clearFilters,
  removeCheckboxFilter,
} from "../../../state/actions/filters";
import { getAllEmployees } from "../../../state/selectors/employees";
import { getSelectedCategoryLevel3 } from "../../../state/selectors/categories";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSubscriber,
  getEmployeeCategories,
} from "../../../services/subscriberService";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";
import { subscriberRegistrationNo } from "../../../config.json";
import { getMultipleFiles } from "../../../services/subscriberService";

export const EmployeesList = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [categoryDescription, setCategoryDescription] = useState("1");
  const [categoryName, setCategoryName] = useState("1");
  const [show, setShow] = useState(false);
  const [showCategoryDesc, setShowCategoryDesc] = useState(false);
  const handleShow = () => setShow(true);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const dispatch = useDispatch();
  const inputAllFilter = useSelector(getAllFilters);
  const handleCategory = (e) => {
    inputAllFilter.brand.forEach((element) => {
      dispatch(removeCheckboxFilter(element));
    });
    setCategoryId(e.target.id);
    setCategoryName(e.target.value);
    dispatch(setTextFilter(""));
    dispatch(clearFilters());
  };

  const filtEmployees = useSelector(getAllEmployees);
  const selectedCategoryLevel3 = useSelector(getSelectedCategoryLevel3);
  const manageCategoryChangeData = () => {
    setFilteredEmployees(filtEmployees);
  };

  const setAllCategoriesData = async () => {
    const result = await getEmployeeCategories(subscriberRegistrationNo);
    result && setAllCategories(result.data[0]);
  };
  const setSubscriberData = async () => {
    const parentregistrationno = subscriberRegistrationNo;
    const roletypedata = "SUBSCRIBER_ADMIN";
    const filtertype = "SUBSCRIBER";
    const records = [
      {
        filtertype: filtertype,
        parentregistrationno: parentregistrationno,
        roletype: roletypedata,
      },
    ];
    const buildRecords = JSON.stringify(records).replace(/"/g, '"');
    let response = null;
    try {
      response = await getAllSubscriber(buildRecords);
      if (response) {
        if (response.status === 200) {
          return response;
        } else {
          console.log(`Fetching of subscriber - failed!`);
        }
      } else {
        console.log("Fetching of subscriber - failed");
      }
    } catch (ex) {
      if (response) {
        if (ex.response && ex.response.status === 400) {
          const errors = {
            ...this.state.errors,
          };
          this.setState({
            errors,
          });
        }
      }
    }
  };

  useEffect(() => {
    manageCategoryChangeData();
  }, [categoryId, inputAllFilter, filtEmployees]);

  const getFilteredCategoriesUI = async (catId) => {
    if (allCategories && allCategories.length > 0) {
      const category = allCategories.filter(
        (item) => item.employeecategoryId === Number(catId)
      );
      if (category.length > 0)
        await setCategoryDescription(category[0].employeecategoryDesc);
    }
  };

  // useEffect(() => {
  //   getFilteredCategoriesUI();
  // }, [categoryId, allCategories]);

  // const getMultipleFilesImages = async () => {
  //   const resultImgages = await getMultipleFiles(
  //     "IMG",
  //     "1001",
  //     "88",
  //     "89",
  //     "92"
  //   );
  //   console.log(resultImgages);
  // };

  const params = QueryString.parse(useLocation().search);
  useEffect(() => {
    setSubscriberData();
    setAllCategoriesData();
    setCategoryId(params.Category3);
    getFilteredCategoriesUI(params.Category3);
  }, [params.Category1, params.Category2, params.Category3]);

  useEffect(() => {
    setSubscriberData();
    setAllCategoriesData();
    setCategoryId(selectedCategoryLevel3);
    getFilteredCategoriesUI(selectedCategoryLevel3);
    // getMultipleFilesImages();
  }, [selectedCategoryLevel3]);

  return (
    <React.Fragment>
      <div className="box">
        {!show && (
          <NavbarCategory
            handleCategory={handleCategory}
            categoryId={categoryId}
            categoryName={categoryName}
          />
        )}
        {params.Category3 == 70707070 ? (
          <FeaturedEmployeesList />
        ) : (
          <EmployeeGrid
            filteredEmployees={filteredEmployees}
            category={params.Category3}
            handleShow={handleShow}
            show={show}
          />
        )}
      </div>
    </React.Fragment>
  );
};
