import React, { Component } from "react";
import Title from "../../components/title";
import Description from "../../components/description";
import Footer from "../../components/footer";
import GhostButton from "../../components/ghost-button";
import career4 from "../../assets/career4.svg";
import career2 from "../../assets/career2.svg";
import career3 from "../../assets/career3.svg";
import ok from "../../assets/ok.svg";

class Career extends Component {
  render() {
    return (
      <div className="career">
        <section className="career-photo">
          <div className="career-photo-container"></div>
        </section>
        <section className="would-you">
          <Title>Would you like to join our team?</Title>
          <div className="career-grid">
            <img className="career-card" src={career4} alt="Suit" />
            <img className="career-card" src={career2} alt="Suit" />
            <img className="career-card" src={career3} alt="Suit" />
          </div>
        </section>
        <section className="career-container">
          <Title>By-laws</Title>
          <Description>
            As the Law Firm is constantly developing, we are looking for
            talented and motivated attorney-at-law, trainee attorney-at-law, and
            lawyers to join our team. If you can work under time pressure, you
            are quick to learn new things, and you are ready to take up
            challenges from day one, send us your application and we will surely
            contact you.
          </Description>
          <div className="list">
          <div className="list-elem">
            <div className="list-icon-box">
              <img className="list-icon" src={ok} alt="Suit" />
            </div>
            <div className="list-text">
              PSL shall strictly hire only associates that graduated from
              harvard law.
            </div>
          </div>
          <div className="list-elem">
            <div className="list-icon-box">
              <img className="list-icon" src={ok} alt="Suit" />
            </div>
            <div className="list-text">
            The founding partners may each name one junior partner to be promoted to senior partnership every year.
            </div>
          </div>
          <div className="list-elem">
            <div className="list-icon-box">
              <img className="list-icon" src={ok} alt="Suit" />
            </div>
            <div className="list-text">
            Should the managing partner, for whatever reason, step down from his/her position, he/she shall name a successor as new managing partner.
            </div>
          </div>
          <div className="list-elem">
            <div className="list-icon-box">
              <img className="list-icon" src={ok} alt="Suit" />
            </div>
            <div className="list-text">
            Fraudulently suing the firm is grounds for dismissal.
            </div>
          </div>
          <div className="list-elem">
            <div className="list-icon-box">
              <img className="list-icon" src={ok} alt="Suit" />
            </div>
            <div className="list-text">
            It is a tradition that a senior partner hires an associate upon their promotion.
            </div>
          </div>
          </div>
          <GhostButton>Apply now</GhostButton>
        </section>
      </div>
    );
  }
}

export default Career;
