import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big ">
          <div className="section-about__intro">
            <h2 className="heading-secondary">
              Hey, I'm Frankie.
            </h2>

            <div className="row section-about__description">
                <div className="section-about__description--me"></div>
                <p className="section-about__description--paragraph"> I value simplistic content structure, clean design patterns, and eye catching user interfaces. While I enjoying expressing my artistic side, I also love developing full-stack web applications with logical and thoughtful code. I take pride in what I do, I'm naturally curious, and perpetually improving.</p>
            </div>

          </div>
        </div>
        <div className="row section-about__skills">
          <div className="col-1-of-2">
            <h2 className="heading-secondary u-margin-bottom-small">
              <i className="fas fa-code section-about__dev u-margin-bottom-small"></i>
              Development
            </h2>
            <p className="paragraph">I tought myself HTML, CSS, and JavaScript as a hobby in my free time. I graduated from Galvanize PHX Web Development Immersive Program to pursue a career in web development.</p>
            <h3 className="heading-tertiary u-margin-bottom-small">Things I Write</h3>
            <p className="paragraph">React, Redux, Node.js, Express, GraphQL, HTML(JSX), JavaScript, Sass/CSS</p>
            <h3 className="heading-tertiary u-margin-bottom-small">Dev Tools</h3>
            <ul className="list paragraph">
              <li className="list-item">Visual Studio Code</li>
              <li className="list-item">Github</li>
              <li className="list-item">Postman</li>
              <li className="list-item">iTerm2</li>
            </ul>
            <a href="https://github.com/FrankieMarie" className="btn-text">
              <i className="fab fa-github btn-text-ico"></i> Github
            </a>
          </div>

          <div className="col-1-of-2">
            <h2 className="heading-secondary u-margin-bottom-small">
              <i className="fas fa-palette section-about__design u-margin-bottom-small"></i>
              Design
            </h2>
            <p className="paragraph">I've always been artistic, having an eye for design. I treat every project like it's my own. Every detail is carefully crafted to find the sweet spot between simplicity and creativity.</p>
            <h3 className="heading-tertiary u-margin-bottom-small">Things I Design</h3>
            <p className="paragraph">UX, UI, Web, Mobile, Logos, Posters, Computer Illustrations, pretty much anything</p>
            <h3 className="heading-tertiary u-margin-bottom-small">Design Tools</h3>
            <ul className="list paragraph">
              <li className="list-item">Adobe Illustrator</li>
              <li className="list-item">Adobe Photoshop</li>
              <li className="list-item">Affinity Designer</li>
              <li className="list-item">Pen & Paper</li>
            </ul>
            <a href="https://dribbble.com/FrankieMarie" className="btn-text">
              <i className="fab fa-dribbble btn-text-ico"></i> Dribble
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;