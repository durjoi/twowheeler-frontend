import React from 'react';
import {  NavLink, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const UserLink = () => {
    let { url } = useRouteMatch();
    const { logOut } = useAuth();
    return (
        
        <>
        <NavLink className="navbar-brand" to="/">2Wheelers.</NavLink>
        <ul class="nav flex-column">
            <li class="nav-item">
            <NavLink className="nav-link" to={`${url}/pay`}>Pay</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to={`${url}/my-orders/`}>My Orders</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to={`${url}/review`}>Review</NavLink>
            </li>
            <li class="nav-item">
            <button className='nav-link' onClick={logOut}>Logout</button>
            </li>
        </ul>
        </>
    );
};

export default UserLink;