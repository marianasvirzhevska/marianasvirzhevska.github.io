import React from "react";
import { Link } from "react-router-dom";
import StarfieldAnimation from 'react-starfield-animation';

function MainIntro () {
  
    return (
      <div>
          <div className="backgroundWrapper">
          <section className="hero">
            <StarfieldAnimation
              numParticles={500}
              className="hero__starfieldAnimation"
            />
            <div>
              <div className="hero__body">
                <h1 className="hero__title">Hyperion</h1>
                <h5 className="hero__subtitle">Interactive Movie</h5>
                <p className="hero__description">
                  34th century A.D. humanity has inhabited thousands of planets, and is ruled by Artificial Intelligence
                  called Hyperion. Peace and harmony reign, till one day...
                </p>
                <Link to="/about" className="hero__btn">
                  Start journey
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      
    );
}

export default MainIntro;