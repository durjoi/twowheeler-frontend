import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreateEvent = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('https://floating-crag-86254.herokuapp.com/events', data)
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
                    <h5 className="card-title text-center">Create New Event</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text" className="form-control" {...register("title")} required/>
                        </div>
                        
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Subtitle</label>
                            <input type="text" className="form-control"  {...register("subtitle")} required/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Price</label>
                            <input type="number" className="form-control" {...register("price")} required/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Image URL</label>
                            <input type="text" className="form-control" {...register("img")} required/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" {...register("description")} rows="3"></textarea>
                        </div>
                        
                        <input type="submit" value="Create"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CreateEvent;