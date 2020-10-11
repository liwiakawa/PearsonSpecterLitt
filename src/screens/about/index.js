import React, { Component } from "react";
import Title from "../../components/title";
import Description from "../../components/description";
import city from "../../assets/city.png";
import city2 from "../../assets/city2.png";
import city3 from "../../assets/city3.png";
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import MultipleItems from "../../components/slider.js";
import Footer from "../../components/footer";

class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="about-photo">
          <div className="about-photo-container"></div>
        </section>
        <section className="psl">
          <div className="psl-container">
            <Title>About our firm</Title>
            <Description>
              Pearson Hardman LLP is one of the top three major New York City
              law firms. Established in 2003 by Daniel Hardman and Jessica
              Pearson after they took over control of Gordon Schmidt Van Dyke,
              Hardman operated as the firm's leader until his wife become sick.
              After that Hardman was stepping down and naming Jessica as his
              success in 2007. She became the firm's newest managing partner.{" "}
            </Description>
            <Description>
              The firm was renamed as Pearson Specter upon Harvey's promotion to
              name partner. Pearson Specter Litt when Louis Litt became a name
              partner.
            </Description>
            <div className="city-photos">
              <img src={city} alt="Suit" />
              <img src={city2} alt="Suit" />
              <img src={city3} alt="Suit" />
            </div>
          </div>
        </section>
        <section className="why-choose">
          <Title>Why choose Pearson Specter Litt?</Title>
          <div className="why-choose-grid">
            <div className="card-why">
              <img className="icon-custom" src={icon} alt="Suit" />
              <div className="icon-title">Creativity</div>
              <Description>
                We view our legal services to be a part of a problem-solving
                team. As members of that team, it is our obligation to be
                creative.
              </Description>
            </div>
            <div className="card-why">
              <img className="icon-custom" src={icon2} alt="Suit" />
              <div className="icon-title">Expertise</div>
              <Description>
                We are public law specialists, and our expertise encompasses
                virtually all areas of law that may be presented to a public
                agency.
              </Description>
            </div>
            <div className="card-why">
              <img className="icon-custom" src={icon3} alt="Suit" />
              <div className="icon-title">Focus</div>
              <Description>
                We are not a large bureaucracy. Our attorneys enjoy a
                collaborative working relationship with each other and with the
                clients of the Firm.
              </Description>
            </div>
          </div>
        </section>
        <section className="our-clients">
          <Title>Our clients</Title>
          <MultipleItems></MultipleItems>
        </section>
        
      </div>
    );
  }
}

export default About;
