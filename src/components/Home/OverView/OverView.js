import React from 'react';
import toolkit from "../../../img/cleaner.png"


const OverView = () => {
  return (
    <div className="bg-base-200 mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={toolkit} alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:py-8 to apply the py-8 utility at only medium screen sizes and above.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default OverView;