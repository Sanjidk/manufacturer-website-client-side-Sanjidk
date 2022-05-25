import React from 'react';
import Banner from "../Banner/Banner";
import OverView from '../OverView/OverView';
import Footer from '../../Shared/Footer/Footer';
import Tools from '../Tools/Tools';
import BusinessSummary from '../BusinessSummary/BusinessSummary';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <OverView></OverView>
            <Footer></Footer>
        </div>
    );
};

export default Home;