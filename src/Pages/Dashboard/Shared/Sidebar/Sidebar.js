import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Sidebar = () => {
    let { url } = useRouteMatch();
    const {isAdmin} = useAuth();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}`}>Dashboard</Link>
                </li>
                {
                        isAdmin && <li><Link to={`${url}/admin`}>Admin</Link></li>
                    }
                

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
        </div>
    );
};

export default Sidebar;