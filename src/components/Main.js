import React, {Fragment} from 'react';
import Footer from './Footer';
import story_1 from '../assets/images/story-1.jpg';
import story_2 from '../assets/images/story-2.jpg';
import story_3 from '../assets/images/story-3.jpg';
import story_4 from '../assets/images/story-4.jpg';

function Main() {
    return (
        <Fragment>
            <section className="hero">
                <div className="hero__body">
                    <h1 className="hero__title">Hyperion</h1>
                    <p className="hero__description">In the 29th century,
                    the Hegemony of Man comprises thousands of planets
                        connected by farcaster portals.</p>
                    <a href="#start" className="hero__btn">Start journey</a>
                </div>
            </section>
            <div className="container">
                <section className="story">
                    <div className="story__wrapper">
                        <div className="story__images">
                            <img src={story_1} className="story__image" alt="space suit" />
                            <img src={story_2} className="story__image" alt="space suit helmet" />
                        </div>
                        <div className="story__text">
                            <h3 className="story__title">Some title</h3>
                            <p className="story__description">The Hegemony maintains an uneasy
                            alliance with the TechnoCore, a civilisation of AIs. Modified
                            humans known as Ousters live in space stations between stars and
                            are engaged in conflictt with the Hegemony.</p>
                            <p className="story__description">Numerous "Outback" planets have
                            no farcasters and cannot be accessed without incurring significant
                            time dilation. One of these planets is Hyperion, home to
                            structures known as the Time Tombs, which are moving backwards
                            in time and guarded by a legendary creature known as the Shrike.</p>
                        </div>
                    </div>
                    <div className="story__wrapper">
                        <div className="story__text">
                            <h3 className="story__title">Some title</h3>
                            <p className="story__description">The Hegemony maintains an uneasy
                            alliance with the TechnoCore, a civilisation of AIs. Modified
                            humans known as Ousters live in space stations between stars and
                            are engaged in conflictt with the Hegemony.</p>
                        </div>
                        <div className="story__images">
                            <img src={story_3} className="story__image" alt="three humans" />
                            <img src={story_4} className="story__image" alt="two humans" />
                        </div>
                    </div>
                </section>
            </div>
            <section className="story-start">
                <div className="story-start__body">
                    <h3 className="story-start__title">Each person may cause changes</h3>
                    <p className="story-start__description">Are you ready to take part in a great mission?</p>
                    <a href="#start" className="story-start__btn">Start journey</a>
                </div>
            </section>
            <Footer/>
        </Fragment>
    )
}

export default Main;