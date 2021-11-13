import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const AdminLink = () => {
    let { url } = useRouteMatch();
    return (
        <ul>
                 <li>
                     <Link to={`${url}/admin`}>Admin</Link>
                     </li>
                

                <li>
                    <Link to={`${url}/bicycle`}>Bicycle</Link>
                </li>   

                <li>
                    <Link to={`${url}/bicycle/add`}>Add Bicycle</Link>
                </li>

                <li>
                    <Link to={`${url}/order`}>Order</Link>
                </li>
        </ul>
    );
};

export default AdminLink;