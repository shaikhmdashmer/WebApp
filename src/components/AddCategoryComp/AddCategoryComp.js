import React,{useState} from 'react';
import {Form,Button,Col, Row} from "react-bootstrap";
export const AddCategoryComp = () => {
    const [newCategory,setnewCategory]=useState(" ");

    
    
    return ( 
        <div>
        
        <Form>
        <Form.Group as={Col} controlId="new">
            <Row>
            <Col>
        
            <Form.Label>New Category</Form.Label>
            <Form.Control
              type="text"
            size="lg"
            padding="15 rem"
              value={newCategory}
              placeholder="Enter Category Here"
            
        
              onChange={(e) => setnewCategory(e.target.value)}
              onFocus={()=> setnewCategory("")} />
              </Col>
              <Col>
             
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              </Row>
              
<Button variant="primary" type="submit" >
    Submit
  </Button>
  </Form.Group>
</Form>
         
        </div>
        
     );
}
 
