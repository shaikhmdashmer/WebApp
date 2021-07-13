import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  getSearchBoxInput,
  getAllFilters,
} from "../../state/selectors/filters";
import ProductGrid from "../ProductGrid/ProductGrid";
import {FeaturedProductsList} from "../Common/FeaturedProductsList";
import { NavbarCategory } from "./NavbarCategory";
import {
  setTextFilter,
  clearFilters,
  removeCheckboxFilter,
} from "../../state/actions/filters";
import { getAllProducts } from "../../state/selectors/products";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSubscriber,
  getProductCategories,
} from "../../services/subscriberService";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";
import { subscriberRegistrationNo } from "../../config.json";

export const ProductsList = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [categoryDescription, setCategoryDescription] = useState("1");
  const [categoryName, setCategoryName] = useState("1");
  const [show, setShow] = useState(false);
  const [showCategoryDesc, setShowCategoryDesc] = useState(false);
  const handleShow = () => setShow(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  const filtProducts = useSelector(getAllProducts);
  const manageCategoryChangeData = () => {
    setFilteredProducts(filtProducts);
  };

  const seAllCategoriesData = async () => {
    const result = await getProductCategories(
      subscriberRegistrationNo
    );
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
  }, [categoryId, inputAllFilter, filtProducts]);

  const getFilteredCategoriesUI = async (catId) => {
    if (allCategories.length > 0) {
      const category = allCategories.filter(
        (item) => item.productcategoryId === Number(catId)
      );
      if(category.length>0)
      await setCategoryDescription(category[0].productcategoryDesc);
    }
  };

  // useEffect(() => {
  //   getFilteredCategoriesUI();
  // }, [categoryId, allCategories]);

  const params = QueryString.parse(useLocation().search);
  useEffect(() => {
    setSubscriberData();
    seAllCategoriesData();
    setCategoryId(params.catId);
    getFilteredCategoriesUI(params.catId);
  }, []);

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
        {/* {categoryId !== undefined && 
        <Container>
        <div className="titleContactInfoCategory category-p category-detail-d">
          {showCategoryDesc
            ? parse(categoryDescription.replace("&amp;", "&"))
            : parse(
                categoryDescription.replace("&amp;", "&").substring(0, 240)
              )}
          <a
            href="#"
            className="btn-default  btn4"
            onClick={() => setShowCategoryDesc(!showCategoryDesc)}
          >
            {!showCategoryDesc ? "More..." : "Less..."}
          </a>
        </div>

        <div className="titleContactInfoCategory category-p category-detail-m">
          {showCategoryDesc
            ? parse(categoryDescription.replace("&amp;", "&"))
            : parse(
                categoryDescription.replace("&amp;", "&").substring(0, 90)
              )}
          <a
            href="#"
            className="btn-default  btn4"
            onClick={() => setShowCategoryDesc(!showCategoryDesc)}
          >
            {!showCategoryDesc ? "More..." : "Less..."}
          </a>
        </div>

        </Container>
} */}
        {categoryId === undefined ?   
        <FeaturedProductsList />
        
          :
        
          <ProductGrid
            filteredProducts={filteredProducts}
            category={categoryId}
            handleShow={handleShow}
            show={show}
          />
      
}
      </div>
    </React.Fragment>
  );
};
