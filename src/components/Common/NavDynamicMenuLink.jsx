import React, {useEffect, useState} from "react";
import {  Link,  BrowserRouter} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export const NavDynamicMenuLink=({ label, to, activeOnlyWhenExact })=> {
    // let match = useRouteMatch({
    //   path: to,
    //   exact: activeOnlyWhenExact
    // });
  
    // return (
    //   <div className={match ? "active" : ""}>
        // <BrowserRouter basename="/">
            // <Nav.Link to={to}>{label}</Nav.Link>
        // </BrowserRouter>
        
    // );
  }
  