import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddBicycle = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('https://desolate-island-53501.herokuapp.com/bicycles', data)
        .then((response) => {
            if(response.statusText === 'OK' ) {
                alert('Document inserted successfully');
            }
            e.target.reset();
        });

    }

    return (
        <div className="booking" style={{ height: '80vh', width: '100%' }}>
            <div className="card booking_card w-100" >
                <div className="card-body text-left">
                    <h5 className="card-title text-center">Add New Bicycle</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" {...register("title")} required/>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Subtitle</label>
                            <input type="text" className="form-control"  {...register("subtitle")} required/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" {...register("price")} required/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input type="text" className="form-control" {...register("img")} required/>
                        </div>
                        
                        <input type="submit" value="Create"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddBicycle;