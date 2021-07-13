import React from "react";
import PropTypes from "prop-types";
import { ProductBox } from "../Common/ProductBox";
import "./ProductGridItem.styles.scss";

const ProductGridItem = ({
  product,
  index,
  category,
  handleShow,
  handleSelectedProduct,
}) => {
  return (
    <ProductBox
      productThumbnail={product.picture}
      productboxname={`${product.name
        .replace(/&amp;/g, "&")
        .substring(0, 20)} ${product.name.length > 20 ? "..." : ""}`}
      productboxdescription={
        product.shortDescription &&
        `${product.shortDescription.replace(/&amp;/g, "&").substring(0, 200)} ${
          product.shortDescription.length > 200 ? "..." : ""
        }`
      }
      handleShow={handleShow}
      handleSelectedProduct={handleSelectedProduct}
      product={product}
    />
  );
};

ProductGridItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    stats: PropTypes.shape({
      size: PropTypes.string,
      resolution: PropTypes.string,
      GPU: PropTypes.string,
      CPU: PropTypes.string,
      camera: PropTypes.string,
      battery: PropTypes.string,
    }),
  }),
};

export default ProductGridItem;
