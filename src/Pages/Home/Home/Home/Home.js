import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Menus from '../Menu/Menus';

const Home = () => {
    return (
        <div>
          <Banner></Banner>  
          <AboutUs></AboutUs>
          <Menus></Menus>
        </div>
    );
};

export default Home;