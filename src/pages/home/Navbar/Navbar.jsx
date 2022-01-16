import React from "react";

const Navbar = () => {
  return (
    <header id="navbarHome">
      <div className="topnav" id="myTopnav">
        <a href="#home" className="brandHome">
          QPID
        </a>
        <a href="#news" className="menuItem">
          <i className="fa fa-fire-alt fa-lg" />
        </a>
        <a href="#contact" className="menuItem">
          <i className="fa fa-heart fa-lg" />
        </a>
        <a href="#about" className="menuItem">
          <i className="fa fa-comment fa-lg" />
        </a>
        <a
          href="javascript:void(0);"
          className="icon"
          onclick="navbarResponsive()"
        >
          <i className="fa fa-bars" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
