import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const UserLink = () => {
    let { url } = useRouteMatch();
    const { logOut } = useAuth();
    return (
        <ul>
                 <li>
                     <Link to={`${url}/pay`}>Pay</Link>
                     </li>
                

                <li>
                    <Link to={`${url}/my-orders/`}>My Orders</Link>
                </li>   

                <li>
                    <Link to={`${url}/review`}>Review</Link>
                </li>

                <li >
                    <button className='nav-link' onClick={logOut}>Logout</button>
                </li>
        </ul>
    );
};

export default UserLink;