import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const AdminLink = () => {
    let { url } = useRouteMatch();
    return (
        <>
        <NavLink className="navbar-brand" to="/">2Wheelers.</NavLink>
        <ul class="nav flex-column">
            <li class="nav-item">
                <NavLink className='nav-link' to={`${url}/admin`}>Admin</NavLink>
            </li>
            <li class="nav-item">
                <NavLink className='nav-link' to={`${url}/bicycle`}>Bicycle</NavLink>
            </li>
            <li class="nav-item">
                <NavLink className='nav-link' to={`${url}/bicycle/add`}>Add Bicycle</NavLink>
            </li>
            <li class="nav-item">
                <NavLink className='nav-link' to={`${url}/order`}>Order</NavLink>
            </li>
        </ul>
        </>
    );
};

export default AdminLink;