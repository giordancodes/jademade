import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';

import './jademade.min.css';



class JadeMade extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default JadeMade;
