import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { gsap } from 'gsap';
import StarfieldAnimation from 'react-starfield-animation';
import background from '../styles/stars.jpg';

export default class Animation extends Component {

    state = {
        animate: false,
      };
    
  
      componentDidMount() {
        // Added timeout
        const ANIMATION_TIMEOUT = 5000;
    
        setTimeout(() => {
          this.setState({ animate: true });
        }, ANIMATION_TIMEOUT);
      }


    _animatedStatusBarEnter = (composer) => {
        gsap.fromTo(composer,
            10,
            { opacity: 0,
            rotationX: 90 }, 
            { opacity: 1,
            rotationX: 0 });
    };

    
    
    render() {
        
        

        return (
            
            <div
        style={{
          background: `url(${background})`,
          backgroundSize: 'stretch',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        
        <Transition 
        in
        appear
        
        onEnter = { this._animatedStatusBarEnter }>
        <h1
          style={{
            color: '#fff',
            fontSize: '3em',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
          }}
        >
          React Starfield Animation
        </h1>
                </Transition>
        
                
          <StarfieldAnimation
          numParticles={this.state.animate ? 500 : 0}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
          
          
          
        
      </div>
        )
    }
}