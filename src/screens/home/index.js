import React, { FC, Component } from "react";
import { Link } from "react-router-dom";
import mainPhoto from "../../assets/home.png";




class Home extends Component {
  render() {
    return (
      <div className="main-photo">
          {/* <img src={mainPhoto} ></img> */}
          <div className="buttons"> 
            <div className="button-action">
              KNOW MORE
            </div>
            <div className="button-basic">
              HIRE US
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
