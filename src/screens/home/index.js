import React, { FC, Component } from "react";
import { Link } from "react-router-dom";
import mainPhoto from "../../assets/home.png";




class Home extends Component {
  render() {
    return (
      <div className="main-photo">
          <img src={mainPhoto} ></img>
      </div>
    );
  }
}

export default Home;
