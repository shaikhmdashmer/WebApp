import React, { useState, useEffect } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { AddCategoryComp } from "../AddCategoryComp/AddCategoryComp";
import { AddBrand } from "../AddBrand/AddBrand";
import { NavbarCategory } from "../HomePage/NavbarCategory";
import { CategoryWithBrandsReducer } from "../../state/reducers/CategoryReducer";

import "./AddProduct.css";

export const AddProduct = () => {
  const [prodName, setprodName] = useState(" ");
  const [id, setid] = useState(" ");
  const [prize, setprize] = useState(" ");
  const [selectedCategoryBrands, setSelectedCategoryBrands] = useState([]);
  const handleOnChangeCategory = (e) => {
    const myData = CategoryWithBrandsReducer.CategoryData.filter(
      (data) => data.Category === e.target.value
    );
    setSelectedCategoryBrands(myData[0].brands);
  };

  useEffect(() => {
    console.log("Selected Brands :::", selectedCategoryBrands);
  }, [selectedCategoryBrands]);
  return (
    <Container style={{ marginTop: "100px" }}>
      <center>
        <h1>Add New Product</h1>
      </center>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="prodName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              value={prodName}
              onChange={(e) => setprodName(e.target.value)}
              onFocus={() => setprodName(" ")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="Id">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product Id"
              value={id}
              onChange={(e) => setid(e.target.value)}
              onFocus={() => setid(" ")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="prize">
            <Form.Label>Prize</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Prize"
              value={prize}
              onChange={(e) => setprize(e.target.value)}
              onFocus={() => setprize(" ")}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Select Category</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => handleOnChangeCategory(e)}
            >
              {CategoryWithBrandsReducer.CategoryData.map((item) => (
                <option>{item.Category}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button
            href="/AddCategoryComp"
            className="btn1"
            onClick={AddCategoryComp}
          >
            +
          </Button>
          <Col></Col>
          <Form.File id="inputimg" marginLeft="200px">
            <Form.File.Label>Select Product Image</Form.File.Label>
            <Form.File.Input />
          </Form.File>
          <Col></Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="brand">
            <Form.Label href="/NavbarCategory" onSelect={NavbarCategory}>
              Select Brand
            </Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              {selectedCategoryBrands.map((item) => {
                return <option>{item}</option>;
              })}
              {console.log(selectedCategoryBrands)}
            </Form.Control>
          </Form.Group>

          <Button className="btn1" href="/AddBrand" onClick={AddBrand}>
            +
          </Button>
          <Col></Col>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button style={{ marginLeft: "20px" }} variant="primary" type="cancel">
          Cancel
        </Button>
      </Form>
    </Container>
  );
};
