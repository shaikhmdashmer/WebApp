import React, {useEffect, useState} from "react";
import {  Link,  BrowserRouter as Router } from "react-router-dom";


export const NavDynamicMenuLink=({ label, to, activeOnlyWhenExact })=> {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>
        {match && "> "}
        <Link to={to}>{label}</Link>
      </div>
    );
  }
  