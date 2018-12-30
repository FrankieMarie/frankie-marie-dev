import React, { Component } from 'react';
import { Element } from 'react-scroll';

// COMPONENTS
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import CallToAction from './CallToAction';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Element name="nav" className="element" >
          <Navigation />
        </Element>
        <Header />
        <Element name="about" className="element" >
          <About />
        </Element>
        <Element name="portfolio" className="element" >
          <Portfolio />
        </Element>
        <Element name="contact" className="element" >
          <CallToAction />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default Main;