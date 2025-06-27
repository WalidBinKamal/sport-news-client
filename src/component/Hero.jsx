import React from 'react';
import hero from '../assets/hero-section.png'
import News from './News';

const Hero = () => {
    return (
        <div>
            <img src={hero}/>
            <News></News>
        </div>
    );
};

export default Hero;