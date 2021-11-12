import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Register = () => {

    const {signUpUsingEmail} = useAuth();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    // const location = useLocation();

    // const redirect_uri = location.state?.from || '/';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        signUpUsingEmail(email, password, name);
        setEmail('');
        setPassword('');
        setName('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        
        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <div className="card booking_card">
                <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <form onSubmit={handleFormSubmit} className="text-left">
                    <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleNameChange} value={name} required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange} value={email} required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePasswordChange} value={password} required/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Submit</button>

                    </form>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register;