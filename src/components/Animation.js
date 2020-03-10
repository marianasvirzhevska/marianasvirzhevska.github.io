import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { gsap } from 'gsap';
import StarfieldAnimation from 'react-starfield-animation';
import background from '../styles/Rectangle_1.png';

export default class Animation extends Component {

    state = {
        animate: false,
    };


    


    _animatedName = (composer) => {

        gsap.fromTo(composer,
            8,
            {
                opacity: 0,
                letterSpacing: 'normal'
            },
            {
                opacity: 1,
                letterSpacing: '0.5em',
                delay: 2
            });

    };

    _animatedSubName = (composer) => {

        gsap.fromTo(composer,
            2,
            { opacity: 0, },
            {
                opacity: 1,
                delay: 5
            });

    };

    _animatedPctr = (composer) => {
        gsap.fromTo(composer,
            5,
            { opacity: 0, },
            {
                opacity: 1,
                delay: 2
            });
    };



    render() {



        return (
            <Transition
                in
                appear
                timeout={1000}
                onEnter={this._animatedPctr}>
                <div
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `url(${background})`,
                        backgroundSize: 'stretch',
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}
                >

                    <Transition
                        in
                        appear
                        timeout={1000}
                        onEnter={this._animatedName}>
                        <h1
                            style={{
                                color: '#fff',
                                fontSize: '5em',
                                fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
                                textShadow: '4px 4px 10px rgba(0, 0, 0, 0.9)',
                                width: '100%',
                                textAlign: 'center',
                                margin: '0',

                            }}
                        >
                            HYPERION
        </h1>
                    </Transition>
                    <Transition
                        in
                        appear
                        timeout={1000}
                        onEnter={this._animatedSubName}>
                        <h2
                            style={{
                                color: '#fff',
                                fontSize: '1em',
                                fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
                                textShadow: '4px 4px 10px rgba(0, 0, 0, 0.9)',
                                letterSpacing: '0.5em',
                                width: '100%',
                                textAlign: 'center',
                                margin: '0'
                            }}
                        >
                            Interactive Movie
        </h2>
                    </Transition>


                    <StarfieldAnimation
                        numParticles={500}
                        style={{
                            opacity: '1',
                            position: 'absolute',
                            zIndex: 1,
                            width: '1000px',
                            height: '1000px'
                        }}
                    />




                </div>
            </Transition>
        )
    }
}