import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from './ListItem';
import { team } from '../../team'

function About (){
    return (
        <div className="about">
            <div className="about__hero">
                <div className="about__container container">
                    <Link to="/main" className="back-button"><span/>Back</Link>
                    <div className="about__hero-content">
                        <h1 className="about__title">Meet the crew</h1>
                        <p className="about__description">We deliver business and technology transformation from start to finish, leveraging agile methodologies, proven customer collaboration frameworks</p>
                    </div>
                </div>
            </div>
            <div className="about__team">
                <div className="container">
                    <ul className="about__team-list">
                        {team.map((member, i) => {
                            return(
                                <ListItem
                                    key={i}
                                    member={member}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;