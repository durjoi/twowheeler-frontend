import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './EventBooking.css';

const EventBooking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const [event, setEvent] = useState([]);
    const { event_id } = useParams();
    const { user } = useAuth();

    const onSubmit = (data, e) => {
        data.event_id = event_id;
        data.user_id = user.uid;
        data.event = event.title;
        data.price = event.price;
        data.status = "Pending";
        axios.post('https://floating-crag-86254.herokuapp.com/bookings', data)
        .then((response) => {
            if(response.statusText === 'OK' ) {
                alert('Booking Confirmed');
                history.push('/booking/success');
            }
            e.target.reset();
        });
        

    }

    useEffect(() => {
        axios.get(`https://floating-crag-86254.herokuapp.com/events/${event_id}`)
        .then((response) => {
            if(response.statusText === 'OK' ) {
                setEvent(response.data[0]);
            }
        });
    }, []); 


    return (
        <div className="d-flex justify-content-center align-items-center booking">
            <div className="card booking_card">
                <div className="card-body text-left">
                    <h5 className="card-title text-center">Book an Event</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Event Title</label>
                            <input type="text" className="form-control" defaultValue={event.title}  {...register("event")} required readOnly />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Price</label>
                            <input type="number" className="form-control" defaultValue={event.price}  {...register("price")} required readOnly/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" defaultValue={user.displayName} {...register("name")} required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" defaultValue={user.email} {...register("email")} required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="text" className="form-control" {...register("phone")} required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Address</label>
                            <input type="text" className="form-control" {...register("address")} required />
                        </div>
                        
                        <input type="submit" value="Book Now"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EventBooking;