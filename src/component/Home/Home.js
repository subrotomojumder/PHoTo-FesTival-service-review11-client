import React from 'react';
import { useTitle } from '../../Hooks/UseTitle';
import AboutMe from './AboutMe';
import PhotoFrame from './PhotoFrame';
import Services from './Services';
import Banner from './Slider/Banner';


const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <PhotoFrame></PhotoFrame>
           <Services></Services>
           <AboutMe></AboutMe>
        </div>
    );
};

export default Home;