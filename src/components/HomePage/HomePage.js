import React, { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import {
  getSearchBoxInput,
  getAllFilters,
} from "../../state/selectors/filters";
import ProductGrid from "../ProductGrid/ProductGrid";
import AddPhoneBtn from "../AddPhoneBtn/AddPhoneBtn";
import { NavbarCategory } from "./NavbarCategory";
import {
  setTextFilter,
  clearFilters,
  removeCheckboxFilter,
} from "../../state/actions/filters";
import { NavbarBrand } from "./NavbarBrand";
import { getFilteredPhones } from "../../state/selectors/phones";
import { getFilteredAyurvedic } from "../../state/selectors/ayurvedic";
import { getFilteredSpritual } from "../../state/selectors/spritual";
import { getFilteredPhysio } from "../../state/selectors/physio";
import { getFilteredHomeopathy } from "../../state/selectors/homeopathy";
import { getFilteredFashions } from "../../state/selectors/fashions";
import { getFilteredClothes } from "../../state/selectors/clothes";
import { getFilteredToys } from "../../state/selectors/toys";
import { getFilteredBooks } from "../../state/selectors/books";
import { getAllCategories } from "../../state/selectors/categories";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { getAllSubscriber } from "../../services/subscriberService";
import { getGenderMaster } from "../../services/genderMasterService";
import { subscriberRegistrationNo } from "../../config.json";

export const HomePage = () => {
  const [category, setCategory] = useState("ayurvedic");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const inputSearchData = useSelector(getSearchBoxInput);
  const inputAllFilter = useSelector(getAllFilters);

  const handleCategory = (e) => {
    inputAllFilter.brand.forEach((element) => {
      dispatch(removeCheckboxFilter(element));
    });
    setCategory(e.target.id);
    dispatch(setTextFilter(""));
    dispatch(clearFilters());
  };

  const filtFashions = useSelector(getFilteredFashions);
  const filtClothes = useSelector(getFilteredClothes);
  const filtPhones = useSelector(getFilteredPhones);
  const filtAyurvedic = useSelector(getFilteredAyurvedic);
  const filtSpritual = useSelector(getFilteredSpritual);
  const filtPhysio = useSelector(getFilteredPhysio);
  const filtHomeopathy = useSelector(getFilteredHomeopathy);
  const filtToys = useSelector(getFilteredToys);
  const filtBooks = useSelector(getFilteredBooks);
  const manageCategoryChangeData = () => {
    if (category === "fashion") setFilteredProducts(filtFashions);
    else if (category === "footwares") setFilteredProducts(filtPhones);
    else if (category === "ayurvedic") setFilteredProducts(filtAyurvedic);
    else if (category === "spritual") setFilteredProducts(filtSpritual);
    else if (category === "physio") setFilteredProducts(filtPhysio);
    else if (category === "homeopathy") setFilteredProducts(filtHomeopathy);
    else if (category === "clothes") setFilteredProducts(filtClothes);
    else if (category === "toys") setFilteredProducts(filtToys);
    else if (category === "books") setFilteredProducts(filtBooks);
    else setFilteredProducts(filtPhones);
  };

  const setSubscriberData = async () => {
    const roletypedata = "SUBSCRIBER_ADMIN";
    const filtertype = "SUBSCRIBER";
    const records = [
      {
        filtertype: filtertype,
        parentregistrationno: subscriberRegistrationNo,
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
  }, [category, inputSearchData, inputAllFilter]);
  const selectorCategoriesData = useSelector(getAllCategories);
  useEffect(() => {
    const filteredSuperMenu =
      selectorCategoriesData &&
      selectorCategoriesData.filter(
        (item) =>
          (item.ParentId === null || item.ParentId === 0) &&
          item.isDisplayCategory === 0
      );
  }, [selectorCategoriesData]);
  useEffect(() => {
    setSubscriberData();
  }, []);
  return (
    <React.Fragment>
      <NavbarCategory handleCategory={handleCategory} category={category} />
      <Container fluid>
        {filteredProducts && (
          <ProductGrid filteredPhones={filteredProducts} category={category} />
        )}
      </Container>
    </React.Fragment>
  );
};
