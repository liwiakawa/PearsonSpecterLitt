import React, { Component } from "react";
import Slider from "react-slick";
import samsung from "../../src/assets/samsung.png";
import abb from "../../src/assets/abb.png";
import cocacola from "../../src/assets/cocacola.png";
import nike from "../../src/assets/nike.png";
import nokia from "../../src/assets/nokia.png";
import amazon from "../../src/assets/amazon.png";
import kube from "../../src/assets/kube.png";
import space from "../../src/assets/space.png";
import revolut from "../../src/assets/revolut.png";


export default class MultipleItems extends Component {
  render() {
    const settings = {
        focusOnSelect: true,
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="container">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>{cssstyle}</style>
        <Slider {...settings}>
          <div>
            <img className="logo" src={abb} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={nike} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={cocacola} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={revolut} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={samsung} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={kube} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={amazon} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={nokia} alt="Suit" />
          </div>
          <div>
          <img className="logo" src={space} alt="Suit" />
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0% 5%;
  width: 65%;

}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
    .slick-next:before, .slick-prev:before {
        color: #000;
     
    }

.logo {
    padding: 10%;
    height: 90%;
    width: 90%;
    outline:none;
}
.slick-slide slick-active{
    outline:none;
}

    `;
