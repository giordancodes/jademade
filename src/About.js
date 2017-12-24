import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="section">
          <div className="wrapper">
            <h1>
              Welcome to JadeMade!
            </h1>
            <h2>
              We make amazing custom cards for any occasion.
            </h2>
          </div>
        </div>
        <div className="section">
          <div className="wrapper">
            <img src="/sparkles.jpg" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
