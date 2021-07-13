import React from "react";
import { Dropdown, Container, Button } from "react-bootstrap";
import { SectionTitle } from "../Common/SectionTitle";
import { AboutParagraph } from "../Common/AboutParagraph";
import { WhyChooseSection } from "../Common/WhyChooseSection";
import { ProductOverview } from "../Common/ProductOverview";
import { getSelectedProduct } from "../../state/selectors/products";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const selectedProduct = useSelector(getSelectedProduct);
  return (
    <React.Fragment>
      <ProductOverview
        productDetailThumbnail1="product-1.png"
        productDetailThumbnail2="product-2.png"
        productDetailThumbnail3="product-3.png"
        productDetailThumbnail4="product-1.png"
        productDetailBanner="product-1.png"
        productOverviewTitle="selectedProduct.name"
        selectedProduct={selectedProduct}
      />
    </React.Fragment>
  );
};
