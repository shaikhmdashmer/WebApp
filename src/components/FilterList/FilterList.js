import React from "react";
import "./FilterList.scss";
import FilterListItem from "../FilterListItem/FilterListItem";

const FilterList = ({ category }) => {
  return (
    <div className="check-box">
      <h3>Filter by brand</h3>
      <FilterListItem category={category} />
    </div>
  );
};

export default FilterList;
