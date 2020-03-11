import React from "react";
import { Link } from "react-router-dom";
import story_1 from "../assets/images/story-1.jpg";
import story_2 from "../assets/images/story-2.jpg";
import story_3 from "../assets/images/story-3.jpg";
import story_4 from "../assets/images/story-4.jpg";

function Main() {
    return (
        <>
            <section className="hero">
                <div className="hero__body">
                    <h1 className="hero__title">Hyperion</h1>
                    <p className="hero__description">
                        In the 29th century, the Hegemony of Man comprises
                        thousands of planets connected by farcaster portals.
                    </p>
                    <Link to="/about" className="hero__btn">
                        Start journey
                    </Link>
                </div>
            </section>
            <div className="container">
                <section className="story">
                    <div className="story__wrapper align-left">
                        <div className="story__images">
                            <div className="story__images-wrapper">
                                <img
                                    src={story_1}
                                    className="story__image"
                                    alt="space suit"
                                />
                                <img
                                    src={story_2}
                                    className="story__small-image"
                                    alt="space suit helmet"
                                />
                            </div>
                        </div>
                        <div className="story__text">
                            <h3 className="story__title">Hegemony</h3>
                            <p className="story__description">
                                At present 3333, humanity lives in an
                                intergalactic political society - Hegemony.
                                Thousands of planets were settled. This was made
                                possible by the outstanding invention of mankind
                                - artificial intelligence. For over a thousand
                                years, the large-scale Hyperion project has
                                helped to control and sustain the life of all
                                Hegemony.
                            </p>

                            <p className="story__description">
                                Humanity lives in a world of technology, fully
                                relying on Hyperion, but all happiness can not
                                last forever. Suddenly a message was received
                                from Hyperion "Hegemony stands on the brink of
                                destruction" with a brief and illogical
                                instruction said only squad which consists of
                                Ashley Green, Naruto Uzumaki, Christoff
                                Amoscott, Brawne Lamia and Alex Callisto can
                                save an intergalactic society.
                            </p>
                        </div>
                    </div>
                    <div className="story__wrapper align-right">
                        <div className="story__text">
                            <h3 className="story__title">E.P.A.M.</h3>
                            <p className="story__description">
                                The crew must go to the planet E.P.A.M., which
                                does not obey Hyperion. Team members are not
                                familiar with each other and have radically
                                different characters. How can they save
                                Hegemony? Will humanity survive? You must select
                                a team member and help them accomplish the
                                mission. The plot of the interactive movie will
                                depend entirely on your choice.
                            </p>
                            <p className="story__description">Save Hegemony!</p>
                        </div>
                        <div className="story__images">
                            <div className="story__images-wrapper">
                                <img
                                    src={story_3}
                                    className="story__image"
                                    alt="three humans"
                                />
                                <img
                                    src={story_4}
                                    className="story__small-image"
                                    alt="two humans"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="story-start">
                <div className="story-start__container container">
                    <h3 className="story-start__title">
                        Each person may cause changes
                    </h3>
                    <p className="story-start__description">
                        Are you ready to take part in this great mission?
                    </p>
                    <Link to="/about" className="story-start__btn">
                        Start journey
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Main;
