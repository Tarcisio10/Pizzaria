import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import categories from "../config/categories";
import "./categories.css";

const Header = () => {
  return (
    <Nav className="categories" style={{ backgroundColor: "#232525" }}>
      {categories.map(category => (
        <NavItem key={category.id}>
          <Link to={`/categories/${category.id}`} className="nav-link">
            {category.name}
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};

export default Header;
