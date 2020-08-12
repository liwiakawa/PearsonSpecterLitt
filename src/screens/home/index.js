import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
      <div className="main-photo">
          <div className="buttons">      
          <a href="/services"><div className="button-basic">KNOW MORE</div></a>
            <a href="/contact"><div className="button-action">HIRE US</div></a>
          </div>
      </div>
      </div>
    );
  }
}

export default Home;
