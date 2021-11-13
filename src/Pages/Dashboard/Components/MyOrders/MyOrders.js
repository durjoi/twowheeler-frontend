import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const MyOrders = () => {
    const [orders, setorders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        axios.get(`https://desolate-island-53501.herokuapp.com/orders/${user.uid}`).then((response) => {
            setorders(response.data);
        });
    },[user])

    const handleDelete = (booking_id) => {
        const confirm = window.confirm("Want to Cancel this Booking?");
        if(confirm) {
            axios.delete(`https://desolate-island-53501.herokuapp.com/orders/${booking_id}`)
                .then(() => {
                    setorders([...orders.filter(b => b._id !== booking_id)]);
                    alert("Booking deleted!");
            });
        }
        
    }

    return (
        <section>
            <div className="events_header">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                            <h2>My Orders</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ "height" : "70vh" }}>
                <div className="row">
                    <div className="col-md-12" style={{ "overflowX":'auto' }}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Bicycle</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(booking => {
                                        return (
                                            <tr key={booking._id}>
                                                <td>{booking.name}</td>
                                                <td>{booking.email}</td>
                                                <td>{booking.phone}</td>
                                                <td>{booking.address}</td>
                                                <td>{booking.bicycle}</td>
                                                <td>{booking.price}</td>
                                                <td>{booking.status}</td>
                                                <td>
                                                    <button onClick={() => handleDelete(booking._id)}>Cancel</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>

        </section>
    );
};

export default MyOrders;