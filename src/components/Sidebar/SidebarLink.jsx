import React from "react";
import Icon from "../../Icons";
import { NavLink, useMatch } from "react-router-dom";

export default function SidebarLink({ title, to, name, nameNotActive }) {
  return (
    <li>
      <NavLink to={to}>
        <span>
          <Icon name={useMatch(to) ? name : nameNotActive} />
        </span>
        {title}
      </NavLink>
    </li>
  );
}
