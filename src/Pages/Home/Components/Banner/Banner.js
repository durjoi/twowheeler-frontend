import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <div className="banner_content">
                            <h1>Best Cycling Experience</h1>
                            <p>Become the world leader of the internet for the sport of cycling</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;