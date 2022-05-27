import React from 'react';
import carousel1 from "../../../img/carousel/carousel1.png"
import carousel2 from "../../../img/carousel/carousel2.png"
import carousel3 from "../../../img/carousel/carousel3.png"
import carousel4 from "../../../img/carousel/carousel4.png"
import carousel5 from "../../../img/carousel/carousel5.png"



const Banner = () => {
    return (
        <div>
            <div className="carousel mt-1 rounded-box mx-auto w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={carousel1} className="w-full" alt="" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={carousel2} className="w-full" alt="" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={carousel3} className="w-full" alt="" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={carousel4} className="w-full" alt="" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={carousel5} className="w-full" alt="" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Banner;