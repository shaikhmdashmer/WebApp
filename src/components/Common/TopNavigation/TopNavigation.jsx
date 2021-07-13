import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../TopNavigation/TopNavigation.css";

export const TopNavigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="nav-bg menufixed menu-theme"
    >

      
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="navclass" href="#">
              AICTE Approvals
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              OU & JNTUH Approvals
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              SBTET Approvals
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              Grievence Redressel cell
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              NSAKCET News Blog
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              Campus Placement
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              Student corner
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              Alumni
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              NAAC
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              IQAC
            </Nav.Link>

            <Nav.Link className="navclass" href="#">
              Online Fee Payment
            </Nav.Link>

            <Nav.Link
              className="navclass"
              href="https://referenceglobe.com/eamcet/online_test.php?college_id=MTI4MzI=&college_name=TmF3YWIgc2hhaCBBbGFtIGtoYW4gY29sbGVnZSBvZiBFbmcgJlRlY2g"
            >
              EAMCET & JEE Mock Test
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
