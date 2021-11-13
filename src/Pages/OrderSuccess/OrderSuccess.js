import React from 'react';
import { NavLink } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <div className="" style={{ "height" : "100vh" }}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h2>Successfully Ordered a Bicycle</h2>
                            <NavLink to="/" className="event_item_booking_btn">Go Back To Home</NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;