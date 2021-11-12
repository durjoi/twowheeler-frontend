import React from 'react';
import useEvent from '../../Hooks/useEvent';
import EventItem from '../EventItem/EventItem';
import './Event.css'

const Event = () => {

    const { events, loading } = useEvent();


    return (
        <section className="upcomming-events section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header w-100 text-center">
                                <h2 className="section-header-title">Upcomming Events</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-5">
                    <div className="row">

                    {
                        loading ? <div className="spinner-border text-warning m-auto"></div> :
                        events.map(event => <EventItem key={event._id} _id={event._id} title={event.title} img={event.img} subtitle={event.subtitle} price={event.price}></EventItem>)
                    }
                        
                    </div>
                </div>
            </section>
    );
};

export default Event;