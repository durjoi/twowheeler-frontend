import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">2Wheelers.</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' exact to='/'>Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className='nav-link' exact to='/explore'>Explore</NavLink>
                        </li>
                        {
                            user.email &&  <li className="nav-item">
                                <NavLink className='nav-link' exact to='/dashboard'>Dashboard</NavLink>
                            </li>
                        }
                        {
                            !user.email &&  <li className="nav-item">
                            <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </li>
                        }
                        {
                            !user.email &&  <li className="nav-item">
                            <NavLink className='nav-link' to='/register'>Register</NavLink>
                            </li>
                        }

                        {
                            user.email &&  <li className="nav-item">
                            <button className='nav-link' onClick={logOut}>Logout</button>
                            </li>
                        }

                        {
                            user.email &&  <li className="nav-item">
                            <span className='nav-link ms-2'>{user.displayName}</span>
                            </li>
                        }
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </header>
    );
};

export default Header;