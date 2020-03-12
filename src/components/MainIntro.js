import React from "react";
import { Link } from "react-router-dom";
import StarfieldAnimation from 'react-starfield-animation';

function MainIntro () {

    return (
      <div>
        <section className="hero">
          <StarfieldAnimation
            numParticles={500}
            className="hero__starfieldAnimation"
          />
          <div>
            <div className="hero__body">
              <h1 className="hero__title">Hyperion</h1>
              <p className="hero__description">
                In the 34th century, humanity has thousands of planets, it is
                called Hegemony. Hegemony is extremely advanced and powerful,
                but there are some problems ...
              </p>
              <Link to="/about" className="hero__btn">
                Start journey
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
}

export default MainIntro;