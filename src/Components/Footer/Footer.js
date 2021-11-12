import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="bg-dark text-white pt-5 pb-5">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h2>On The Go</h2>
                            <p>To the world of an incredible vacation.</p>
                        </div>
                        <div className="col-md-6 text-end">
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Get Daily News Update</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                            </div>
                        </div>    
                    </div>            
                </div>
            </div>
            <div className="bg-dark text-white pt-2 pb-2">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-12 text-center">
                            copyright @ 2021 - Alright Reserved by OTG
                        </div>    
                    </div>            
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;