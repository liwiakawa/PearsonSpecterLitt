import React, { FC, Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-custom-left"> 
        <a href="/about">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/about">TEAM</a>

         </div>
        <div className="logo">
          <img src={logo} ></img>
      </div>
      <div className="nav-custom-right"> 
      <a href="/about">SERVICES</a>
      <a href="/about">CAREER</a>
      <a href="/about">CONTACT</a>
       </div>
      </div>
    );
  }
}

export default Nav;