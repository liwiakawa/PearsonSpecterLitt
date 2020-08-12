import React, { Component } from "react";
import mainPhoto from "../../assets/about.svg";

class About extends Component {
  render() {
    return (
      <div className="main-photo">
        <img src={mainPhoto}></img>
      </div>
    );
  }
}

export default About;
