import React from 'react';
import { NavLink } from 'react-router-dom';

const BicycleItem = ({title, img, _id, subtitle, price}) => {
    return (
        <div>
            <div className="col-md-4 mb-4">
            <div className="card upcomming-events-item">
            <div className="upcomming-events-thumb">
                <img src={img} className="card-img-top" alt="..."/>
                <button className="upcomming-events-price">Available</button>
            </div>

            <div className="card-body">
                <h5 className="card-title upcomming-events-item-title">
                    <NavLink className="reset-link" to={`/event/${_id}`}><h3>{title}</h3></NavLink>
                </h5>
            <p className="card-text upcomming-events-item-subtitle txt-grey">{ subtitle }</p>
            <p className="card-text upcomming-events-item-subtitle txt-grey mt-0">BDT {price}</p>
            <NavLink to={`/book/event/${_id}`} className="event_item_booking_btn">Buy Now</NavLink>
            </div>
            </div>             
        </div>
        </div>
    );
};

export default BicycleItem;