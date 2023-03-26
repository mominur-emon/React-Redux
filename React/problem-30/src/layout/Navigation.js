import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <NavLink to="/" className="Nav-link">
          Home
        </NavLink>

        <NavLink to="/about" className="Nav-link">
          About
        </NavLink>

        <NavLink to="/add-blog" className="Nav-link">
          Add Blog
        </NavLink>
      </ul>
    </nav>
  );
}
