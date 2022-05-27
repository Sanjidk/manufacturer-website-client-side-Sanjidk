import React from 'react';
import Banner from "../Banner/Banner";
import OverView from '../OverView/OverView';
import Footer from '../../Shared/Footer/Footer';
import Tools from '../Tools/Tools';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OverView></OverView>
            <Footer></Footer>
        </div>
    );
};

export default Home;