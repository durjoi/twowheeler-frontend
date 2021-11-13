import React from 'react';
import './PromotionalSection.css';
import d1 from '../../../../d1.png';
const PromotionalSection = () => {
    return (
        <section className="pt-5 pb-5 promotional-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{ fontSize: '22px' }}>Promotional
                        Discount</h4>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>UP TO 35%</p>
                        
                    </div>
                    <div className="col-md-6">
                        <img src={d1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionalSection;