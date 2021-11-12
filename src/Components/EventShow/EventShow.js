import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const EventShow = () => {
    const [event, setEvent] = useState({});
    const { event_id } = useParams();

    useEffect(() => {
        axios.get(`https://floating-crag-86254.herokuapp.com/events/${event_id}`).then((response) => {
            setEvent(response.data[0]);
        });
    },[])

    console.log(event);


    return (
        <section>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="text-center">
                            <img src={event.img} alt="" />
                            <br/>
                            <NavLink to={`/book/event/${event_id}`} className="event_item_booking_btn">Book Now</NavLink>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <p><strong>Title:</strong> <br/> {event.title}</p>
                        <p><strong>Subtitle:</strong> <br/> {event.subtitle}</p>
                        <p><strong>Description:</strong> <br/> {event.description}</p>
                        <p><strong>Price:</strong> <br/> {event.price}</p>   
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventShow;