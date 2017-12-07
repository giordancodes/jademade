import React, { Component } from 'react';
import Header from './Header';

import './jademade.min.css';



class JadeMade extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <h1>
            Welcome to JadeMade!
          </h1>
          <h2>
            We make amazing custom cards for any occasion.
          </h2>
        </div>
      </div>
    );
  }
}

export default JadeMade;
