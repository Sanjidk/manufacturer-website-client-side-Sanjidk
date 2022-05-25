import React from 'react';
import Footer from '../../Shared/Footer/Footer';

const Blogs = () => {
    return (
        <div>
            <div className="collapse rounded-lg mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div className="collapse rounded-lg mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div className="collapse rounded-lg mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div className="collapse rounded-lg mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div className="collapse rounded-lg mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;