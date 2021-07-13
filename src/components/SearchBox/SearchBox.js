import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchBox.scss";
import CartBox from "../CartBox/CartBox";
import { setTextFilter } from "../../state/actions/filters";
import { getSearchBoxInput } from "../../state/selectors/filters";
import { Form, FormControl } from "react-bootstrap";

const SearchBox = ({ category }) => {
  const inputValue = useSelector(getSearchBoxInput);
  const dispatch = useDispatch();

  const searchPhone = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
  };

  return (
    <div className="search-box">
      <CartBox />
      <h3>Search {category.toUpperCase()}</h3>
      <Form inline>
        <FormControl
          className="search-box--input"
          type="text"
          value={inputValue}
          onChange={searchPhone}
          placeholder="Search..."
        />
      </Form>
    </div>
  );
};

export default SearchBox;
