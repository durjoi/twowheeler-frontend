import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setorders] = useState([]);
    const [count , setCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3005/orders').then((response) => {
            setorders(response.data);
        });
    },[count])

    const handleDelete = (order_id) => {
        const confirm = window.confirm("Want to Delete this Order?");
        if(confirm) {
            axios.delete(`http://localhost:3005/orders/${order_id}`)
                .then(() => {
                    setorders([...orders.filter(b => b._id !== order_id)]);
                    alert("Order deleted!");
            });
        }
        
    }

    const handleConfirm = (order_id) => {
        
        axios.put(`http://localhost:3005/orders/${order_id}?status=Shipped`)
            .then(() => {
                alert("Order Shipped!");
                // const updatedBooking = orders.filter(b => b._id === order_id);
                setCount(count+1);
        });
        
    }

    return (
        <section>
            <div className="events_header">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                            <h2>All Orders</h2>
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
                                    orders.map(order => {
                                        return (
                                            <tr key={order._id}>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td>{order.phone}</td>
                                                <td>{order.address}</td>
                                                <td>{order.bicycle}</td>
                                                <td>{order.price}</td>
                                                <td>{order.status}</td>
                                                <td>
                                                    <button onClick={() => handleDelete(order._id)}>Delete</button>
                                                    {
                                                        (order.status === 'Pending') ? <button onClick={() => handleConfirm(order._id)}>Shipped</button> : ''
                                                    }
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

export default ManageOrder;