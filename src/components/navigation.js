import React, { Component, useState } from "react";
import logo from "../assets/logo.svg";

const Nav = () => {
  const [menuState, setMenuState] = useState(" menu-off");

  const openMenu = () => {
    if (menuState === " menu-off") {
      setMenuState(" menu-open");
      console.log(menuState);
    } else if (menuState === " menu-open") {
      setMenuState(" menu-off");
      console.log(menuState);
    }
  };

  return (
    <div className="nav">
      <div className="menu" onClick={openMenu}>
        MENU
      </div>
      <div className={"hidden-menu" + menuState}>
        <a className="menu-button" href="/">
          Home
        </a>
        <a className="menu-button" href="/about">
          About
        </a>
        <a className="menu-button" href="/team">
          Team
        </a>
        <a className="menu-button" href="/services">
          Services
        </a>
        <a className="menu-button" href="/career">
          Career
        </a>
        <a className="menu-button" href="/contact">
          Contact
        </a>
      </div>
      <div className="nav-custom-left">
        <a className="nav-button" href="/">
          Home
        </a>
        <a className="nav-button" href="/about">
          About
        </a>
        <a className="nav-button" href="/team">
          Team
        </a>
      </div>
      <div className="logo">
        <a href="/">
          <img src={logo}></img>
        </a>
      </div>
      <div className="nav-custom-right">
        <a className="nav-button" href="/services">
          Services
        </a>
        <a className="nav-button" href="/career">
          Career
        </a>
        <a className="nav-button" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
