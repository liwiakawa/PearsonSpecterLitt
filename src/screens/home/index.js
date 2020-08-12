import React, { FC, Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main-photo">
          <div className="buttons">      
          <a href="/services"><div className="button-basic">KNOW MORE</div></a>
            <a href="/contact"><div className="button-action">HIRE US</div></a>
          </div>
      </div>
    );
  }
}

export default Home;
