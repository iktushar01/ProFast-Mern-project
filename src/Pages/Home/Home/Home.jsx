import React from 'react';
import Slider from '../Slider/Slider';
import OurServices from '../OurServices/OurServices';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';

const Home = () => {
    return (
        <div>
            <Slider/>
            <OurServices/>
            <ClientLogosMarquee/>
        </div>
    );
};

export default Home;