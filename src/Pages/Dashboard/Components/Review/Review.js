import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('http://localhost:3005/reviews', data)
        .then((response) => {
            if(response.statusText === 'OK' ) {
                alert('Document inserted successfully');
            }
            e.target.reset();
        });

    }

    return (
        <div className="booking d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card booking_card" >
                <div className="card-body text-left">
                    <h5 className="card-title text-center">Add New Review</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                        <div className="mb-3">
                            <label className="form-label">Rating</label>
                            <select {...register("rating")}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Review</label>
                            <input type="text" className="form-control" {...register("review")} required/>
                        </div>
                        
                        
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Review;