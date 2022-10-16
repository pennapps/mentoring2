import React, { Component } from 'react';
import '../styles/Footer.css';
import pennappsLogo from '../images/logos/logo-white.png'
import penngineeringLogo from '../images/logos/seas-logo-blue.png'

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer-row">
          <div className="col-lg-6 col-sm-6">
            <div className="Footer-col">
              <img className="Footer-pennapps-logo" src={pennappsLogo} />
              <p>
                &copy; 2022 PennApps <br />
                <a href="mailto:contact@pennapps.com">contact@pennapps.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="Footer-col">
              <p>
                <a href="https://www.facebook.com/pennapps">Facebook</a> <br />
                <a href="https://twitter.com/pennapps">Twitter</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="Footer-col">
              <p>Organized with support from:</p>
              <a href="http://www.seas.upenn.edu">
                <img className="Footer-penn-engineering-logo" src={penngineeringLogo} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;