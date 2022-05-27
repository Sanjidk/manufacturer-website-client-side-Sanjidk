import React from 'react';
import toolkit from "../../../img/background.png"


const OverView = () => {
  return (
    <div className="bg-base-200 mt-10 rounded-box">
      <div className="hero-content flex-col lg:flex-row">
        <img className='rounded-box' src={toolkit} alt="" />
        <div className='text-center'>
          <h1 className="text-5xl font-bold">Offer Package</h1>
          <h1 className="text-4xl text-blue-500 font-bold p-3">$ 1000</h1>
          <p className="py-3">
            The full form of DSLR is the Digital single-lens reflex. We will offer you a full package with all tools. This offer has limited time. So, do not waste your time for searching here and there. Click the below button and get this offer.
          </p>
          <h5 className='font-bold my-3'>Make your life as a Professional Photographer</h5>
          <button className='btn btn-primary'><a href="https://www.startech.com.bd/camera" target='_blank'>BUY OFFER NOW</a></button>
        </div>
      </div>
    </div>
  );
};

export default OverView;