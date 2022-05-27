import React from 'react';
import sanjid from '../../../img/sanjid.png'

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={sanjid} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Md. Mahmud Sanjid</h1>
                    <p className="text-2xl font-bold"> MERN Developer </p>
                    <p className="text-xl">Email: sanjidk24@gmail.com </p>
                    <p className="text-xl mb-3">MSc (Running) : Jahangirnagar University</p>
                    <p className="font-bold mb-3">SKILLS and TECHNOLOGIES
                        <li>Expertise: JavaScript (ES6), React.js, Bootstrap5, Tailwind, Daisy UI</li>
                        <li>Comfortable: Express JS, Node JS, MongoDB</li>
                        <li>Design Skills: Adobe Photoshop, Figma</li>
                        <li>Tools and Software's: Git, VS Code, Chrome dev tools, Heroku, Netlify, Firebase.</li>
                         </p>
                    <button className='btn btn-primary'><a href="https://drive.google.com/file/d/1bk7GAU-l5VU-Jz3RrBHoPAa_YTS960At/view?usp=sharing" target='_blank'>See Resume for Project Link</a></button>
                    
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;