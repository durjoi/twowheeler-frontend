import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageBicycle = () => {

    const [bicycles, setBicycles] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3005/bicycles').then((response) => {
            setBicycles(response.data);
            setLoading(false)
        });
    }, []);

    const handleDelete = (event_id) => {
        const confirm = window.confirm("Want to Delete this Event?");
        if(confirm) {
            axios.delete(`http://localhost:3005/bicycles/${event_id}`)
                .then(() => {
                    setBicycles([...bicycles.filter(b => b._id !== event_id)]);
                    alert("Event deleted!");
            });
        }
        
    }

    return (
        <div className="container" style={{ "height" : "70vh" }}>
                <div className="row">
                    <div className="col-md-12 " style={{ "overflowX":'auto' }}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Subtitle</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            loading ? <tr>
                                <td><p className="spinner-border text-warning m-auto"></p></td>
                            </tr>  :
                                bicycles.map(event => {
                                    return (
                                        <tr key={event._id}>
                                            <td>{event.title}</td>
                                            <td>{event.subtitle}</td>
                                            <td>{event.price}</td>
                                            <td>{event.img}</td>
                                            <td><button onClick={() => handleDelete(event._id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div> 
                </div>
            </div>
    );
};

export default ManageBicycle;