import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getProjects } from '../redux/actions/projects';

class Portfolio extends Component {
  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    return (
      <section className="section-cards u-margin-bottom-big" id="section-cards">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            My Recent Work
          </h2>
        </div>

        {/* for big screens */}

        <div className="row row-big">
          <div className="col-1-of-3 row-big">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1"></div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <p className="card__text">The Rusty Spoke is a volunteer based, 'DIY' bike shop in downtown Phoenix. This app is built for the volunteers to record data such as customers, purchases, items on hold, and shift hours.</p>
                  <a href="https://www.youtube.com/watch?v=DwQs7KIXFg0" className="btn btn-round">View Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3 row-big">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2"></div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <p className="card__text">Frankie's Fruit Market is a mock-market dedicated to providing tropical, exotic, and rare fruits, making them accessible to anyone, anywhere in the country. (This is not a real market)</p>
                  <a href="https://www.youtube.com/watch?v=QyEkmysem8M" className="btn btn-round">View Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3 row-big">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3"></div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <p className="card__text">Using the Google Maps API, Bikes and Beans is geared toward cyclists who also love coffee. It allows you to customize your bike route, and displays the nearest coffee shops along the way.</p>
                  <a href="https://github.com/FrankieMarie/bikes-and-beans" className="btn btn-round">View Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-big">
          <div className="col-1-of-3 row-big">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4"></div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <p className="card__text">HoodRobin is a Software Development and Consulting startup founded by my former Web Dev instructor, Troy Amelotte. This logo was made for him personally using Adobe Illustrator.</p>
                  <a href="https://www.linkedin.com/company/hoodrobinllc/" className="btn btn-round">View LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3 row-big">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--5"></div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <p className="card__text">Akiiwan - It is the earth, the land, blurring the lines between masculine and feminine. Amber Reed is a jeweler in downtown Phoenix. Akiiwan is an androgynous line of bracelets each handcrafted uniquely by Amber Reed herself.</p>
                  <a href="https://www.byamberreed.com/akiiwan/" className="btn btn-round">View Website</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3 row-big">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--6"></div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <p className="card__text">Granular is a CSS Library based off of CSS GRID. It was developed by my talented friend Noel Serrato. The logo was designed for his project, and was created in Adobe Illustrator.</p>
                  <a href="https://github.com/Serrato1/Granular" className="btn btn-round">View Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for small screens */}
        <div className="row-small">
          <div className="row-small__col">
            <div className="row-small__cta">
              <a href="https://www.youtube.com/watch?v=DwQs7KIXFg0" className="row-small__link btn-text">The Rusty Spoke</a>
              <p className="row-small__text">The Rusty Spoke is a volunteer based, 'DIY' bike shop in downtown Phoenix. This app is built for the volunteers to record data such as customers, purchases, items on hold, and shift hours.</p>
            </div>
          </div>

          <div className="row-small__col">
            <div className="row-small__cta">
              <a href="https://www.youtube.com/watch?v=QyEkmysem8M" className="row-small__link btn-text">Frankie's Fruit Market</a>
              <p className="row-small__text">Frankie's Fruit Market is a mock-market dedicated to providing tropical, exotic, and rare fruits, making them accessible to anyone, anywhere in the country. (This is not a real market).</p>
            </div>
          </div>

          <div className="row-small__col">
            <div className="row-small__cta">
              <a href="https://github.com/FrankieMarie/bikes-and-beans" className="row-small__link btn-text">Bikes & Beans</a>
              <p className="row-small__text">Using the Google Maps API, Bikes and Beans is geared toward cyclists who also love coffee. It allows you to customize your bike route, and displays the nearest coffee shops along the way.</p>
            </div>
          </div>

          <div className="row-small__col">
            <div className="row-small__cta">
              <a href="https://www.linkedin.com/company/hoodrobinllc/" className="row-small__link btn-text">Hoodrobin</a>
              <p className="row-small__text">HoodRobin is a Software Development and Consulting startup founded by my former Web Dev instructor, Troy Amelotte. This logo was made for him personally using Adobe Illustrator.</p>
            </div>
          </div>

          <div className="row-small__col">
            <div className="row-small__cta">
            <a href="https://www.byamberreed.com/akiiwan/" className="row-small__link btn-text">Akiiwan</a>
            <p className="row-small__text">Blurring the lines between masculine and feminine, Akiiwan is an androgynous line of bracelets each handcrafted uniquely by Amber Reed Jewelry. Amber Reed is a jeweler in downtown Phoenix, AZ.</p>
            </div>
          </div>

          <div className="row-small__col">
            <div className="row-small__cta">
              <a href="https://github.com/Serrato1/Granular" className="row-small__link btn-text">Granular</a>
              <p className="row-small__text">Granular is a CSS Library based off of CSS GRID. It was developed by my talented friend Noel Serrato. The logo was designed for his project, and was created in Adobe Illustrator.</p>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: _.get(state, 'projects.data', {})
  }
}

export default connect(
  mapStateToProps,
  { getProjects }
)(Portfolio);