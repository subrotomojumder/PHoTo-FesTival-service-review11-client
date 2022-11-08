import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
    const [inputInfo, setInputInfo] = useState({});
    const [error, setError] = useState('');
    const { userLogin, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        userLogin(inputInfo.email, inputInfo.password)
        .then(res => {
            navigate(from, {replace: true})
        })
        .catch(err => setError(err.message))
    }
    const handleInputValue = e => {
        setInputInfo({...inputInfo, [e.target.name]: e.target.value})
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            navigate(from, {replace: true})
        })
        .then(err => setError(err.message))
    }
    return (
        <div className="card w-2/3 lg:w-1/2 my-6 mx-auto bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
                <h1 className='text-4xl font-semibold text-center'>Please Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={handleInputValue} name='email' type="email" placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={handleInputValue} name='password' type="password" placeholder="password" className="input input-bordered" required/>
                    {error && <small className='text-red-600 mt-1 ml-2'>{error}</small>}
                    <label className="label">
                        <span className='label-text-alt'>Create a new account?<Link to='/register' className="link link-hover"> Register</Link></span>
                    </label>
                </div>
                <div className="form-control mt-6 w-1/2 mx-auto">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
                <div className='text-center'>
                    <h3 className='underline font-semibold'>or</h3>
                        <p onClick={handleGoogleLogin}><FaGooglePlusG className='text-4xl hover:text-warning mx-auto mb-[-8px]'/> </p>
                        <small>google</small>
                </div>
            </form>
        </div>
    );
};

export default Login;