import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLink = ({ link }) => {
  return (
    <NavLink to={link.link} onClick={() => window.scrollTo(0, 0)}>
      {link.name}
    </NavLink>
  );
};

export default NavBarLink;
