import React from 'react';
import { NavLink } from 'react-router-dom';

const BicycleItem = ({title, img, _id, subtitle, price}) => {
    return (
            <div className="col-md-4 mb-4">
                <div className="card upcomming-events-item p-3 border">
                    <div className="upcomming-events-thumb">
                        <img src={img} className="card-img-top" alt="..."/>
                        <button className="upcomming-events-price">Available</button>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title upcomming-events-item-title">
                            {title}
                        </h5>
                    <p className="card-text upcomming-events-item-subtitle txt-grey mt-0">BDT {price}</p>
                    <NavLink to={`/orders/${_id}`} className="btn btn-sm btn-info">Buy Now</NavLink>
                    </div>
                </div>             
            </div>
    );
};

export default BicycleItem;