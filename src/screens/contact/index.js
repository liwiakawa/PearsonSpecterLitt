import React, { Component } from "react";
import mainPhoto from "../../assets/contact.svg";
import Title from "../../components/title";
import Description from "../../components/description";
import BasicTextFields from "../../components/form";
import GhostButton from "../../components/ghost-button";
import contactIcon from "../../assets/contact-icon.svg";
import contactIcon2 from "../../assets/contact-icon2.svg";
import contactIcon3 from "../../assets/contact-icon3.svg";
import MapContainer from "../../components/map";


class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <section className="contact-photo">
          <div className="contact-photo-container"></div>
        </section>
        <section className="contact-container">
          <Title>Tell us your story</Title>
          <div className="form-box">
            <BasicTextFields></BasicTextFields>
          </div>
          <GhostButton>Send message</GhostButton>
        </section>
        <section className="address-box">
          <div className="address-grid">
            <div className="address-card">
              <img className="contact-icon" src={contactIcon} alt="Suit" />
              <div className="contact-title">Adress</div>
              <div className="contact-text">Pearson Specter Litt </div>
              <div className="contact-text"> 601 E 54th Street </div>
              <div className="contact-text"> New York, NY 10000</div>
            </div>
            <div className="address-card">
              <img className="contact-icon" src={contactIcon2} alt="Suit" />
              <div className="contact-title">E-mail</div>
              <div className="contact-text">bestlawyers@pearson.com</div>
            </div>
            <div className="address-card">
              <img className="contact-icon" src={contactIcon3} alt="Suit" />
              <div className="contact-title">Phone</div>
              <div className="contact-text">123 456 789</div>
            </div>
          </div>
        </section>
        <div className="map-container">
        <MapContainer/>
        </div>
      </div>
    );
  }
}

export default Contact;
