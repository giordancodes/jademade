import React, { Component } from 'react';

import Logo from './handpuppet.svg';

class Header extends Component {
  render() {
    return (
      <nav>
        <span className="img-wrap">
          <img src={ Logo } alt=""/>
        </span>
        <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Buy Now</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
