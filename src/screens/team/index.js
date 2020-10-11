import React, { Component } from "react";
import mainPhoto from "../../assets/team.png";
import Description from "../../components/description";
import jessica from "../../assets/jessica.png";
import dana from "../../assets/dana.png";
import dona from "../../assets/dona.png";
import katrina from "../../assets/katrina.png";
import mike from "../../assets/mike.png";
import louis from "../../assets/louis.png";
import rachel from "../../assets/rachel.png";
import harvey from "../../assets/harvey.png";
import Footer from "../../components/footer";

class Team extends Component {
  render() {
    return (
      <div className="team">
        <section className="team-photo">
          <div className="team-photo-container"></div>
        </section>
        <section className="employers">
          <div className="employers-grid">
            <div className="employer-card">
              <img className="employer-photo" src={jessica} alt="Suit" />
              <div className="employer-name">Jessica Pearson</div>
              <div className="profession">Co-founder</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
            <div className="employer-card">
              <img className="employer-photo" src={harvey} alt="Suit" />

              <div className="employer-name">Harvey Specter</div>
              <div className="profession">Settling Cases</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
            <div className="employer-card">
              <img className="employer-photo" src={louis} alt="Suit" />

              <div className="employer-name">Louis Litt</div>
              <div className="profession">Financial Law</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
            <div className="employer-card">
              <img className="employer-photo" src={mike} alt="Suit" />

              <div className="employer-name">Michael Ross</div>
              <div className="profession">Settling Cases</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
            <div className="employer-card">
              <img className="employer-photo" src={rachel} alt="Suit" />

              <div className="employer-name">Rachel Zane</div>
              <div className="profession">Research</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
            <div className="employer-card">
              <img className="employer-photo" src={katrina} alt="Suit" />

              <div className="employer-name">Jessica Pearson</div>
              <div className="profession">Co-founder</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
            <div className="employer-card">
              <img className="employer-photo" src={dona} alt="Suit" />

              <div className="employer-name">Jessica Pearson</div>
              <div className="profession">Co-founder</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
            <div className="employer-card">
              <img className="employer-photo" src={dana} alt="Suit" />

              <div className="employer-name">Jessica Pearson</div>
              <div className="profession">Co-founder</div>
              <div className="employer-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Team;
