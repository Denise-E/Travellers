import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection.js';
import '../HeroSection.css';
import Cards from '../Cards.js';

function Home() {
    return(
        <>
            <HeroSection/>
            <Cards />
        </>
    )
}

export default Home;