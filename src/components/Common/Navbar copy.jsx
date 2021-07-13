import React from "react";
import imgLogo from "../../img/pickupbizzlogo.jpg";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Contacts } from "../Contacts/Contacts";
import { AboutUs } from "../AboutUs/AboutUs";
import { Blog } from "../Blog/Blog";
import { Technology } from "../Technologies/Technology";
import { Services } from "../Services/Services";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Navbarlist = () => {
  return (
    <Container>
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar expand="lg">
                <Navbar.Brand href="#home">
                  <img
                    src={imgLogo}
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt=""
                  />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/services">SERVICES</Nav.Link>
                    <Nav.Link href="/technologies">TECHNOLOGIES</Nav.Link>
                    <Nav.Link href="/Contacts">CONTACT US</Nav.Link>
                    <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
                    <Nav.Link href="/blog">BLOG</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route path="/Contacts">
                  <Contacts />
                </Route>
                <Route path="/AboutUs">
                  <AboutUs />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/technologies">
                  <Technology />
                </Route>
                <Route path="/services">
                  <Services />
                </Route>{" "}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </Container>
  );
};
