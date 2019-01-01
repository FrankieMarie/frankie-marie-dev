import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

class Footer extends Component {
  constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <footer className="footer">
        <div onClick={this.scrollToTop} className="footer__logo-box" style={{ cursor: "pointer" }}>
          <div className="footer__logo-box-logo"></div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    target="_blank"
                    href="https://github.com/FrankieMarie"
                    className="footer__link"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    target="_blank"
                    href="https://dribbble.com/FrankieMarie"
                    className="footer__link"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/frankie-denell-093a97161/"
                    className="footer__link"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="footer__item">
                  <div
                    className="footer__email"
                    tooltip="frankiemarie.dev@gmail.com"
                  >
                    <i className="far fa-envelope tooltip"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Handcrafted by Me. Copyright &copy; Frankie Marie - Twenty Eighteen.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;