import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/blog" className="nav-link">
        Blog
      </NavLink>
    </nav>
  );
};

export default Navbar;
