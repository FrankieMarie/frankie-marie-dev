import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                className="nav__link"
                to="about"
                spy={true}
                smooth={true}
                duration={800}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={900}>
                Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;