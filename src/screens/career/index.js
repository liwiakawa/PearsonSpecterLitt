import React, { Component } from "react";
import mainPhoto from "../../assets/career.svg";

class Career extends Component {
  render() {
    return (
      <div className="main-photo">
        <img src={mainPhoto}></img>
      </div>
    );
  }
}

export default Career;
