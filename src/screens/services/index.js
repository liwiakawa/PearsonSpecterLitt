import React, { Component } from "react";
import mainPhoto from "../../assets/services.svg";
import Description from "../../components/description";
import Footer from "../../components/footer";
import SimpleAccordion from "../../components/accordion";


class Services extends Component {
  render() {
    return (
      <div className="services">
        <section className="services-photo">
          <div className="services-photo-container"></div>
        </section>
        <section className="services-des">
          <Description>
            Our practice areas are accessible with problems and legal issues in
            which we have experience, feel at ease, and can find low-level help.
            As part of our specialization cash, we provide comprehensive legal
            services. Among them are other legal advice, preparation of draft
            letters, deadlines and other documents, negotiations, representation
            before courts in each instance, representation before offices and
            other organizations, as well as mediation. Each client can count on
            clear and comprehensible communication and a decent representation
            of his interests at fair and reasonable rates.
          </Description>
        </section>
        <section className="services-accordion">
<SimpleAccordion></SimpleAccordion>
        </section>
      </div>
    );
  }
}

export default Services;
