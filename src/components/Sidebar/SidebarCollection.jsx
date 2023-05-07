import React from "react";
import Icon from "../../Icons";
import { NavLink } from "react-router-dom";

const SidebarCollection = ({title, to, name, spanClass}) => {
  return (
    <>
      <li>
        <NavLink to={to} >
          <span className={spanClass}>
            <Icon name={name} size={12}/>
          </span>
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default SidebarCollection;
