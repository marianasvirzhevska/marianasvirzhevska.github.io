import React from "react";
import { Link } from "react-router-dom";

import ListItem from "./ListItem";
import { team } from "../../team";

function About() {
    return (
      <div className="about">
        <div className="about__hero">
          <div className="about__container container">
            <Link to="/main" className="back-button">
              <span />
              Back
            </Link>
            <div className="about__hero-content">
              <h1 className="about__title">Meet the crew</h1>
              <p className="about__description">
                You have to choose your character and help the crew to
                accomplish the mission. Make the impossible choices, where every
                decision in your search for answers could mean the difference
                between life and death. Throughout the movie, you will feel the
                importance of working as a team, remember that it is the key for success. 
                Let's start by getting to know
                the team!
              </p>
            </div>
          </div>
        </div>
        <div className="about__team">
          <div className="container">
            <ul className="about__team-list">
              {team.map((member, i) => {
                return <ListItem key={i} member={member} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default About;
