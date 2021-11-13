import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const ManageAdmin = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('http://localhost:3005/user/admin', data)
        .then((response) => {
            if(response.statusText === 'OK' ) {
                alert('Document inserted successfully');
            }
            e.target.reset();
        });

    }

    return (
        <div className="booking d-flex justify-content-center align-items-center" style={{ height: '70vh', width: '100%' }}>
            <div className="card booking_card w-100" >
                <div className="card-body text-left">
                    <h5 className="card-title text-center">Create New Admin</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                        <div className="mb-3">
                            <label className="form-label">User Email</label>
                            <input type="email" className="form-control" {...register("email")} required/>
                        </div>
                        
                        
                        <input type="submit" value="Make Admin"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ManageAdmin;