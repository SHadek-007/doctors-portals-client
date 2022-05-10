import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import MakeAppoint from '../MakeAppoint/MakeAppoint';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoint></MakeAppoint>
        </div>
    );
};

export default Home;