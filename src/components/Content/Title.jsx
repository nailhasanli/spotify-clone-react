import React from "react";
import { NavLink } from "react-router-dom";
const Title = ({title, to=false}) => {
  return (
    <header className="box-header">
      <NavLink to={to ?? "#"}>
        <h3>{title}</h3>
      </NavLink>
      {to && (
        <NavLink className="header-link" to={to}>
          SEE ALL
        </NavLink>
      )}
    </header>
  );
};

export default Title;
