import React, { Component } from "react";
import mainPhoto from "../../assets/career.png";

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
