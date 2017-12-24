import React, { Component } from 'react';

import Wat from "./img/wat.gif";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="section">
          <div className="wrapper">
            <h1>
              Welcome to JadeMade!
            </h1>
            <h2 className="slow-grow">
              We make amazing custom cards for any occasion!
            </h2>
          </div>
        </div>
        <div className="section">
          <div className="wrapper">
            <div className="img-wrap">
              <img src={ Wat } alt="Eagle in disbelief"/>
            </div>
            <p>
              Spicy jalapeno jerky filet mignon venison, pig short loin corned beef tongue porchetta biltong chicken shank swine flank. Venison drumstick swine tenderloin burgdoggen buffalo landjaeger salami short loin corned beef pig brisket. Sirloin buffalo alcatra ball tip ground round. Turducken short ribs short loin rump ball tip chicken. Shank chicken corned beef, spare ribs strip steak venison cupim.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="wrapper">
            <h2 className="link">
              <a href="">
                Get in touch!
              </a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
