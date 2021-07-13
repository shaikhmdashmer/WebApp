import React from "react";
import "./FilterListBrand.scss";
import FilterListItemByBrand from "../FilterListItemByBrand/FilterListItemByBrand";

const FilterListBrand = ({ category }) => {
  return (
    <div className="check-box">
      <FilterListItemByBrand category={category} />
    </div>
  );
};

export default FilterListBrand;
