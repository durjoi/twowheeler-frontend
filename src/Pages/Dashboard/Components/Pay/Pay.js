import React from 'react';
import { NavLink } from 'react-router-dom';

const Pay = () => {
    return (
        <div>
            <div className="" style={{ "height" : "70vh" }}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-12 ">
                        <div>
                            <h2>Payment system coming soon</h2>
                            <NavLink to="/dashboard" className="event_item_booking_btn">Go Back To Dashboard</NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pay;