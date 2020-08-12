import React, { Component } from "react";
import mainPhoto from "../../assets/team.svg";

class Team extends Component {
  render() {
    return (
      <div className="main-photo">
        <img src={mainPhoto}></img>
      </div>
    );
  }
}

export default Team;
