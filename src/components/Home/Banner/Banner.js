import React from 'react';
import tools from "../../../img/tools2.png"



const Banner = () => {
    return (
        <div>
            <div class="carousel rounded-box mx-auto w-full">
                <div id="item1" class="carousel-item w-full">
                <img src={tools} class="w-full" alt="" />
                </div>
                <div id="item2" class="carousel-item w-full">
                <img src={tools} class="w-full" alt="" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={tools} class="w-full" alt="" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;