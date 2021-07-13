import React, { useState, useEffect } from "react";
import { SectionTitle } from "../Common/SectionTitle";
import { Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {FeaturedProducts} from "../Common/FeaturedProducts";
import { useDispatch } from "react-redux";
import { setSelctedProduct } from "../../state/actions/products";
import { getHomeDisplayProducts } from "../../services/subscriberService";
import { subscriberRegistrationNo } from "../../config.json";

export const FeaturedProductsList = () => {
  const [homeDisplayProducts, setHomeDisplayProducts] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSelectedProduct = (product) => {
    dispatch(setSelctedProduct(product));
    history.push("/productdetail");
  };

  const getDisplayProducts = async () => {
    const products = await getHomeDisplayProducts(
      subscriberRegistrationNo
    );
    products && setHomeDisplayProducts(products.data[0]);
  };
  
  
  useEffect(() => {
    getDisplayProducts();
  }, []);
  return (
    <React.Fragment>
      <SectionTitle sectionheading="Featured Products" />
      <Container>
        <Row>
         
              <FeaturedProducts 
              productThumbnail="product-21.jpg"
              productboxname="Curtains"
              catId="8"
              productboxdescription="Curtain has been transformed in recent years & it's available in a wide range of stylish hanging systems like Eyelet Curtains, American Pleated, Loop Curtains, etc."
              />

<FeaturedProducts 
              productThumbnail="product-7.jpg"
              productboxname="Mattress"
              catId="15"
              productboxdescription="We deals in all type of Mattress from Homemade(made by us) to the Branded one which includes Kurlon, Sleepwell."
              />

<FeaturedProducts 
              productThumbnail="product-8.jpg"
              productboxname="Sofa"
              catId="12"
              productboxdescription="We stock some Readymade Sofa at our Store & make customize Sofa as per the requirement. We also do Cleaning & Repairing of Sofa."
              />
              <FeaturedProducts 
              productThumbnail="product-9.jpg"
              productboxname="Wallpaper"
              productboxdescription="Wallpaper is a kind of material used to cover and decorate the interior walls of homes, offices, cafes, etc. it is one aspect of interior decoration."
              catId="16"
              />
              <FeaturedProducts 
              productThumbnail="product-10.jpg"
              productboxname="Blinds"
              catId="10"
              productboxdescription="We deals in all type of Blinds from Local to the Branded one. There are various types of Blinds like Vertical, Roman, Roller, Chick, etc. as per the need."
              />
              <FeaturedProducts 
              productThumbnail="product-11.jpg"
              productboxname="Services"
              catId="14"
              productboxdescription="Services of Flooring are available in a variety of designs and textures for different applications for both residential and commercial use. "
              />
               
              
          
        </Row>
      </Container>
      

      
    </React.Fragment>
  );
};
