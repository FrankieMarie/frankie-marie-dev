import React, { Component } from 'react';

class StartProject extends Component {
  render() {
    return (
      <div className="cta-project row">
        <div className="cta-project__col">
          <h2 className="heading-secondary cta-project__h2">Start a project</h2>
        </div>
        <div className="cta-project__col">
          <p className="cta-project-text">Interested in working together? Let's chat! I can't wait to hear your ideas.</p>
        </div>
        <div className="cta-project__col">
          <div className="cta">
            <div className="cta__side cta__side--front">
              <div className="cta__picture cta__text">CONTACT</div>
            </div>
              <div className="cta__side cta__side--back">
                <div className="cta__cta">
                  <p className="cta__text">frankiemarie.dev@gmail.com</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default StartProject;