import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <div className="social">
            <a href="" title="Visit us on Etsy">
              <i className="fa fa-etsy"></i>
            </a>
            <a href="" title="Visit us on Facebook">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="" title="Visit us on Pinterest">
              <i className="fa fa-pinterest-square"></i>
            </a>
            <a href="" title="Visit us on Instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="copy">
            &copy; {new Date().getFullYear()} JadeMade.co
        </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
