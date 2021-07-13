import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchBoxByCategory.scss";
import { setTextFilter } from "../../state/actions/filters";
import { getSearchBoxInput } from "../../state/selectors/filters";

export const SearchBoxByCategory = ({ category }) => {
  const inputValue = useSelector(getSearchBoxInput);
  const dispatch = useDispatch();

  const searchPhone = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
  };

  return (
    <input
      className="search-box--input inputSearch"
      type="text"
      value={inputValue}
      onChange={searchPhone}
      placeholder={`Search ${category}`}
      onFocus={() => dispatch(setTextFilter(""))}
    />
  );
};
