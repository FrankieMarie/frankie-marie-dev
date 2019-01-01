import React, { Component } from 'react'
import { Link } from 'react-scroll';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Frankie<span className="heading-primary--main-2">Marie</span></span>
            <span className="heading-primary--sub">Development and Design</span>
          </h1>
          <Link
            className="header__down-arrows"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            style={{cursor: "pointer"}}>
            <div className="header__down-arrows-chevron"></div>
            <div className="header__down-arrows-chevron"></div>
            <div className="header__down-arrows-chevron"></div>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;