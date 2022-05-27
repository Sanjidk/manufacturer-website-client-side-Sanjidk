import React from 'react';
import sanjid from '../../../img/sanjid.png'

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={sanjid} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Md. Mahmud Sanjid</h1>
                    <p className="text-2xl font-bold py-6">MERN Developer </p>
                    <button className='btn btn-primary'><a href="https://drive.google.com/file/d/1bk7GAU-l5VU-Jz3RrBHoPAa_YTS960At/view?usp=sharing" target='_blank'>My Resume</a></button>
                    
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;