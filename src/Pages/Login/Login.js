import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';


const Login = () => {

    const { signInUsingEmail} = useAuth();
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const location = useLocation();
    const history = useHistory()

    const redirect_uri = location.state?.from || '/';
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        signInUsingEmail(email, password)
        .then((userCredential) => {
            // Signed in 
            history.push(redirect_uri);
            // ...
        }).catch((error) => {
            console.log(error);
        });

        setEmail('');
        setPassword('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <Header></Header>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <div className="card booking_card">
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form onSubmit={handleFormSubmit} className="text-left">
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

                    <p>New to 2Wheelers? <Link to="/register">Create an Account</Link></p>
                </div>
            </div>

        </div>

        <Footer></Footer>
        </>
        
    );
};

export default Login;