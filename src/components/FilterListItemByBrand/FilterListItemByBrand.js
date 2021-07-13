import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./FilterListItemByBrand.scss";
import {
  setCheckboxFilter,
  removeCheckboxFilter,
} from "../../state/actions/filters";
// import { getAllPhones, getAllPhoneBrands } from "../../state/selectors/phones";
// import {
//   getAllAyurvedic,
//   getAllAyurvedicBrands,
// } from "../../state/selectors/ayurvedic";
// import {
//   getAllSpritual,
//   getAllSpritualBrands,
// } from "../../state/selectors/spritual";
// import { getAllPhysio, getAllPhysioBrands } from "../../state/selectors/physio";
// import {
//   getAllHomeopathy,
//   getAllHomeopathyBrands,
// } from "../../state/selectors/homeopathy";
// import {
//   getAllFashions,
//   getAllFasionBrands,
// } from "../../state/selectors/fashions";

const FilterListItemByBrand = ({ category }) => {
  // const ayurvedic = useSelector(getAllAyurvedic);
  // const ayurvedicBrands = useSelector(getAllAyurvedicBrands);
  // const spritual = useSelector(getAllSpritual);
  // const spritualBrands = useSelector(getAllSpritualBrands);
  // const physio = useSelector(getAllPhysio);
  // const physioBrands = useSelector(getAllPhysioBrands);
  // const homeopathy = useSelector(getAllHomeopathy);
  // const homeopathyBrands = useSelector(getAllHomeopathyBrands);
  // const phones = useSelector(getAllPhones);
  // const phoneBrands = useSelector(getAllPhoneBrands);
  // const fashions = useSelector(getAllFashions);
  // const fashionsBrands = useSelector(getAllFasionBrands);
  const dispatch = useDispatch();
  // const [allPhones, setAllPhones] = useState([]);
  // const [allPhoneBrands, setAllPhoneBrands] = useState([]);

  const handleFilterBrand = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setCheckboxFilter(value));
    } else {
      dispatch(removeCheckboxFilter(value));
    }
  };

  const brandsItemsCount = {};
  // allPhones.forEach((phone) => {
  //   brandsItemsCount[phone.brand] = brandsItemsCount[phone.brand] + 1 || 1;
  // });
  // const manageCategoryChangeData = () => {
  //   console.log(category);
  //   if (category === "fashion") {
  //     setAllPhoneBrands(fashionsBrands);
  //     setAllPhones(fashions);
  //   } else if (category === "footwares") {
  //     setAllPhoneBrands(phoneBrands);
  //     setAllPhones(phones);
  //   } else if (category === "spritual") {
  //     setAllPhoneBrands(spritualBrands);
  //     setAllPhones(spritual);
  //   } else if (category === "physio") {
  //     setAllPhoneBrands(physioBrands);
  //     setAllPhones(physio);
  //   } else if (category === "homeopathy") {
  //     setAllPhoneBrands(homeopathyBrands);
  //     setAllPhones(homeopathy);
  //   } else if (category === "ayurvedic") {
  //     setAllPhoneBrands(ayurvedicBrands);
  //     setAllPhones(ayurvedic);
  //   } else {
  //     setAllPhoneBrands(phoneBrands);
  //     setAllPhones(phones);
  //   }
  // };
  // useEffect(() => {
  //   manageCategoryChangeData();
  // }, [category]);
  return <Fragment></Fragment>;
};

export default FilterListItemByBrand;
