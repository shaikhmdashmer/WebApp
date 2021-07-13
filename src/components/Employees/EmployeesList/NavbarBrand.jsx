import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

export const NavbarBrand = ({ handleBrand }) => {
  return (
    <div style={{ zoom: "150%" }}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#" id="fashion" onClick={handleBrand}>
                Adidas
              </Nav.Link>
              <Nav.Link href="#" id="clothes" onClick={handleBrand}>
                PUMA
              </Nav.Link>
              <Nav.Link href="#" id="footwares" onClick={handleBrand}>
                Reebok
              </Nav.Link>
              <Nav.Link href="#" id="toys" onClick={handleBrand}>
                Woodland
              </Nav.Link>
              <Nav.Link href="#" id="ayurvedic" onClick={handleBrand}>
                Bagi
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
