import React, { useState, useEffect, Fragment } from "react";
import "./ProductGrid.style.scss";
import { useHistory } from "react-router-dom";
import ProductGridItem from "../ProductGridItem/ProductGridItem";
import { Row, Col, Container, Button } from "react-bootstrap";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { useDispatch } from "react-redux";
import { setSelctedProduct } from "../../state/actions/products";

const ProductGrid = ({ filteredProducts, category, handleShow, show }) => {
  // Set pagination and limit products 25 per page
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(25);
  // const [selectedProduct, setSelectedProduct] = useState("");
  let selectedProduct = "test";
  const history = useHistory();
  const handleSelectedProduct = (product) => {
    dispatch(setSelctedProduct(product));
    history.push("/productdetail");
  };
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstPost,
    indexOfLastProduct
  );
  const dispatch = useDispatch();

  // Get pages
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (filteredProducts.length < 25) {
      setCurrentPage(1);
    }
  }, [filteredProducts]);

  // Change page
  const paginate = (number) => setCurrentPage(number);

  return (
    <Fragment>
      {!show ? (
        <Fragment>
          <Container>
            <Row>
              {currentProducts.map((product, index) => (
                <ProductGridItem
                  product={product}
                  key={product.id}
                  index={index}
                  category={category}
                  handleShow={handleShow}
                  handleSelectedProduct={handleSelectedProduct}
                />
              ))}
            </Row>
          </Container>
          <div className="pagination">
            <ul>
              {filteredProducts.length > 25
                ? pageNumbers.map((number) => (
                    <li
                      className={currentPage === number ? "active" : ""}
                      key={number}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </li>
                  ))
                : null}
              <div className="bar"></div>
            </ul>
          </div>
        </Fragment>
      ) : (
        selectedProduct !== undefined && (
          <ProductDetails selectedProduct={selectedProduct} />
        )
      )}
    </Fragment>
  );
};

export default ProductGrid;
