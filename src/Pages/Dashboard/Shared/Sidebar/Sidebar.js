import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
    let { url } = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}`}>Dashboard</Link>
                </li>
                <li>
                    <Link to={`${url}/admin`}>Admin</Link>
                </li>
                <li>
                    <Link to={`${url}/bicycle`}>Bicycle</Link>
                </li>
                <li>
                    <Link to={`${url}/order`}>Order</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;