import React from "react";
import("../header/Header");

const Header = () => {

  return (
    <header id="navbarHome">
      <a href="#" className="brand">
        QPID
      </a>
      <div className="menu-btn" />
      <nav className="navigation">
        <ul className="navigation-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Suscripciones</a>
          </li>
          <li>
            <a href="#">¿Cómo funciona?</a>
          </li>
          <li>
            <a href="#">Sobre nosotros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
