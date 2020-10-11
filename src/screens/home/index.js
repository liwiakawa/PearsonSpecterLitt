import React, { Component } from "react";
import Title from "../../components/title";
import Description from "../../components/description";
import GhostButton from "../../components/ghost-button";
import Card from "../../components/card";
import suit from "../../assets/rec1.png";
import finance from "../../assets/rec2.png";
import building from "../../assets/rec3.png";
import game from "../../assets/rec4.png";
import law from "../../assets/rec5.png";
import idea from "../../assets/rec6.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="photo">
          <div className="photo-container">
            <div className="buttons">
              <a href="/services">
                <div className="button-basic">KNOW MORE</div>
              </a>
              <a href="/contact">
                <div className="button-action">HIRE US</div>
              </a>
            </div>
          </div>
        </section>
        <section className="psl">
          <div className="psl-container">
            <Title>What is Pearson Specter Litt comapny?</Title>
            <Description>
              Based in New York City, Pearson Specter Litt provides the highest
              quality legal advice and representation to clients around the
              world. The results we achieve have set us apart for more than 17
              years and become a model for the modern practice of law. Today,
              Pearson Specter Litt is a leader in each of its core practice
              areas and in each of its geographic markets. When you come to us,
              you can be sure that your case will be dealt with by a competent
              and experienced lawyer.
            </Description>
            <a className="click" href="/about">
              <GhostButton>More about company</GhostButton>
            </a>
          </div>
        </section>
        <section className="help">
          <div className="help-container">
            <Title>How can we help you?</Title>
            <div className="card-container">
              <a className="click" href="/services#harmoszka">
                <Card>
                  <img src={suit} alt="Suit" />
                  <div className="overlay">
                    <div className="text-anim">Corporate</div>
                  </div>
                </Card>
              </a>
              <a className="click" href="/services">
              <Card>
                <img src={finance} alt="Suit" />
                <div className="overlay">
                  <div className="text-anim">Finance</div>
                </div>
              </Card>
              </a>
              <a className="click" href="/services">
              <Card>
                <img src={building} alt="Suit" />
                <div className="overlay">
                  <div className="text-anim">Real estate</div>
                </div>
              </Card>
              </a>
              <a className="click" href="/services">
              <Card>
                <img src={game} alt="Suit" />
                <div className="overlay">
                  <div className="text-anim">Technology</div>
                </div>
              </Card>
              </a>
              <a className="click" href="/services">
              <Card>
                <img src={law} alt="Suit" />
                <div className="overlay">
                  <div className="text-anim">Litigation</div>
                </div>
              </Card>
              </a>
              <a className="click" href="/services">
              <Card>
                <img src={idea} alt="Suit" />
                <div className="overlay">
                  <div className="text-anim">Intellectual property</div>
                </div>
              </Card>
              </a>
            </div>
            <a className="click" href="/services">
              <GhostButton>More about services</GhostButton>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
