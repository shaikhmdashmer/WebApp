import React from "react";
import imgLogo from "../../img/pickupbizzlogo.jpg";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import brandLogo from "../../img/nsak-logo.png";

export const NavbarList = () => {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="nav-bg menufixed"
      >
        <div className="container-fluid">
          <Navbar.Brand href="/home" className="brandname">
            <img className="brand-logo" src={brandLogo} alt="ofi films" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-element" href="#">
                Campus Placement
              </Nav.Link>
              <Nav.Link className="nav-element" href="/services">
                Student Corner
              </Nav.Link>
              <Nav.Link className="nav-element" href="/aboutus">
                SBTET Approvals
              </Nav.Link>
              <Nav.Link className="nav-element" href="/contacts">
                NAAC
              </Nav.Link>
              <Nav.Link className="nav-element" href="/contacts">
                IQAC
              </Nav.Link>
              {/* <Nav.Link className="nav-element" href="/contacts">
                Events
              </Nav.Link>
              <Nav.Link className="nav-element" href="/contacts">
                Gallery
              </Nav.Link>
              <Nav.Link className="nav-element" href="/contacts">
                Contact Us
              </Nav.Link> */}
            </Nav>
            {/* <Nav className="ml-auto">
              <Nav.Link className="companyname" href="/home">
                nsakcet
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};
