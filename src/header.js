import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      style={{ justifyContent: "space-between" }}
      color="dark"
      light
      expand="md"
    >
      <Link to="/" className="navbar-brand">
        <img
          style={{ width: 42, marginRight: 8 }}
          src="https://firebasestorage.googleapis.com/v0/b/imagensfirebaseweb.appspot.com/o/LogoPizza.png?alt=media&token=22e54e45-45b6-4b0c-88f1-a324778c2aee"
        />
      </Link>
      <Link to="/" className="navbar-brand text-white">
        C & T PIZZARIA
      </Link>
      <Link to="/cart" className="nav-link">
        <img
          style={{ width: 42 }}
          src="https://firebasestorage.googleapis.com/v0/b/imagensfirebaseweb.appspot.com/o/carrinho.png?alt=media&token=7a69b5d1-6b60-43ad-a805-60fa4472d54d"
        />
      </Link>
    </Navbar>
  );
};

export default Header;
