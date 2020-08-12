import React, { Component } from "react";
import mainPhoto from "../../assets/contact.svg";

class Contact extends Component {
  render() {
    return (
      <div className="main-photo">
        <img src={mainPhoto}></img>
      </div>
    );
  }
}

export default Contact;
