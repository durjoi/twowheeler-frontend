import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Order.css';

const Order = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()
    const [bicycle, setbicycle] = useState([]);
    const { bicycle_id } = useParams();
    const { user } = useAuth();

    const onSubmit = (data, e) => {
        data.bicycle_id = bicycle_id;
        data.user_id = user.uid;
        data.bicycle_title = bicycle.title;
        data.price = bicycle.price;
        data.status = "Pending";

        axios.post('http://localhost:3005/orders', data)
        .then((response) => {
            if(response.statusText === 'OK' ) {
                alert('Order Confirmed');
                history.push('/orders/success');
            }
            e.target.reset();
        });
        

    }

    useEffect(() => {
        axios.get(`http://localhost:3005/bicycles/${bicycle_id}`)
        .then((response) => {
            if(response.statusText === 'OK' ) {
                setbicycle(response.data[0]);
                reset({name: user.displayName, email: user.email});
            }
        });
    }, [ reset, bicycle_id, user]); 


    return (
        <div className="d-flex justify-content-center align-items-center booking">
            <div className="card booking_card">
                <div className="card-body text-left">
                    <h5 className="card-title text-center">Order a bicycle</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">bicycle Title</label>
                            <input type="text" className="form-control" defaultValue={bicycle.title}  {...register("bicycle")} required readOnly />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Price</label>
                            <input type="number" className="form-control" defaultValue={bicycle.price}  {...register("price")} required readOnly/>
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

export default Order;