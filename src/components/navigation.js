import React, { FC, Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-custom-left"> 
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/team">TEAM</a>

         </div>
        <div className="logo">
        <a href="/"><img src={logo} ></img>
          </a>
      </div>
      <div className="nav-custom-right"> 
      <a href="/services">SERVICES</a>
      <a href="/career">CAREER</a>
      <a href="/contact">CONTACT</a>
       </div>
      </div>
    );
  }
}

export default Nav;