import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { CategoryWithBrandsReducer } from "../../state/reducers/CategoryReducer";
export const AddBrand = () => {
  const [newBrand, setnewBrand] = useState(" ");
  const [product, setproduct] = useState(" ");
  return (
    <div>
      <Form>
        <Form.Group as={Col} controlId="newB">
          <Row>
            <Col></Col>
            <Col>
              <Form.Label>New Brand</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                padding="15 rem"
                value={newBrand}
                placeholder="Enter Brand Here"
                onChange={(e) => setnewBrand(e.target.value)}
                onFocus={() => setnewBrand(" ")}
              />
            </Col>

            <Col>
              <Form.Label>Enter New Product Name</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                value={product}
                placeholder="Enter Product Here"
                onChange={(e) => setproduct(e.target.value)}
                onFocus={() => setproduct("")}
              />
            </Col>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Select Category</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                {CategoryWithBrandsReducer.CategoryData.map((item) => (
                  <option>{item.Category}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Form.File id="inputimg" margin-left="100px">
              <Form.File.Label>Select Product Image</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};
