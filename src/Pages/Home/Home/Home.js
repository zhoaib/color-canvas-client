import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner/Banner';
import Business from './Business/Business';
import OverAll from './Overall/OverAll';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Business></Business>
            <OverAll></OverAll>
        </div>
    );
};

export default Home;