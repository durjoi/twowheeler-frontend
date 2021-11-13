import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BicycleItem from '../BicycleItem/BicycleItem';

const BicycleSection = () => {
    const [bicycles, setBicycles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3005/bicycles?limit=6').then((response) => {
            setBicycles(response.data);
            setLoading(false)
        });
    }, []);


    return (
        <section>
                <div className="bicycles_header pt-5 pb-5">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                                <h2>Shop Now</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <div className="row">
                    {
                        loading ? <div className="spinner-border text-warning m-auto"></div> :
                        bicycles.map(event => <BicycleItem key={event._id} _id={event._id} title={event.title} img={event.img} subtitle={event.subtitle} price={event.price}></BicycleItem>)
                    }
                    </div>
                </div>
            </section>
    );
};

export default BicycleSection;