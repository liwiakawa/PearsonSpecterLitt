import React, { Component } from "react";
import fb from "../../src/assets/fb.svg";
import li from "../../src/assets/linkedin.svg";
import tw from "../../src/assets/twitter.svg";

const Footer = (props) => {
  return (
    <section className="footer-section">
      <div className="footer">
        <div className="address1">
          <div>Address</div>
          <div>Pearson Specter Litt</div>
          <div>601 E 54th Street,</div>
          <div>New York, NY 10000</div>
        </div>
        <div className="address2">
          Get social with us
          <div className="socials">
            <div>
              <a href="https://www.facebook.com/pearsonspecterlitt/" target="_blank">
                <img className="social-icon" src={fb} alt="Suit" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/harvey-specter-76886958/" target="_blank">
                <img className="social-icon" src={li} alt="Suit" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/pslllp?lang=en" target="_blank">
                <img className="social-icon" src={tw} alt="Suit" />
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="address3">
          We produce results for our clients. You will not be our only client,
          but it will sure feel like it.
        </div>
      </div>
    </section>
  );
};

export default Footer;
