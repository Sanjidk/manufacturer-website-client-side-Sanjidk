import React from 'react';
import Banner from "../Banner/Banner";
import OverView from '../OverView/OverView';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OverView></OverView>
            <Footer></Footer>
        </div>
    );
};

export default Home;